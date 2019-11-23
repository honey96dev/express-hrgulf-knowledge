import express from "express";

import authRouter from "./admin-api/auth";
import profileRouter from "./admin-api/profile";
import postsRouter from "./admin-api/posts";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/profile",profileRouter);
router.use("/posts", postsRouter);

export default router;
