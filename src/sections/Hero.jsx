import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-dark/80" />

      {/* Hero Content */}
      <div className="container relative z-10 px-6 lg:px-12 mx-auto text-center flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary tracking-[0.3em] uppercase text-sm font-semibold mb-6"
        >
          Signature Collection
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-accent leading-tight mb-8"
        >
          Elegance In <br className="hidden md:block" /> Every Drop
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 font-sans max-w-xl text-lg md:text-xl font-light mb-12"
        >
          Discover a symphony of exquisite aromas crafted to unveil your true essence. Step into a world of timeless luxury.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/shop" className="inline-block border border-primary text-primary px-10 py-4 uppercase tracking-widest text-sm hover:bg-primary hover:text-dark transition-all duration-300 font-semibold shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]">
            Explore Collection
          </Link>
        </motion.div>
      </div>

      {/* Floating particles or decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="w-64 h-64 bg-primary/20 rounded-full blur-[100px] absolute top-1/4 left-1/4 animate-puff-slow" />
        <div className="w-96 h-96 bg-primary/10 rounded-full blur-[120px] absolute bottom-1/4 right-1/4 animate-puff-slow" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default Hero;
