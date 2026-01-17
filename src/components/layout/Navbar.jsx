import React, { useState } from 'react';
import { ShoppingBag, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
    const { cartCount } = useCart();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed left-0 right-0 z-50 flex justify-center px-4 top-6">
            <div className="bg-white/70 backdrop-blur-md rounded-full border border-white/50 px-4 sm:px-8 py-3 flex items-center justify-between w-full max-w-7xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
                {/* Logo */}
                <Link to="/" className="mr-4 font-serif text-lg font-bold tracking-tight text-gray-900 transition sm:mr-12 sm:text-2xl hover:text-gray-600">
                    LuxeScents
                </Link>

                {/* Center Nav - Desktop */}
                <nav className="items-center hidden gap-6 lg:gap-8 md:flex">
                    <Link to="/" className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600">Home</Link>
                    <Link to="/shop" className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600">Shop</Link>
                    <Link to="/solutions" className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600">Solutions</Link>
                    <Link to="/about" className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600">About</Link>
                    <Link to="/blog" className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600">Blog</Link>
                    <Link to="/faq" className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600">FAQ</Link>
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-2 ml-auto sm:gap-3">
                    <Link to="/cart" className="relative p-2.5 hover:bg-white rounded-full transition-all duration-300 hover:shadow-sm">
                        <ShoppingBag size={20} className="text-gray-800" />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    <Link to="/register" className="hidden sm:inline-block px-4 sm:px-6 py-2.5 border border-gray-300 rounded-full text-xs sm:text-sm font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300">
                        Register
                    </Link>

                    <Link to="/login" className="p-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all shadow-md">
                        <User size={18} />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2.5 hover:bg-white rounded-full transition-all duration-300"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X size={20} className="text-gray-800" />
                        ) : (
                            <Menu size={20} className="text-gray-800" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute z-40 border shadow-lg top-20 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl border-white/50 md:hidden">
                    <nav className="flex flex-col p-6 space-y-4">
                        <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-gray-900 transition hover:text-gray-600">Home</Link>
                        <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-gray-900 transition hover:text-gray-600">Shop</Link>
                        <Link to="/solutions" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-gray-900 transition hover:text-gray-600">Solutions</Link>
                        <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-gray-900 transition hover:text-gray-600">About</Link>
                        <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-gray-900 transition hover:text-gray-600">Blog</Link>
                        <Link to="/faq" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-gray-900 transition hover:text-gray-600">FAQ</Link>
                        <Link to="/press" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-gray-900 transition hover:text-gray-600">Press</Link>
                        <Link to="/support" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-gray-900 transition hover:text-gray-600">Support</Link>
                        <Link to="/profile" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-gray-900 transition hover:text-gray-600">Profile</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
