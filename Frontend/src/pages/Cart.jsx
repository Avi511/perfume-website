import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { Trash2, ShoppingBag, ArrowRight, Minus, Plus, ChevronLeft, LogIn, X } from "lucide-react";

function Cart() {
  const { cartItems, removeFromCart, updateQty, cartTotal } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const shippingPrice = cartTotal > 5000 ? 0 : 500;
  const tax = cartTotal * 0.15;
  const finalTotal = cartTotal + shippingPrice + tax;

  const handleCheckout = () => {
    if (!user) {
      setShowLoginModal(true);
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumbs / Page Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif tracking-tight mb-2"
            >
              Your Selection
            </motion.h1>
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em]">Inventory of luxury &middot; {cartItems.length} pieces</p>
          </div>
          <Link to="/products" className="flex items-center gap-2 text-zinc-400 hover:text-amber-500 transition-all text-xs font-bold uppercase tracking-widest group">
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Continue Exploring
          </Link>
        </div>

        <AnimatePresence mode="wait">
          {cartItems.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mt-20 py-32 flex flex-col items-center justify-center bg-zinc-950/50 rounded-[40px] border border-dashed border-zinc-900"
            >
              <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-8">
                <ShoppingBag size={32} className="text-zinc-600" />
              </div>
              <h2 className="text-2xl font-serif mb-4 text-zinc-400">The collection is currently empty.</h2>
              <p className="text-zinc-600 text-sm mb-12 max-w-sm text-center leading-relaxed">Your curation of scents has not yet begun. Discover olfactory masterworks from our signature collection.</p>
              <Link 
                to="/products" 
                className="px-12 py-5 bg-white text-black text-[11px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-amber-600 hover:text-white transition-all transform active:scale-95 shadow-xl shadow-white/5"
              >
                Begin Journey
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Cart Items List */}
              <div className="lg:col-span-8 space-y-6">
                <div className="hidden md:grid grid-cols-12 px-8 pb-4 border-b border-zinc-900 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
                  <div className="col-span-6">Olfactory Masterwork</div>
                  <div className="col-span-3 text-center">Quantity</div>
                  <div className="col-span-3 text-right">Investment</div>
                </div>

                <div className="space-y-4">
                  {cartItems.map((item, idx) => (
                    <motion.div
                      key={item._id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-zinc-950/40 border border-zinc-900 p-6 md:p-8 rounded-[32px] group hover:border-zinc-800 transition-all duration-500 shadow-2xl"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        <div className="col-span-12 md:col-span-6 flex items-center gap-8">
                          <div className="w-24 h-32 md:w-28 md:h-36 rounded-2xl overflow-hidden bg-zinc-900 flex-shrink-0 border border-white/5">
                            <img 
                              src={item.image && (item.image.startsWith('http') || item.image.startsWith('data:'))
                                ? item.image
                                : (item.image ? `${import.meta.env.VITE_API_URL.replace('/api', '')}${item.image}` : "/images/sample.jpg")}
                              alt={item.name} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                            />
                          </div>
                          <div>
                            <p className="text-[10px] text-amber-600 font-black uppercase tracking-widest mb-1">{item.brand || "Selection"}</p>
                            <h3 className="text-xl font-serif mb-2">{item.name}</h3>
                            <button 
                              onClick={() => removeFromCart(item._id)}
                              className="flex items-center gap-2 text-zinc-700 hover:text-rose-500 transition-all text-[9px] font-bold uppercase tracking-widest mt-4"
                            >
                              <Trash2 size={12} /> Remove Choice
                            </button>
                          </div>
                        </div>

                        <div className="col-span-12 md:col-span-3 flex justify-center md:justify-center">
                          <div className="flex items-center gap-4 bg-zinc-900/50 p-2 rounded-2xl border border-zinc-900">
                            <button 
                              onClick={() => updateQty(item._id, item.qty - 1)}
                              className="w-10 h-10 rounded-xl bg-zinc-950 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-10 text-center font-bold text-sm">{item.qty}</span>
                            <button 
                              onClick={() => updateQty(item._id, item.qty + 1)}
                              className="w-10 h-10 rounded-xl bg-zinc-950 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>

                        <div className="col-span-12 md:col-span-3 text-right">
                          <p className="text-xl font-serif">Rs. {(item.price * item.qty).toLocaleString()}</p>
                          <p className="text-[10px] text-zinc-600 mt-1">Rs. {item.price.toLocaleString()} per unit</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Order Summary Summary */}
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
                  <h2 className="text-2xl font-serif mb-8">Summary of Curation</h2>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-500 font-bold uppercase tracking-widest text-[9px]">Inventory Value</span>
                      <span className="font-serif">Rs. {cartTotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-500 font-bold uppercase tracking-widest text-[9px]">Scent Concierge (Shipping)</span>
                      <span className={shippingPrice === 0 ? "text-emerald-500 font-bold uppercase tracking-widest text-[10px]" : "font-serif text-zinc-300"}>
                        {shippingPrice === 0 ? "Complimentary" : `Rs. ${shippingPrice.toLocaleString()}`}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-500 font-bold uppercase tracking-widest text-[9px]">Luxury Levy (Tax 15%)</span>
                      <span className="font-serif">Rs. {Math.round(tax).toLocaleString()}</span>
                    </div>

                    <div className="pt-8 border-t border-zinc-800 flex justify-between items-end">
                      <div>
                        <p className="text-zinc-500 font-bold uppercase tracking-widest text-[9px] mb-1">Total Refined Investment</p>
                        <p className="text-4xl font-serif text-amber-500">Rs. {Math.round(finalTotal).toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="pt-10">
                      <button 
                        onClick={handleCheckout}
                        className="w-full py-6 bg-white text-black text-[11px] font-black uppercase tracking-[0.4em] rounded-2xl hover:bg-amber-600 hover:text-white transition-all transform active:scale-95 flex items-center justify-center gap-3 shadow-2xl shadow-white/5 group"
                      >
                        Authorize Checkout <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                      </button>
                    </div>

                    <div className="pt-6 text-center">
                      <p className="text-[9px] text-zinc-700 font-bold uppercase tracking-[0.3em] leading-relaxed">
                        Security secured by Élan Encryption &middot; Global Logistics by DHL Express
                      </p>
                    </div>
                  </div>

                  {/* Aesthetic Background Detail */}
                  <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-amber-500/[0.03] rounded-full blur-3xl pointer-events-none"></div>
                </div>

                <div className="mt-8 px-8 flex items-center gap-4 text-zinc-500">
                  <div className="w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center flex-shrink-0 border border-zinc-900">
                    <ShoppingBag size={18} className="text-amber-500" />
                  </div>
                  <p className="text-[10px] uppercase font-bold tracking-widest leading-relaxed">
                    Complimentary gifting with every order above Rs. 10,000
                  </p>
                </div>
              </div>

            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Login Prompt Modal */}
      <AnimatePresence>
        {showLoginModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLoginModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-zinc-950 border border-zinc-900 w-full max-w-sm p-10 rounded-[40px] shadow-2xl text-center overflow-hidden"
            >
              {/* Decorative detail */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <button 
                onClick={() => setShowLoginModal(false)}
                className="absolute top-6 right-6 text-zinc-700 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-8 border border-zinc-800">
                <LogIn className="text-amber-500" size={24} />
              </div>
              
              <h3 className="text-2xl font-serif mb-4">Authentication Required</h3>
              <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-[0.2em] mb-10 leading-relaxed">
                To finalize your luxury curation, we require you to authorize your identity.
              </p>

              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => navigate("/login")}
                  className="w-full py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-amber-600 hover:text-white transition-all transform active:scale-95 shadow-xl"
                >
                  Yes, Authorize Login
                </button>
                <button 
                  onClick={() => setShowLoginModal(false)}
                  className="w-full py-4 bg-zinc-900 text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-zinc-800 hover:text-white transition-all transform active:scale-95"
                >
                  No, Continue Browsing
                </button>
              </div>

              <p className="mt-8 text-[8px] text-zinc-700 font-bold uppercase tracking-widest italic leading-relaxed">
                Security secured by Élan Encryption &middot; Your data remains confidential
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Cart;
