import Product from "../models/Product.js";
import User from "../models/User.js";
import Order from "../models/Order.js";
import { registerUserService } from "../services/authService.js";
import { transformProduct } from "../services/productService.js";

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

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.json(products.map(transformProduct));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        
        if (!user) {
            return res.status(404).json({ error: "Member not found in current manifest" });
        }

        Object.assign(user, req.body);
        user.updatedAt = Date.now();
        
        await user.save();
        res.json({ message: "Signature updated successfully", user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        
        if (!user) {
            return res.status(404).json({ error: "Member not found" });
        }

        if (user.isAdmin) {
            return res.status(400).json({ error: "Administrative core signatures cannot be purged" });
        }

        await User.findByIdAndDelete(id);
        res.json({ message: "Signature purged from manifest" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        Object.assign(product, req.body);
        product.productTotal = (product.productPrice || 0) * (product.productQuantity || 0);
        product.updatedAt = Date.now();

        await product.save();
        res.json({ message: "Product updated successfully", product: transformProduct(product) });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};