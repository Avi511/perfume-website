import { motion, AnimatePresence } from "framer-motion";
import {
    Package, ShoppingBag, PlusCircle,
    ArrowUpRight, LayoutDashboard, Search,
    DollarSign, Activity, TrendingUp, ShieldCheck, Mail, Phone, MapPin, List
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";
import AddProductModal from "./AddProductModal";
import ManageOrdersModal from "./ManageOrdersModal";

const SellerDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [statsData, setStatsData] = useState({
        totalProducts: 0,
        pendingOrders: 0,
        totalRevenue: 0
    });
    const [loading, setLoading] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showOrdersModal, setShowOrdersModal] = useState(false);

    const fetchSellerData = async () => {
        try {
            setLoading(true);
            const { data } = await api.get(`/products?seller=${user._id}`);
            setStatsData({
                totalProducts: data.length || 0,
                pendingOrders: 0,
                totalRevenue: 0
            });
        } catch (error) {
            console.error("Failed to fetch seller context:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user?._id) {
            fetchSellerData();
        }
    }, [user?._id]);


    const stats = [
        {
            label: "Your Inventory",
            value: statsData.totalProducts,
            icon: Package,
            color: "text-amber-500",
            bg: "bg-amber-500/10",
        },
        {
            label: "Awaiting Fulfillment",
            value: statsData.pendingOrders,
            icon: ShoppingBag,
            color: "text-indigo-500",
            bg: "bg-indigo-500/10",
        },
        {
            label: "Total Earnings",
            value: `Rs. ${statsData.totalRevenue.toLocaleString()}`,
            icon: DollarSign,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-24 px-4 sm:px-8 lg:px-12">

            <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-center justify-between gap-12">
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-serif"
                    >
                        Seller Dashboard
                    </motion.h1>
                    <p className="text-zinc-500 text-sm mt-4 font-sans italic opacity-70">Welcome back to your atelier, {user?.firstName}.</p>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => logout()}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-950 border border-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all text-[10px] font-bold uppercase tracking-widest"
                    >
                        Log out
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto space-y-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-zinc-950 border border-zinc-900 p-8 rounded-[40px] group hover:border-zinc-700/50 transition-all duration-500 relative overflow-hidden shadow-2xl"
                        >
                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-8">
                                    <div className={`${stat.bg} ${stat.color} p-4 rounded-2xl`}>
                                        <stat.icon className="w-6 h-6" />
                                    </div>
                                    <TrendingUp className="w-4 h-4 text-zinc-800" />
                                </div>
                                <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{stat.label}</p>
                                <h3 className="text-4xl font-serif tracking-tight">
                                    {loading ? "---" : stat.value}
                                </h3>
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/[0.01] rounded-full blur-3xl group-hover:bg-white/[0.03] transition-all duration-700"></div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <h2 className="text-xl font-serif text-white/90 flex items-center gap-3">
                            <Activity className="w-5 h-5 text-amber-500" />
                            Inventory & Sales Protocol
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                whileHover={{ y: -5 }}
                                onClick={() => setShowAddModal(true)}
                                className="bg-zinc-950 border border-zinc-900 p-10 rounded-[40px] group relative overflow-hidden cursor-pointer"
                            >
                                <PlusCircle size={32} className="text-amber-500/30 group-hover:text-amber-500 mb-8 transition-all" />
                                <h3 className="text-2xl font-serif mb-2 text-white">Add Products</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed mb-8">Add new products to your store.</p>
                                <button className="text-[10px] font-black uppercase tracking-[0.3em] text-white flex items-center gap-2 group-hover:gap-4 transition-all">
                                    Initialize <ArrowUpRight size={14} />
                                </button>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/[0.02] rounded-full blur-3xl"></div>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                onClick={() => setShowOrdersModal(true)}
                                className="bg-zinc-950 border border-zinc-900 p-10 rounded-[40px] group relative overflow-hidden cursor-pointer"
                            >
                                <ShoppingBag size={32} className="text-indigo-500/30 group-hover:text-indigo-500 mb-8 transition-all" />
                                <h3 className="text-2xl font-serif mb-2 text-white">Manage Orders</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                                    Track status and manage fulfillment protocols for your sales.
                                </p>
                                <button className="text-[10px] font-black uppercase tracking-[0.3em] text-white flex items-center gap-2 group-hover:gap-4 transition-all">
                                    Open Logistics <ArrowUpRight size={14} />
                                </button>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/[0.02] rounded-full blur-3xl"></div>
                            </motion.div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer Tag */}
            <div className="py-12 border-t border-zinc-900 mt-24 text-center">
                <p className="text-zinc-800 text-[10px] font-bold uppercase tracking-[0.5em]">&copy; Élan Partner Protocol &middot; Secure Handshake 1.0.4</p>
            </div>

            <AddProductModal
                isOpen={showAddModal}
                onClose={() => setShowAddModal(false)}
                onSuccess={fetchSellerData}
            />

            <ManageOrdersModal
                isOpen={showOrdersModal}
                onClose={() => setShowOrdersModal(false)}
            />
        </div>
    );
};

export default SellerDashboard;
