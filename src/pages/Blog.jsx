import React from 'react';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'The Art of Choosing Your Signature Scent',
      excerpt: 'Discover how to find the perfect fragrance that matches your personality and lifestyle.',
      author: 'Sarah Bennett',
      date: 'Jan 15, 2026',
      image: 'bg-blue-100'
    },
    {
      id: 2,
      title: 'Top 5 Fragrances for Winter 2026',
      excerpt: 'Explore the best warm and cozy scents perfect for the cold season.',
      author: 'Marcus Winter',
      date: 'Jan 10, 2026',
      image: 'bg-purple-100'
    },
    {
      id: 3,
      title: 'How to Layer Fragrances Like a Pro',
      excerpt: 'Master the art of fragrance layering to create your unique scent profile.',
      author: 'Emma Rose',
      date: 'Jan 5, 2026',
      image: 'bg-pink-100'
    },
    {
      id: 4,
      title: 'The History of Iconic Perfume Bottles',
      excerpt: 'Journey through time with the most memorable perfume bottle designs in history.',
      author: 'David Lewis',
      date: 'Dec 28, 2025',
      image: 'bg-amber-100'
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-serif font-bold text-gray-900 mb-12 text-center">Blog</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className={`h-48 ${post.image}`}></div>
              <div className="p-6">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3 hover:text-gray-700 cursor-pointer">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-200 pt-4">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {post.date}
                  </div>
                </div>
                
                <button className="mt-4 text-black font-semibold hover:underline">Read More →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
