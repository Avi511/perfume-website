import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true
    },
    userId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    product: [
        {
            productId: {
                type: String,
                required: true
            },
            sellerId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: false // Changed to false to support legacy orders
            },
            productName: {
                type: String,
                required: true,
            },
            productImage: {
                type: String,
                required: true,
            },
            productPrice: {
                type: Number,
                required: true,
            },
            productQuantity: {
                type: Number,
                required: true,
            },
            productTotal: {
                type: Number,
                required: true,
            },
        }
    ],
    status: {
        type: String,
        required: true,
        default: "Pending",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },


})

const Order = mongoose.model("Order", orderSchema);
export default Order;