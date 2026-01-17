import React from 'react';

const Solutions = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">Solutions</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif font-semibold mb-4">For Individuals</h2>
            <p className="text-gray-600 mb-4">Discover your signature scent with our personalized recommendation system. Find perfumes tailored to your preferences and lifestyle.</p>
            <button className="px-6 py-2 bg-black text-white rounded-full hover:opacity-90 transition">Learn More</button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif font-semibold mb-4">For Businesses</h2>
            <p className="text-gray-600 mb-4">Wholesale solutions and bulk ordering for boutiques and retail partners. White-label options available.</p>
            <button className="px-6 py-2 bg-black text-white rounded-full hover:opacity-90 transition">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
