import React from 'react';
import { Heart } from 'lucide-react';

const FeaturedCollection = () => {
  const perfumes = [
    {
      id: 1,
      name: 'Midnight Noir',
      category: 'Men',
      price: '$89',
      image: '/assets/perfumes/perfume-1.png',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Rose Elegance',
      category: 'Women',
      price: '$79',
      image: '/assets/perfumes/perfume-2.png',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Ocean Fresh',
      category: 'Unisex',
      price: '$75',
      image: '/assets/perfumes/perfume-3.png',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Amber Dream',
      category: 'Women',
      price: '$85',
      image: '/assets/perfumes/perfume-4.png',
      rating: 4.8
    },
  ];

  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4">Featured Collection</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Handpicked scents for every mood, personality, and occasion. Discover the perfect fragrance that speaks to you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {perfumes.map((perfume) => (
          <div key={perfume.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 h-64 flex items-center justify-center overflow-hidden">
              <img
                src={perfume.image}
                alt={perfume.name}
                className="h-48 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition">
                <Heart size={20} className="text-gray-800" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2 font-medium">{perfume.category}</p>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">{perfume.name}</h3>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(perfume.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">({perfume.rating})</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">{perfume.price}</span>
                <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition font-medium">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-8 py-4 border-2 border-black text-black rounded-full font-semibold hover:bg-black hover:text-white transition duration-300">
          View All Collections
        </button>
      </div>
    </section>
  );
};

export default FeaturedCollection;
