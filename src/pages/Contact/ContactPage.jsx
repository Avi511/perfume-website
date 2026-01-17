import React from 'react';

const ContactPage = () => {
  return (
    <div className="py-20">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">Contact Us</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Name</label>
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
            <input type="email" placeholder="your@email.com" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
            <textarea placeholder="Your message" className="w-full px-4 py-2 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-black"></textarea>
          </div>
          <button className="w-full bg-black text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
