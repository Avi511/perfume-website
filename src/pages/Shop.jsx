import React from 'react';
import { useCart } from '../context/CartContext';

const Shop = () => {
    const { addToCart } = useCart();

    const products = [
        { id: 1, name: 'Midnight Noir', category: 'Men', price: 89, rating: 4.8 },
        { id: 2, name: 'Rose Elegance', category: 'Women', price: 79, rating: 4.9 },
        { id: 3, name: 'Ocean Fresh', category: 'Unisex', price: 75, rating: 4.7 },
        { id: 4, name: 'Amber Dream', category: 'Women', price: 85, rating: 4.8 },
        { id: 5, name: 'Citrus Burst', category: 'Men', price: 82, rating: 4.6 },
        { id: 6, name: 'Vanilla Mist', category: 'Unisex', price: 78, rating: 4.9 },
        { id: 7, name: 'Forest Moon', category: 'Men', price: 91, rating: 4.7 },
        { id: 8, name: 'Floral Paradise', category: 'Women', price: 87, rating: 5.0 },
    ];

    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Shop All Scents</h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600">Discover our complete collection of premium fragrances</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
                            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 h-64 flex items-center justify-center overflow-hidden">
                                <div className="w-32 h-32 bg-gradient-to-b from-blue-200 to-purple-200 rounded-full opacity-60"></div>
                            </div>
                            <div className="p-4 sm:p-6">
                                <p className="text-xs sm:text-sm text-gray-500 mb-2 font-medium">{product.category}</p>
                                <h3 className="text-lg sm:text-xl font-serif font-semibold text-gray-900 mb-2">{product.name}</h3>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-500">({product.rating})</span>
                                </div>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                                    <span className="text-xl sm:text-2xl font-bold text-gray-900">${product.price}</span>
                                    <button 
                                        onClick={() => addToCart(product)}
                                        className="w-full sm:w-auto px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition font-medium text-sm sm:text-base"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
