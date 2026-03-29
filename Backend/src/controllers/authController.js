import { registerUserService, loginUserService } from "../services/authService.js";
import { validateEmail } from "../utils/validators.js";

export const registerUser = async (req, res) => {
    try {
        if (!validateEmail(req.body.email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }
        
        const userData = await registerUserService(req.body);
        if (userData) {
            res.status(201).json(userData);
        } else {
            res.status(400).json({ error: "Invalid user data" });
        }
    } catch (error) {
        if (error.message === 'User already exists with this email') {
            return res.status(400).json({ error: error.message });
        }
        res.status(500).json({ error: error.message });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userData = await loginUserService(email, password);
        res.json(userData);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

export const logoutUser = async (req, res) => {
    res.json({ message: "User logged out successfully. Please discard the token on client side." });
};
