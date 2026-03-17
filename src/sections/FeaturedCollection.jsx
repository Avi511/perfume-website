import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Midnight Bloom",
    desc: "Mysterious blend of dark rose and amber.",
    price: "$145.00",
    image: "/images/bottle2.png",
  },
  {
    id: 2,
    name: "Golden Dawn",
    desc: "A luminous mix of jasmine and soft neroli.",
    price: "$160.00",
    image: "/images/bottle1.png",
  },
  {
    id: 3,
    name: "Velvet Amber",
    desc: "Warm vanilla, rich amber and spiced oud.",
    price: "$185.00",
    image: "/images/bottle3.png",
  }
];

const FeaturedCollection = () => {
  return (
    <section className="py-32 bg-secondary border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20" data-aos="fade-up">
          <div>
            <span className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-3 block">Featured</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-accent">The Artisan Collection</h2>
          </div>
          <Link to="/shop" className="text-sm uppercase tracking-widest text-primary hidden md:flex items-center hover:opacity-80 transition-opacity mt-4 md:mt-0 font-medium group">
            View All <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] bg-dark relative overflow-hidden mb-6 border border-white/10 flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 z-10" />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="object-contain h-full w-full transform group-hover:scale-105 transition-transform duration-700 filter drop-shadow-2xl"
                />
              </div>

              {/* Text Info */}
              <div className="text-center">
                <h3 className="text-xl font-display text-accent mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-sm text-gray-400 mb-3 tracking-wide">{product.desc}</p>
                <p className="text-primary font-medium">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile View All */}
        <div className="mt-12 text-center md:hidden">
            <Link to="/shop" className="inline-block border border-primary text-primary px-8 py-3 uppercase tracking-widest text-xs font-medium">
                View All Collection
            </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
