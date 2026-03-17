import React, { useState } from 'react';
import { motion } from 'framer-motion';

const allProducts = [
  { id: 1, name: "Midnight Bloom", desc: "Mysterious blend of dark rose and amber.", price: "$145.00", image: "/images/bottle2.png", category: "floral" },
  { id: 2, name: "Golden Dawn", desc: "A luminous mix of jasmine and soft neroli.", price: "$160.00", image: "/images/bottle1.png", category: "fresh" },
  { id: 3, name: "Velvet Amber", desc: "Warm vanilla, rich amber and spiced oud.", price: "$185.00", image: "/images/bottle3.png", category: "woody" },
  { id: 4, name: "Oud Royale", desc: "Deep agarwood and smoky incense.", price: "$220.00", image: "/images/bottle2.png", category: "woody" },
  { id: 5, name: "Ivory Musk", desc: "Clean white musk with a hint of pear.", price: "$130.00", image: "/images/bottle1.png", category: "fresh" },
  { id: 6, name: "Crimson Silk", desc: "Spiced cherry, saffron, and leather.", price: "$175.00", image: "/images/bottle3.png", category: "oriental" }
];

const categories = ["All", "Floral", "Woody", "Fresh", "Oriental"];

const Shop = () => {
  const [filter, setFilter] = useState("All");

  const filteredProducts = filter === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-in">
          <h1 className="text-5xl md:text-6xl font-display font-medium text-accent mb-4">Our Perfumes</h1>
          <p className="text-gray-400 font-sans max-w-2xl mx-auto text-lg font-light">
            Indulge in our masterfully crafted collection of signature scents.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 uppercase tracking-widest text-xs font-semibold transition-all duration-300 border ${
                filter === cat 
                  ? 'bg-primary text-dark border-primary' 
                  : 'bg-transparent text-gray-400 border-white/10 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProducts.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-secondary relative overflow-hidden mb-6 border border-white/5 flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 z-10" />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="object-contain h-full w-full transform group-hover:scale-105 transition-transform duration-700 filter drop-shadow-xl"
                />
                
                {/* Quick Add Button */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 w-[80%]">
                  <button className="w-full bg-primary text-dark py-3 text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-dark transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-display text-accent mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-primary font-medium">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
