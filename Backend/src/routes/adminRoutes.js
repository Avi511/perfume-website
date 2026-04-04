import express from "express";
import { getDashboardStats, registerSeller, getAllUsers, getAllProducts, deleteProduct, updateUser, deleteUser } from "../controllers/adminController.js";
import { authMiddleware as protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/stats", protect, admin, getDashboardStats);
router.get("/users", protect, admin, getAllUsers);
router.put("/users/:id", protect, admin, updateUser);
router.delete("/users/:id", protect, admin, deleteUser);
router.get("/products", protect, admin, getAllProducts);
router.delete("/products/:id", protect, admin, deleteProduct);
router.post("/register-seller", protect, admin, registerSeller);

export default router;
