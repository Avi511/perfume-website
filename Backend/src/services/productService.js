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

export const createProductService = async (productData, user) => {
    const { 
        productName, productImage, productPrice, productQuantity, 
        gender, fragranceFamily, occasion, season, priceRange, longevity,
        isNewArrival, isBestSeller, isTrending
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
        productName: productName || "Sample name",
        productImage: productImage || "/images/sample.jpg",
        productPrice: productPrice || 0,
        productQuantity: productQuantity || 0,
        productTotal: (productPrice || 0) * (productQuantity || 0),
        gender,
        fragranceFamily,
        occasion,
        season,
        priceRange,
        longevity,
        isNewArrival,
        isBestSeller,
        isTrending,
        seller: user._id
    });

    const createdProduct = await product.save();
    return createdProduct;
};

export const updateProductService = async (id, updatedData, user) => {
    const product = await Product.findOne({
        $or: [{ productId: id }, { _id: id }]
    }).catch(() => null);

    if (product) {
        // Only seller or admin can update
        if (product.seller.toString() !== user._id.toString() && !user.isAdmin) {
            throw new Error('Not authorized to update this product');
        }

        const fieldsToUpdate = [
            'productName', 'productImage', 'productPrice', 'productQuantity',
            'gender', 'fragranceFamily', 'occasion', 'season', 'priceRange', 'longevity',
            'isNewArrival', 'isBestSeller', 'isTrending'
        ];

        fieldsToUpdate.forEach(field => {
            if (updatedData[field] !== undefined) {
                product[field] = updatedData[field];
            }
        });

        if (updatedData.productPrice !== undefined || updatedData.productQuantity !== undefined) {
            product.productTotal = product.productPrice * product.productQuantity;
        }

        const updatedProduct = await product.save();
        return updatedProduct;
    } else {
        throw new Error('Product not found');
    }
};

export const deleteProductService = async (id, user) => {
    const product = await Product.findOne({
        $or: [{ productId: id }, { _id: id }]
    }).catch(() => null);

    if (product) {
        // Only seller or admin can delete
        if (product.seller.toString() !== user._id.toString() && !user.isAdmin) {
            throw new Error('Not authorized to delete this product');
        }
        await product.deleteOne();
        return { message: "Product removed" };
    } else {
        throw new Error('Product not found');
    }
};

