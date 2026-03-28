import Product from "../models/Product.js";

export async function createProduct(req, res) {
    try {
        const { name, description, price, image, quantity } = req.body;

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
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function getProducts(req, res) {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function getProductById(req, res) {
    try {
        const product = await Product.findOne({
            $or: [{ productId: req.params.id }, { _id: req.params.id }]
        }).catch(() => null);

        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function updateProduct(req, res) {
    try {
        const { name, description, price, image, quantity } = req.body;

        const product = await Product.findOne({
            $or: [{ productId: req.params.id }, { _id: req.params.id }]
        }).catch(() => null);

        if (product) {
            product.productName = name || product.productName;
            product.productPrice = price || product.productPrice;
            product.productImage = image || product.productImage;
            product.productQuantity = quantity || product.productQuantity;
            product.productTotal = product.productPrice * product.productQuantity;

            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({ error: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function deleteProduct(req, res) {
    try {
        const product = await Product.findOne({
            $or: [{ productId: req.params.id }, { _id: req.params.id }]
        }).catch(() => null);

        if (product) {
            await product.deleteOne();
            res.json({ message: "Product removed" });
        } else {
            res.status(404).json({ error: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
