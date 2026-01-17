import React from 'react';
import { User, Heart, Settings, LogOut } from 'lucide-react';

const Profile = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-serif font-bold text-gray-900 mb-12">My Account</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                  <User size={40} className="text-gray-600" />
                </div>
                <h2 className="text-xl font-serif font-bold text-gray-900">John Doe</h2>
                <p className="text-sm text-gray-600">john@example.com</p>
              </div>

              <div className="space-y-3">
                <button className="w-full flex items-center gap-2 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition">
                  <Settings size={18} /> Settings
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition">
                  <Heart size={18} /> Wishlist
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition">
                  <LogOut size={18} /> Logout
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Profile Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" defaultValue="John" className="px-4 py-2 border border-gray-300 rounded-lg" />
                <input type="text" placeholder="Last Name" defaultValue="Doe" className="px-4 py-2 border border-gray-300 rounded-lg" />
                <input type="email" placeholder="Email" defaultValue="john@example.com" className="md:col-span-2 px-4 py-2 border border-gray-300 rounded-lg" />
                <input type="tel" placeholder="Phone" defaultValue="+1 (555) 123-4567" className="md:col-span-2 px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <button className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:opacity-90 transition">Save Changes</button>
            </div>

            {/* Order History */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Recent Orders</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold">Order #12345</p>
                    <p className="text-sm text-gray-600">Midnight Noir + Rose Elegance</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">$168</p>
                    <p className="text-sm text-gray-600">Jan 10, 2026</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold">Order #12344</p>
                    <p className="text-sm text-gray-600">Ocean Fresh</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">$75</p>
                    <p className="text-sm text-gray-600">Dec 28, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
