import React from 'react';
import Navbar from '../components/common/Navbar';

const MainLayout = ({ children }) => {
    return (
        <div className="bg-gradient-to-br from-white via-blue-50/30 to-[#eef7fb] min-h-screen">
            <Navbar />
            <main className="pt-32 pb-16 max-w-[1400px] mx-auto px-4 md:px-8">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
