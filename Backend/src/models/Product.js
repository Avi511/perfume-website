import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
        unique: true
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
    gender: {
        type: String, // Men, Women, Unisex
    },
    fragranceFamily: {
        type: String, // Floral, Woody, Fresh / Citrus, Oriental / Spicy, Gourmand
    },
    occasion: {
        type: String, // Everyday / Office, Date Night, Party / Night Out, Formal / Luxury, Sport / Fresh wear
    },
    season: {
        type: String, // Summer / Fresh, Winter / Warm & Spicy, All-season
    },
    priceRange: {
        type: String, // Budget, Mid-range, Premium / Luxury
    },
    longevity: {
        type: String, // Light & Fresh, Moderate, Long-lasting / Strong
    },
    isNewArrival: {
        type: Boolean,
        default: false,
    },
    isBestSeller: {
        type: Boolean,
        default: false,
    },
    isTrending: {
        type: Boolean,
        default: false,
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

const Product = mongoose.model("Product", productSchema);
export default Product;