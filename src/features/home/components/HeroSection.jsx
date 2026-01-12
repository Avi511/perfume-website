import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="flex items-center py-20 min-h-screen bg-gradient-to-r from-black via-[#001F2A] to-[#004359] lg:pb-0">
      {/* Hero Content Container */}
      <div className="w-full max-w-6xl mx-2 border shadow-2xl lg:mx-auto bg-white/95 backdrop-blur-sm rounded-3xl border-white/20">
        <div className="flex flex-col items-center justify-between gap-8 p-8 lg:p-12 lg:flex-row">

          {/* Left Content */}
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <div className="mb-8">
              {/* Badge */}
              <div
                className="inline-flex items-center px-4 py-2 mb-6 bg-gray-100 rounded-full"
                data-aos="fade-down"
                data-aos-delay="200"
              >
              </div>

              <h1
                className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl mt-[-80px]"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                Discover Your <span className="text-rose-600">Signature</span> Scent
              </h1>
              <p
                className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed text-gray-600 md:text-xl lg:mx-0"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                Experience the art of perfumery with our exclusive collection of luxury fragrances,
                meticulously crafted to capture your unique essence and elevate your presence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col justify-center gap-4 mb-12 sm:flex-row lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Link to="/shop" className="px-8 py-4 font-semibold text-white transition duration-300 transform bg-gray-900 rounded-lg hover:bg-gray-800 hover:scale-105 inline-block text-center">
                Shop Collection
              </Link>
              <Link to="/about" className="px-8 py-4 font-semibold text-gray-700 transition duration-300 transform border-2 border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 hover:scale-105 inline-block text-center">
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div
              className="grid max-w-md grid-cols-3 gap-8 mx-auto lg:mx-0"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900 md:text-3xl">50+</div>
                <div className="text-sm text-gray-500">Elite Scents</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900 md:text-3xl">5K+</div>
                <div className="text-sm text-gray-500">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900 md:text-3xl">5★</div>
                <div className="text-sm text-gray-500">Ratings</div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative flex items-center justify-center">
              {/* Main Perfume Image Container */}
              <div
                className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[500px]"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <img
                  src="/assets/perfumes/one.jpg"
                  alt="Premium Perfume Bottle"
                  className="object-contain w-full h-full rounded-lg"
                />

                {/* New Arrival Badge - Top */}
                <div
                  className="absolute px-4 py-2 rounded-full shadow-lg -top-2 -right-4 bg-white/95 backdrop-blur-sm"
                  data-aos="fade-left"
                  data-aos-delay="700"
                >
                  <span className="text-sm font-bold text-gray-800">New Arrival</span>
                </div>

                {/* Limited Edition Badge - Bottom */}
                <div
                  className="absolute px-4 py-2 rounded-full shadow-lg -bottom-2 -left-4 bg-gradient-to-r from-rose-600 to-rose-800"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <span className="text-sm font-bold text-white">Limited Edition</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;