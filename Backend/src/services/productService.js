import Product from '../models/Product.js';
import APIFeatures from '../utils/apiFeatures.js';

const transformProduct = (product) => {
    if (!product) return null;

    const transformed = product.toObject ? product.toObject() : { ...product };

    if (product.productImage && product.productImage.data) {
        const base64 = product.productImage.data.toString('base64');
        transformed.productImage = `data:${product.productImage.contentType};base64,${base64}`;
    } else {
        transformed.productImage = product.productImage || "/images/sample.jpg";
    }

    return transformed;
};

export const getAllProductsService = async (queryString) => {
    const features = new APIFeatures(Product.find(), queryString).search().filter().paginate();
    const products = await features.query;
    return products.map(transformProduct);
};

export const getProductByIdService = async (id) => {
    const product = await Product.findOne({
        $or: [{ productId: id }, { _id: id }]
    }).catch(() => null);

    if (!product) {
        throw new Error('Product not found');
    }
    return transformProduct(product);
};

export const createProductService = async (productData, user, file) => {
    const {
        productName, productPrice, productQuantity,
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

    const productContent = {
        productId: newProductId,
        productName: productName || "Sample name",
        productPrice: Number(productPrice) || 0,
        productQuantity: Number(productQuantity) || 0,
        productTotal: (Number(productPrice) || 0) * (Number(productQuantity) || 0),
        gender,
        fragranceFamily,
        occasion,
        season,
        priceRange,
        longevity,
        isNewArrival: isNewArrival === 'true' || isNewArrival === true,
        isBestSeller: isBestSeller === 'true' || isBestSeller === true,
        isTrending: isTrending === 'true' || isTrending === true,
        seller: user._id
    };

    if (file) {
        productContent.productImage = {
            data: file.buffer,
            contentType: file.mimetype
        };
    }

    const product = new Product(productContent);
    const createdProduct = await product.save();
    return transformProduct(createdProduct);
};

export const updateProductService = async (id, updatedData, user, file) => {
    const product = await Product.findOne({
        $or: [{ productId: id }, { _id: id }]
    }).catch(() => null);

    if (!product) {
        throw new Error('Product not found');
    }

    if (product.seller.toString() !== user._id.toString() && !user.isAdmin) {
        throw new Error('Not authorized to update this product');
    }

    const fieldsToUpdate = [
        'productName', 'productPrice', 'productQuantity',
        'gender', 'fragranceFamily', 'occasion', 'season', 'priceRange', 'longevity',
        'isNewArrival', 'isBestSeller', 'isTrending'
    ];

    fieldsToUpdate.forEach(field => {
        if (updatedData[field] !== undefined) {
            if (field === 'productPrice' || field === 'productQuantity') {
                product[field] = Number(updatedData[field]);
            } else if (['isNewArrival', 'isBestSeller', 'isTrending'].includes(field)) {
                product[field] = updatedData[field] === 'true' || updatedData[field] === true;
            } else {
                product[field] = updatedData[field];
            }
        }
    });

    if (file) {
        product.productImage = {
            data: file.buffer,
            contentType: file.mimetype
        };
    } else if (updatedData.productImage) {
        product.productImage = updatedData.productImage;
    }

    product.productTotal = (product.productPrice || 0) * (product.productQuantity || 0);

    const updatedProduct = await product.save();
    return transformProduct(updatedProduct);
};

export const deleteProductService = async (id, user) => {
    const product = await Product.findOne({
        $or: [{ productId: id }, { _id: id }]
    }).catch(() => null);

    if (!product) {
        throw new Error('Product not found');
    }

    if (product.seller.toString() !== user._id.toString() && !user.isAdmin) {
        throw new Error('Not authorized to delete this product');
    }

    await product.deleteOne();
    return { message: "Product removed" };
};

