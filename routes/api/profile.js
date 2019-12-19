import express from "express";
import {sprintf} from "sprintf-js";
import jwt from "jsonwebtoken";
import dateformat from "dateformat";
import {dbTblName, session} from "../../core/config";
import db from "../../core/db";
import strings from "../../core/strings";
import tracer from "../../core/tracer";
import consts from "../../core/consts";
import myCrypto from "../../core/myCrypto";

const saveProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {id, email, username, firstName, lastName, gender, birthday, jobTitle, sector, company, city, phone} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");

  const newRows = [
    [id, email, "", username, firstName, lastName, gender, birthday, jobTitle, sector, company, city, phone, 0, 0, date, date, "", ""],
  ];

  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `email` = VALUES(`email`), `username` = VALUES(`username`), `firstName` = VALUES(`firstName`), `lastName` = VALUES(`lastName`), `gender` = VALUES(`gender`), `birthday` = VALUES(`birthday`), `jobTitle` = VALUES(`jobTitle`), `sector` = VALUES(`sector`), `company` = VALUES(`company`), `city` = VALUES(`city`), `phone` = VALUES(`phone`);", dbTblName.users);
  try {
    let rows = await db.query(sql, [newRows]);
    const token = jwt.sign(
      {
        id: id,
        email: email,
        firstName: firstName,
        lastName: lastName,
      },
      session.secret
    );
    res.status(200).send({
      result: langs.success,
      message: langs.successfullySaved,
      data: {
        user: {id, email, username, firstName, lastName, gender, birthday, jobTitle, sector, company, city, phone},
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

const changePasswordProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {id, password0, password} = req.body;

  const hash0 = myCrypto.hmacHex(password0 || "");
  const hash = myCrypto.hmacHex(password || "");

  let sql = sprintf("SELECT * FROM `%s` WHERE `id` = ? AND `hash` = ?;", dbTblName.users);
  try {
    let rows = await db.query(sql, [id, hash0]);
    if (rows.length === 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.currentPasswordIncorrect,
      });
      return;
    }
    sql = sprintf("UPDATE `%s` SET `hash` = ? WHERE `id` = ?;", dbTblName.users);
    await db.query(sql, [hash, id]);
    res.status(200).send({
      result: langs.success,
      message: langs.successfullyChanged,
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

router.post("/save", saveProc);
router.post("/change-password", changePasswordProc);

export default router;
