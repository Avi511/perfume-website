import express from "express";
import { getDashboardStats } from "../controllers/adminController.js";
import { authMiddleware as protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/stats", protect, admin, getDashboardStats);

export default router;
