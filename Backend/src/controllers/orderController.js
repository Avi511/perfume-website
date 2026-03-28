import Order from "../models/Order.js";
import Product from "../models/Product.js";

export const createOrder = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(403).json({ error: "Only logged in users can create orders" });
        }

        const orderInfo = req.body;

        let orderId = "O0001";
        const lastOrder = await Order.findOne().sort({ createdAt: -1 });

        if (lastOrder && lastOrder.orderId) {
            const lastOrderNumber = parseInt(lastOrder.orderId.substring(1), 10);
            if (!isNaN(lastOrderNumber)) {
                orderId = "O" + String(lastOrderNumber + 1).padStart(4, '0');
            }
        }
        console.log("Generated Order ID:", orderId);

        const reqProducts = orderInfo.product || [];

        if (reqProducts.length === 0) {
            return res.status(400).json({ error: "Order must contain at least one product" });
        }

        let totalAmount = 0;
        const fullyPopulatedProducts = [];

        for (const item of reqProducts) {
            const qty = parseInt(item.quantity, 10);
            if (!qty || qty <= 0) {
                return res.status(400).json({ error: "Quantity must be greater than zero" });
            }

            const productDoc = await Product.findOne({ productId: item.productId });
            if (!productDoc) {
                return res.status(404).json({ error: `Product with ID ${item.productId} not found` });
            }
            const productTotal = productDoc.productPrice * qty;
            totalAmount += productTotal;

            fullyPopulatedProducts.push({
                productId: productDoc.productId,
                productName: productDoc.productName,
                productImage: productDoc.productImage,
                productPrice: productDoc.productPrice,
                productQuantity: qty,
                productTotal: productTotal
            });
        }

        const order = new Order({
            orderId: orderId,
            userId: req.user.userId || "unknown",
            email: orderInfo.email || req.user.email,
            phone: orderInfo.phone || req.user.phone,
            address: orderInfo.address || req.user.address,
            status: orderInfo.status || "Pending",
            totalAmount: totalAmount,
            product: fullyPopulatedProducts
        });

        const savedOrder = await order.save();
        return res.status(201).json(savedOrder);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error creating order" });
    }
}

export const getOrder = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(403).json({ error: "Only logged in users can see orders" });
        }
        const userId = req.user.userId || "unknown";
        const orders = await Order.find({ userId: userId }).sort({ createdAt: -1 });

        return res.status(200).json(orders);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error getting orders" });
    }
}

export const getOrderById = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(403).json({ error: "Only logged in users can see orders" });
        }
        const order = await Order.findOne({
            $or: [{ orderId: req.params.id }, { _id: req.params.id }]
        }).catch(() => null);
        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }
        const userId = req.user.userId || "unknown";
        if (order.userId !== userId) {
            return res.status(403).json({ error: "You are not authorized to view this order" });
        }

        return res.status(200).json(order);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error getting order" });
    }
}

export async function updateOrderStatus(req, res) {
    try {
        if (!req.user) {
            return res.status(403).json({ error: "Only logged in users can update orders" });
        }

        const order = await Order.findOne({
            $or: [{ orderId: req.params.id }, { _id: req.params.id }]
        }).catch(() => null);

        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }

        const userId = req.user.userId || "unknown";
        if (order.userId !== userId) {
            return res.status(403).json({ error: "You are not authorized to update this order" });
        }

        const validStatuses = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"];
        if (req.body.status && !validStatuses.includes(req.body.status)) {
            return res.status(400).json({ error: "Invalid status value provided" });
        }

        order.status = req.body.status || order.status;
        await order.save();
        return res.status(200).json(order);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error updating order" });
    }
}

export async function deleteOrder(req, res) {
    try {
        if (!req.user) {
            return res.status(403).json({ error: "Only logged in users can delete orders" });
        }

        const order = await Order.findOne({
            $or: [{ orderId: req.params.id }, { _id: req.params.id }]
        }).catch(() => null);

        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }
        const userId = req.user.userId || "unknown";
        if (order.userId !== userId) {
            return res.status(403).json({ error: "You are not authorized to delete this order" });
        }

        await order.deleteOne();
        return res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error deleting order" });
    }
}