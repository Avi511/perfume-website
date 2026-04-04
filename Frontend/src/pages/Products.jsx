import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, SlidersHorizontal } from "lucide-react";
import api from "../services/api";
import Card from "../components/common/Card";
import Heroimage from "../assets/products_hero.png";
import ProductFilters from "../components/products/ProductFilters";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({});

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      
      // Construct query parameters
      const params = new URLSearchParams();
      Object.entries(activeFilters).forEach(([key, value]) => {
        if (value) {
          if (key === 'isNewArrival' || key === 'isBestSeller' || key === 'isTrending') {
             params.append(key, 'true');
          } else {
             params.append(key, value);
          }
        }
      });

      const { data } = await api.get(`/products?${params.toString()}`);
      const mappedProducts = data.map(p => ({
        id: p._id,
        name: p.productName || p.name,
        price: p.productPrice || p.price,
        image: p.productImage || p.image,
        category: p.category || "Luxury Collection",
        rating: p.rating || 5,
        gender: p.gender,
        fragranceFamily: p.fragranceFamily
      }));
      setProducts(mappedProducts);
    } catch (err) {
      setError("Failed to load products. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [activeFilters]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleFilterChange = (sectionId, value) => {
    setActiveFilters(prev => {
      const next = { ...prev };
      
      // Special handling for Trending section (which are booleans)
      if (sectionId === 'trending') {
        if (next[value] === 'true') {
          delete next[value];
        } else {
          next[value] = 'true';
        }
      } else {
        // Toggle behavior for other sections
        if (next[sectionId] === value) {
          delete next[sectionId];
        } else {
          next[sectionId] = value;
        }
      }
      return next;
    });
  };

  const handleClearFilters = () => {
    setActiveFilters({});
  };

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={Heroimage}
          alt="Luxury Collection"
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black" />

        <div className="max-w-7xl mx-auto text-center relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-amber-500 font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block">
              The Collection
            </span>
            <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 uppercase tracking-tighter">
              Our Masterpieces
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light italic">
              Explore our curated selection of fine fragrances, each bottle a testament to the art of luxury perfumery.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between mb-8 border-b border-zinc-900 pb-4">
             <button 
               onClick={() => setIsFilterOpen(true)}
               className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
             >
               <SlidersHorizontal className="w-4 h-4" />
               Filters
               {Object.keys(activeFilters).length > 0 && (
                 <span className="w-2 h-2 bg-amber-500 rounded-full" />
               )}
             </button>
             <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
               {products.length} Products Found
             </span>
          </div>

          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <ProductFilters 
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
            />
          </aside>

          {/* Mobile Filter Drawer */}
          <AnimatePresence>
            {isFilterOpen && (
              <ProductFilters 
                isMobile 
                activeFilters={activeFilters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                setIsOpen={setIsFilterOpen}
              />
            )}
          </AnimatePresence>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="hidden lg:flex items-center justify-between mb-8 pb-4 border-b border-zinc-900">
               <div className="flex items-center gap-4">
                 <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500">The Vault</h2>
                 <span className="w-px h-4 bg-zinc-800" />
                 <span className="text-[10px] text-zinc-600 uppercase tracking-widest italic">{products.length} pieces of art</span>
               </div>
               
               <div className="flex items-center gap-3">
                 {Object.keys(activeFilters).length > 0 && (
                   <button 
                     onClick={handleClearFilters}
                     className="text-[9px] uppercase tracking-widest text-amber-500/60 hover:text-amber-500 underline underline-offset-4"
                   >
                     Clear Applied Filters
                   </button>
                 )}
               </div>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-32 gap-6">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 border-2 border-amber-600/20 rounded-full"></div>
                  <div className="absolute inset-0 border-t-2 border-amber-600 rounded-full animate-spin"></div>
                </div>
                <p className="text-zinc-600 font-medium tracking-[0.3em] text-[10px] uppercase animate-pulse">Distilling Excellence...</p>
              </div>
            ) : error ? (
              <div className="text-center py-32 bg-zinc-950 rounded-2xl border border-zinc-900">
                <p className="text-rose-400 text-sm font-light uppercase tracking-widest italic">{error}</p>
              </div>
            ) : products.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-32 bg-zinc-950/50 rounded-3xl border border-zinc-900/50"
              >
                <h3 className="text-2xl font-serif text-white mb-4 uppercase tracking-widest">No scents matched your selection.</h3>
                <p className="text-zinc-500 font-light max-w-sm mx-auto mb-8 tracking-wide">Our master perfumers are currently crafting new masterpieces. Try refining your filters or reset to explore our full collection.</p>
                <button 
                  onClick={handleClearFilters}
                  className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-black font-bold text-[10px] uppercase tracking-[0.3em] transition-all rounded-full shadow-lg shadow-amber-900/20"
                >
                  Reset Experience
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index % 6) * 0.1, duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
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
          </main>
        </div>
      </div>

      {/* Decorative Newsletter/Footer Accent */}
      <section className="py-24 bg-zinc-900/30 overflow-hidden relative border-t border-zinc-900">
        <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-4xl font-serif mb-6 uppercase tracking-widest text-white/90">Experience the Essence</h2>
          <p className="text-gray-500 mb-10 max-w-lg mx-auto font-light leading-relaxed">Join our inner circle for exclusive access to private collections and olfactory masterclasses.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="bg-black/40 border border-white/10 px-8 py-5 rounded-full text-[10px] tracking-widest outline-none focus:border-amber-600/50 transition-all flex-1 text-white placeholder:text-zinc-700"
            />
            <button className="bg-amber-600 hover:bg-amber-700 text-black px-10 py-5 rounded-full text-[10px] font-bold tracking-[0.2em] transition-all uppercase shadow-xl shadow-black/40">
              Subscribe
            </button>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif text-white/[0.01] whitespace-nowrap pointer-events-none uppercase tracking-tighter select-none">
          Élan Fragrance
        </div>
      </section>
    </div>
  );
}

export default Products;
