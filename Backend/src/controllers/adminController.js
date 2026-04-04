import Product from "../models/Product.js";
import User from "../models/User.js";
import Order from "../models/Order.js";

export const getDashboardStats = async (req, res) => {
    try {
        const totalProducts = await Product.countDocuments();
        const totalUsers = await User.countDocuments({ isAdmin: false });
        const pendingOrders = await Order.countDocuments({ status: "Pending" });
        const totalOrders = await Order.countDocuments();

        const orders = await Order.find();
        const totalRevenue = orders.reduce((acc, order) => acc + order.totalAmount, 0);

        res.json({
            success: true,
            stats: {
                totalProducts,
                totalUsers,
                pendingOrders,
                totalOrders,
                totalRevenue
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
