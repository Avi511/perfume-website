import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  // Placeholder for cart count - in real app, get from context or prop
  const cartCount = 0;

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center px-6 transition-all duration-300 ${
          isScrolled ? 'bg-[#0A0A0A] border-b border-[#C9A84C] backdrop-blur-sm' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Desktop Layout */}
        <div className="items-center justify-between hidden w-full md:flex">
          {/* Logo */}
          <Link to="/" className="text-[#C9A84C] font-['Cormorant_Garamond'] text-2xl">
            ✦ LuxeScents
          </Link>

          {/* Nav Links */}
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                <Link
                  to={link.path}
                  className={`text-[#F5F0E8] font-['Jost'] text-sm uppercase tracking-[2px] relative pb-1 ${
                    isActive(link.path) ? 'after:content-["•"] after:absolute after:-bottom-2 after:left-1/2 after:transform after:-translate-x-1/2 after:text-[#C9A84C] after:text-lg' : ''
                  }`}
                >
                  {link.name}
                </Link>
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-[#C9A84C] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={() => setIsSearchOpen(true)}
              className="text-[#F5F0E8] hover:text-[#C9A84C] transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Search size={20} />
            </motion.button>

            <Link to="/wishlist">
              <motion.div
                className="text-[#F5F0E8] hover:text-[#C9A84C] transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Heart size={20} />
              </motion.div>
            </Link>

            <div className="relative">
              <Link to="/cart">
                <motion.div
                  className="text-[#F5F0E8] hover:text-[#C9A84C] transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <ShoppingBag size={20} />
                </motion.div>
              </Link>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C9A84C] text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </div>

            <motion.button
              className="border border-[#C9A84C] text-[#C9A84C] px-4 py-2 rounded hover:bg-[#C9A84C] hover:text-black transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Login
            </motion.button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex items-center justify-between w-full md:hidden">
          <Link to="/" className="text-[#C9A84C] font-['Cormorant_Garamond'] text-xl">
            ✦ LuxeScents
          </Link>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Link to="/cart">
                <ShoppingBag size={20} className="text-[#F5F0E8]" />
              </Link>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C9A84C] text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </div>

            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#F5F0E8]"
              whileHover={{ scale: 1.1 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-full max-w-lg mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="text"
                placeholder="Search fragrances..."
                className="w-full bg-transparent text-[#F5F0E8] text-3xl border-b-2 border-[#C9A84C] focus:outline-none focus:border-[#C9A84C] pb-2 placeholder:text-[#F5F0E8]/70"
                autoFocus
              />
            </motion.div>

            <motion.button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-6 right-6 text-[#F5F0E8] hover:text-[#C9A84C] transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <X size={24} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-80 bg-[#111] z-40 flex flex-col shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="flex-1 p-6">
              <div className="mt-20 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block text-[#F5F0E8] font-['Jost'] text-lg uppercase tracking-wider pl-4 border-l-4 transition-colors ${
                      isActive(link.path) ? 'border-[#C9A84C] text-[#C9A84C]' : 'border-transparent hover:border-[#C9A84C]/50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-6 border-t border-[#C9A84C]/30">
              <button className="w-full border border-[#C9A84C] text-[#C9A84C] py-3 rounded mb-4 hover:bg-[#C9A84C] hover:text-black transition-colors font-['Jost'] uppercase tracking-wider">
                Login
              </button>

              <div className="flex justify-center space-x-6">
                {/* Social icons placeholders */}
                <motion.div
                  className="text-[#F5F0E8] hover:text-[#C9A84C] transition-colors cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                >
                  FB
                </motion.div>
                <motion.div
                  className="text-[#F5F0E8] hover:text-[#C9A84C] transition-colors cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                >
                  IG
                </motion.div>
                <motion.div
                  className="text-[#F5F0E8] hover:text-[#C9A84C] transition-colors cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                >
                  TW
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
