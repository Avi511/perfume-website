import React from 'react';
import { ShoppingBag, User, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
    const { cartCount } = useCart();
    return (
        <header className="fixed left-0 right-0 z-50 flex justify-center px-4 top-6">
            <div className="bg-white/70 backdrop-blur-md rounded-full border border-white/50 px-8 py-3 flex items-center justify-between w-full max-w-7xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
                {/* Logo */}
                <div className="mr-12 font-serif text-2xl font-bold tracking-tight text-gray-900">
                    LuxeScents
                </div>

                {/* Center Nav */}
                <nav className="items-center hidden gap-8 md:flex">
                    <a href="#" className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600">Home</a>
                    <div className="flex items-center gap-1 text-sm font-medium text-gray-900 transition-colors cursor-pointer hover:text-gray-600 group">
                        Catalogue <ChevronDown size={14} className="text-gray-400 transition-colors group-hover:text-gray-600" />
                    </div>
                    <a href="#" className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600">Shop</a>
                    <a href="#" className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600">Solutions</a>
                    <a href="#" className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600">FAQ</a>
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-3 ml-auto">
                    <a href="/cart" className="relative p-2.5 hover:bg-white rounded-full transition-all duration-300 hover:shadow-sm">
                        <ShoppingBag size={20} className="text-gray-800" />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </a>

                    <a href="/register" className="hidden sm:inline-block px-6 py-2.5 border border-gray-300 rounded-full text-sm font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300">
                        Register
                    </a>

                    <a href="/login" className="p-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all shadow-md ml-1">
                        <User size={18} />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
