import express from "express";

import authRouter from "./api/auth";
import profileRouter from "./api/profile";
import postsRouter from "./api/posts";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/profile", profileRouter);
router.use("/posts", postsRouter);

export default router;
