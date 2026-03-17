import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-400 py-16 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-display font-bold text-primary mb-6 tracking-widest uppercase">LuxeScents</h3>
          <p className="text-sm leading-relaxed mb-6 font-sans">
            Crafting the most exquisite and timeless fragrances since 1994. Unveil your signature scent.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-accent uppercase tracking-widest text-sm font-semibold mb-6">Shop</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/shop" className="hover:text-primary transition-colors">All Perfumes</Link></li>
            <li><Link to="/shop" className="hover:text-primary transition-colors">Bestsellers</Link></li>
            <li><Link to="/shop" className="hover:text-primary transition-colors">Gift Sets</Link></li>
            <li><Link to="/shop" className="hover:text-primary transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-accent uppercase tracking-widest text-sm font-semibold mb-6">About</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">Ingredients</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">Sustainability</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">Stores</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-accent uppercase tracking-widest text-sm font-semibold mb-6">Support</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
            <li><Link to="#" className="hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link to="#" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
            <li><Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-white/5 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} LuxeScents. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
