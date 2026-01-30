import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#FCF5EE] via-[#FFC4C4]/20 to-[#FCF5EE]">
            <Navbar />
            <main className="pt-32 pb-16 max-w-[1400px] mx-auto px-4 md:px-8 flex-1">
                <Outlet />
                {children}
            </main>
           s <Footer />
        </div>
    );
};

export default MainLayout;
