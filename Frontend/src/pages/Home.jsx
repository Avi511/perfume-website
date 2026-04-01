import { useState, useEffect } from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import perfumeImg from '../assets/luxury_perfume.png';
import perfumeVideo from '../assets/video_02.mp4';
import aboutImg from '../assets/about_elements.png';
import contactImg from '../assets/contact_luxury.png';

const products = [
  {
    id: 1,
    name: "Midnight Silk",
    price: 120,
    rating: 5,
    category: "Parfum",
    image: perfumeImg
  },
  {
    id: 2,
    name: "Amber Glow",
    price: 95,
    rating: 4,
    category: "Eau de Toilette",
    image: perfumeImg
  },
  {
    id: 3,
    name: "Velvet Oud",
    price: 180,
    rating: 5,
    category: "Extrait de Parfum",
    image: perfumeImg
  },
  {
    id: 4,
    name: "Velvet Oud",
    price: 2000,
    category: "Parfum",
    image: perfumeImg
  },
  {
    id: 5,
    name: "Velvet Oud",
    price: 2000,
    category: "Parfum",
    image: perfumeImg
  },
  {
    id: 6,
    name: "Velvet Oud",
    price: 2000,
    category: "Parfum",
    image: perfumeImg
  },
  {
    id: 7,
    name: "Velvet Oud",
    price: 2000,
    category: "Parfum",
    image: perfumeImg
  },
  {
    id: 8,
    name: "Velvet Oud",
    price: 2000,
    category: "Parfum",
    image: perfumeImg
  },
  {
    id: 9,
    name: "Velvet Oud",
    price: 2000,
    category: "Parfum",
    image: perfumeImg
  },
  {
    id: 10,
    name: "Velvet Oud",
    price: 2000,
    category: "Parfum",
    image: perfumeImg
  }
];

function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex flex-col items-center justify-center bg-black overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-[100vh] object-cover opacity-60 transition-opacity duration-1000"
        >
          <source src={perfumeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 text-center px-4 flex flex-col items-center gap-8">
          <div>
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 animate-fade-in tracking-tighter">Élan Fragrance</h1>
            <p className="text-lg md:text-xl text-gray-300 tracking-[0.3em] uppercase">
              The Essence of Timeless Luxury
            </p>
          </div>
          <Button className="mt-4 scale-120">Explore the Scents</Button>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Curated Collection</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Explore our masterfully crafted scents, each designed to evoke a unique memory and leave a lasting impression.
            </p>
          </div>
          <Button className="!text-black !glass-button border-black/20 hover:!text-black scale-110">Shop All</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-10">
          {products.slice(0, 4).map(product => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Premium About Section */}
      <section className="py-32 px-4 bg-zinc-50 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          {/* Image Side with Decorative Elements */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl skew-y-1 transition-transform duration-700">
              <img
                src={aboutImg}
                alt="Finest Ingredients"
                className="w-full h-[600px] object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              />
            </div>
            {/* Decorative Floating Card */}
            <div className="absolute -bottom-10 -right-10 z-20 hidden md:block bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-black/5 max-w-[280px]">
              <p className="text-amber-600 font-serif text-4xl mb-2">12+</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
                Months of masterfully crafting each unique scent profile.
              </p>
            </div>
            {/* Background geometric shape */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl -z-10" />
          </div>

          {/* Text Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-amber-600">Our Essence</span>
              <h2 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight">The Art of <br />Invisible Elegance</h2>
            </div>

            <div className="flex flex-col gap-6 text-gray-600 text-lg leading-relaxed">
              <p>
                At <span className="text-black font-medium">Élan Fragrance</span>, we believe fragrance is more than a scent it’s a silent language, a personal identity that lingers long after you've left the room.
              </p>
              <p className="text-base text-gray-500">
                Our master perfumers bridge the gap between tradition and modern luxury, sourcing the rarest raw materials from across the globe to curate an experience that is as unique as you are.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mt-4">
              <Button to="/about" className="!bg-black !text-white !px-10 hover:!bg-amber-700 transition-colors">Read Our Story </Button>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-gray-300" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Est. 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Contact Section */}
      <section className="py-32 px-4 bg-white relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-zinc-50 -z-0" />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-24">
          {/* Left: Contact Info & Form */}
          <div className="w-full lg:w-1/2 flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-amber-600">Contact Us</span>
              <h2 className="text-5xl font-serif text-gray-900 leading-tight">We’d love to hear <br />from you.</h2>
              <p className="text-gray-500 text-lg">Whether you have a question about our scents, a special request, or just want to say hello, our team of experts is here to assist you.</p>
            </div>

            {/* Contact Form */}
            <form className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2 border-b border-gray-200 py-2 focus-within:border-amber-600 transition-colors">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Name</label>
                  <input type="text" placeholder="YOUR NAME" className="bg-transparent border-none outline-none text-sm placeholder:text-gray-300 focus:ring-0" />
                </div>
                <div className="flex flex-col gap-2 border-b border-gray-200 py-2 focus-within:border-amber-600 transition-colors">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email</label>
                  <input type="email" placeholder="EMAIL ADDRESS" className="bg-transparent border-none outline-none text-sm placeholder:text-gray-300 focus:ring-0" />
                </div>
              </div>
              <div className="flex flex-col gap-2 border-b border-gray-200 py-2 focus-within:border-amber-600 transition-colors">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Message</label>
                <textarea placeholder="HOW CAN WE HELP?" rows="3" className="bg-transparent border-none outline-none text-sm placeholder:text-gray-300 focus:ring-0 resize-none"></textarea>
              </div>
              <Button className="!bg-black !text-white !w-full md:!w-max !px-12 py-4">Send Message</Button>
            </form>

            {/* Direct Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-4 pt-12 border-t border-gray-100">
              <div className="flex flex-col gap-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-black">Visit Our Showroom</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  No. 12, Ocean Crest Residences,<br />
                  Galle Face Terrace, Colombo 03,<br />
                  Sri Lanka
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-black">Get In Touch</h4>
                <p className="text-sm text-gray-500 font-light">
                  elanFragrance2026@gmail.com<br />
                  +94 77 659 9189
                </p>
              </div>
            </div>
          </div>

          {/* Right: Premium Imagery */}
          <div className="hidden lg:block w-1/2 relative">
            <div className="h-full min-h-[600px] rounded-2xl overflow-hidden shadow-2xl skew-y-[-1deg]">
              <img src={contactImg} alt="Luxury Showroom" className="w-full h-full object-cover" />
            </div>
            {/* Visual Accent */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-600/5 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;