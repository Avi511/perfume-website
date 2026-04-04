import { 
    getAllProductsService, 
    getProductByIdService, 
    createProductService, 
    updateProductService, 
    deleteProductService 
} from "../services/productService.js";

export async function createProduct(req, res) {
    try {
        const createdProduct = await createProductService(req.body, req.user);
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export async function getProducts(req, res) {
    try {
        const products = await getAllProductsService(req.query);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function getProductById(req, res) {
    try {
        const product = await getProductByIdService(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

export async function updateProduct(req, res) {
    try {
        const updatedProduct = await updateProductService(req.params.id, req.body, req.user);
        res.json(updatedProduct);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}


export async function deleteProduct(req, res) {
    try {
        const result = await deleteProductService(req.params.id, req.user);
        res.json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

