import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-accent hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-display font-bold text-primary tracking-widest uppercase">
          LuxeScents
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-12">
          {['Home', 'Shop', 'About'].map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <Link 
                key={item} 
                to={path}
                className={`text-sm uppercase tracking-widest transition-colors ${isActive ? 'text-primary' : 'text-accent hover:text-primary'}`}
              >
                {item}
              </Link>
            )
          })}
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-6">
          <button className="text-accent hover:text-primary transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <button className="text-accent hover:text-primary transition-colors relative flex items-center gap-2">
            <ShoppingBag size={20} />
            <span className="hidden sm:inline text-xs uppercase tracking-wider">Cart (0)</span>
            <span className="sm:hidden absolute -top-2 -right-2 bg-primary text-secondary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-nav flex flex-col py-6 px-6 shadow-2xl lg:hidden border-t border-white/5"
          >
            {['Home', 'Shop', 'About'].map((item) => (
              <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="py-4 text-center text-lg uppercase tracking-widest text-accent hover:text-primary transition-colors border-b border-white/5 last:border-0"
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
