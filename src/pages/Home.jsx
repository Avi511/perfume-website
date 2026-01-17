import React from 'react';
import Hero from '../components/sections/Hero';

const Home = () => {
    return (
        <div className="space-y-32">
            <Hero />
            {/* Placeholder for future sections */}
            <section className="text-center py-20">
                <h2 className="text-3xl font-serif text-gray-900 mb-4">Featured Collection</h2>
                <p className="text-gray-500">Curated scents for every occasion.</p>
            </section>
        </div>
    );
};

export default Home;
