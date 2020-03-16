import express from "express";
import {sprintf} from "sprintf-js";
import dateformat from "dateformat";
import _ from "lodash";
import {dbTblName} from "core/config";
import db from "core/db";
import strings from "core/strings";
import tracer from "core/tracer";
import consts, {prefixInput, questionTypes} from "core/consts";

const _loadPackages = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {page, pageSize, userId} = req.body;
  page || (page = 1);
  pageSize || (pageSize = consts.defaultPageSize);

  const start = pageSize * (page - 1);

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");

  let sql = sprintf("SELECT P.* FROM `%s` P WHERE P.deletedDate = ? ORDER BY P.timestamp DESC LIMIT ?, ?;", dbTblName.questionnairePackages);

  try {
    let rows = await db.query(sql, ["", start, pageSize]);
    let number = start + 1;
    for (let row of rows) {
      row['number'] = number++;
      row["ended"] = row["endDate"] < date;
    }
    sql = sprintf("SELECT COUNT(`id`) `count` FROM `%s` WHERE `deletedDate` = ?;", dbTblName.questionnairePackages);
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
    tracer.error(err);
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

  let sql = sprintf("SELECT P.* FROM `%s` P WHERE P.packageId = ? AND P.deletedDate = ? ORDER BY P.timestamp ASC LIMIT ?, ?;", dbTblName.questionnaireQuestions);

  try {
    let rows = await db.query(sql, [packageId, "", start, pageSize]);
    let number = start + 1;
    for (let row of rows) {
      row['number'] = number++;
      row['type2'] = questionTypes[row['type']];
    }
    sql = sprintf("SELECT COUNT(`id`) `count` FROM `%s` WHERE `packageId` = ? AND `deletedDate` = ?;", dbTblName.questionnaireQuestions);
    let count = await db.query(sql, [packageId, ""]);
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

const _loadAnswers = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {questionId, page, pageSize, userId} = req.body;
  page || (page = 1);
  pageSize || (pageSize = consts.defaultPageSize);

  const start = pageSize * (page - 1);

  let sql = sprintf("SELECT P.* FROM `%s` P WHERE P.questionId = ? AND P.deletedDate = ? ORDER BY P.timestamp ASC LIMIT ?, ?;", dbTblName.questionnaireAnswers);

  try {
    let rows = await db.query(sql, [questionId, "", start, pageSize]);
    let number = start + 1;
    for (let row of rows) {
      row['number'] = number++;
    }
    sql = sprintf("SELECT COUNT(`id`) `count` FROM `%s` WHERE `questionId` = ? AND `deletedDate` = ?;", dbTblName.questionnaireAnswers);
    let count = await db.query(sql, [questionId, ""]);
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
    tracer.error(err);
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

const savePackageProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, name, startDate, endDate, requireAttachment, userId} = req.body;

  const today = new Date();
  const timestamp = today.getTime();

  const newRows = [
    [id || null, timestamp, name, startDate, endDate, requireAttachment, "" , ""],
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `name` = VALUES(`name`), `startDate` = VALUES(`startDate`), `endDate` = VALUES(`endDate`), `requireAttachment` = VALUES(`requireAttachment`);", dbTblName.questionnairePackages);
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

};

const deletePackageProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");

  let sql = sprintf("UPDATE `%s` SET `deletedDate` = ? WHERE `id` = ?;", dbTblName.questionnairePackages);
  try {
    await db.query(sql, [date, id]);
    _loadPackages(req, res, next);
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

const getPackageProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id} = req.body;

  let sql = sprintf("SELECT P.* FROM `%s` P WHERE P.id = ?;", dbTblName.questionnairePackages);

  try {
    let rows = await db.query(sql, [id]);
    if (rows.length > 0) {
      res.status(200).send({
        result: langs.success,
        data: {
          ...rows[0],
          today: dateformat(new Date(), "yyyy-mm-dd"),
        },
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

const questionsProc = async (req, res, next) => {
  _loadQuestions(req, res, next);
};

const saveQuestionProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, packageId, question, type, userId} = req.body;

  const today = new Date();
  const timestamp = today.getTime();

  const newRows = [
    [id || null, packageId, timestamp, question, type, "", ""],
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `question` = VALUES(`question`), `type` = VALUES(`type`);", dbTblName.questionnaireQuestions);
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

};

const deleteQuestionProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");

  let sql = sprintf("UPDATE `%s` SET `deletedDate` = ? WHERE `id` = ?;", dbTblName.questionnaireQuestions);
  try {
    await db.query(sql, [date, id]);
    _loadQuestions(req, res, next);
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

const getQuestionProc = async (req, res, next) => {
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
    tracer.error(err);
    tracer.error(__filename);
    res.status(200).send({
      result: langs.error,
      message: langs.unknownServerError,
      err,
    });
  }
};

const answersProc = async (req, res, next) => {
  _loadAnswers(req, res, next);
};

const saveAnswerProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, questionId, answer, userId} = req.body;

  const today = new Date();
  const timestamp = today.getTime();

  const newRows = [
    [id || null, timestamp, questionId, answer, ""],
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `answer` = VALUES(`answer`);", dbTblName.questionnaireAnswers);
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

};

const deleteAnswerProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");

  let sql = sprintf("UPDATE `%s` SET `deletedDate` = ? WHERE `id` = ?;", dbTblName.questionnaireAnswers);
  try {
    await db.query(sql, [date, id]);
    _loadAnswers(req, res, next);
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

const getAnswerProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id} = req.body;

  let sql = sprintf("SELECT P.* FROM `%s` P WHERE P.id = ?;", dbTblName.questionnaireAnswers);

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

const resultProc = async (req, res, next) => {
  _loadResult(req, res, next);
};

const publishProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, release} = req.body;

  const today = new Date();
  const date = release ? dateformat(today, "yyyy-mm-dd") : "";

  let sql = sprintf("UPDATE `%s` SET `releasedDate` = ? WHERE `id` = ?;", dbTblName.questionnairePackages);

  try {
    await db.query(sql, [date, id]);
    getPackageProc(req, res, next);
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

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");

  let sql = sprintf("SELECT (SELECT COUNT(`id`) FROM `%s` WHERE `deletedDate` = ?) `count`, (SELECT COUNT(`id`) FROM `%s` WHERE `deletedDate` = ? AND `releasedDate` = ? AND `endDate` > ?) `countAwaiting`;", dbTblName.questionnairePackages, dbTblName.questionnairePackages);

  try {
    let rows = await db.query(sql, ["", "", "", date]);
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

router.post("/packages", packagesProc);
router.post("/save-package", savePackageProc);
router.post("/delete-package", deletePackageProc);
router.post("/get-package", getPackageProc);
router.post("/questions", questionsProc);
router.post("/save-question", saveQuestionProc);
router.post("/delete-question", deleteQuestionProc);
router.post("/get-question", getQuestionProc);
router.post("/answers", answersProc);
router.post("/save-answer", saveAnswerProc);
router.post("/delete-answer", deleteAnswerProc);
router.post("/get-answer", getAnswerProc);
router.post("/result", resultProc);
router.post("/publish", publishProc);
router.post("/count", countProc);

export default router;
