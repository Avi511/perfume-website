import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  // Mock cart items with prices
  const mockItems = [
    { id: 1, name: 'Midnight Noir', price: 89, quantity: 1 },
    { id: 2, name: 'Rose Elegance', price: 79, quantity: 2 }
  ];

  const subtotal = mockItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1;
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + tax + shipping;

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 sm:mb-12">Shopping Cart</h1>

        {mockItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-600 mb-8">Your cart is empty</p>
            <a href="/shop" className="px-8 py-3 bg-black text-white rounded-full hover:opacity-90 transition font-semibold">Continue Shopping</a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Cart Items */}
            <div className="col-span-1 md:col-span-2">
              <div className="space-y-4 sm:space-y-6">
                {mockItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-serif font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">${item.price}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 w-full sm:w-auto">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button className="p-2 hover:bg-gray-100">
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-2 border-l border-r border-gray-300">{item.quantity}</span>
                        <button className="p-2 hover:bg-gray-100">
                          <Plus size={16} />
                        </button>
                      </div>

                      <p className="font-semibold text-gray-900 w-16 sm:w-20 text-right text-sm sm:text-base">${(item.price * item.quantity).toFixed(2)}</p>

                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={clearCart}
                className="mt-6 text-red-600 hover:underline font-semibold"
              >
                Clear Cart
              </button>
            </div>

            {/* Order Summary */}
            <div className="col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 sticky top-28 md:top-20">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6 border-b border-gray-200 pb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (10%)</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">
                      {shipping === 0 ? <span className="text-green-600">FREE</span> : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between mb-8">
                  <span className="text-lg font-serif font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-serif font-bold text-black">${total.toFixed(2)}</span>
                </div>

                <button className="w-full py-4 bg-black text-white rounded-lg font-semibold hover:opacity-90 transition mb-3">
                  Proceed to Checkout
                </button>
                <a href="/shop" className="block text-center py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-900 hover:bg-gray-50 transition">
                  Continue Shopping
                </a>

                {subtotal < 100 && (
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    FREE shipping on orders over $100!
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
