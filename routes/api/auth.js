import express from "express";
import jwt from "jsonwebtoken";
import {sprintf} from "sprintf-js";
import {dbTblName, session} from "../../core/config";
import db from "../../core/db";
import myCrypto from "../../core/myCrypto";
import strings from "../../core/strings";
import tracer from "../../core/tracer";
import consts from "../../core/consts";

const signInProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {email, password} = req.body;

  let sql = sprintf("SELECT `email` FROM `%s` WHERE BINARY `email` = ?;", dbTblName.users);
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
    sql = sprintf("SELECT U.* FROM `%s` U WHERE BINARY U.email = ? AND BINARY U.hash = ?;", dbTblName.users);
    rows = await db.query(sql, [email, hash]);

    if (rows.length === 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.passwordIsIncorrect,
      });
      return;
    }

    const user = rows[0];
    const token = jwt.sign(
      {
        id: user["id"],
        email: user["email"],
        firstName: user["firstName"],
        lastName: user["lastName"],
      },
      session.secret
    );
    res.status(200).send({
      result: langs.success,
      message: langs.successfullySignedIn,
      data: {
        user,
        token,
      },
    });
  } catch (err) {
    tracer.error(JSON.stringify(err));
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
  const {email, password, username, firstName, lastName, gender, birthday, jobTitle, sector, company, city, phone} = req.body;
  const hash = myCrypto.hmacHex(password);

  let sql = sprintf("SELECT `email` FROM `%s` WHERE BINARY `email` = ?;", dbTblName.users);
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
      [null, email, hash, username, firstName, lastName, gender, birthday, jobTitle, sector, company, city, phone, 0, 0],
    ];
    sql = sprintf("INSERT INTO `%s` VALUES ?;", dbTblName.users, dbTblName.users);
    await db.query(sql, [newRows]);

    // sendVerificationEmail(email);

    res.status(200).send({
      result: langs.success,
      message: langs.successfullyRegistered,
    });
  } catch (err) {
    tracer.error(JSON.stringify(err));
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

export default router;
