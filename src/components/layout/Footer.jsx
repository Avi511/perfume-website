import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary py-16 border-t border-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-secondary mb-4">LuxeScents</h3>
            <p className="text-sm leading-relaxed">
              Discover your signature scent. Premium perfumes crafted for those with discerning taste.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-secondary font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-secondary transition">About Us</Link></li>
              <li><a href="#" className="hover:text-secondary transition">Careers</a></li>
              <li><Link to="/blog" className="hover:text-secondary transition">Blog</Link></li>
              <li><Link to="/press" className="hover:text-secondary transition">Press</Link></li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-secondary font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-secondary transition">All Scents</Link></li>
              <li><Link to="/solutions" className="hover:text-secondary transition">Our Solutions</Link></li>
              <li><a href="#" className="hover:text-secondary transition">Women's Perfumes</a></li>
              <li><Link to="/shop" className="hover:text-secondary transition">Collections</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-secondary font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/support" className="hover:text-secondary transition">Help Center</Link></li>
              <li><Link to="/support" className="hover:text-secondary transition">Contact Us</Link></li>
              <li><a href="#" className="hover:text-secondary transition">Returns</a></li>
              <li><Link to="/faq" className="hover:text-secondary transition">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-light">&copy; 2026 LuxeScents. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-light hover:text-secondary transition">Privacy</a>
            <a href="#" className="text-light hover:text-secondary transition">Terms</a>
            <a href="#" className="text-light hover:text-secondary transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
