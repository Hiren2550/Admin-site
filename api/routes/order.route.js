import express from "express";
import {
  createOrder,
  deleteOrder,
  fetchAllOrders,
  fetchOrderById,
  fetchOrderByUser,
  updateOrder,
} from "../controller/order.js";
const router = express.Router();

router
  .get("/", fetchAllOrders)
  .post("/", createOrder)
  .get("/order", fetchOrderByUser)
  .get("/:id", fetchOrderById)
  .patch("/:id", updateOrder)
  .delete("/:id", deleteOrder);

export default router;
