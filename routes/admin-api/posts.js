import express from "express";
import {sprintf} from "sprintf-js";
import dateformat from "dateformat";
import path from 'path';
import mkdirp from 'mkdirp';
import fs from "fs";
import uuid from "uuid";
import {dbTblName} from "../../core/config";
import db from "../../core/db";
import strings from "../../core/strings";
import tracer from "../../core/tracer";
import consts from "../../core/consts";

const _loadData = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {page, pageSize, userId, allowed} = req.body;
  page || (page = 1);
  pageSize || (pageSize = consts.defaultPageSize);

  const start = pageSize * (page - 1);

  let allowedWhere = "";
  if (allowed === 1) {
    allowedWhere = "AND `allowedDate` != ''";
  } else if (allowed === 0) {
    allowedWhere = "AND `allowedDate` = ''";
  }

  let sql = sprintf("SELECT P.*, U.firstName, U.lastName, IFNULL(C.comments, 0) `comments` FROM `%s` P JOIN `%s` U ON U.id = P.userId LEFT JOIN `%s` C ON C.postId = P.id WHERE P.deletedDate = ? AND P.userId LIKE ? %s ORDER BY P.timestamp DESC LIMIT ?, ?;", dbTblName.posts, dbTblName.users, dbTblName.comments_count, allowedWhere);

  try {
    let rows = await db.query(sql, ["", userId || "%%", start, pageSize]);
    sql = sprintf("SELECT COUNT(`id`) `count` FROM `%s` WHERE `deletedDate` = ? AND `userId` LIKE ? %s;", dbTblName.posts, allowedWhere);
    tracer.info(sql);
    let count = await db.query(sql, ["", userId || "%%"]);
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

const listProc = async (req, res, next) => {
  _loadData(req, res, next);
};

const saveProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, title, description, file, userId} = req.body;

  if (!!id && (!file || file === "null")) {
    const newRows = [
      [id || null, 0, userId, "", "", title, description, "", ""],
    ];
    let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `title` = VALUES(`title`), `description` = VALUES(`description`);", dbTblName.posts);
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
    return;
  }

  if (!file || file === "null") {
    res.status(200).send({
      result: langs.error,
      message: langs.unknownServerError,
    });
    return;
  }

  const appDir = process.cwd();
  const fileDir = path.join(appDir, "public", consts.uploadPath.posts);
  const fileName = sprintf("%s%s", uuid(), path.extname(file.path));
  const filePath = path.join(fileDir, fileName);
  const writable = fs.createWriteStream(filePath);
  const media = sprintf("%s/%s", consts.uploadPath.posts, fileName);
  mkdirp(fileDir, () => {
    file.on("end", async e => {
      const today = new Date();
      const date = dateformat(today, "yyyy-mm-dd");
      const time = dateformat(today, "hh:MM TT");
      const timestamp = today.getTime();

      const newRows = [
        [id || null, timestamp, userId, date, time, title, description, media, ""],
      ];
      let sql;
      let rows;
      if (id) {
        sql = sprintf("SELECT * FROM `%s` WHERE `id` = ?;", dbTblName.posts);
        rows = await db.query(sql, [id]);
        if (rows.length > 0) {
          const oldFilename = path.join(fileDir, path.basename(rows[0]["media"]));
          tracer.debug(oldFilename);
          fs.unlink(oldFilename, e => {

          });
        }
      }
      sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `title` = VALUES(`title`), `description` = VALUES(`description`), `media` = VALUES(`media`);", dbTblName.posts);
      try {
        rows = await db.query(sql, [newRows]);
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
    });
    file.on("error", err => {
      tracer.error(JSON.stringify(err));
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

  let sql = sprintf("UPDATE `%s` SET `deletedDate` = ? WHERE `id` = ?;", dbTblName.posts);
  try {
    await db.query(sql, [date, id]);
    _loadData(req, res, next);
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
  const {id, userId} = req.body;

  let sql = sprintf("SELECT P.*, U.firstName, U.lastName, C.userId `commentId` FROM `%s` P JOIN `%s` U ON U.id = P.userId LEFT JOIN `%s` C ON C.postId = P.id AND C.userId = ? WHERE P.id = ?;", dbTblName.posts, dbTblName.users, dbTblName.comments);

  try {
    let rows = await db.query(sql, [userId || 0, id]);
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

const commentList = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {postId} = req.body;

  let sql = sprintf("SELECT C.*, U.firstName, U.lastName FROM `%s` C JOIN `%s` U ON U.id = C.userId WHERE C.postId = ? ORDER BY C.timestamp DESC;", dbTblName.comments, dbTblName.users);

  try {
    let rows = await db.query(sql, [postId]);
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

const allowProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, allow} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");

  let sql = sprintf("UPDATE `%s` SET `allowedDate` = ? WHERE `id` = ?;", dbTblName.posts);
  try {
    await db.query(sql, [!!allow ? date : "", id]);
    _loadData(req, res, next);
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

const denyProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id} = req.body;

  const date = "";

  let sql = sprintf("UPDATE `%s` SET `allowedDate` = ? WHERE `id` = ?;", dbTblName.posts);
  try {
    await db.query(sql, [date, id]);
    _loadData(req, res, next);
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

const countProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];

  let sql = sprintf("SELECT (SELECT COUNT(`id`) FROM `%s` WHERE `deletedDate` = ?) `count`, (SELECT COUNT(`id`) FROM `%s` WHERE `allowedDate` = ? AND `deletedDate` = ?) `countAwaiting`;", dbTblName.posts, dbTblName.posts);

  try {
    let rows = await db.query(sql, ["", "", ""]);
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
        countAwaiting: row.countAwaiting,
      }
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

router.post("/list", listProc);
router.post("/save", saveProc);
router.post("/delete", deleteProc);
router.post("/get", getProc);
router.post("/comment-list", commentList);
router.post("/allow", allowProc);
router.post("/count", countProc);
// router.post("/deny", denyProc);

export default router;
