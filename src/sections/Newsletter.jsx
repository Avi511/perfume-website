import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-12 border border-blue-100">
        <Mail size={48} className="mx-auto mb-6 text-blue-600" />
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Stay Updated
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Get exclusive offers, new scent releases, and fragrance tips delivered to your inbox.
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 focus:border-blue-600 focus:outline-none bg-white transition"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Subscribe
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
