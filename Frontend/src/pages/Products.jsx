import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import api from "../services/api";
import Card from "../components/common/Card";
import Heroimage from "../assets/products_hero.png";
function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/products");
        const mappedProducts = data.map(p => ({
          id: p._id,
          name: p.productName || p.name,
          price: p.productPrice || p.price,
          image: p.productImage || p.image,
          category: p.category || "Luxury Collection",
          rating: p.rating || 5
        }));
        setProducts(mappedProducts);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={Heroimage}
          alt="Luxury Collection"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black" />

        <div className="max-w-7xl mx-auto text-center relative z-10 px-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-500 font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block"
          >
            The Collection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-white mb-6"
          >
            Our Masterpieces
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Explore our curated selection of fine fragrances, each bottle a testament to the art of luxury perfumery. Sourced from the rarest ingredients around the globe.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto bg-black">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-500 font-medium tracking-widest text-sm uppercase">Curating elegance...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-rose-600 text-lg">{error}</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-serif text-gray-400 mb-4">No scents found in the vault.</h3>
            <p className="text-gray-500">Our master perfumers are currently crafting new masterpieces. Check back soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <Card
                  image={product.image && (product.image.startsWith('http') || product.image.startsWith('data:'))
                    ? product.image
                    : (product.image ? `${import.meta.env.VITE_API_URL.replace('/api', '')}${product.image}` : "/images/sample.jpg")}
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                  category={product.category}
                  id={product.id}
                />
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Decorative Newsletter/Footer Accent */}
      <section className="py-24 bg-zinc-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-4xl font-serif mb-6">Experience the Essence</h2>
          <p className="text-gray-500 mb-10 max-w-lg mx-auto">Join our inner circle for exclusive access to private collections and olfactory masterclasses.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="bg-white border border-black/10 px-6 py-4 rounded-full text-xs tracking-widest outline-none focus:border-amber-600 transition-colors flex-1"
            />
            <button className="bg-black text-white px-8 py-4 rounded-full text-xs font-bold tracking-widest hover:bg-zinc-800 transition-all uppercase">
              Subscribe
            </button>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif text-black/[0.02] whitespace-nowrap pointer-events-none uppercase tracking-tighter">
          Élan Fragrance
        </div>
      </section>
    </div>
  );
}

export default Products;
