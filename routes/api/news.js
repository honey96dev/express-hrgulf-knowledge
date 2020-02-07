import express from "express";
import {sprintf} from "sprintf-js";
import {dbTblName} from "core/config";
import db from "core/db";
import strings from "core/strings";
import tracer from "core/tracer";
import consts from "core/consts";

const listProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {page, pageSize, userId} = req.body;
  page || (page = 1);
  pageSize || (pageSize = consts.defaultPageSize);

  const start = pageSize * (page - 1);

  let sql = sprintf("SELECT P.*, U.firstName, U.lastName FROM `%s` P JOIN `%s` U ON U.id = P.userId WHERE P.deletedDate = ? AND P.userId LIKE ? ORDER BY P.timestamp DESC LIMIT ?, ?;", dbTblName.news, dbTblName.users);

  try {
    let rows = await db.query(sql, ["", userId || "%%", start, pageSize]);
    sql = sprintf("SELECT COUNT(`id`) `count` FROM `%s` WHERE `deletedDate` = '%s' AND `userId` LIKE '%s';", dbTblName.news, "", userId || "%%");
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

const latestProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {limit} = req.body;

  let sql = sprintf("SELECT P.*, U.firstName, U.lastName FROM `%s` P JOIN `%s` U ON U.id = P.userId WHERE P.deletedDate = ? ORDER BY P.timestamp DESC LIMIT ?, ?;", dbTblName.news, dbTblName.users);

  try {
    let rows = await db.query(sql, ["", 0, limit]);
    res.status(200).send({
      result: langs.success,
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

const getProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id} = req.body;

  let sql = sprintf("SELECT P.*, U.firstName, U.lastName FROM `%s` P JOIN `%s` U ON U.id = P.userId WHERE P.id = ?;", dbTblName.news, dbTblName.users);

  try {
    let rows = await db.query(sql, [id]);
    if (rows.length > 0) {
      res.status(200).send({
        result: langs.success,
        data: rows[0],
      });
    } else {
      res.status(200).send({
        result: langs.error,
        message: langs.noData,
      });
    }
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

router.post("/list", listProc);
router.post("/latest", latestProc);
router.post("/get", getProc);

export default router;
