import React from 'react';
import HeroSection from '../features/home/components/HeroSection.jsx';
import Bar from '../features/home/components/Bar.jsx';
import ProductCard from '../features/products/components/ProductCard.jsx';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck } from 'lucide-react';

const Home = () => {
    const featuredProducts = products.filter(p => p.isBestSeller).slice(0, 3);

    return (
        <div className="bg-gray-50">
            <HeroSection />

            <Bar />

            {/* Featured Collection */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                            Best Sellers
                        </h2>
                        <p className="text-gray-600 max-w-xl">
                            Discover our most loved fragrances, curated just for you by our expert perfumers.
                        </p>
                    </div>
                    <Link
                        to="/shop"
                        className="hidden md:flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700 transition-colors"
                    >
                        View All Collection <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link
                        to="/shop"
                        className="inline-flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700 transition-colors"
                    >
                        View All Collection <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-[#001F2A] text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-rose-900/50">
                                <Truck size={32} />
                            </div>
                            <h3 className="text-xl font-serif font-bold mb-3">Free Worldwide Shipping</h3>
                            <p className="text-gray-400">On all orders over $150. We deliver luxury to your doorstep, wherever you are.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-rose-900/50">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="text-xl font-serif font-bold mb-3">Authenticity Guaranteed</h3>
                            <p className="text-gray-400">100% authentic fragrances directly from the world's most prestigious houses.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-rose-900/50">
                                <Star size={32} />
                            </div>
                            <h3 className="text-xl font-serif font-bold mb-3">5-Star Customer Service</h3>
                            <p className="text-gray-400">Our expert concierge team is here to help you find your perfect scent match.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
