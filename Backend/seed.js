import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './src/models/Product.js';

dotenv.config();

const perfumes = [
  {
    productId: 'P0101',
    productName: 'Noir Intense',
    productImage: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1000',
    productPrice: 280,
    productQuantity: 50,
    productTotal: 14000,
    gender: 'Men',
    fragranceFamily: 'Woody',
    occasion: 'Date Night',
    season: 'Winter / Warm & Spicy',
    priceRange: 'Premium / Luxury',
    longevity: 'Long-lasting / Strong',
    isTrending: true,
  },
  {
    productId: 'P0102',
    productName: 'Marine Fresh',
    productImage: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000',
    productPrice: 85,
    productQuantity: 100,
    productTotal: 8500,
    gender: 'Men',
    fragranceFamily: 'Fresh / Citrus',
    occasion: 'Sport / Fresh wear',
    season: 'Summer / Fresh',
    priceRange: 'Budget',
    longevity: 'Light & Fresh',
    isNewArrival: true,
  },
  {
    productId: 'P0103',
    productName: 'Rose Blush',
    productImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1000',
    productPrice: 150,
    productQuantity: 75,
    productTotal: 11250,
    gender: 'Women',
    fragranceFamily: 'Floral',
    occasion: 'Everyday / Office',
    season: 'All-season',
    priceRange: 'Mid-range',
    longevity: 'Moderate',
    isBestSeller: true,
  },
  {
    productId: 'P0104',
    productName: 'Golden Amber',
    productImage: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=1000',
    productPrice: 320,
    productQuantity: 30,
    productTotal: 9600,
    gender: 'Women',
    fragranceFamily: 'Oriental / Spicy',
    occasion: 'Formal / Luxury',
    season: 'Winter / Warm & Spicy',
    priceRange: 'Premium / Luxury',
    longevity: 'Long-lasting / Strong',
  },
  {
    productId: 'P0105',
    productName: 'Vanilla Dreams',
    productImage: 'https://images.unsplash.com/photo-1588405748353-0c441207949b?auto=format&fit=crop&q=80&w=1000',
    productPrice: 175,
    productQuantity: 60,
    productTotal: 10500,
    gender: 'Women',
    fragranceFamily: 'Gourmand',
    occasion: 'Date Night',
    season: 'All-season',
    priceRange: 'Mid-range',
    longevity: 'Long-lasting / Strong',
    isTrending: true,
  },
  {
    productId: 'P0106',
    productName: 'Midnight Oud',
    productImage: 'https://images.unsplash.com/photo-1512568433575-397a61849887?auto=format&fit=crop&q=80&w=1000',
    productPrice: 450,
    productQuantity: 20,
    productTotal: 9000,
    gender: 'Men',
    fragranceFamily: 'Woody',
    occasion: 'Formal / Luxury',
    season: 'Winter / Warm & Spicy',
    priceRange: 'Premium / Luxury',
    longevity: 'Long-lasting / Strong',
    isBestSeller: true,
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Optional: Clear existing products if you want a clean start
    // await Product.deleteMany({});
    // console.log('Deleted existing products');

    await Product.insertMany(perfumes);
    console.log('Seed successful: 6 perfumes added.');

    process.exit();
  } catch (err) {
    console.error('Seed failed:', err);
    process.exit(1);
  }
};

seedDB();
