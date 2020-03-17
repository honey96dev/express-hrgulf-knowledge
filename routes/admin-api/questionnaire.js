import express from "express";
import {sprintf} from "sprintf-js";
import dateformat from "dateformat";
import _ from "lodash";
import path from "path";
import fs from "fs";
import {exportXLSX} from "export-to-excel";
import uuid from "uuid";
import consts, {prefixInput, questionTypes} from "core/consts";
import {dbTblName} from "core/config";
import db from "core/db";
import strings from "core/strings";
import tracer from "core/tracer";

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

    return {
      count: count[0]["count"],
      pageCount,
      data: rows,
    };
    //
    // res.status(200).send({
    //   result: langs.success,
    //
    // });
  } catch (err) {
    throw err;
    // tracer.error(err);
    // tracer.error(__filename);
    // res.status(200).send({
    //   result: langs.error,
    //   message: langs.unknownServerError,
    //   err,
    // });
  }
};

const _loadAttachments = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {questionnaireId, page, pageSize} = req.body;
  page || (page = 1);
  pageSize || (pageSize = consts.defaultPageSize);
  const start = pageSize * (page - 1);

  try {
    let sql = sprintf("SELECT A.*, U.id `applicantId`, U.id `applicantId`, U.firstName, U.fatherName, U.lastName FROM `%s` A LEFT JOIN `%s` U ON U.id LIKE A.userId WHERE A.questionnaireId = ? ORDER BY A.timestamp DESC LIMIT ?, ?;", dbTblName.questionnaireAttachments, dbTblName.users);
    let rows = await db.query(sql, [questionnaireId, start, pageSize]);

    let number = start + 1;
    let timestamp;
    for (let row of rows) {
      row["number"] = number++;
      try {
        row["timestamp2"] = dateformat(new Date(row["timestamp"]), "yyyy-mm-dd HH:MM:ss");
      } catch (err) {
        row["timestamp2"] = "";
      }
    }

    sql = sprintf("SELECT COUNT(*) `count` FROM `%s` A WHERE A.questionnaireId = ? ;", dbTblName.questionnaireAttachments);

    let count = await db.query(sql, [questionnaireId, start, pageSize]);
    let pageCount = 0;
    count.length > 0 && (pageCount = Math.ceil(count[0]["count"] / pageSize));

    res.status(200).send({
      result: langs.success,
      count: count[0]["count"],
      pageCount,
      data: rows,
    });
  } catch (err) {
    tracer.error(err);
    tracer.error(__filename);
    res.status(400).send({
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
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  try {
    const data = await _loadResult(req, res, next);
    res.status(200).send({
      ...data,
      result: langs.success,
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

const attachmentsProc = async (req, res, next) => {
  _loadAttachments(req, res, next);
};

const downloadAttachmentProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {questionnaireId, userId} = req.body;

  const cwd = process.cwd();

  try {
    let sql = sprintf("SELECT * FROM `%s` WHERE `questionnaireId` = ? AND `userId` = ?;", dbTblName.questionnaireAttachments);
    let rows = await db.query(sql, [questionnaireId, userId]);
    if (!!rows.length) {
      res.sendFile(path.join(cwd, "public", rows[0]["attachment"]));
    } else {
      res.status(404).send({
        result: langs.error,
        message: langs.notFound,
      });
    }
  } catch (err) {
    tracer.error(err);
    tracer.error(__filename);
    res.status(400).send({
      result: langs.error,
      message: langs.unknownServerError,
      err,
    });
  }
};

const downloadResultProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];

  try {
    const {data} = await _loadResult(req, res, next);
    // const {data} = data;
    const headers = [
      {
        "fieldName": "number",
        "displayName": langs.questionnaire.number,
        "cellWidth": 7
      }, {
        "fieldName": "question",
        "displayName": langs.questionnaire.question,
        "cellWidth": 60
      }, {
        "fieldName": "answer",
        "displayName": langs.questionnaire.answer,
        "cellWidth": 25
      }, {
        "fieldName": "count",
        "displayName": langs.questionnaire.count,
        "cellWidth": 8
      },
    ];
    let rows = [];

    let index = 1;
    for (let item of data) {
      rows.push({
        number: index++,
        question: item.question,
        answer: "",
        count: "",
      });
      for (let answer of item.answers) {
        rows.push({
          number: "",
          question: "",
          answer: answer.answer,
          count: `${answer.count}/${item.answersCount}`,
        });
      }
    }

    const filename = uuid();
    const cwd = process.cwd();
    let filepath = path.join(cwd, "temp", `${filename}`);
    // exportToExcel.
    filepath = exportXLSX({
      filename: filepath,
      sheetname: langs.questionnaire.sheetname,
      title: headers,
      data: rows,
    }, res => {
      tracer.info(filepath, res);
    }, err => {
      tracer.err(filepath, err);
    });

    res.sendFile(filepath, undefined, res => {
      fs.unlink(filepath, res => {

      });
    });
  } catch (err) {
    tracer.error(err);
    tracer.error(__filename);
    res.status(400).send({
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
router.post("/attachments", attachmentsProc);
router.post("/download-attachment", downloadAttachmentProc);
router.post("/download-result", downloadResultProc);

export default router;
