import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="bg-gradient-to-br from-white via-blue-50/30 to-[#eef7fb] min-h-screen flex flex-col">
            <Navbar />
            <main className="pt-32 pb-16 max-w-[1400px] mx-auto px-4 md:px-8 flex-1">
                <Outlet />
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
