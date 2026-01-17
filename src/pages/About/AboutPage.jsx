import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div>
      <div className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 mb-8">
            LuxeScents was founded on a simple belief: everyone deserves to experience the luxury and elegance of premium fragrances.
          </p>
        </div>
      </div>

      <div className="py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To curate and deliver the world's finest fragrances, making luxury accessible to everyone.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the world's most trusted destination for premium fragrances.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="text-center">
              <Award size={40} className="mx-auto mb-4 text-black" />
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">Only the finest, authentic fragrances</p>
            </div>
            <div className="text-center">
              <Users size={40} className="mx-auto mb-4 text-black" />
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">Connecting fragrance lovers worldwide</p>
            </div>
            <div className="text-center">
              <Globe size={40} className="mx-auto mb-4 text-black" />
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Global</h3>
              <p className="text-gray-600">Sourced from around the world</p>
            </div>
            <div className="text-center">
              <Heart size={40} className="mx-auto mb-4 text-black" />
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Passion</h3>
              <p className="text-gray-600">We love what we do</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
