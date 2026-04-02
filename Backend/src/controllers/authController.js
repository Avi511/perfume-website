import { registerUserService, loginUserService } from "../services/authService.js";
import { validateEmail } from "../utils/validators.js";

export const registerUser = async (req, res) => {
    try {
        if (!req.body.email || !validateEmail(req.body.email)) {
            return res.status(400).json({ error: "Please provide a valid email address" });
        }
        if (!req.body.password) {
            return res.status(400).json({ error: "Please provide a password" });
        }
        
        const userData = await registerUserService(req.body);
        if (userData) {
            res.status(201).json(userData);
        } else {
            res.status(400).json({ error: "Invalid user data provided" });
        }
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ error: messages.join(', ') });
        }
        if (error.message === 'User already exists with this email') {
            return res.status(400).json({ error: error.message });
        }
        console.error("Register Error:", error);
        res.status(500).json({ error: "An internal server error occurred during registration" });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Please provide both email and password" });
        }
        const userData = await loginUserService(email, password);
        res.json(userData);
    } catch (error) {
        console.error("Login Error:", error);
        res.status(401).json({ error: error.message });
    }
};

export const logoutUser = async (req, res) => {
    res.json({ message: "User logged out successfully. Please discard the token on client side." });
};
