import React, { useState, useEffect } from "react";
import { Package, Calendar, MapPin, Phone, ChevronDown, CheckCircle, Search, Filter, LayoutDashboard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import api from "../../services/api";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AdminOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [updatingEntry, setUpdatingEntry] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const fetchOrders = async () => {
        try {
            setLoading(true);
            const { data } = await api.get("/admin/orders");
            setOrders(data);
        } catch (error) {
            console.error("Failed to fetch orders:", error);
            toast.error("Failed to load orders");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const handleStatusUpdate = async (orderId, newStatus) => {
        setUpdatingEntry(orderId);
        const loadToast = toast.loading("Updating status...");
        try {
            await api.put(`/orders/${orderId}`, { status: newStatus });
            toast.success(`Status updated to ${newStatus}`, { id: loadToast });
            fetchOrders();
        } catch (error) {
            toast.error(error.response?.data?.error || "Update failed", { id: loadToast });
        } finally {
            setUpdatingEntry(null);
        }
    };

    const statusColors = {
        Pending: "text-amber-500 bg-amber-500/5 border-amber-500/20",
        Complete: "text-emerald-500 bg-emerald-500/5 border-emerald-500/20",
        Processing: "text-blue-500 bg-blue-500/5 border-blue-500/20",
        Shipped: "text-purple-500 bg-purple-500/5 border-purple-500/20",
        Delivered: "text-emerald-500 bg-emerald-500/10 border-emerald-500/40",
        Cancelled: "text-rose-500 bg-rose-500/5 border-rose-500/20"
    };

    const filteredOrders = orders.filter(order => {
        const matchesSearch = order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "All" || order.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-24 px-4 sm:px-8 lg:px-12 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Link to="/admin/dashboard" className="p-2 bg-zinc-900 rounded-lg text-zinc-500 hover:text-white transition-all">
                                <LayoutDashboard size={14} />
                            </Link>
                            <span className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px]">
                                Dashboard
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif">All Orders</h1>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-amber-500 transition-colors" size={16} />
                            <input
                                type="text"
                                placeholder="Search orders or emails..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-zinc-950 border border-zinc-900 rounded-2xl pl-12 pr-6 py-4 text-xs text-white focus:border-amber-500/50 outline-none w-64 transition-all"
                            />
                        </div>

                        <div className="relative">
                            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={16} />
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="bg-zinc-950 border border-zinc-900 rounded-2xl pl-12 pr-10 py-4 text-xs text-white focus:border-amber-500/50 outline-none appearance-none cursor-pointer"
                            >
                                {["All", "Pending", "Complete", "Processing", "Shipped", "Delivered", "Cancelled"].map(s => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Content */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center h-96 gap-6">
                        <div className="w-12 h-12 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
                        <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest animate-pulse">
                            Loading orders...
                        </p>
                    </div>
                ) : filteredOrders.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-96 text-zinc-600 space-y-4 border border-zinc-900/50 border-dashed rounded-[48px]">
                        <Package size={48} className="opacity-10" />
                        <p className="text-[10px] uppercase tracking-[0.4em] font-black opacity-40">
                            No orders found
                        </p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {filteredOrders.map((order) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                key={order._id}
                                className="bg-zinc-950 border border-zinc-900 p-8 rounded-[48px] group hover:border-zinc-700/50 transition-all duration-700 relative overflow-hidden"
                            >
                                <div className="flex flex-col lg:flex-row justify-between gap-12 relative z-10">

                                    {/* Left */}
                                    <div className="flex-1 space-y-8">
                                        <div className="flex flex-wrap items-center gap-6">
                                            <div className="px-5 py-2 bg-black rounded-xl border border-zinc-900">
                                                <span className="text-[11px] font-black text-amber-500 tracking-wider">{order.orderId}</span>
                                            </div>

                                            <span className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] border ${statusColors[order.status]}`}>
                                                {order.status}
                                            </span>

                                            <div className="flex items-center gap-3 text-zinc-500">
                                                <Calendar size={14} />
                                                <span className="text-xs font-medium">
                                                    {new Date(order.createdAt).toLocaleDateString()}
                                                </span>
                                            </div>

                                            <div className="text-xs text-zinc-400 font-medium ml-auto lg:ml-0 bg-zinc-900/50 px-4 py-2 rounded-xl border border-white/5">
                                                {order.email}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {order.product.map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-4 p-4 bg-black/40 rounded-[24px] border border-white/5">
                                                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-zinc-900 border border-white/10">
                                                        <img src={item.productImage} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-white">{item.productName}</p>
                                                        <p className="text-[10px] text-zinc-500 uppercase">
                                                            Qty: {item.productQuantity}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right */}
                                    <div className="lg:w-96 flex flex-col gap-6">
                                        <div className="bg-black/40 p-6 rounded-[32px] border border-white/5 space-y-4">
                                            <div className="flex items-start gap-4">
                                                <MapPin size={14} />
                                                <p className="text-xs text-zinc-400">{order.address}</p>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <Phone size={14} />
                                                <p className="text-xs text-zinc-400">{order.phone}</p>
                                            </div>

                                            <div className="pt-4 border-t border-zinc-900 flex justify-between">
                                                <span className="text-[10px] text-zinc-500 uppercase">Total</span>
                                                <span className="text-xl text-white">Rs. {order.totalAmount}</span>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-[10px] text-zinc-600 uppercase ml-4">
                                                Update Status
                                            </label>

                                            <select
                                                value={order.status}
                                                onChange={(e) => handleStatusUpdate(order._id, e.target.value)}
                                                className="w-full bg-black border border-zinc-800 rounded-2xl px-6 py-5 text-white"
                                            >
                                                {["Pending", "Complete", "Processing", "Shipped", "Delivered", "Cancelled"].map(s => (
                                                    <option key={s}>{s}</option>
                                                ))}
                                            </select>

                                            {order.status === "Pending" && (
                                                <p className="text-[8px] text-amber-500 mt-2 ml-4">
                                                    Waiting for seller to complete...
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                <div className="py-12 text-center mt-12 border-t border-zinc-900">
                    <p className="text-zinc-800 text-[10px] uppercase">
                        © Order Management System
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminOrders;