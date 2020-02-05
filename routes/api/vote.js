import express from "express";
import {sprintf} from "sprintf-js";
import dateformat from "dateformat";
import {dbTblName} from "../../core/config";
import db from "../../core/db";
import strings from "../../core/strings";
import tracer from "../../core/tracer";
import consts from "../../core/consts";

const _loadPackages = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {scope, page, pageSize, userId} = req.body;
  page || (page = 1);
  pageSize || (pageSize = consts.defaultPageSize);
  const start = pageSize * (page - 1);

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");
  let sql;
  if (scope === consts.current) {
    sql = sprintf("SELECT P.*, Q.count `questions` FROM `%s` P JOIN `%s` Q ON Q.packageId = P.id WHERE P.startDate <= ? AND P.endDate >= ? AND P.deletedDate = ? ORDER BY P.endDate DESC, P.timestamp DESC LIMIT ?, ?;", dbTblName.votePackages, dbTblName.voteQuestionsCount);
  } else {
    sql = sprintf("SELECT P.*, Q.count `questions` FROM `%s` P JOIN `%s` Q ON Q.packageId = P.id WHERE P.releasedDate != ? AND P.deletedDate = ? ORDER BY P.endDate DESC, P.timestamp DESC LIMIT ?, ?;", dbTblName.votePackages, dbTblName.voteQuestionsCount);
  }

  try {
    let rows;
    if (scope === consts.current) {
      rows = await db.query(sql, [date, date, "", start, pageSize]);
    } else {
      rows = await db.query(sql, ["", "", start, pageSize]);
    }
    let rows1;

    sql = sprintf("SELECT COUNT(`id`) `count` FROM `%s` WHERE `startDate` <= ? AND `endDate` >= ? AND `deletedDate` = ?;", dbTblName.votePackages);
    let count = await db.query(sql, [date, date, ""]);
    let pageCount = 0;
    count.length > 0 && (pageCount = Math.ceil(count[0]["count"] / pageSize));

    res.status(200).send({
      result: langs.success,
      count: count[0]["count"],
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

const _loadQuestions = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {packageId, page, pageSize, userId} = req.body;
  page || (page = 1);
  pageSize || (pageSize = consts.defaultPageSize);
  const start = pageSize * (page - 1);

  let sql = sprintf("SELECT Q.*, R.answerId `answered` FROM `%s` Q LEFT JOIN `%s` R ON R.questionId = Q.id AND R.userId = ? WHERE Q.packageId = ? AND Q.deletedDate = ? ORDER BY Q.timestamp;", dbTblName.voteQuestions, dbTblName.voteResult);

  try {
    let rows = await db.query(sql, [userId, packageId, "", start, pageSize]);

    let rows1;
    for (let row of rows) {
      sql = sprintf("SELECT * FROM `%s` WHERE `questionId` = ? ORDER BY `timestamp` ASC;", dbTblName.voteAnswers);
      rows1 = await db.query(sql, [row.id]);
      row["answers"] = rows1;
    }

    sql = sprintf("SELECT COUNT(`id`) `count` FROM `%s` WHERE `packageId` = ? AND `deletedDate` = ?;", dbTblName.voteQuestions);
    let count = await db.query(sql, [packageId, ""]);
    let pageCount = 0;
    count.length > 0 && (pageCount = Math.ceil(count[0]["count"] / pageSize));

    res.status(200).send({
      result: langs.success,
      count: count[0]["count"],
      pageCount,
      data: rows,
      message: langs.successfullyPosted,
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

const _loadResult = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {packageId, page, pageSize, userId} = req.body;
  page || (page = 1);
  pageSize || (pageSize = consts.defaultPageSize);
  const start = pageSize * (page - 1);

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");
  let sql = sprintf("SELECT * FROM `%s` WHERE `packageId` = ? AND `deletedDate` = ? ORDER BY `timestamp` ASC LIMIT ?, ?;", dbTblName.voteQuestions);

  try {
    let rows = await db.query(sql, [packageId, "", start, pageSize]);
    let rows1;

    sql = sprintf("SELECT COUNT(`id`) `count` FROM `%s` WHERE `packageId` = ? AND `deletedDate` = ?;", dbTblName.voteQuestions);
    let count = await db.query(sql, [packageId, ""]);
    let pageCount = 0;
    count.length > 0 && (pageCount = Math.ceil(count[0]["count"] / pageSize));

    let index = start + 1;
    for (let row of rows) {
      row["index"] = index++;
      row["isEnded"] = row["endDate"] < date;

      sql = sprintf("SELECT A.id, A.answer, IFNULL(C.count, 0) `count` FROM `%s` A LEFT JOIN `%s` C ON C.answerId = A.id WHERE A.questionId = ?;", dbTblName.voteAnswers, dbTblName.voteResultCount);
      row["answers"] = await db.query(sql, [row.id]);
      row["answersCount"] = 0;
      for (let item of row["answers"]) {
        row["answersCount"] += item.count;
      }

      sql = sprintf("SELECT COUNT(`questionId`) `count` FROM `%s` WHERE `questionId` = ? AND `userId` = ?;", dbTblName.voteResult);
      rows1 = await db.query(sql, [row.id, userId]);
      row["answered"] = !!rows1[0]["count"];
    }


    res.status(200).send({
      result: langs.success,
      count: count[0]["count"],
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

const packagesProc = async (req, res, next) => {
  _loadPackages(req, res, next);
};

const getPackageProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {packageId, page, pageSize} = req.body;
  page || (page = 1);
  pageSize || (pageSize = consts.defaultPageSize);
  const start = pageSize * (page - 1);

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");
  let sql = sprintf("SELECT * FROM `%s` Q WHERE Q.id = ?;", dbTblName.votePackages);

  try {
    let rows = await db.query(sql, [packageId]);

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

const questionsProc = async (req, res, next) => {
  _loadQuestions(req, res, next);
};

const getProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id} = req.body;

  let sql = sprintf("SELECT P.* FROM `%s` P WHERE P.id = ?;", dbTblName.voteQuestions);

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

const updateProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {userId, questionId, answerId} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");
  const time = dateformat(today, "hh:MM TT");
  const timestamp = today.getTime();

  const newRows = [
    [questionId, userId, answerId, timestamp, date, time],
  ];

  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `answerId` = VALUES(`answerId`), `timestamp` = VALUES(`timestamp`), `date` = VALUES(`date`), `time` = VALUES(`time`);", dbTblName.voteResult);

  try {
    await db.query(sql, [newRows]);
    _loadQuestions(req, res, next);
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

const resultProc = async (req, res, next) => {
  _loadResult(req, res, next);
};

const router = express.Router();

router.post("/packages", packagesProc);
router.post("/get-package", getPackageProc);
router.post("/questions", questionsProc);
// router.post("/get", getProc);
router.post("/update", updateProc);
router.post("/result", resultProc);

export default router;
