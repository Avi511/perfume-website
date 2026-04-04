import { motion } from "framer-motion";
import {
    Package, Users, ShoppingBag, PlusCircle,
    ArrowUpRight, LayoutDashboard, Search, LogOut,
    DollarSign, Activity, TrendingUp
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";

const AdminDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [statsData, setStatsData] = useState({
        totalProducts: 0,
        totalUsers: 0,
        pendingOrders: 0,
        totalOrders: 0,
        totalRevenue: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                setLoading(true);
                const { data } = await api.get("/admin/stats");
                if (data.success) {
                    setStatsData(data.stats);
                }
            } catch (error) {
                console.error("Failed to fetch admin stats:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const stats = [
        {
            label: "Total Products",
            value: statsData.totalProducts,
            icon: Package,
            color: "text-amber-500",
            bg: "bg-amber-500/10",
        },
        {
            label: "Total Users",
            value: statsData.totalUsers,
            icon: Users,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
        },
    ];

    const actions = [
        { title: "Manage Products", desc: "Add, edit or move your inventory across the store.", icon: PlusCircle, path: "/admin/products" },
        { title: "User Insights", desc: "Monitor customer behavior and manage authentication levels.", icon: Users, path: "/admin/users" },
    ];

    return (
        <div className="min-h-screen bg-black text-white pt-24 px-4 sm:px-8 lg:px-12">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-2 block"
                    >
                        Management Console
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-serif"
                    >
                        Welcome Back, {user?.firstName}
                    </motion.h1>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-zinc-950 border border-zinc-900 p-8 rounded-[32px] group hover:border-zinc-700/50 transition-all duration-500 relative overflow-hidden shadow-2xl"
                    >
                        <div className="relative z-10">
                            <div className="flex items-start justify-between mb-8">
                                <div className={`${stat.bg} ${stat.color} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-500`}>
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                {stat.trend && (
                                    <div className="flex items-center gap-1.5 text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-tight">
                                        <ArrowUpRight className="w-3 h-3" />
                                        {stat.trend}
                                    </div>
                                )}
                            </div>
                            <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{stat.label}</p>
                            <h3 className="text-4xl font-serif text-white tracking-tight">
                                {loading ? (
                                    <span className="w-24 h-8 bg-zinc-900 animate-pulse block rounded"></span>
                                ) : (
                                    stat.value
                                )}
                            </h3>
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/[0.02] rounded-full blur-2xl group-hover:bg-white/[0.04] transition-all duration-700"></div>
                    </motion.div>
                ))}
            </div>

            {/* Content Area */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Actions */}
                <div className="lg:col-span-2 space-y-8">
                    <h2 className="text-xl font-serif text-white/90 flex items-center gap-3">
                        <LayoutDashboard className="w-5 h-5 text-amber-500" />
                        Operational Hotkeys
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {actions.map((action, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + idx * 0.1 }}
                                className="bg-zinc-950 border border-zinc-900 p-6 rounded-2xl hover:bg-zinc-900/30 transition-all cursor-pointer group relative overflow-hidden"
                            >
                                <div className="relative z-10">
                                    <action.icon className="w-8 h-8 text-amber-500/50 group-hover:text-amber-500 mb-6 transition-colors" />
                                    <h3 className="text-lg font-serif mb-2">{action.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed">{action.desc}</p>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/[0.02] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-amber-500/[0.05] transition-all"></div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="bg-zinc-950 border border-dashed border-zinc-800 p-12 rounded-3xl text-center">
                        <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 text-zinc-600">
                            <Search className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-serif text-white/40 mb-2 uppercase tracking-widest">Inventory Log</h3>
                        <p className="text-zinc-700 text-sm italic">Historical audit data is currently being archived.</p>
                    </div>
                </div>

                {/* Sidebar Details */}
                <aside className="space-y-8">
                    <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-8 rounded-3xl relative overflow-hidden">
                        <h3 className="text-lg font-serif mb-6 relative z-10">System Status</h3>
                        <div className="space-y-6 relative z-10">
                            {[
                                { label: "API Connectivity", status: "Healthy", color: "bg-emerald-500" },
                                { label: "Cloud Sync", status: "Active", color: "bg-emerald-500" },
                                { label: "Database Latency", status: "14ms", color: "bg-amber-500" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between">
                                    <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest">{item.label}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-medium">{item.status}</span>
                                        <div className={`w-2 h-2 ${item.color} rounded-full animate-pulse`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="absolute top-0 right-0 w-full h-full bg-amber-500/[0.01] pointer-events-none"></div>
                    </div>

                    <Link
                        to="/products"
                        className="flex items-center justify-between p-6 bg-zinc-900/10 border border-zinc-900 rounded-2xl group hover:border-amber-500/20 transition-all"
                    >
                        <div>
                            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Store Front</p>
                            <p className="text-sm">Preview Website</p>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-zinc-700 group-hover:text-amber-500 transition-colors" />
                    </Link>
                </aside>
            </div>

            <div className="py-12 border-t border-zinc-900 mt-24 text-center">
                <p className="text-zinc-800 text-[10px] font-bold uppercase tracking-[0.5em]">&copy; Élan Fragrance Masterworks &middot; Admin Protocol 4.2.1</p>
            </div>
        </div>
    );
};

export default AdminDashboard;
