import React from 'react';

const About = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Intro */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="lg:w-1/2 order-2 lg:order-1" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-display font-medium text-accent mb-8 leading-tight">The Art of <br /> <span className="text-primary italic">French Haute Parfumerie</span></h1>
            <div className="space-y-6 text-gray-400 font-sans tracking-wide leading-relaxed font-light">
              <p>
                Founded in Grasse in 1994, LuxeScents was born from an unyielding passion 
                to capture the elusive beauty of nature in a bottle. What began as a small 
                atelier has blossomed into a globally revered maison of luxury fragrance.
              </p>
              <p>
                Our master perfumers approach each creation not merely as a scent, but as 
                a liquid emotion. We source the rarest, most ethically harvested raw materials 
                from across the world—from the delicate centifolia roses of our own fields 
                to wild-harvested oud from the depths of Southeast Asia.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 w-full" data-aos="fade-left">
            <div className="aspect-square bg-secondary relative overflow-hidden flex items-center justify-center p-12 border border-white/5">
              <img src="/images/bottle1.png" alt="Perfume Craftsmanship" className="w-[80%] transform rotate-3 drop-shadow-2xl" />
              <div className="absolute inset-0 bg-primary/5"></div>
            </div>
          </div>
        </div>

        {/* Stats/Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-white/5 py-16 mb-32">
          <div className="text-center" data-aos="fade-up" data-aos-delay="0">
            <span className="text-5xl font-display text-primary block mb-4">1994</span>
            <h4 className="text-accent uppercase tracking-widest text-xs font-semibold mb-2">Year Founded</h4>
            <p className="text-gray-500 text-sm">Three decades of masterful craftsmanship</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="100">
            <span className="text-5xl font-display text-primary block mb-4">100%</span>
            <h4 className="text-accent uppercase tracking-widest text-xs font-semibold mb-2">Vegan & Cruelty-Free</h4>
            <p className="text-gray-500 text-sm">Respect for all living beings and nature</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <span className="text-5xl font-display text-primary block mb-4">24mo</span>
            <h4 className="text-accent uppercase tracking-widest text-xs font-semibold mb-2">Maceration Process</h4>
            <p className="text-gray-500 text-sm">Aged to unparalleled perfection</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
