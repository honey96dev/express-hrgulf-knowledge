import express from "express";

import authRouter from "./api/auth";
import profileRouter from "./api/profile";
import postsRouter from "./api/posts";
import newsRouter from "./api/news";
import videoRouter from "./api/video";
import questionnaireRouter from "./api/questionnaire";
import voteRouter from "./api/vote";
import contactRouter from "./api/contact";
import aboutRouter from "./api/about";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/profile", profileRouter);
router.use("/posts", postsRouter);
router.use("/news", newsRouter);
router.use("/video", videoRouter);
router.use("/questionnaire", questionnaireRouter);
router.use("/vote", voteRouter);
router.use("/contact", contactRouter);
router.use("/about", aboutRouter);

export default router;
