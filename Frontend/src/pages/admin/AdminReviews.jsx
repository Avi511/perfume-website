import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Star, Trash2, Search, MessageSquare,
    ChevronLeft, RefreshCw, Calendar, User, Package,
    AlertCircle
} from "lucide-react";
import api from "../../services/api";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import ConfirmationModal from "../../components/common/ConfirmationModal";

const AdminReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("newest");
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [reviewToDelete, setReviewToDelete] = useState(null);

    const fetchReviews = async () => {
        try {
            setLoading(true);
            const { data } = await api.get("/reviews");
            setReviews(data);
        } catch (error) {
            console.error("Failed to fetch reviews:", error);
            toast.error("Cloud resonance failure: Unable to retrieve reviews.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    const handleDeleteReview = (id) => {
        setReviewToDelete(id);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        if (!reviewToDelete) return;

        try {
            await api.delete(`/reviews/${reviewToDelete}`);
            toast.success("Review successfully deleted");
            setReviews(reviews.filter(r => r._id !== reviewToDelete));
        } catch (error) {
            toast.error("Deletion failure. Security protocol active.");
        } finally {
            setIsDeleteModalOpen(false);
            setReviewToDelete(null);
        }
    };

    const filteredReviews = reviews
        .filter(review =>
            review.comment?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            review.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            review.user?.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            review.user?.lastName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            review.product?.productName?.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            if (sortBy === "newest") return new Date(b.createdAt) - new Date(a.createdAt);
            if (sortBy === "oldest") return new Date(a.createdAt) - new Date(b.createdAt);
            if (sortBy === "rating-high") return b.rating - a.rating;
            if (sortBy === "rating-low") return a.rating - b.rating;
            return 0;
        });

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-24 px-4 sm:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <Link to="/admin/dashboard" className="flex items-center gap-2 text-zinc-500 hover:text-amber-500 transition-colors mb-6 group w-fit">
                        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Return to Console</span>
                    </Link>
                    <h2 className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-2">Audit Manifest</h2>
                    <h1 className="text-4xl md:text-5xl font-serif">Customer Sentiment</h1>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="relative group w-full sm:w-64">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 group-focus-within:text-amber-500 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search sentiment..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-zinc-950 border border-zinc-900 rounded-2xl pl-12 pr-4 py-3 text-sm focus:border-amber-500/50 outline-none transition-all placeholder:text-zinc-700 font-light"
                        />
                    </div>

                    <div className="flex items-center gap-2 bg-zinc-950 p-1.5 rounded-2xl border border-zinc-900">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-zinc-950 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 outline-none text-zinc-400 focus:text-white transition-colors cursor-pointer"
                        >
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                            <option value="rating-high">Highest Rating</option>
                            <option value="rating-low">Lowest Rating</option>
                        </select>
                    </div>

                    <button
                        onClick={fetchReviews}
                        className="p-3 bg-zinc-950 border border-zinc-900 rounded-2xl hover:bg-zinc-900 transition-all text-zinc-500 hover:text-white"
                        title="Refresh Manifest"
                    >
                        <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="bg-zinc-950 border border-zinc-900 rounded-[32px] p-8 h-64 animate-pulse" />
                        ))}
                    </div>
                ) : filteredReviews.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredReviews.map((review) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    key={review._id}
                                    className="group relative bg-zinc-950 border border-zinc-900 rounded-[32px] p-8 hover:border-zinc-700/50 transition-all duration-500 flex flex-col"
                                >
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={12}
                                                    className={i < review.rating ? "fill-amber-500 text-amber-500" : "text-zinc-800"}
                                                />
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => handleDeleteReview(review._id)}
                                            className="p-2 opacity-0 group-hover:opacity-100 transition-opacity bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex flex-col gap-1 mb-4">
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 flex items-center gap-2">
                                                <MessageSquare size={10} /> Signature Comment
                                            </span>
                                            <p className="text-sm text-zinc-300 leading-relaxed font-light italic">
                                                "{review.comment}"
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 pt-6 border-t border-zinc-900/50 mt-4">
                                        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                                            <div className="flex items-center gap-2 text-zinc-500">
                                                <User size={12} className="text-zinc-700" />
                                                <span>{review.name || (review.user ? `${review.user.firstName} ${review.user.lastName}` : 'Anonymous')}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-zinc-500">
                                                <Calendar size={12} className="text-zinc-700" />
                                                <span>{new Date(review.createdAt).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-xl border border-zinc-900">
                                            <Package size={12} className="text-amber-500/50" />
                                            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 truncate">
                                                {review.product?.productName || 'Site Feedback / General'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.01] to-transparent pointer-events-none rounded-[32px]" />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="text-center py-32 bg-zinc-950/50 rounded-[48px] border border-dashed border-zinc-900">
                        <AlertCircle className="w-12 h-12 text-zinc-800 mx-auto mb-4" />
                        <h3 className="text-xl font-serif text-zinc-500">No sentiments found in manifest</h3>
                        <p className="text-zinc-700 text-[10px] font-bold uppercase tracking-widest mt-2">Adjust your search parameters or refresh the data</p>
                    </div>
                )}
            </div>

            <ConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                title="Delete Sentiment"
                message="Are you sure you want to delete this review from the manifest? This action is irreversible."
                confirmText="Delete Record"
                cancelText="Retain"
            />

            <div className="py-12 border-t border-zinc-900 mt-24 text-center">
                <p className="text-zinc-800 text-[10px] font-bold uppercase tracking-[0.5em]">&copy; Élan Audit Protocol &middot; Level 4 Clearance Required</p>
            </div>
        </div>
    );
};

export default AdminReviews;
