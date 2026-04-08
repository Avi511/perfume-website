import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, User, Calendar, MessageSquare } from "lucide-react";
import api from "../services/api";
import toast from "react-hot-toast";

function Review() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await api.get("/reviews");
        setReviews(response.data);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
        toast.error("Unable to load the olfactory testimonials.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-4 sm:px-8 lg:px-12 font-sans selection:bg-amber-500/30">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-amber-500 italic">Testimonials</span>
            <h1 className="text-6xl md:text-8xl font-serif leading-none tracking-tighter">
              Olfactory <br /> <span className="italic font-light">Chronicles</span>
            </h1>
            <p className="text-zinc-500 text-sm max-w-xl mx-auto font-light leading-relaxed tracking-widest uppercase">
              Authentic narratives from our global collective of connoisseurs.
            </p>
            <div className="w-px h-24 bg-gradient-to-b from-amber-500/50 to-transparent mx-auto mt-12"></div>
          </motion.div>
        </header>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <div className="w-12 h-12 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-600">Retrieving essences...</p>
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-32 bg-zinc-950/30 rounded-[48px] border border-zinc-900 border-dashed">
            <MessageSquare size={48} className="mx-auto text-zinc-800 mb-6" />
            <h2 className="text-2xl font-serif text-zinc-500">The archive is currently silent.</h2>
            <p className="text-zinc-700 text-xs uppercase tracking-widest mt-2">Become the first to leave a narrative.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <AnimatePresence>
                {reviews.map((review, index) => (
                  <motion.div
                    key={review._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-zinc-950 border border-zinc-900 p-10 rounded-[40px] hover:border-amber-500/30 transition-all duration-700 hover:shadow-[0_20px_80px_-20px_rgba(212,175,55,0.05)]"
                  >
                    <Quote className="absolute top-8 right-8 text-amber-500/10 group-hover:text-amber-500/20 transition-colors duration-700" size={64} strokeWidth={1} />
                    
                    <div className="relative z-10 space-y-8">
                       <div className="flex gap-1 text-amber-500">
                         {[...Array(5)].map((_, i) => (
                           <Star 
                             key={i} 
                             size={12} 
                             fill={i < review.rating ? "currentColor" : "none"} 
                             strokeWidth={1.5}
                             className={i >= review.rating ? "text-zinc-800" : ""}
                           />
                         ))}
                       </div>

                       <p className="text-lg font-serif leading-relaxed italic text-zinc-300 group-hover:text-white transition-colors duration-500">
                         "{review.comment}"
                       </p>

                       <div className="pt-8 border-t border-zinc-900/50 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 group-hover:border-amber-500/50 transition-all">
                               <User size={16} className="text-zinc-600 group-hover:text-amber-500" />
                             </div>
                             <div>
                               <p className="text-[10px] font-black uppercase tracking-widest text-white">{review.name || "Anonymous Client"}</p>
                               <p className="text-[9px] text-zinc-600 uppercase tracking-tighter">Verified Acquisition</p>
                             </div>
                          </div>
                          <div className="flex items-center gap-2 text-zinc-700">
                             <Calendar size={10} />
                             <span className="text-[8px] font-bold uppercase tracking-widest">
                               {new Date(review.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                             </span>
                          </div>
                       </div>
                    </div>
                  </motion.div>
                ))}
             </AnimatePresence>
          </div>
        )}

        {/* Cinematic Footer Section */}
        <section className="mt-40 text-center space-y-8">
           <div className="max-w-px h-32 bg-gradient-to-b from-transparent via-zinc-800 to-transparent mx-auto"></div>
           <h2 className="text-3xl font-serif text-zinc-400">Your voice matters in our <br /> olfactory symphony.</h2>
           <p className="text-[10px] text-zinc-600 uppercase tracking-[0.4em] font-bold">Share your essence with the collective.</p>
        </section>
      </div>
    </div>
  );
}

export default Review;
