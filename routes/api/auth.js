import express from "express";
import jwt from "jsonwebtoken";
import {sprintf} from "sprintf-js";
import dateformat from "dateformat";
import config, {dbTblName, session} from "core/config";
import db from "core/db";
import myCrypto from "core/myCrypto";
import strings from "core/strings";
import tracer from "core/tracer";
import consts, {resetPasswordUri, tokenStatus} from "core/consts";
import mailer from "core/mailer";

const _validateToken = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {email, token} = req.body;
  const today = new Date();
  const timestamp = today.getTime();

  try {
    let sql = sprintf("SELECT * FROM `%s` WHERE `email` = ? AND `token` = ?;", dbTblName.resetPasswordTokens);
    let rows = await db.query(sql, [email, token]);
    if (!rows.length) {
      return tokenStatus.NOT_FOUND;
    }

    const row = rows[0];

    if (timestamp >= row.expire) {
      return tokenStatus.EXPIRED;
    }

    const used = myCrypto.hmacHex(`${row.timestamp}${row.token}${row.expire}`);
    if (used !== row.used) {
      return tokenStatus.ALREADY_USED;
    }

    return tokenStatus.VALID;
  } catch (err) {
    throw err;
  }
};

const signInProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {email, password} = req.body;

  let sql = sprintf("SELECT `email` FROM `%s` WHERE `email` = ?;", dbTblName.users);
  try {
    let rows = await db.query(sql, [email]);
    if (rows.length === 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.emailIsNotRegistered,
      });
      return;
    }

    const hash = myCrypto.hmacHex(password);
    sql = sprintf("SELECT U.* FROM `%s` U WHERE U.email = ? AND BINARY U.hash = ?;", dbTblName.users);
    rows = await db.query(sql, [email, hash]);

    if (rows.length === 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.passwordIsIncorrect,
      });
      return;
    }

    const user = rows[0];

    if (user.deletedDate.length > 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.yourAccountIsClosed,
      });
      return;
    }

    if (user.allowedDate.length === 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.yourAccountIsNotAllowed,
      });
      return;
    }

    const token = jwt.sign(
      {
        id: user["id"],
        email: user["email"],
        firstName: user["firstName"],
        lastName: user["lastName"],
      },
      session.secret
    );

    const today = new Date();
    const date = dateformat(today, "yyyy-mm-dd");
    const time = dateformat(today, "hh:MM TT");
    const timestamp = today.getTime();
    const remoteAddress = req.header["x-forwarded-for"] || req.connection.remoteAddress;
    const newRows = [
      [null, user.id, timestamp, date, time, remoteAddress]
    ];
    sql = sprintf("INSERT INTO `%s` VALUES ?;", dbTblName.usersSigninHistory);
    await db.query(sql, [newRows]);

    res.status(200).send({
      result: langs.success,
      message: langs.successfullySignedIn,
      data: {
        user,
        token,
      },
    });
  } catch (err) {
    tracer.error(err);
    tracer.error(__filename);
    res.status(200).send({
      result: langs.error,
      message: langs.unknownServerError,
      err,
    });
  }
};

const signUpProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {email, password, username, firstName, fatherName, lastName, gender, birthday, jobTitle, sector, company, city, countryCode, phone} = req.body;
  const hash = myCrypto.hmacHex(password);
  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");

  let sql = sprintf("SELECT `email` FROM `%s` WHERE `email` = ?;", dbTblName.users);
  try {
    let rows = await db.query(sql, [email]);
    if (rows.length > 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.emailAlreadyRegistered,
      });
      return;
    }
    const newRows = [
      [null, email, hash, username, firstName, fatherName, lastName, gender, birthday, jobTitle, sector, company, city, countryCode, phone, 0, 0, date, date, "", ""],
    ];
    tracer.info(countryCode, newRows);
    sql = sprintf("INSERT INTO `%s` VALUES ?;", dbTblName.users);
    await db.query(sql, [newRows]);

    // sendVerificationEmail(email);

    res.status(200).send({
      result: langs.success,
      message: langs.successfullyRegistered,
    });
  } catch (err) {
    tracer.error(err);
    tracer.error(__filename);
    res.status(200).send({
      result: langs.error,
      message: langs.unknownServerError,
      err,
    });
  }
};

const sendForgotPasswordMailProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {email} = req.body;

  let today = new Date();

  const timestamp = today.getTime();
  today = new Date(timestamp + consts.tokenLifetime * 3600 * 1000);
  const expire = today.getTime();
  const token = myCrypto.hmacHex(`${email}${timestamp}`);
  const used = myCrypto.hmacHex(`${timestamp}${token}${expire}`);

  let sql = sprintf("SELECT * FROM `%s` WHERE `email` = ?;", dbTblName.users);

  try {
    let rows = await db.query(sql, [email]);
    if (!rows.length) {
      res.status(200).send({
        result: langs.error,
        message: langs.emailIsNotRegistered,
      });
      return;
    }
    const user = rows[0];
    const name = `${user.firstName} ${user.lastName}`;
    const url = `${config.server.baseUrl}${resetPasswordUri}/${email}/${token}`;
    tracer.info(token);
    await mailer.sendForgotPasswordMail({email, name, url, subject: langs.forgotPassword});

    sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `timestamp` = VALUES(`timestamp`), `token` = VALUES(`token`), `expire` = VALUES(`expire`), `used` = VALUES(`used`);", dbTblName.resetPasswordTokens);

    const newRows = [
      [email, timestamp, token, expire, used],
    ];

    await db.query(sql, [newRows]);
    res.status(200).send({
      result: langs.success,
      message: langs.resetEmailIsSent,
    });
  } catch (err) {
    tracer.error(err);
    tracer.error(__filename);
    res.status(200).send({
      result: langs.error,
      message: langs.unknownServerError,
      err,
    });
  }
};

const validateTokenProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  try {
    const result = await _validateToken(req, res, next);
    switch (result) {
      case tokenStatus.VALID:
        res.status(200).send({
          result: langs.success,
          message: langs.tokenIsValid,
        });
        break;
      case tokenStatus.EXPIRED:
        res.status(200).send({
          result: langs.error,
          message: langs.tokenIsExpired,
        });
        break;
      case tokenStatus.NOT_FOUND:
        res.status(200).send({
          result: langs.error,
          message: langs.tokenIsNotFound,
        });
        break;
      case tokenStatus.ALREADY_USED:
        res.status(200).send({
          result: langs.error,
          message: langs.tokenIsAlreadyUsed,
        });
        break;
    }
  } catch (err) {
    tracer.error(err);
    tracer.error(__filename);
    res.status(200).send({
      result: langs.error,
      message: langs.unknownServerError,
      err,
    });
  }
};

const resetPasswordProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {email, password} = req.body;

  try {
    const result = await _validateToken(req, res, next);
    switch (result) {
      case tokenStatus.EXPIRED:
        res.status(200).send({
          result: langs.error,
          message: langs.tokenIsExpired,
        });
        return;
      case tokenStatus.NOT_FOUND:
        res.status(200).send({
          result: langs.error,
          message: langs.tokenIsNotFound,
        });
        return;
      case tokenStatus.ALREADY_USED:
        res.status(200).send({
          result: langs.error,
          message: langs.tokenIsAlreadyUsed,
        });
        return;
    }

    const hash = myCrypto.hmacHex(password);
    tracer.info(password, hash);
    let sql = sprintf("UPDATE `%s` SET `used` = ? WHERE `email` = ?;", dbTblName.resetPasswordTokens);
    await db.query(sql, [1, email]);
    sql = sprintf("UPDATE `%s` SET `hash` = ? WHERE `email` = ?;", dbTblName.users);
    await db.query(sql, [hash, email]);
    res.status(200).send({
      result: langs.success,
      message: langs.successfullyChanged,
    });
  } catch (err) {
    tracer.error(err);
    tracer.error(__filename);
    res.status(200).send({
      result: langs.error,
      message: langs.unknownServerError,
      err,
    });
  }
};

const router = express.Router();

router.post("/sign-in", signInProc);
router.post("/sign-up", signUpProc);
router.post("/send-forgot-password-mail", sendForgotPasswordMailProc);
router.post("/validate-token", validateTokenProc);
router.post("/reset-password", resetPasswordProc);

export default router;
