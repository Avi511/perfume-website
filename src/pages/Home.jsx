import React from 'react';
import Hero from '../sections/Hero';
import FeaturedCollection from '../sections/FeaturedCollection';
import Testimonials from '../sections/Testimonials';
import Newsletter from '../sections/Newsletter';

const Home = () => {
  return (
    <div className="bg-dark min-h-screen">
      <Hero />
      <FeaturedCollection />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
