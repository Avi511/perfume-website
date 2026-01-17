import React from "react";
import { motion } from "framer-motion";
import Button from "../components/common/Button";

// Use a public asset path (place your PNG at public/assets/perfumes/hero-perfume.png)
const HERO_IMG = "/assets/perfumes/hero-perfume.png";

const TrustedBadge = () => (
  <div className="inline-flex items-center gap-3 px-3 py-1 text-sm border border-gray-100 rounded-full bg-white/60 backdrop-blur">
    <div className="flex -space-x-2">
      <img src="/assets/banners/avatar-1.jpg" alt="u1" className="border-2 border-white rounded-full w-7 h-7" />
      <img src="/assets/banners/avatar-2.jpg" alt="u2" className="border-2 border-white rounded-full w-7 h-7" />
      <img src="/assets/banners/avatar-3.jpg" alt="u3" className="border-2 border-white rounded-full w-7 h-7" />
    </div>
    <span className="font-medium text-gray-700">Plus 25k Trusted users!</span>
  </div>
);

const ArrowCircle = () => (
  <div className="flex items-center justify-center w-12 h-12 text-white bg-black rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M7 7h10v10" />
    </svg>
  </div>
);

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-[#eef7fb] overflow-hidden">
      <div className="px-6 py-12 mx-auto max-w-7xl lg:px-8 lg:py-24">
        <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left content */}
          <div className="lg:col-span-6">
            <div className="mb-6">
              <TrustedBadge />
            </div>

            <h1 className="text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Discover your best <span className="block font-serif text-5xl italic sm:text-6xl lg:text-7xl">Perfume</span> at today
            </h1>

            <p className="max-w-xl mt-6 text-lg text-gray-600">
              Selecting a perfume is a personal journey. Consider your lifestyle, favorite scents, and the impression you want to leave.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <Button variant="black" ariaLabel="Explore Shop" className="pr-4">
                Explore Shop
              </Button>

              <button aria-label="Quick action" className="p-0">
                <ArrowCircle />
              </button>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative lg:col-span-6">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="absolute w-40 h-40 rounded-full pointer-events-none -left-8 -bottom-8 bg-white/40 blur-3xl" />
              <motion.img
                src={HERO_IMG}
                alt="Perfume bottle"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 object-contain w-full h-auto drop-shadow-2xl"
                style={{ transformOrigin: "center" }}
              />
              <div className="absolute p-3 text-sm text-gray-700 bg-white shadow-md -right-6 top-6 rounded-xl">
                "A scent that lingers."
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative quote in bottom-left */}
      <div className="absolute pointer-events-none left-6 bottom-6 opacity-30">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 7a4 4 0 0 1 4-4v4" />
          <path d="M17 7a4 4 0 0 1 4-4v4" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
