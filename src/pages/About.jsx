import React from 'react';

const About = () => {
    return (
        <div className="bg-white min-h-screen py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">About ParfumÉlégant</h1>
                <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                    At ParfumÉlégant, we believe that fragrance is an art form—a silent language that speaks volumes about who you are. Founded in Paris in 2010, our mission has been to craft scents that evoke emotion, memory, and desire.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                    <div>
                        <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">Our Heritage</h2>
                        <p className="text-gray-600">
                            Rooted in traditional French perfumery, we blend age-old techniques with modern innovation. Each bottle is a testament to the dedication of our master perfumers.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">Sustainability</h2>
                        <p className="text-gray-600">
                            We are committed to the planet. Our ingredients are ethically sourced, and our packaging is 100% recyclable. Luxury doesn't have to cost the earth.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
