import express from "express";
import {sprintf} from "sprintf-js";
import dateformat from "dateformat";
import request from "request";
import {dbTblName} from "core/config";
import db from "core/db";
import strings from "core/strings";
import tracer from "core/tracer";
import consts from "core/consts";
import mailer from "core/mailer";

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
    await mailer.sendContactUsMail( {name, email, subject, message});
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

const consultantsProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  //
  // let sql = sprintf("SELECT * FROM `%s`.`%s` ;", dbTblName.eliteResourcesDb, dbTblName.consultants);
  //
  // try {
  //   let rows = await db.query(sql);
  //
  //   for (let row of rows) {
  //     row["media"] = `${consts.eliteResourcesUrl}/assets${row["media"]}`;
  //   }
  //
  //   res.status(200).send({
  //     result: langs.success,
  //     data: rows,
  //   });
  // } catch (err) {
  //   tracer.error(JSON.stringify(err));
  //   tracer.error(__filename);
  //   res.status(200).send({
  //     result: langs.error,
  //     message: langs.unknownServerError,
  //     err,
  //   });
  // }

  const headers = {
    "content-type" : "application/json",
    "Accept": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "language": lang,
  };

  const requestOptions = {
    headers: headers,
    method: "POST",
    url: "https://eliteresources.co/api/director-board/list",
  };

  request(requestOptions, (err, response, body) => {
    if (!!err) {
      tracer.error(JSON.stringify(err));
      tracer.error(__filename);
      res.status(200).send({
        result: langs.error,
        message: langs.unknownServerError,
      });
    } else {
      const rows = JSON.parse(body).data;
      for (let row of rows) {
        row["media"] = `${consts.eliteResourcesUrl}/assets${row["media"]}`;
      }
      res.status(200).send({
        result: langs.success,
        data: rows,
      });
    }
  });
};

const router = express.Router();

router.post("/us", usProc);
router.post("/consultants", consultantsProc);

export default router;
