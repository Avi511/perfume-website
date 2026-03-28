import Order from "../models/Order.js";
import Product from "../models/Product.js";

export const createOrder = async (req, res) => {
    //get user informaion
    //add current user name if not provided
    //orderId generate
    //create order object
    //save order
    //send response

    try {
        if (!req.user) {
            return res.status(403).json({ error: "Only logged in users can create orders" });
        }

        const orderInfo = req.body

        if (!orderInfo.name) {
            orderInfo.name = req.user.firstName + " " + req.user.lastName
        }

        let orderId = "O0001";

        const lastOrder = await Order.findOne().sort({ date: -1 });

        if (lastOrder != null) {
            const lastOrderId = lastOrder.orderId;
            const lastOrderNumber = parseInt(lastOrderId.substring(1));
            orderId = "O" + (lastOrderNumber + 1);
            console.log(orderId);
        }

        const reqProducts = orderInfo.product || [];
        let total = 0;
        const fullyPopulatedProducts = [];

        for (const item of reqProducts) {
            const productDoc = await Product.findOne({ productId: item.productId });
            if (!productDoc) {
                return res.status(404).json({ error: `Product with ID ${item.productId} not found` });
            }

            total += productDoc.price * item.quantity;

            fullyPopulatedProducts.push({
                productId: productDoc.productId,
                productName: productDoc.productName,
                price: productDoc.price,
                description: productDoc.description,
                labeledPrice: productDoc.labeledPrice,
                images: productDoc.images,
                quantity: item.quantity
            });
        }

        const order = new Order({
            orderId: orderId,
            email: orderInfo.email,
            name: orderInfo.name,
            phone: orderInfo.phone,
            address: orderInfo.address,
            status: orderInfo.status,
            total: total,
            product: fullyPopulatedProducts,
            date: orderInfo.date
        });

        const savedOrder = await order.save();
        return res.status(201).json(savedOrder);


    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error creating order" });
    }
}