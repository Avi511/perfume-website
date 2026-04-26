import express from "express";
import { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, testEmail } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/forgot-password", forgotPassword);
router.post("/forgot_password", forgotPassword);
router.put("/reset-password/:token", resetPassword);
router.get("/test-email", testEmail);

export default router;
