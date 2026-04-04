import express from "express";
import { getDashboardStats, registerSeller } from "../controllers/adminController.js";
import { authMiddleware as protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/stats", protect, admin, getDashboardStats);
router.post("/register-seller", protect, admin, registerSeller);

export default router;
