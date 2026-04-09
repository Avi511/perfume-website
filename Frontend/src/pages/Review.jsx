import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, User, MessageSquare, ChevronDown, Award, X } from "lucide-react";
import api from "../services/api";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import reviewHero from "../assets/review_hero.png";

function Review() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    rating: 5,
    comment: "",
  });

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await api.get("/reviews");
      setReviews(response.data);
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
      toast.error("Unable to load reviews.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please log in to submit a review.");
      return;
    }

    if (!formData.comment.trim()) {
      toast.error("Review cannot be empty.");
      return;
    }

    try {
      setIsSubmitting(true);
      await api.post("/reviews", formData);
      toast.success("Review submitted successfully.");
      setShowModal(false);
      setFormData({ rating: 5, comment: "" });
      fetchReviews();
    } catch (error) {
      toast.error(error.response?.data?.error || "Something went wrong while submitting your review.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30">
      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img src={reviewHero} className="w-full h-full object-cover" alt="Reviews" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-amber-500 italic">
              Reviews
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-none tracking-tighter text-white">
              Customer <br /> <span className="italic font-light">Reviews</span>
            </h1>
            <div className="w-12 h-px bg-amber-500/50 mx-auto"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[8px] uppercase tracking-[0.4em] font-bold">
            Customer Reviews
          </span>
          <ChevronDown size={16} className="animate-bounce" />
        </motion.div>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-[#f5f5f5] text-zinc-900 py-32 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-amber-600 font-bold uppercase tracking-[0.4em] text-[10px]">
              <Award size={18} />
              <span>Trusted Quality</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-black leading-none italic">
              What Our <br /> Customers Say
            </h2>
            <p className="text-zinc-500 text-lg font-light leading-relaxed max-w-lg">
              See what our customers are saying about our products.
            </p>
          </div>

          <div className="bg-zinc-50 rounded-[60px] p-12 border border-zinc-100 flex flex-col items-center text-center space-y-4">
            <div className="flex gap-1 text-amber-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" stroke="none" />
              ))}
            </div>
            <h4 className="text-4xl font-serif text-black">4.9 / 5.0</h4>
            <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-black italic">
              Average Rating
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="bg-black text-white py-32 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 space-y-4">
              <div className="w-12 h-12 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold">
                Loading reviews...
              </p>
            </div>
          ) : reviews.length === 0 ? (
            <div className="text-center py-32 bg-zinc-950/30 rounded-[60px] border border-zinc-900 border-dashed">
              <MessageSquare size={48} className="mx-auto text-zinc-800 mb-6" />
              <h2 className="text-2xl font-serif text-zinc-500">No reviews yet.</h2>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {reviews.map((review, index) => (
                  <motion.div
                    key={review._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-zinc-950 border border-zinc-900 p-12 rounded-[48px] hover:border-amber-500/30 transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(212,175,55,0.08)]"
                  >
                    <Quote
                      className="absolute top-10 right-10 text-amber-500/5 group-hover:text-amber-500/10 transition-colors duration-700"
                      size={80}
                      strokeWidth={1}
                    />

                    <div className="relative z-10 space-y-10">
                      <div className="flex gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={10}
                            fill={i < review.rating ? "currentColor" : "none"}
                            strokeWidth={1.5}
                            className={i >= review.rating ? "text-zinc-800" : ""}
                          />
                        ))}
                      </div>

                      <p className="text-xl font-serif leading-relaxed italic text-zinc-300 group-hover:text-white transition-all duration-500">
                        "{review.comment}"
                      </p>

                      <div className="pt-10 border-t border-zinc-900 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 group-hover:border-amber-500/50 transition-all border-dashed">
                            <User size={18} className="text-zinc-600 group-hover:text-amber-500" />
                          </div>
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-white">
                              {review.name || (review.user?.firstName ? `${review.user.firstName} ${review.user.lastName}` : "Anonymous User")}
                            </p>
                            <p className="text-[9px] text-zinc-700 uppercase tracking-tighter">
                              Verified Purchase
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="footer bg-[#f5f5f5] py-40 text-center border-t border-zinc-100">
        <div className="max-w-2xl mx-auto space-y-10 px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight italic">
            Share your <br /> experience.
          </h2>
          <button
            onClick={() => (user ? setShowModal(true) : toast.error("Please log in to submit a review."))}
            className="px-12 py-5 bg-black text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-amber-600 transition-all shadow-2xl"
          >
            Write a Review
          </button>
        </div>
      </footer>

      {/* SUBMISSION MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-2xl bg-black/80"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zinc-950 border border-zinc-900 w-full max-w-xl p-10 rounded-[60px] relative shadow-2xl space-y-10"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-10 right-10 text-zinc-700 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500 italic">
                  Add Review
                </span>
                <h3 className="text-4xl font-serif text-white">Share Your Experience</h3>
                <p className="text-zinc-500 text-sm font-light">
                  Your feedback helps others.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600 block">
                    Rating
                  </label>
                  <div className="flex gap-2 text-amber-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="hover:scale-125 transition-transform"
                      >
                        <Star
                          size={24}
                          fill={star <= formData.rating ? "currentColor" : "none"}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600 block">
                    Your Review
                  </label>
                  <textarea
                    required
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="w-full bg-zinc-900/50 border border-zinc-900 rounded-[32px] p-8 text-white focus:border-amber-500 outline-none transition-all min-h-[150px] resize-none placeholder:text-zinc-800"
                    placeholder="Write your review here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 bg-white text-black text-[10px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-amber-600 hover:scale-[1.02] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Review;