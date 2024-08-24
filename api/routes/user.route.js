import express from "express";
import {
  deleteUser,
  fetchAllUsers,
  fetchUserById,
  updateUser,
} from "../controller/user.js";

const router = express.Router();

router
  .get("/", fetchAllUsers)
  .get("/:id", fetchUserById)
  .patch("/:id", updateUser)
  .delete("/:id", deleteUser);

export default router;
