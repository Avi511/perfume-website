import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-linear-to-r from-black via-[#001F2A] to-[#004359] shadow-cyan-50 fixed w-full z-50 border-b border-gray-700">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to='/'>
              <span className="font-serif text-2xl font-bold text-white">
                ParfumÉlégant
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="items-center hidden space-x-8 md:flex">
            <Link to="/shop" className="font-medium text-gray-200 transition duration-300 hover:text-white hover:scale-105">
              Fragrances
            </Link>
            <Link to="/shop?category=men" className="font-medium text-gray-200 transition duration-300 hover:text-white hover:scale-105">
              For Men
            </Link>
            <Link to="/shop?category=women" className="font-medium text-gray-200 transition duration-300 hover:text-white hover:scale-105">
              For Women
            </Link>
            <Link to="/collections" className="font-medium text-gray-200 transition duration-300 hover:text-white hover:scale-105">
              Collections
            </Link>
            <Link to="/about" className="font-medium text-gray-200 transition duration-300 hover:text-white hover:scale-105">
              About
            </Link>
          </div>

          {/* Right side icons */}
          <div className="items-center hidden space-x-6 md:flex">
            <button className="text-gray-200 transition duration-300 hover:text-white hover:scale-110">
              <Search size={20} />
            </button>
            <button className="text-gray-200 transition duration-300 hover:text-white hover:scale-110">
              <User size={20} />
            </button>
            <button className="relative text-gray-200 transition duration-300 hover:text-white hover:scale-110">
              <ShoppingBag size={20} />
              {/* <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -top-2 -right-2 bg-rose-500">
                3
              </span> */}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button className="text-gray-200">
              <ShoppingBag size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 transition duration-300 focus:outline-none hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gradient-to-b from-[#001F2A] to-[#004359] shadow-lg z-50 border-t border-gray-700">
            <div className="px-4 pt-2 pb-4 space-y-3">
              <Link to="/shop" className="block py-3 font-medium text-gray-200 transition-all duration-300 border-b border-gray-700 hover:text-white hover:pl-2">
                Fragrances
              </Link>
              <Link to="/shop?category=men" className="block py-3 font-medium text-gray-200 transition-all duration-300 border-b border-gray-700 hover:text-white hover:pl-2">
                For Men
              </Link>
              <Link to="/shop?category=women" className="block py-3 font-medium text-gray-200 transition-all duration-300 border-b border-gray-700 hover:text-white hover:pl-2">
                For Women
              </Link>
              <Link to="/collections" className="block py-3 font-medium text-gray-200 transition-all duration-300 border-b border-gray-700 hover:text-white hover:pl-2">
                Collections
              </Link>
              <Link to="/about" className="block py-3 font-medium text-gray-200 transition-all duration-300 border-b border-gray-700 hover:text-white hover:pl-2">
                About
              </Link>
              <div className="flex justify-center pt-4 pb-2 space-x-6">
                <button className="text-gray-200 transition duration-300 hover:text-white hover:scale-110">
                  <Search size={22} />
                </button>
                <button className="text-gray-200 transition duration-300 hover:text-white hover:scale-110">
                  <User size={22} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;