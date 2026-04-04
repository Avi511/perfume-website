import Product from '../models/Product.js';
import APIFeatures from '../utils/apiFeatures.js';

export const getAllProductsService = async (queryString) => {
    const features = new APIFeatures(Product.find(), queryString).search().filter().paginate();
    const products = await features.query;
    return products;
};

export const getProductByIdService = async (id) => {
    const product = await Product.findOne({
        $or: [{ productId: id }, { _id: id }]
    }).catch(() => null);
    
    if (!product) {
        throw new Error('Product not found');
    }
    return product;
};

export const createProductService = async (productData) => {
    const { 
        name, description, price, image, quantity,
        gender, fragranceFamily, occasion, season, 
        priceRange, longevity, isNewArrival, isBestSeller, isTrending 
    } = productData;

    let newProductId = "P0001";
    const lastProduct = await Product.findOne().sort({ createdAt: -1 });
    if (lastProduct && lastProduct.productId) {
        const lastNumber = parseInt(lastProduct.productId.replace("P", ""), 10);
        if (!isNaN(lastNumber)) {
            newProductId = "P" + String(lastNumber + 1).padStart(4, '0');
        }
    }

    const product = new Product({
        productId: newProductId,
        productName: name || "Sample name",
        productImage: image || "/images/sample.jpg",
        productPrice: price || 0,
        productQuantity: quantity || 0,
        productTotal: (price || 0) * (quantity || 0),
        gender,
        fragranceFamily,
        occasion,
        season,
        priceRange,
        longevity,
        isNewArrival,
        isBestSeller,
        isTrending
    });

    const createdProduct = await product.save();
    return createdProduct;
};

export const updateProductService = async (id, updatedData) => {
    const { 
        name, description, price, image, quantity,
        gender, fragranceFamily, occasion, season, 
        priceRange, longevity, isNewArrival, isBestSeller, isTrending 
    } = updatedData;
    const product = await Product.findOne({
        $or: [{ productId: id }, { _id: id }]
    }).catch(() => null);

    if (product) {
        product.productName = name || product.productName;
        product.productPrice = price || product.productPrice;
        product.productImage = image || product.productImage;
        product.productQuantity = quantity || product.productQuantity;
        product.productTotal = product.productPrice * product.productQuantity;
        
        if (gender !== undefined) product.gender = gender;
        if (fragranceFamily !== undefined) product.fragranceFamily = fragranceFamily;
        if (occasion !== undefined) product.occasion = occasion;
        if (season !== undefined) product.season = season;
        if (priceRange !== undefined) product.priceRange = priceRange;
        if (longevity !== undefined) product.longevity = longevity;
        if (isNewArrival !== undefined) product.isNewArrival = isNewArrival;
        if (isBestSeller !== undefined) product.isBestSeller = isBestSeller;
        if (isTrending !== undefined) product.isTrending = isTrending;

        const updatedProduct = await product.save();
        return updatedProduct;
    } else {
        throw new Error('Product not found');
    }
};

export const deleteProductService = async (id) => {
    const product = await Product.findOne({
        $or: [{ productId: id }, { _id: id }]
    }).catch(() => null);

    if (product) {
        await product.deleteOne();
        return { message: "Product removed" };
    } else {
        throw new Error('Product not found');
    }
};
