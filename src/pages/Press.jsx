import React from 'react';
import { Newspaper, Award, MapPin } from 'lucide-react';

const Press = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-serif font-bold text-gray-900 mb-8 text-center">Press & Media</h1>
        
        {/* Press Kit */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8 mb-12 border border-blue-100">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Award size={32} /> Press Kit
          </h2>
          <p className="text-gray-700 mb-6">Download our official press kit with brand assets, company information, and high-resolution logos.</p>
          <button className="px-8 py-3 bg-black text-white rounded-full hover:opacity-90 transition font-semibold">Download Press Kit</button>
        </div>

        {/* Latest News */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Latest News</h2>
          <div className="space-y-6">
            <article className="border-l-4 border-black pl-6 py-4">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">LuxeScents Wins 2026 Fragrance Excellence Award</h3>
              <p className="text-gray-600 mb-3">Our Midnight Noir collection has been recognized as the year's finest fragrance line by International Perfume Critics.</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><Newspaper size={16} /> Press Release</span>
                <span>January 15, 2026</span>
              </div>
            </article>

            <article className="border-l-4 border-black pl-6 py-4">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">New Flagship Store Opens in Paris</h3>
              <p className="text-gray-600 mb-3">We're thrilled to announce the opening of our first European flagship store in the heart of Paris.</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><Newspaper size={16} /> News</span>
                <span>January 10, 2026</span>
              </div>
            </article>

            <article className="border-l-4 border-black pl-6 py-4">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">LuxeScents Expands Global Presence</h3>
              <p className="text-gray-600 mb-3">We now ship to 75 countries worldwide, bringing premium fragrances to fragrance lovers everywhere.</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><Newspaper size={16} /> Announcement</span>
                <span>January 5, 2026</span>
              </div>
            </article>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Media Contact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-semibold text-gray-900 mb-2">Press Inquiries</p>
              <p className="text-gray-600 mb-4">press@luxescents.com</p>
              <p className="font-semibold text-gray-900 mb-2">Phone</p>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">Location</p>
              <p className="text-gray-600 flex items-center gap-2">
                <MapPin size={18} />
                123 Fragrance Street, NY 10001
              </p>
              <p className="font-semibold text-gray-900 mt-4 mb-2">Hours</p>
              <p className="text-gray-600">Mon - Fri: 9am - 6pm EST</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Press;
