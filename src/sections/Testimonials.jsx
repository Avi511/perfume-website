import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Verified Buyer',
      rating: 5,
      text: 'Absolutely loved the Midnight Noir! The scent lasted all day and I received so many compliments. Highly recommend!',
      image: '/assets/banners/avatar-1.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Verified Buyer',
      rating: 5,
      text: 'Best perfume purchase I\'ve made. The customer service team was incredibly helpful in finding the right scent.',
      image: '/assets/banners/avatar-2.jpg'
    },
    {
      id: 3,
      name: 'Emma Williams',
      role: 'Verified Buyer',
      rating: 5,
      text: 'The Rose Elegance is now my everyday perfume. Quality is premium and the scent is exactly what I was looking for.',
      image: '/assets/banners/avatar-3.jpg'
    },
  ];

  return (
    <section className="py-24 bg-linear-to-br from-gray-900 to-gray-800 text-white rounded-3xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold mb-4">Loved by 25k+ Customers</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real reviews from real perfume enthusiasts around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 hover:border-white/40 transition">
              <div className="flex items-center gap-4 mb-4">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm text-gray-300">{review.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-100 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
