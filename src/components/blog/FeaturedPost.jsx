import React from 'react';

const FeaturedPost = ({ title, excerpt, author, date, image }) => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 p-8">
        {image && <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 text-lg mb-6">{excerpt}</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>{author}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
