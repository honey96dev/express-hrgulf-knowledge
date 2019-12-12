import express from "express";
import {sprintf} from "sprintf-js";
import dateformat from "dateformat";
import {dbTblName} from "../../core/config";
import db from "../../core/db";
import strings from "../../core/strings";
import tracer from "../../core/tracer";
import consts from "../../core/consts";

const usProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {name, email, subject, message} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");
  const time = dateformat(today, "hh:MM TT");
  const timestamp = today.getTime();

  const newRows = [
    [null, timestamp, date, time, name, email, subject, message],
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ?;", dbTblName.contactUs);

  try {
    await db.query(sql, [newRows]);
    res.status(200).send({
      result: langs.success,
      message: langs.successfullySent
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

router.post("/us", usProc);

export default router;
