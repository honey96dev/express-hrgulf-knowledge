import express from "express";

import authRouter from "./admin-api/auth";
import profileRouter from "./admin-api/profile";
import postsRouter from "./admin-api/posts";
import newRouter from "./admin-api/news";
import videoRouter from "./admin-api/video";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/profile",profileRouter);
router.use("/posts", postsRouter);
router.use("/news", newRouter);
router.use("/video", videoRouter);

export default router;
