import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Helper function to generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id, userId: id }, process.env.JWT_SECRET || "fallback_secret", {
        expiresIn: "30d",
    });
};

// @desc    Get user profile
export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// @desc    Update user profile
export const updateUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (user) {
            user.firstName = req.body.firstName || user.firstName;
            user.lastName = req.body.lastName || user.lastName;
            user.email = req.body.email || user.email;
            user.phone = req.body.phone || user.phone;
            user.address = req.body.address || user.address;

            if (req.body.password) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(req.body.password, salt);
            }

            const updatedUser = await user.save();

            res.json({
                _id: updatedUser._id,
                userId: updatedUser.userId,
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName,
                email: updatedUser.email,
                token: generateToken(updatedUser._id),
            });
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// @desc    Delete user profile
export const deleteUserProfile = async (req, res) => {
    try {
        // If an ID is passed in the URL parameters (e.g. admin deleting someone else), target that user.
        // Otherwise, target the currently logged-in user.
        const targetUserId = req.params.id || req.user._id;

        // VERIFY AUTHORIZATION: Only the user themselves OR an Admin can proceed
        // NOTE: You will need to add an `isAdmin: { type: Boolean, default: false }` or `role: { type: String }` field to your User.js schema for the admin check to work!
        const isSelf = targetUserId.toString() === req.user._id.toString();
        const isAdmin = req.user.isAdmin === true || req.user.role === "admin";

        if (!isSelf && !isAdmin) {
            return res.status(403).json({ error: "Not authorized! Only admins or the account owner can perform this action." });
        }

        const user = await User.findById(targetUserId);

        if (user) {
            await user.deleteOne();
            res.json({ message: "Account deleted successfully" });
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
