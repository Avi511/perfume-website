import express from "express";
import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} from "../controllers/productController.js";

import { authMiddleware as protect, admin, seller } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = express.Router();
router.post("/", protect, seller, upload.single("image"), createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", protect, seller, upload.single("image"), updateProduct);
router.delete("/:id", protect, seller, deleteProduct);

export default router;