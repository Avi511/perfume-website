import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-[#001F2A] to-[#004359] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-4">ParfumÉlégant</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Crafting exquisite fragrances that tell your story. Experience the art of perfumery with our premium collections.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300 hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300 hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300 hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300 hover:scale-110">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products?sort=new" className="text-gray-300 hover:text-white transition duration-300 hover:pl-2 block">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/products?sort=best_selling" className="text-gray-300 hover:text-white transition duration-300 hover:pl-2 block">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link to="/collections/seasonal" className="text-gray-300 hover:text-white transition duration-300 hover:pl-2 block">
                  Seasonal Scents
                </Link>
              </li>
              <li>
                <Link to="/collections/gifts" className="text-gray-300 hover:text-white transition duration-300 hover:pl-2 block">
                  Gift Sets
                </Link>
              </li>
              <li>
                <Link to="/collections/limited" className="text-gray-300 hover:text-white transition duration-300 hover:pl-2 block">
                  Limited Editions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition duration-300 hover:pl-2 block">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-white transition duration-300 hover:pl-2 block">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-white transition duration-300 hover:pl-2 block">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition duration-300 hover:pl-2 block">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-gray-300 hover:text-white transition duration-300 hover:pl-2 block">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-gray-300 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Fragrance Avenue<br />
                  Paris, France 75001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-gray-300 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-300 flex-shrink-0" />
                <span className="text-gray-300">contact@parfumelegant.com</span>
              </div>
            </div>
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-gray-800 text-white placeholder-gray-400 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-rose-500 w-full"
                />
                <button className="bg-rose-600 hover:bg-rose-700 px-4 py-2 rounded-r-lg transition duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 ParfumÉlégant. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/privacy" className="text-gray-300 hover:text-white transition duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-300 hover:text-white transition duration-300">
                Cookie Policy
              </Link>
            </div>
            <div className="flex items-center text-gray-300 text-sm mt-4 md:mt-0">
              Made with <Heart size={16} className="mx-1 text-rose-500" /> for fragrance lovers
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;