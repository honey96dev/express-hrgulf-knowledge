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

const listProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {page, pageSize, userId} = req.body;
  page || (page = 1);
  pageSize || (pageSize = consts.defaultPageSize);

  const start = pageSize * (page - 1);
  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");

  let sql = sprintf("SELECT P.*, U.firstName, U.lastName, IFNULL(C.comments, 0) `comments` FROM `%s` P JOIN `%s` U ON U.id = P.userId LEFT JOIN `%s` C ON C.postId = P.id WHERE P.deletedDate = ? AND P.userId LIKE ? AND P.allowedDate BETWEEN '0000-00-00' AND ? ORDER BY P.timestamp DESC LIMIT ?, ?;", dbTblName.posts, dbTblName.users, dbTblName.comments_count);

  try {
    let rows = await db.query(sql, ["", userId || "%%", date, start, pageSize]);
    sql = sprintf("SELECT COUNT(`id`) `count` FROM `%s` WHERE `deletedDate` = ? AND `userId` LIKE ? AND `allowedDate` BETWEEN '0000-00-00' AND ?;", dbTblName.posts, "", userId || "%%");
    let count = await db.query(sql, ["", userId || "%%", date]);
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

  let sql = sprintf("SELECT P.*, U.firstName, U.lastName, IFNULL(C.comments, 0) `comments` FROM `%s` P JOIN `%s` U ON U.id = P.userId LEFT JOIN `%s` C ON C.postId = P.id WHERE P.deletedDate = ? ORDER BY P.timestamp DESC LIMIT ?, ?;", dbTblName.posts, dbTblName.users, dbTblName.comments_count);

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

const saveProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, title, description, file, userId} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");
  const time = dateformat(today, "hh:MM TT");
  const timestamp = today.getTime();

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

const writeComment = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {commentId, userId, comment} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");
  const time = dateformat(today, "hh:MM TT");
  const timestamp = today.getTime();

  const newRows = [
    [commentId, userId, timestamp, date, time, comment, ""],
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE comment = VALUES(`comment`);", dbTblName.comments);

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

const router = express.Router();

router.post("/list", listProc);
router.post("/latest", latestProc);
router.post("/save", saveProc);
router.post("/get", getProc);
router.post("/comment-list", commentList);
router.post("/write-comment", writeComment);

export default router;
