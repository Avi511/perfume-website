import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../services/api";
import { useCart } from "../context/CartContext";
import Heroimage from "../assets/product_details_hero.png";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/products/${id}`);
        const mappedProduct = {
          ...data,
          name: data.productName || data.name,
          price: data.productPrice || data.price,
          image: data.productImage || data.image,
          countInStock: data.productQuantity || data.countInStock || 0
        };
        setProduct(mappedProduct);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg tracking-wide">Loading product...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-red-400 text-lg">{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg">Product not found.</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white relative">
      <div className="absolute top-0 left-0 w-full h-[60vh] overflow-hidden">
        <img
          src={Heroimage}
          alt="Luxury Essence"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="rounded-3xl overflow-hidden bg-white shadow-2xl border border-white/20 aspect-[4/5]"
        >
          <img
            src={product.image
              ? (product.image.startsWith('http') ? product.image : `${import.meta.env.VITE_API_URL.replace('/api', '')}${product.image}`)
              : "https://via.placeholder.com/600x700?text=Perfume"}
            alt={product.name}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[3s] ease-out"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="pt-8 md:pt-20"
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xs uppercase tracking-[0.5em] text-amber-600 font-bold"
              >
                {product.category || "Luxury Collection"}
              </motion.p>

              <h1 className="text-5xl md:text-6xl font-serif tracking-tight leading-none text-white">
                {product.name}
              </h1>

              <div className="flex items-center gap-6">
                <p className="text-3xl font-light tracking-widest text-amber-400">
                  Rs. {product.price.toLocaleString()}
                </p>
                <div className="h-px flex-1 bg-white/10" />
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed font-sans text-lg max-w-lg">
              {product.description || "An olfactory journey crafted with the finest essences, designed to linger in memory as an invisible accessory of power."}
            </p>

            <div className="grid grid-cols-2 gap-8 border-y border-white/5 py-8">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400">Brand</span>
                <p className="font-serif text-lg">{product.brand || "Élan Fragrance"}</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400">Availability</span>
                <p className={`font-serif text-lg ${product.countInStock > 0 ? "text-emerald-600" : "text-rose-600"}`}>
                  {product.countInStock > 0 ? `In Stock (${product.countInStock} units)` : "Out of Stock"}
                </p>
              </div>
            </div>

            {product.countInStock > 0 && (
              <div className="flex flex-col gap-6 pt-4">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400">Select Quantity</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                    >-</button>
                    <span className="w-10 text-center font-bold text-white">{qty}</span>
                    <button
                      onClick={() => setQty(Math.min(product.countInStock, qty + 1))}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                    >+</button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => addToCart(product, qty)}
                    className="flex-1 px-8 py-5 rounded-full bg-white text-black font-bold uppercase tracking-widest text-[11px] hover:bg-amber-600 hover:text-white transform active:scale-95 transition-all shadow-xl shadow-black/20"
                  >
                    Add to Cart — ${(product.price * qty).toLocaleString()}
                  </button>
                  <button
                    onClick={() => navigate('/cart')}
                    className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all transform active:scale-95 group"
                  >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProductDetails;