import { registerUserService, loginUserService, forgotPasswordService, resetPasswordService } from "../services/authService.js";
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

export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        await forgotPasswordService(email);
        res.status(200).json({ message: 'Email sent' });
    } catch (error) {
        console.error("Forgot Password Error:", error);
        if (error.message === 'There is no user with that email') {
            return res.status(404).json({ error: error.message });
        }
        res.status(500).json({ error: "Email could not be sent. Please try again later." });
    }
};

export const resetPassword = async (req, res) => {
    try {
        const { password } = req.body;
        const userData = await resetPasswordService(req.params.token, password);
        res.status(200).json(userData);
    } catch (error) {
        console.error("Reset Password Error:", error);
        res.status(400).json({ error: error.message });
    }
};
