import express from "express";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = express.Router();

router.post("/", upload.single("image"), (req, res) => {
    if (req.file) {
        res.status(200).json({
            message: "Image uploaded successfully!",
            imagePath: req.file.path
        });
    } else {
        res.status(400).json({ error: "No image file provided" });
    }
});

export default router;
