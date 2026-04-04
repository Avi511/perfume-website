import Product from "../models/Product.js";
import User from "../models/User.js";
import Order from "../models/Order.js";
import { registerUserService } from "../services/authService.js";

export const getDashboardStats = async (req, res) => {
    try {
        const totalProducts = await Product.countDocuments();
        const totalUsers = await User.countDocuments({ isAdmin: false, isSeller: { $ne: true } });
        const totalSellers = await User.countDocuments({ isSeller: true });
        const pendingOrders = await Order.countDocuments({ status: "Pending" });
        const totalOrders = await Order.countDocuments();

        const orders = await Order.find();
        const totalRevenue = orders.reduce((acc, order) => acc + order.totalAmount, 0);

        res.json({
            success: true,
            stats: {
                totalProducts,
                totalUsers,
                totalSellers,
                pendingOrders,
                totalOrders,
                totalRevenue
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const registerSeller = async (req, res) => {
    try {
        const { email, password, firstName, lastName, phone, address } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        const userData = await registerUserService({
            email,
            password,
            firstName,
            lastName,
            phone,
            address,
            isAdmin: false,
            isSeller: true
        });

        res.status(201).json({
            message: "Seller registered successfully",
            seller: userData
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
