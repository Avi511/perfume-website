import express from "express";
import { getUserProfile, updateUserProfile, deleteUserProfile, getCart, syncCart } from "../controllers/userController.js";
import { authMiddleware as protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);
router.delete("/profile", protect, deleteUserProfile);
router.delete("/:id", protect, deleteUserProfile);

router.get("/cart", protect, getCart);
router.post("/cart/sync", protect, syncCart);

export default router;