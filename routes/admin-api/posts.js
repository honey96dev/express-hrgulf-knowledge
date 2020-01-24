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
  let {page, pageSize, userId, allowed, topics} = req.body;
  page || (page = 1);
  pageSize || (pageSize = consts.defaultPageSize);

  const start = pageSize * (page - 1);

  let allowedWhere = "";
  if (allowed === 1) {
    allowedWhere = "AND P.allowedDate != ''";
  } else if (allowed === 0) {
    allowedWhere = "AND P.allowedDate = ''";
  }

  let sql;
  let rows;

  let topicWhere = "";
  if (!!topics && !!topics.length) {
    sql = sprintf("SELECT `postId` FROM `%s` WHERE `topicId` IN (?) AND `related` = ?;", dbTblName.post2Topics);
    rows = await db.query(sql, [topics, 1]);

    let tmp = [];
    for (let row of rows) {
      tmp.push(row["postId"]);
    }
    if (!!tmp.length) {
      topicWhere = sprintf("AND P.id IN (%s)", tmp.join(","));
    } else {
      topicWhere = sprintf("AND P.id = '0'");
    }
  }

  sql = sprintf("SELECT P.*, U.firstName, U.lastName, IFNULL(C.comments, 0) `comments` FROM `%s` P JOIN `%s` U ON U.id = P.userId LEFT JOIN `%s` C ON C.postId = P.id WHERE P.deletedDate = ? AND P.userId LIKE ? %s %s ORDER BY P.timestamp DESC LIMIT ?, ?;", dbTblName.posts, dbTblName.users, dbTblName.comments_count, allowedWhere, topicWhere);

  try {
    rows = await db.query(sql, ["", userId || "%%", start, pageSize]);
    sql = sprintf("SELECT COUNT(P.id) `count` FROM `%s` P WHERE P.deletedDate = ? AND P.userId LIKE ? %s %s;", dbTblName.posts, allowedWhere, topicWhere);

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

const _loadTopics = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {page, pageSize} = req.body;
  page || (page = 1);
  pageSize || (pageSize = consts.defaultPageSize);

  let start = pageSize * (page - 1);

  let sql = sprintf("SELECT * FROM `%s` WHERE `deletedDate` = ? ORDER BY `timestamp` ASC LIMIT ?, ?;", dbTblName.postTopics);

  try {
    let rows = await db.query(sql, ["", start, pageSize]);
    for (let row of rows) {
      row["number"] = ++start;
    }

    sql = sprintf("SELECT COUNT(`id`) `count` FROM `%s` WHERE `deletedDate` = ?;", dbTblName.postTopics);
    let count = await db.query(sql, [""]);
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

  let sql = sprintf("SELECT C.*, U.firstName, U.lastName FROM `%s` C JOIN `%s` U ON U.id = C.userId WHERE C.postId = ? AND C.deletedDate = ? ORDER BY C.timestamp DESC;", dbTblName.comments, dbTblName.users);

  try {
    let rows = await db.query(sql, [postId, ""]);
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

const deleteComment = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {postId, userId} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");

  let sql = sprintf("UPDATE `%s` SET `deletedDate` = ? WHERE `postId` = ? AND `userId` = ?;", dbTblName.comments);
  try {
    await db.query(sql, [date, postId, userId]);
    commentList(req, res, next);
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

const post2TopicsProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {postId} = req.body;

  let sql = sprintf("SELECT T.* FROM `%s` M JOIN `%s` T ON T.id = M.topicId WHERE M.postId = ?", dbTblName.post2Topics, dbTblName.postTopics);

  try {
    let rows = await db.query(sql, [postId]);
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

const topicsProc = async (req, res, next) => {
  await _loadTopics(req, res, next);
};

const saveTopicProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, topic} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");
  const time = dateformat(today, "hh:MM TT");
  const timestamp = today.getTime();

  const newRows = [
    [id || null, timestamp, date, time, topic, ""],
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `topic` = VALUES(`topic`);", dbTblName.postTopics);
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

const deleteTopicProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");

  let sql = sprintf("UPDATE `%s` SET `deletedDate` = ? WHERE `id` = ?;", dbTblName.postTopics);
  try {
    await db.query(sql, [date, id]);
    _loadTopics(req, res, next);
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

const getTopicProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id} = req.body;

  let sql = sprintf("SELECT * FROM `%s` WHERE `id` = ?;", dbTblName.postTopics);

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
router.post("/save", saveProc);
router.post("/delete", deleteProc);
router.post("/get", getProc);
router.post("/comment-list", commentList);
router.post("/delete-comment", deleteComment);
router.post("/post2topics", post2TopicsProc);
router.post("/allow", allowProc);
router.post("/count", countProc);
// router.post("/deny", denyProc);
router.post("/topics", topicsProc);
router.post("/save-topic", saveTopicProc);
router.post("/delete-topic", deleteTopicProc);
router.post("/get-topic", getTopicProc);

export default router;
