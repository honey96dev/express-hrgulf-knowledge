import express from "express";
import {sprintf} from "sprintf-js";
import dateformat from "dateformat";
import path from "path";
import uuid from "uuid";
import fs from "fs";
import mkdirp from "mkdirp";
import {dbTblName} from "core/config";
import db from "core/db";
import strings from "core/strings";
import tracer from "core/tracer";
import consts from "core/consts";

const _loadData = async (req, res, next) => {
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
    tracer.error(err);
    tracer.error(__filename);
    res.status(200).send({
      result: langs.error,
      message: langs.unknownServerError,
      err,
    });
  }
};

const listProc = async (req, res, next) => {
  _loadData(req, res, next);
};

const saveProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, title, description, url, file, userId} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");
  const time = dateformat(today, "hh:MM TT");
  const timestamp = today.getTime();

  if (!!id && (!file || file === "null")) {
    const newRows = [
      [id || null, timestamp, userId, date, time, title, description, url, "", ""],
    ];
    let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `title` = VALUES(`title`), `description` = VALUES(`description`), `url` = VALUES(`url`);", dbTblName.news);
    try {
      let rows = await db.query(sql, [newRows]);
      res.status(200).send({
        result: langs.success,
        message: langs.successfullySaved,
        data: rows,
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
    return;
  }

  if (!file || file === "null") {
    // res.status(200).send({
    //   result: langs.error,
    //   message: langs.unknownServerError,
    // });
    const newRows = [
      [null, timestamp, userId, date, time, title, description, url, "", ""],
    ];
    let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `title` = VALUES(`title`), `description` = VALUES(`description`), `url` = VALUES(`url`);", dbTblName.news);
    try {
      let rows = await db.query(sql, [newRows]);
      res.status(200).send({
        result: langs.success,
        message: langs.successfullySaved,
        data: rows,
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
    return;
  }

  const appDir = process.cwd();
  const fileDir = path.join(appDir, "public", consts.uploadPath.news);
  const fileName = sprintf("%s%s", uuid(), path.extname(file.path));
  const filePath = path.join(fileDir, fileName);
  const writable = fs.createWriteStream(filePath);
  const media = sprintf("%s/%s", consts.uploadPath.news, fileName);
  mkdirp(fileDir, () => {
    file.on("end", async e => {
      const newRows = [
        [id || null, timestamp, userId, date, time, title, description, url, media, ""],
      ];
      let sql;
      let rows;
      if (id) {
        sql = sprintf("SELECT * FROM `%s` WHERE `id` = ?;", dbTblName.news);
        rows = await db.query(sql, [id]);
        if (rows.length > 0) {
          const oldFilename = path.join(fileDir, path.basename(rows[0]["media"]));
          tracer.debug(oldFilename);
          fs.unlink(oldFilename, e => {

          });
        }
      }
      sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `title` = VALUES(`title`), `description` = VALUES(`description`), `url` = VALUES(`url`), `media` = VALUES(`media`);", dbTblName.news);
      try {
        rows = await db.query(sql, [newRows]);
        res.status(200).send({
          result: langs.success,
          message: langs.successfullySaved,
          data: rows,
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
    });
    file.on("error", err => {
      tracer.error(err);
      tracer.error(__filename);
      res.status(200).send({
        result: langs.error,
        message: langs.unknownServerError,
        err,
      });
    });
    file.pipe(writable);
  });
};

const deleteProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");

  let sql = sprintf("UPDATE `%s` SET `deletedDate` = ? WHERE `id` = ?;", dbTblName.news);
  try {
    await db.query(sql, [date, id]);
    _loadData(req, res, next);
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
    tracer.error(err);
    tracer.error(__filename);
    res.status(200).send({
      result: langs.error,
      message: langs.unknownServerError,
      err,
    });
  }
};

const countProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];

  let sql = sprintf("SELECT COUNT(`id`) `count` FROM `%s` WHERE `deletedDate` = ?;", dbTblName.news);

  try {
    let rows = await db.query(sql, [""]);
    if (rows.length === 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.unknownServerError,
      });
      return;
    }

    const row = rows[0];
    res.status(200).send({
      result: langs.success,
      data: {
        count: row.count,
      }
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

router.post("/list", listProc);
router.post("/save", saveProc);
router.post("/delete", deleteProc);
router.post("/get", getProc);
router.post("/count", countProc);

export default router;
