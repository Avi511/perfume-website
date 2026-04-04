import React, { useState } from "react";
import { X, Upload, Zap, Sparkles, Flame, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import api from "../../services/api";
import toast from "react-hot-toast";

const AddProductModal = ({ isOpen, onClose, onSuccess }) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        productName: "",
        productImage: "",
        productPrice: "",
        productQuantity: "",
        gender: "Unisex",
        fragranceFamily: "Floral",
        occasion: "Everyday / Office",
        season: "All-season",
        priceRange: "Mid-range",
        longevity: "Moderate",
        isNewArrival: false,
        isBestSeller: false,
        isTrending: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await api.post("/products", {
                ...formData,
                productPrice: Number(formData.productPrice),
                productQuantity: Number(formData.productQuantity)
            });
            toast.success("Masterwork successfully onboarded");
            onSuccess(data);
            onClose();
        } catch (error) {
            console.error("Failed to add product:", error);
            toast.error(error.response?.data?.error || "Failed to add product");
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                />
                
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-900 rounded-[40px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                >
                    {/* Header */}
                    <div className="p-8 border-b border-zinc-900 flex items-center justify-between bg-zinc-950/50 backdrop-blur-md sticky top-0 z-10">
                        <div>
                            <h2 className="text-2xl font-serif text-white mb-1">Onboard New Creation</h2>
                            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">Define your olfactory masterpiece</p>
                        </div>
                        <button 
                            onClick={onClose}
                            className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Form */}
                    <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            
                            {/* Basic Info */}
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-amber-500 text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> Essential Identity
                                    </h3>
                                    
                                    <div className="space-y-2">
                                        <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold ml-1">Product Name</label>
                                        <input
                                            required
                                            name="productName"
                                            value={formData.productName}
                                            onChange={handleChange}
                                            placeholder="e.g. Midnight Oud"
                                            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-amber-500/50 transition-all font-sans"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold ml-1">Price (Rs.)</label>
                                            <input
                                                required
                                                type="number"
                                                name="productPrice"
                                                value={formData.productPrice}
                                                onChange={handleChange}
                                                placeholder="0"
                                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-amber-500/50 transition-all font-sans"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold ml-1">Stock Units</label>
                                            <input
                                                required
                                                type="number"
                                                name="productQuantity"
                                                value={formData.productQuantity}
                                                onChange={handleChange}
                                                placeholder="0"
                                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-amber-500/50 transition-all font-sans"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold ml-1">Composition Visual (URL)</label>
                                        <div className="relative">
                                            <input
                                                required
                                                name="productImage"
                                                value={formData.productImage}
                                                onChange={handleChange}
                                                placeholder="https://images.unsplash.com/..."
                                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-amber-500/50 transition-all font-sans pr-12"
                                            />
                                            <Upload size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-700" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-indigo-500 text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> Status Badges
                                    </h3>
                                    
                                    <div className="grid grid-cols-3 gap-3">
                                        {[
                                            { name: 'isNewArrival', label: 'New', icon: Sparkles, color: 'emerald' },
                                            { name: 'isBestSeller', label: 'Best', icon: Zap, color: 'amber' },
                                            { name: 'isTrending', label: 'Hot', icon: Flame, color: 'orange' }
                                        ].map(item => (
                                            <label 
                                                key={item.name}
                                                className={`flex flex-col items-center gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                                                    formData[item.name] 
                                                        ? `bg-${item.color}-500/10 border-${item.color}-500/50 text-white` 
                                                        : 'bg-zinc-900/30 border-zinc-800 text-zinc-600'
                                                }`}
                                            >
                                                <input 
                                                    type="checkbox"
                                                    name={item.name}
                                                    checked={formData[item.name]}
                                                    onChange={handleChange}
                                                    className="hidden"
                                                />
                                                <item.icon size={20} className={formData[item.name] ? `text-${item.color}-500` : ''} />
                                                <span className="text-[9px] font-bold uppercase tracking-widest">{item.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Attributes */}
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-rose-500 text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-rose-500 rounded-full" /> Olfactory Profile
                                    </h3>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold ml-1">Gender Segment</label>
                                            <select 
                                                name="gender" 
                                                value={formData.gender} 
                                                onChange={handleChange}
                                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-rose-500/50 transition-all font-sans appearance-none"
                                            >
                                                <option value="Men">Men</option>
                                                <option value="Women">Women</option>
                                                <option value="Unisex">Unisex</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold ml-1">Scent Family</label>
                                            <select 
                                                name="fragranceFamily" 
                                                value={formData.fragranceFamily} 
                                                onChange={handleChange}
                                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-rose-500/50 transition-all font-sans appearance-none"
                                            >
                                                <option value="Floral">Floral</option>
                                                <option value="Woody">Woody</option>
                                                <option value="Fresh / Citrus">Fresh / Citrus</option>
                                                <option value="Oriental / Spicy">Oriental / Spicy</option>
                                                <option value="Gourmand">Gourmand</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold ml-1">Ideal Occasion</label>
                                            <select 
                                                name="occasion" 
                                                value={formData.occasion} 
                                                onChange={handleChange}
                                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-rose-500/50 transition-all font-sans appearance-none"
                                            >
                                                <option value="Everyday / Office">Everyday / Office</option>
                                                <option value="Date Night">Date Night</option>
                                                <option value="Party / Night Out">Party / Night Out</option>
                                                <option value="Formal / Luxury">Formal / Luxury</option>
                                                <option value="Sport / Fresh wear">Sport / Fresh wear</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold ml-1">Seasonal Wear</label>
                                            <select 
                                                name="season" 
                                                value={formData.season} 
                                                onChange={handleChange}
                                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-rose-500/50 transition-all font-sans appearance-none"
                                            >
                                                <option value="Summer / Fresh">Summer / Fresh</option>
                                                <option value="Winter / Warm & Spicy">Winter / Warm & Spicy</option>
                                                <option value="All-season">All-season</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold ml-1">Tier / Price Range</label>
                                            <select 
                                                name="priceRange" 
                                                value={formData.priceRange} 
                                                onChange={handleChange}
                                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-rose-500/50 transition-all font-sans appearance-none"
                                            >
                                                <option value="Budget">Budget</option>
                                                <option value="Mid-range">Mid-range</option>
                                                <option value="Premium / Luxury">Premium / Luxury</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold ml-1">Longevity Score</label>
                                            <select 
                                                name="longevity" 
                                                value={formData.longevity} 
                                                onChange={handleChange}
                                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-rose-500/50 transition-all font-sans appearance-none"
                                            >
                                                <option value="Light & Fresh">Light & Fresh</option>
                                                <option value="Moderate">Moderate</option>
                                                <option value="Long-lasting / Strong">Long-lasting / Strong</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-8 border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-md flex items-center justify-end gap-4">
                        <button 
                            onClick={onClose}
                            className="px-8 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-all shadow-lg"
                        >
                            Abort
                        </button>
                        <button 
                            onClick={handleSubmit}
                            disabled={loading}
                            className="px-10 py-4 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:grayscale"
                        >
                            {loading ? (
                                <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                            ) : (
                                <>Secure Registration <Plus size={14} /></>
                            )}
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default AddProductModal;
