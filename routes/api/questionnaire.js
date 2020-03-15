import express from "express";
import {sprintf} from "sprintf-js";
import fs from "fs";
import path from "path";
import dateformat from "dateformat";
import _ from "lodash";
import getMAC from "getmac";
import {dbTblName} from "core/config";
import db from "core/db";
import strings from "core/strings";
import tracer from "core/tracer";
import helpers from "core/helpers";
import consts, {prefixCheckbox, prefixInput} from "core/consts";

const _loadPackages = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {scope, page, pageSize} = req.body;
  page || (page = 1);
  pageSize || (pageSize = consts.defaultPageSize);
  const start = pageSize * (page - 1);

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");
  let sql;
  if (scope === consts.current) {
    sql = sprintf("SELECT P.*, Q.count `questions` FROM `%s` P JOIN `%s` Q ON Q.packageId = P.id WHERE P.startDate <= ? AND P.endDate >= ? AND P.deletedDate = ? ORDER BY P.endDate DESC, P.timestamp DESC LIMIT ?, ?;", dbTblName.questionnairePackages, dbTblName.questionnaireQuestionsCount);
  } else {
    sql = sprintf("SELECT P.*, Q.count `questions` FROM `%s` P JOIN `%s` Q ON Q.packageId = P.id WHERE P.endDate < ? AND P.releasedDate != ? AND P.deletedDate = ? ORDER BY P.endDate DESC, P.timestamp DESC LIMIT ?, ?;", dbTblName.questionnairePackages, dbTblName.questionnaireQuestionsCount);
  }

  try {
    let rows;
    if (scope === consts.current) {
      rows = await db.query(sql, [date, date, "", start, pageSize]);
    } else {
      rows = await db.query(sql, [date, "", "", start, pageSize]);
    }
    let rows1;

    sql = sprintf("SELECT COUNT(`id`) `count` FROM `%s` WHERE `startDate` <= ? AND `endDate` >= ? AND `deletedDate` = ?;", dbTblName.questionnairePackages);
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

  let sql = sprintf("SELECT Q.* FROM `%s` Q WHERE Q.packageId = ? AND Q.deletedDate = ? ORDER BY Q.timestamp;", dbTblName.questionnaireQuestions);

  !userId && (userId = getMAC());
  try {
    let rows = await db.query(sql, [packageId, "", start, pageSize]);

    let rows1;
    for (let row of rows) {
      sql = sprintf("SELECT * FROM `%s` WHERE `questionId` = ? ORDER BY `timestamp` ASC;", dbTblName.questionnaireAnswers);
      rows1 = await db.query(sql, [row.id]);
      row["answers"] = rows1;

      sql = sprintf("SELECT * FROM `%s` WHERE `questionId` = ? AND `userId` = ? AND `checked` = ?;", dbTblName.questionnaireResult);
      rows1 = await db.query(sql, [row.id, userId, 1]);
      row["answered"] = [];
      for (let row1 of rows1) {
        row["answered"].push(row1["answerId"]);
      }
    }

    sql = sprintf("SELECT COUNT(`id`) `count` FROM `%s` WHERE `packageId` = ? AND `deletedDate` = ?;", dbTblName.questionnaireQuestions);
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
  let sql = sprintf("SELECT Q.*, C.count `answersCount` FROM `%s` Q LEFT JOIN `%s` C ON C.questionId = Q.id WHERE Q.packageId = ? AND Q.deletedDate = ? ORDER BY Q.timestamp ASC LIMIT ?, ?;", dbTblName.questionnaireQuestions, dbTblName.questionnaireAnsweredCount);

  !userId && (userId = getMAC());
  try {
    let rows = await db.query(sql, [packageId, "", start, pageSize]);
    let rows1;

    sql = sprintf("SELECT COUNT(`id`) `count` FROM `%s` WHERE `packageId` = ? AND `deletedDate` = ?;", dbTblName.questionnaireQuestions);
    let count = await db.query(sql, [packageId, ""]);
    let pageCount = 0;
    count.length > 0 && (pageCount = Math.ceil(count[0]["count"] / pageSize));

    let index = start + 1;
    for (let row of rows) {
      row["index"] = index++;
      row["isEnded"] = row["endDate"] < date;

      sql = sprintf("SELECT A.id, A.answer, IFNULL(C.count, 0) `count` FROM `%s` A LEFT JOIN `%s` C ON C.answerId = A.id WHERE A.questionId = ?;", dbTblName.questionnaireAnswers, dbTblName.questionnaireResultCount);
      row["answers"] = await db.query(sql, [row.id]);
      row["type"] === prefixInput && (row["answers"] = _.filter(row["answers"], item => {
        return !!item.count;
      }));

      sql = sprintf("SELECT COUNT(`questionId`) `count` FROM `%s` WHERE `questionId` = ? AND `userId` = ?;", dbTblName.questionnaireResult);
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
  let {packageId, page, pageSize, userId} = req.body;
  page || (page = 1);
  pageSize || (pageSize = consts.defaultPageSize);
  const start = pageSize * (page - 1);

  !userId && (userId = getMAC());
  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");
  let sql = sprintf("SELECT Q.*, A.attachment FROM `%s` Q LEFT JOIN `%s` A ON A.questionnaireId = Q.id AND A.userId = ? WHERE Q.id = ?;", dbTblName.questionnairePackages, dbTblName.questionnaireAttachments);

  try {
    let rows = await db.query(sql, [userId, packageId]);

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

  let sql = sprintf("SELECT P.* FROM `%s` P WHERE P.id = ?;", dbTblName.questionnaireQuestions);

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
  let {questionnaireId, userId, answers, file} = req.body;

  !userId && (userId = getMAC());
  answers = JSON.parse(answers);

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");
  const time = dateformat(today, "hh:MM TT");
  const timestamp = today.getTime();

  let inputAnswers = [];
  let checkAnswers = [];
  let newRows = [];
  let sql;

  let fileName;
  let attachment = "";
  const cwd = process.cwd();
  const fileDir = path.join(cwd, "public", consts.uploadPath.questionnaire);
  if (!!file) {
    sql = sprintf("SELECT * FROM `%s` WHERE questionnaireId = ? AND userId = ?;", dbTblName.questionnaireAttachments);
    const rows = await db.query(sql, [questionnaireId, userId]);
    if (!!rows.length) {
      fs.unlink(path.join(cwd, "public", rows[0]["attachment"]), err => {

      });
    }
    fileName = await helpers.uploadFile(file, fileDir);
    attachment = `${consts.uploadPath.questionnaire}/${fileName}`;
    newRows = [
      [questionnaireId, userId, attachment]
    ];
    sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `attachment` = VALUES(`attachment`);", dbTblName.questionnaireAttachments);
    await db.query(sql, [newRows]);
  }

  try {

    Object.keys(answers).map(async item => {
      answers[item]['type'] === prefixCheckbox && checkAnswers.push({questionId: item, answer: answers[item]['answer']});
      answers[item]['type'] === prefixInput && inputAnswers.push({questionId: item, answer: answers[item]['answer']});
    });

    for (let answer of checkAnswers) {
      newRows = [];
      for (let answerId of answer.answer) {
        newRows.push([answer.questionId, userId, answerId, 1, timestamp, date, time]);
      }

      sql = sprintf("UPDATE `%s` SET `checked` = ? WHERE `userId` = ? AND `questionId` = ?;", dbTblName.questionnaireResult);
      await db.query(sql, [0, userId, answer.questionId]);

      if (!newRows.length) continue;

      sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `checked` = VALUES(`checked`), `timestamp` = VALUES(`timestamp`), `date` = VALUES(`date`), `time` = VALUES(`time`);", dbTblName.questionnaireResult);
      await db.query(sql, [newRows]);
    }

    for (let answer of inputAnswers) {
      sql = sprintf("SELECT * FROM `%s` WHERE `questionId` = ? AND `answer` = ?;", dbTblName.questionnaireAnswers);
      let rows = await db.query(sql, [answer['questionId'], answer['answer']]);

      let answerId;
      if (!rows.length) {
        const today = new Date();
        const timestamp = today.getTime();
        newRows = [
          [null, timestamp, answer['questionId'], answer['answer'], ''],
        ];
        sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `answer` = VALUES(`answer`);", dbTblName.questionnaireAnswers);
        let rows = await db.query(sql, [newRows]);
        answerId = rows["insertId"];
      } else {
        answerId = rows[0]["id"];
      }

      newRows = [
        [answer['questionId'], userId, answerId, 1, timestamp, date, time],
      ];

      sql = sprintf("DELETE FROM `%s` WHERE `questionId` = ? AND `userId` = ?;", dbTblName.questionnaireResult);
      await db.query(sql, [answer['questionId'], userId]);
      sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `checked` = VALUES(`checked`), `timestamp` = VALUES(`timestamp`), `date` = VALUES(`date`), `time` = VALUES(`time`);", dbTblName.questionnaireResult);
      await db.query(sql, [newRows]);
    }

    await _loadQuestions(req, res, next);
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
