import express from "express";
import { createOrder, getOrder, getOrderById, updateOrderStatus, deleteOrder } from "../controllers/orderController.js";
import { authMiddleware as protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/", protect, getOrder);
router.get("/:id", protect, getOrderById);
router.put("/:id", protect, updateOrderStatus);
router.delete("/:id", protect, deleteOrder);

export default router;