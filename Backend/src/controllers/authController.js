import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (id) => {
    return jwt.sign({ id, userId: id }, process.env.JWT_SECRET || "fallback_secret", {
        expiresIn: "30d",
    });
};

export const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, phone, address } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ error: "User already exists with this email" });
        }

        let newUserId = "U0001";
        const lastUser = await User.findOne().sort({ createdAt: -1 });
        if (lastUser && lastUser.userId) {
            const lastNumber = parseInt(lastUser.userId.replace("U", ""), 10);
            if (!isNaN(lastNumber)) {
                newUserId = "U" + String(lastNumber + 1).padStart(4, '0');
            }
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            userId: newUserId,
            firstName: firstName || "Unknown",
            lastName: lastName || "Unknown",
            email,
            password: hashedPassword,
            phone: phone || "0000000000",
            address: address || "No address provided",
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                userId: user.userId,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            res.status(400).json({ error: "Invalid user data" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user._id,
                userId: user.userId,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ error: "Invalid email or password" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const logoutUser = async (req, res) => {
    res.json({ message: "User logged out successfully. Please discard the token on client side." });
};
