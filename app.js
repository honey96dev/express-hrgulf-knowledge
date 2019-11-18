import createError from "http-errors";
import express from "express";
import expressJwt from "express-jwt";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

import apiRouter from "./routes/api";
import {session} from "./core/config";

const app = express();
const cwd = process.cwd();

// view engine setup
app.set("views", path.join(cwd, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

process.env.NODE_ENV !== "production" && app.use(cors());

app.use('/api/posts/save', expressJwt({secret: session.secret}));

app.use("/assets", express.static(path.join(cwd, "assets")));

app.use("/api", apiRouter);

app.use(express.static(path.join(cwd, "frontend")));
app.get("*", (req, res) => {
  res.sendFile(path.join(cwd, "frontend/index.html"));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
