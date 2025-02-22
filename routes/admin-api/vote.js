import express from "express";
import {sprintf} from "sprintf-js";
import dateformat from "dateformat";
import {dbTblName} from "core/config";
import db from "core/db";
import strings from "core/strings";
import tracer from "core/tracer";
import consts from "core/consts";

const _loadPackages = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {page, pageSize, userId} = req.body;
  page || (page = 1);
  pageSize || (pageSize = consts.defaultPageSize);

  const start = pageSize * (page - 1);

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");

  let sql = sprintf("SELECT P.* FROM `%s` P WHERE P.deletedDate = ? ORDER BY P.timestamp DESC LIMIT ?, ?;", dbTblName.votePackages);

  try {
    let rows = await db.query(sql, ["", start, pageSize]);
    let number = start + 1;
    for (let row of rows) {
      row['number'] = number++;
      row["ended"] = row["endDate"] < date;
    }
    sql = sprintf("SELECT COUNT(`id`) `count` FROM `%s` WHERE `deletedDate` = ?;", dbTblName.votePackages);
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

  let sql = sprintf("SELECT P.* FROM `%s` P WHERE P.packageId = ? AND P.deletedDate = ? ORDER BY P.timestamp ASC LIMIT ?, ?;", dbTblName.voteQuestions);

  try {
    let rows = await db.query(sql, [packageId, "", start, pageSize]);
    let number = start + 1;
    for (let row of rows) {
      row['number'] = number++;
    }
    sql = sprintf("SELECT COUNT(`id`) `count` FROM `%s` WHERE `packageId` = ? AND `deletedDate` = ?;", dbTblName.voteQuestions);
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

  let sql = sprintf("SELECT P.* FROM `%s` P WHERE P.questionId = ? AND P.deletedDate = ? ORDER BY P.timestamp ASC LIMIT ?, ?;", dbTblName.voteAnswers);

  try {
    let rows = await db.query(sql, [questionId, "", start, pageSize]);
    let number = start + 1;
    for (let row of rows) {
      row['number'] = number++;
    }
    sql = sprintf("SELECT COUNT(`id`) `count` FROM `%s` WHERE `questionId` = ? AND `deletedDate` = ?;", dbTblName.voteAnswers);
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
  const {id, name, startDate, endDate, userId} = req.body;

  const today = new Date();
  const timestamp = today.getTime();

  const newRows = [
    [id || null, timestamp, name, startDate, endDate, "" , ""],
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `name` = VALUES(`name`), `startDate` = VALUES(`startDate`), `endDate` = VALUES(`endDate`);", dbTblName.votePackages);
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

  let sql = sprintf("UPDATE `%s` SET `deletedDate` = ? WHERE `id` = ?;", dbTblName.votePackages);
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

  let sql = sprintf("SELECT P.* FROM `%s` P WHERE P.id = ?;", dbTblName.votePackages);

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
  const {id, packageId, question, userId} = req.body;

  const today = new Date();
  const timestamp = today.getTime();

  const newRows = [
    [id || null, packageId, timestamp, question, "", ""],
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `question` = VALUES(`question`);", dbTblName.voteQuestions);
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

  let sql = sprintf("UPDATE `%s` SET `deletedDate` = ? WHERE `id` = ?;", dbTblName.voteQuestions);
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
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `answer` = VALUES(`answer`);", dbTblName.voteAnswers);
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

  let sql = sprintf("UPDATE `%s` SET `deletedDate` = ? WHERE `id` = ?;", dbTblName.voteAnswers);
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

  let sql = sprintf("SELECT P.* FROM `%s` P WHERE P.id = ?;", dbTblName.voteAnswers);

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

  let sql = sprintf("UPDATE `%s` SET `releasedDate` = ? WHERE `id` = ?;", dbTblName.votePackages);

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

  let sql = sprintf("SELECT (SELECT COUNT(`id`) FROM `%s` WHERE `deletedDate` = ?) `count`, (SELECT COUNT(`id`) FROM `%s` WHERE `deletedDate` = ? AND `releasedDate` = ? AND `endDate` > ?) `countAwaiting`;", dbTblName.votePackages, dbTblName.votePackages);

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
