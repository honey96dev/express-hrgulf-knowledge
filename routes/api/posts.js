import express from "express";
import {sprintf} from "sprintf-js";
import dateformat from "dateformat";
import {dbTblName} from "../../core/config";
import db from "../../core/db";
import strings from "../../core/strings";
import tracer from "../../core/tracer";
import consts from "../../core/consts";

const router = express.Router();

const listProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {page, pageSize, userId} = req.body;
  page || (page = 1);
  pageSize || (pageSize = consts.defaultPageSize);

  const start = pageSize * (page - 1);

  let sql = sprintf("SELECT P.*, U.firstName, U.lastName FROM `%s` P JOIN `%s` U ON U.id = P.userId WHERE P.deletedDate = '%s' AND P.userId LIKE '%s' ORDER BY P.timestamp DESC LIMIT %d, %d;", dbTblName.posts, dbTblName.users, "", userId || "%%", start, pageSize);
  tracer.debug(req.headers['x-forwarded-for'], req.connection.remoteAddress);
  try {
    let rows = await db.query(sql, null);
    sql = sprintf("SELECT COUNT(`id`) `count` FROM `%s` WHERE `deletedDate` = '%s' AND `userId` LIKE '%s';", dbTblName.posts, "", userId || "%%");
    let count = await db.query(sql, null);
    let pageCount = 0;
    count.length > 0 && (pageCount = Math.ceil(count[0]['count'] / pageSize));
    res.status(200).send({
      result: langs.success,
      count: count[0]['count'],
      pageCount,
      data: rows,
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

const saveProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, title, description, media, userId} = req.body;

  const today = new Date();

  const date = dateformat(today, "yyyy-mm-dd");
  const time = dateformat(today, "hh:MM TT");
  const timestamp = today.getTime();

  const newRows = [
    [id || null, timestamp, userId, date, time, title, description, media, ''],
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `title` = VALUES(`title`), `description` = VALUES(`description`), `media` = VALUES(`media`);", dbTblName.posts);
  try {
    let rows = await db.query(sql, [newRows]);
    res.status(200).send({
      result: langs.success,
      message: langs.successfullySaved,
      data: rows,
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

router.post("/list", listProc);
router.post("/save", saveProc);

export default router;
