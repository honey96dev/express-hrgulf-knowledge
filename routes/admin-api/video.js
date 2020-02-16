import express from "express";
import {sprintf} from "sprintf-js";
import dateformat from "dateformat";
import {dbTblName} from "core/config";
import db from "core/db";
import strings from "core/strings";
import tracer from "core/tracer";
import consts from "core/consts";

const _loadData = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {page, pageSize, userId, sections} = req.body;
  page || (page = 1);
  pageSize || (pageSize = consts.defaultPageSize);

  const start = pageSize * (page - 1);

  let sql;
  let rows;

  let where = "";
  if (!!sections && !!sections.length) {
    sql = sprintf("SELECT `videoId` FROM `%s` WHERE `sectionId` IN (?) AND `related` = ?;", dbTblName.video2Sections);
    rows = await db.query(sql, [sections, 1]);

    let tmp = [];
    for (let row of rows) {
      tmp.push(row["videoId"]);
    }
    if (!!tmp.length) {
      where = sprintf("AND P.id IN (%s)", tmp.join(","));
    } else {
      where = sprintf("AND P.id = '0'");
    }
  }


  sql = sprintf("SELECT P.*, U.firstName, U.lastName FROM `%s` P JOIN `%s` U ON U.id = P.userId WHERE P.deletedDate = ? AND P.userId LIKE ? %s ORDER BY P.timestamp DESC LIMIT ?, ?;", dbTblName.video, dbTblName.users, where);

  try {
    let rows = await db.query(sql, ["", userId || "%%", start, pageSize]);
    sql = sprintf("SELECT COUNT(`id`) `count` FROM `%s` WHERE `deletedDate` = ? AND `userId` LIKE ? %s;", dbTblName.video, "", userId || "%%", where);
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

const _loadSections = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {page, pageSize} = req.body;
  page || (page = 1);
  pageSize || (pageSize = consts.defaultPageSize);

  let start = pageSize * (page - 1);

  let sql = sprintf("SELECT * FROM `%s` WHERE `deletedDate` = ? ORDER BY `timestamp` ASC LIMIT ?, ?;", dbTblName.videoSections);

  try {
    let rows = await db.query(sql, ["", start, pageSize]);
    for (let row of rows) {
      row["number"] = ++start;
    }

    sql = sprintf("SELECT COUNT(`id`) `count` FROM `%s` WHERE `deletedDate` = ?;", dbTblName.videoSections);
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
  const {id, sectionIds, title, url, isFile, userId} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");
  const time = dateformat(today, "hh:MM TT");
  const timestamp = today.getTime();

  let newRows = [
    [id || null, sectionIds, timestamp, userId, date, time, title, url, isFile, ""],
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `sectionIds` = VALUES(`sectionIds`), `title` = VALUES(`title`), `url` = VALUES(`url`), `isFile` = VALUES(`isFile`);", dbTblName.video);
  try {
    let rows = await db.query(sql, [newRows]);

    sql = sprintf("UPDATE `%s` SET `related` = ? WHERE `videoId` = ?;", dbTblName.video2Sections);
    await db.query(sql, [0, id || 0]);

    newRows = [];
    const sectionIdsArr = sectionIds.split(",");
    for (let sectionId of sectionIdsArr) {
      if (sectionId != "") {
        newRows.push([id, sectionId, 1]);
      }
    }
    sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `related` = VALUES(`related`);", dbTblName.video2Sections);
    if (!!newRows.length) {
      await db.query(sql, [newRows]);
    }

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

const deleteProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");

  let sql = sprintf("UPDATE `%s` SET `deletedDate` = ? WHERE `id` = ?;", dbTblName.video);
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
  const {id} = req.body;

  let sql = sprintf("SELECT P.*, U.firstName, U.lastName FROM `%s` P JOIN `%s` U ON U.id = P.userId WHERE P.id = ?;", dbTblName.video, dbTblName.users);

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

const countProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];

  let sql = sprintf("SELECT COUNT(`id`) `count` FROM `%s` WHERE `deletedDate` = ?;", dbTblName.video);

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
    tracer.error(JSON.stringify(err));
    tracer.error(__filename);
    res.status(200).send({
      result: langs.error,
      message: langs.unknownServerError,
      err,
    });
  }
};

const sectionsProc = async (req, res, next) => {
  await _loadSections(req, res, next);
};

const saveSectionProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, section} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");
  const time = dateformat(today, "hh:MM TT");
  const timestamp = today.getTime();

  const newRows = [
    [id || null, timestamp, date, time, section, ""],
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `section` = VALUES(`section`);", dbTblName.videoSections);
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

const deleteSectionProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");

  let sql = sprintf("UPDATE `%s` SET `deletedDate` = ? WHERE `id` = ?;", dbTblName.videoSections);
  try {
    await db.query(sql, [date, id]);
    _loadSections(req, res, next);
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

const getSectionProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id} = req.body;

  let sql = sprintf("SELECT * FROM `%s` WHERE `id` = ?;", dbTblName.videoSections);

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
router.post("/count", countProc);
router.post("/sections", sectionsProc);
router.post("/save-section", saveSectionProc);
router.post("/delete-section", deleteSectionProc);
router.post("/get-section", getSectionProc);

export default router;
