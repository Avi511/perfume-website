import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-serif font-bold text-gray-900 mb-12 text-center">Support Center</h1>

        {/* Quick Contact */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <Mail size={32} className="mx-auto mb-4 text-black" />
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-4">support@luxescents.com</p>
            <p className="text-sm text-gray-500">Response within 24 hours</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <Phone size={32} className="mx-auto mb-4 text-black" />
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600 mb-4">+1 (555) 123-4567</p>
            <p className="text-sm text-gray-500">Mon - Fri, 9am - 6pm EST</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <MessageCircle size={32} className="mx-auto mb-4 text-black" />
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Chat</h3>
            <p className="text-gray-600 mb-4">Live chat support</p>
            <p className="text-sm text-gray-500">Available 24/7</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black h-32"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin size={24} className="text-black flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <p className="text-gray-600">123 Fragrance Street<br/>New York, NY 10001<br/>United States</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={24} className="text-black flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail size={24} className="text-black flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">support@luxescents.com</p>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg mt-8">
                <p className="font-semibold text-gray-900 mb-2">Business Hours</p>
                <p className="text-gray-600 text-sm">
                  Monday - Friday: 9am - 6pm EST<br/>
                  Saturday: 10am - 4pm EST<br/>
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
