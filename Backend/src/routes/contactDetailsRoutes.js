import express from "express";
import {
    createContactDetails,
    getContactDetails,
    getContactDetailById,
    deleteContactDetails,
    updateContactStatus
} from "../controllers/contactDetailsController.js";
import { authMiddleware as protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", createContactDetails);
router.get("/", protect, admin, getContactDetails);
router.get("/:id", protect, admin, getContactDetailById);
router.delete("/:id", protect, admin, deleteContactDetails);
router.put("/:id/status", protect, admin, updateContactStatus);

export default router;
