// Model definitions and interfaces
export const Product = {
  id: String,
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  rating: Number,
  reviews: Number,
};

export const User = {
  id: String,
  name: String,
  email: String,
  avatar: String,
};

export const CartItem = {
  id: String,
  product: Object,
  quantity: Number,
};
