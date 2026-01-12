import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';

function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const {
    id,
    name,
    brand,
    price,
    originalPrice,
    image,
    rating,
    reviews,
    isNew,
    isBestSeller,
    scentNotes = [],
    size = '100ml'
  } = product;

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    // Add to cart logic here
    console.log('Added to cart:', product);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    // Quick view logic here
    console.log('Quick view:', product);
  };

  return (
    <div 
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div className="relative overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
              NEW
            </span>
          )}
          {isBestSeller && (
            <span className="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full shadow-lg">
              BESTSELLER
            </span>
          )}
          {discount > 0 && (
            <span className="px-3 py-1 bg-rose-500 text-white text-xs font-bold rounded-full shadow-lg">
              -{discount}%
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          <button
            onClick={handleWishlist}
            className={`p-2 rounded-full shadow-lg transition-colors duration-300 ${
              isWishlisted 
                ? 'bg-rose-500 text-white' 
                : 'bg-white text-gray-700 hover:bg-rose-50 hover:text-rose-500'
            }`}
          >
            <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={handleQuickView}
            className="p-2 bg-white text-gray-700 rounded-full shadow-lg hover:bg-blue-50 hover:text-blue-500 transition-colors duration-300"
          >
            <Eye size={18} />
          </button>
        </div>

        {/* Add to Cart Button */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-white text-gray-900 py-3 rounded-xl font-semibold hover:bg-amber-50 hover:text-amber-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Brand */}
        <div className="text-sm text-gray-500 font-medium mb-1">{brand}</div>
        
        {/* Product Name */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-rose-600 transition-colors duration-300">
          {name}
        </h3>

        {/* Scent Notes */}
        <div className="flex flex-wrap gap-1 mb-3">
          {scentNotes.slice(0, 3).map((note, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {note}
            </span>
          ))}
          {scentNotes.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{scentNotes.length - 3}
            </span>
          )}
        </div>

        {/* Size */}
        <div className="text-sm text-gray-500 mb-3">{size}</div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={14}
                className={`${
                  index < Math.floor(rating)
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {rating} ({reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">${price}</span>
          {originalPrice && (
            <span className="text-lg text-gray-400 line-through">${originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}

// Default props
ProductCard.defaultProps = {
  product: {
    id: 1,
    name: 'Eternal Elegance',
    brand: 'Luxury Scents',
    price: 89.99,
    originalPrice: 119.99,
    image: '/assets/perfumes/perfume1.jpg',
    rating: 4.5,
    reviews: 128,
    isNew: true,
    isBestSeller: false,
    scentNotes: ['Bergamot', 'Jasmine', 'Sandalwood', 'Vanilla'],
    size: '100ml'
  }
};

export default ProductCard;