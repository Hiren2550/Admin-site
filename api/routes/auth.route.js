import express from "express";
import { createUser, login } from "../controller/auth.js";

const router = express.Router();

router.post("/signup", createUser).post("/login", login);

export default router;
