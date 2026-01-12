import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../features/products/components/ProductCard.jsx';
import { products } from '../data/products';

const Shop = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        if (category) {
            setFilteredProducts(products.filter(p => p.category === category));
        } else {
            setFilteredProducts(products);
        }
    }, [category]);

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 capitalize">
                        {category ? `${category}'s Collection` : 'All Fragrances'}
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our sophisticated range of perfumes, designed to leave a lasting impression.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-500">No products found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Shop;
