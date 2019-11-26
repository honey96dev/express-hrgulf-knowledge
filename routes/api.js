import express from "express";

import authRouter from "./api/auth";
import profileRouter from "./api/profile";
import postsRouter from "./api/posts";
import newsRouter from "./api/news";
import videoRouter from "./api/video";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/profile", profileRouter);
router.use("/posts", postsRouter);
router.use("/news", newsRouter);
router.use("/video", videoRouter);

export default router;
