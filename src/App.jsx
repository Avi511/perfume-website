import React from 'react'
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <div className="pt-[70px]">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center bg-gradient-to-b from-[#0A0A0A] to-[#111]">
          <div className="text-center text-[#F5F0E8]">
            <h1 className="text-6xl font-['Cormorant_Garamond'] mb-4">Welcome to LuxeScents</h1>
            <p className="text-xl font-['Jost']">Discover the finest fragrances</p>
          </div>
        </section>

        {/* Content to enable scrolling */}
        <section className="h-screen flex items-center justify-center bg-[#111]">
          <div className="text-center text-[#F5F0E8]">
            <h2 className="text-4xl font-['Cormorant_Garamond'] mb-4">Our Collection</h2>
            <p className="text-lg font-['Jost']">Premium perfumes for every occasion</p>
          </div>
        </section>

        <section className="h-screen flex items-center justify-center bg-[#0A0A0A]">
          <div className="text-center text-[#F5F0E8]">
            <h2 className="text-4xl font-['Cormorant_Garamond'] mb-4">About Us</h2>
            <p className="text-lg font-['Jost']">Crafting luxury scents since 2020</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
