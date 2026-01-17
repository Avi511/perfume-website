import React from 'react';
import { ShoppingBag, User, ChevronDown } from 'lucide-react';

const Navbar = () => {
    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <div className="bg-white/70 backdrop-blur-md rounded-full border border-white/50 px-8 py-3 flex items-center justify-between w-full max-w-7xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
                {/* Logo */}
                <div className="text-2xl font-serif font-bold tracking-tight text-gray-900 mr-12">
                    LuxeScents
                </div>

                {/* Center Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">Home</a>
                    <div className="flex items-center gap-1 cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors group">
                        Catalogue <ChevronDown size={14} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                    <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">Shop</a>
                    <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">Solutions</a>
                    <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">FAQ</a>
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-3 ml-auto">
                    <button className="p-2.5 hover:bg-white rounded-full transition-all duration-300 hover:shadow-sm">
                        <ShoppingBag size={20} className="text-gray-800" />
                    </button>

                    <button className="hidden sm:inline-block px-6 py-2.5 border border-gray-300 rounded-full text-sm font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300">
                        Register
                    </button>

                    <button className="p-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all shadow-md ml-1">
                        <User size={18} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
