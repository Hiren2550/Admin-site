import express from "express";

import {
  addToCart,
  deleteItemFromCart,
  fetchCartByUser,
  updateCart,
} from "../controller/cart.js";
const router = express.Router();

router
  .post("/", addToCart)
  .get("/", fetchCartByUser)
  .delete("/:id", deleteItemFromCart)
  .patch("/:id", updateCart);

export default router;
