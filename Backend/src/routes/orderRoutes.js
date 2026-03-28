import express from "express";
import { createOrder, getOrder, getOrderById, updateOrderStatus, deleteOrder } from "../controllers/orderController.js";

const router = express.Router();

router.post("/create", createOrder);
router.get("/", getOrder);
router.get("/:id", getOrderById);
router.put("/:id", updateOrderStatus);
router.delete("/:id", deleteOrder);

export default router;