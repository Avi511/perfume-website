import React, { useState, useEffect } from "react";
import { X, Package, Calendar, MapPin, Phone, CreditCard, ChevronDown, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import api from "../../services/api";
import toast from "react-hot-toast";

const ManageOrdersModal = ({ isOpen, onClose }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [updatingEntry, setUpdatingEntry] = useState(null);

    const fetchOrders = async () => {
        try {
            setLoading(true);
            const { data } = await api.get("/orders/seller");
            setOrders(data);
        } catch (error) {
            console.error("Failed to fetch orders:", error);
            toast.error("Cloud synchronisation failed");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isOpen) fetchOrders();
    }, [isOpen]);

    const handleStatusUpdate = async (orderId, newStatus) => {
        setUpdatingEntry(orderId);
        const loadToast = toast.loading("Updating protocol...");
        try {
            await api.put(`/orders/${orderId}`, { status: newStatus });
            toast.success(`Protocol updated to ${newStatus}`, { id: loadToast });
            fetchOrders();
        } catch (error) {
            toast.error("Operation authority failed", { id: loadToast });
        } finally {
            setUpdatingEntry(null);
        }
    };

    const statusColors = {
        Pending: "text-amber-500 bg-amber-500/5 border-amber-500/20",
        Processing: "text-blue-500 bg-blue-500/5 border-blue-500/20",
        Shipped: "text-purple-500 bg-purple-500/5 border-purple-500/20",
        Delivered: "text-emerald-500 bg-emerald-500/5 border-emerald-500/20",
        Cancelled: "text-rose-500 bg-rose-500/5 border-rose-500/20"
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
                    className="absolute inset-0 bg-black/95 backdrop-blur-md"
                />

                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    className="relative w-full max-w-6xl bg-zinc-950 border border-zinc-900 rounded-[40px] overflow-hidden shadow-2xl flex flex-col h-[85vh]"
                >
                    {/* Header */}
                    <div className="p-8 border-b border-zinc-900 flex items-center justify-between bg-zinc-950/50 backdrop-blur-md sticky top-0 z-10">
                        <div>
                            <h2 className="text-2xl font-serif text-white mb-1">Fulfillment Protocol</h2>
                            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em]">Oversee your olfactory logistics</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-8 custom-scrollbar space-y-6">
                        {loading ? (
                            <div className="flex flex-col items-center justify-center h-64 gap-6">
                                <div className="w-12 h-12 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
                                <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest animate-pulse">Accessing Archive...</p>
                            </div>
                        ) : orders.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-64 text-zinc-600 space-y-4 border border-zinc-900/50 border-dashed rounded-[32px]">
                                <Package size={48} className="opacity-10" />
                                <p className="text-[10px] uppercase tracking-[0.4em] font-black opacity-40">No Logistical Data Found</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-6">
                                {orders.map((order) => (
                                    <div key={order._id} className="bg-white/[0.01] border border-white/[0.05] p-8 rounded-[40px] group hover:border-amber-500/20 transition-all duration-700">
                                        <div className="flex flex-col lg:flex-row justify-between gap-12">
                                            {/* Order Identity & Items */}
                                            <div className="flex-1 space-y-10">
                                                <div className="flex flex-wrap items-center gap-6">
                                                    <div className="px-4 py-2 bg-zinc-900 rounded-xl border border-zinc-800">
                                                        <span className="text-[10px] font-black text-amber-500 tracking-[0.1em]">{order.orderId}</span>
                                                    </div>
                                                    <span className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest border transition-all duration-500 ${statusColors[order.status]}`}>
                                                        {order.status}
                                                    </span>
                                                    <div className="flex items-center gap-3 text-zinc-500">
                                                        <Calendar size={14} className="opacity-40" />
                                                        <span className="text-[10px] font-bold uppercase tracking-widest">
                                                            {new Date(order.createdAt).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {order.product.filter(p => p.belongsToSeller).map((item, idx) => (
                                                        <div key={idx} className="flex items-center gap-5 p-4 bg-zinc-900/40 rounded-3xl border border-white/[0.02] group/item hover:bg-zinc-900/60 transition-all">
                                                            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-black border border-white/5 flex-shrink-0">
                                                                <img
                                                                    src={item.productImage && (item.productImage.startsWith('http') || item.productImage.startsWith('data:'))
                                                                        ? item.productImage
                                                                        : (item.productImage ? `${import.meta.env.VITE_API_URL.replace('/api', '')}${item.productImage}` : "/images/sample.jpg")}
                                                                    alt=""
                                                                    className="w-full h-full object-cover grayscale opacity-40 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-700"
                                                                />
                                                            </div>
                                                            <div className="min-w-0">
                                                                <p className="text-sm font-serif truncate text-white/90 mb-1">{item.productName}</p>
                                                                <p className="text-[9px] text-zinc-600 uppercase font-black tracking-widest">Qty: {item.productQuantity} · Rs. {item.productPrice?.toLocaleString()}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Client Manifest */}
                                            <div className="lg:w-72 space-y-8 bg-zinc-900/20 p-8 rounded-[32px] border border-white/[0.02]">
                                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-700 flex items-center gap-3">
                                                    <div className="w-1 h-1 bg-zinc-700 rounded-full" /> Client Manifest
                                                </h4>
                                                <div className="space-y-6">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-8 h-8 rounded-xl bg-zinc-900 flex items-center justify-center flex-shrink-0 border border-zinc-800">
                                                            <MapPin size={12} className="text-zinc-600" />
                                                        </div>
                                                        <div className="space-y-1">
                                                            <p className="text-[8px] font-black uppercase tracking-widest text-zinc-800">Destination</p>
                                                            <p className="text-xs text-zinc-500 leading-relaxed font-light">{order.address}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-8 h-8 rounded-xl bg-zinc-900 flex items-center justify-center flex-shrink-0 border border-zinc-800">
                                                            <Phone size={12} className="text-zinc-600" />
                                                        </div>
                                                        <div className="space-y-1">
                                                            <p className="text-[8px] font-black uppercase tracking-widest text-zinc-800">Protocol Link</p>
                                                            <p className="text-xs text-zinc-500 font-light">{order.phone}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Action Control */}
                                            <div className="lg:w-80 space-y-8 bg-amber-500/[0.02] p-8 rounded-[32px] border border-amber-500/10">
                                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500/50 flex items-center gap-3">
                                                    <div className="w-1 h-1 bg-amber-500/50 rounded-full" /> Modify Protocol
                                                </h4>
                                                <div className="relative group/select">
                                                    <select
                                                        disabled={updatingEntry === order._id}
                                                        value={order.status}
                                                        onChange={(e) => handleStatusUpdate(order._id, e.target.value)}
                                                        className="w-full bg-zinc-950 border border-zinc-900 rounded-2xl px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-white focus:border-amber-500/50 outline-none appearance-none cursor-pointer disabled:opacity-50 transition-all font-sans"
                                                    >
                                                        {["Pending", "Processing", "Shipped", "Delivered", "Cancelled"].map(s => (
                                                            <option key={s} value={s} className="bg-zinc-950">{s}</option>
                                                        ))}
                                                    </select>
                                                    <ChevronDown size={14} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none group-hover/select:text-amber-500 transition-colors" />
                                                </div>
                                                <div className="flex items-center gap-3 justify-center opacity-40">
                                                    <CheckCircle size={10} className="text-amber-500" />
                                                    <p className="text-[8px] text-zinc-300 uppercase font-black tracking-[0.1em]">Updates Client Archives</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ManageOrdersModal;
