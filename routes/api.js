import express from "express";

import authRouter from "./api/auth";
import postsRouter from "./api/posts";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/posts", postsRouter);

export default router;
