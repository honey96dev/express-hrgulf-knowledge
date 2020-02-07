import express from "express";

import authRouter from "./admin-api/auth";
import profileRouter from "./admin-api/profile";
import postsRouter from "./admin-api/posts";
import newRouter from "./admin-api/news";
import videoRouter from "./admin-api/video";
import questionnaireRouter from "./admin-api/questionnaire";
import voteRouter from "./admin-api/vote";
import usersRouter from "./admin-api/users";
import aboutRouter from "./admin-api/about";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/profile",profileRouter);
router.use("/posts", postsRouter);
router.use("/news", newRouter);
router.use("/video", videoRouter);
router.use("/questionnaire", questionnaireRouter);
router.use("/vote", voteRouter);
router.use("/users", usersRouter);
router.use("/about", aboutRouter);

export default router;
