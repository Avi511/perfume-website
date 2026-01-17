import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 mb-8">
            LuxeScents was founded on a simple belief: everyone deserves to experience the luxury and elegance of premium fragrances.
          </p>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To curate and deliver the world's finest fragrances, making luxury accessible to everyone. We believe that a great fragrance is more than just a scent—it's a statement of who you are.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the world's most trusted destination for premium fragrances, known for exceptional quality, customer service, and a commitment to sustainability.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Award size={40} className="mx-auto mb-4 text-black" />
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">Only the finest, authentic fragrances</p>
            </div>
            <div className="text-center">
              <Heart size={40} className="mx-auto mb-4 text-black" />
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Passion</h3>
              <p className="text-gray-600">Dedicated to fragrance perfection</p>
            </div>
            <div className="text-center">
              <Users size={40} className="mx-auto mb-4 text-black" />
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">Building a global scent community</p>
            </div>
            <div className="text-center">
              <Globe size={40} className="mx-auto mb-4 text-black" />
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">Caring for our planet</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sophie Laurent', role: 'Founder & CEO' },
              { name: 'Marcus Williams', role: 'Chief Perfumer' },
              { name: 'Emma Chen', role: 'Head of Operations' }
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-serif font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-black mb-2">25K+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-black mb-2">150+</p>
              <p className="text-gray-600">Fragrances</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-black mb-2">75</p>
              <p className="text-gray-600">Countries</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-black mb-2">10 Yrs</p>
              <p className="text-gray-600">In Business</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
