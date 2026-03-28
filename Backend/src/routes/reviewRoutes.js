import express from "express";
import { createReview, getReviewsByProduct, getReviewsByUser, getReviewById, updateReview, deleteReview, getAllReviews } from "../controllers/reviewController.js";
import { authMiddleware as protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createReview);
router.get("/product/:productId", getReviewsByProduct);
router.get("/user/:userId", protect, getReviewsByUser);
router.get("/:id", getReviewById);
router.put("/:id", protect, updateReview);
router.delete("/:id", protect, deleteReview);
router.get("/", getAllReviews);

export default router;