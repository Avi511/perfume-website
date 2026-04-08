import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    User, Mail, Phone, MapPin, Package,
    ChevronRight, LogOut, Edit2, ShieldCheck,
    Calendar, CreditCard, Lock, Eye, EyeOff
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";

function Profile() {
    const { user: authUser, logout } = useAuth();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [activeTab, setActiveTab] = useState("history"); // history, security

    const [editForm, setEditForm] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        address: ""
    });

    const [passwordForm, setPasswordForm] = useState({
        newPassword: "",
        confirmPassword: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                setLoading(true);
                const { data: profile } = await api.get("/users/profile");
                setUser(profile);
                setEditForm({
                    firstName: profile.firstName || "",
                    lastName: profile.lastName || "",
                    phone: profile.phone || "",
                    address: profile.address || ""
                });

                const { data: orderList } = await api.get("/orders");
                setOrders(orderList);
            } catch (err) {
                console.error("Failed to load profile", err);
                toast.error("Unauthenticated or fetch failed");
                if (err.response?.status === 401) {
                    logout();
                    navigate("/login");
                }
            } finally {
                setLoading(false);
            }
        };

        if (authUser) {
            fetchProfileData();
        } else {
            navigate("/login");
        }
    }, [authUser, navigate, logout]);

    const handleLogout = () => {
        logout();
        toast.success("Signed out successfully");
        navigate("/");
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        const loadToast = toast.loading("Refining your identity...");
        try {
            const { data } = await api.put("/users/profile", editForm);
            setUser(data);
            localStorage.setItem("user", JSON.stringify(data));
            toast.success("Profile updated", { id: loadToast });
            setIsEditing(false);
        } catch (err) {
            toast.error(err.response?.data?.error || "Update failed", { id: loadToast });
        }
    };

    const handleUpdatePassword = async (e) => {
        e.preventDefault();
        if (passwordForm.newPassword !== passwordForm.confirmPassword) {
            return toast.error("Passwords must match");
        }
        if (passwordForm.newPassword.length < 6) {
            return toast.error("Security requires at least 6 characters");
        }

        const loadToast = toast.loading("Securing your account...");
        try {
            await api.put("/users/profile", { password: passwordForm.newPassword });
            toast.success("Password updated successfully", { id: loadToast });
            setPasswordForm({ newPassword: "", confirmPassword: "" });
        } catch (err) {
            toast.error(err.response?.data?.error || "Security update failed", { id: loadToast });
        }
    };

    const statusColors = {
        Pending: "text-amber-500 bg-amber-500/10",
        Processing: "text-blue-500 bg-blue-500/10",
        Shipped: "text-purple-500 bg-purple-500/10",
        Delivered: "text-emerald-500 bg-emerald-500/10",
        Cancelled: "text-rose-500 bg-rose-500/10"
    };

    if (loading && !user) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-6">
                <div className="w-12 h-12 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
                <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.4em] animate-pulse">Initializing Profile...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-24 px-4 sm:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-[32px] text-center backdrop-blur-xl relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full mx-auto mb-6 flex items-center justify-center text-black text-3xl font-serif shadow-2xl uppercase tracking-tighter">
                                    {user?.firstName?.charAt(0)}
                                </div>
                                <h2 className="text-2xl font-serif mb-1 capitalize">{user?.firstName} {user?.lastName}</h2>
                                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Premium Aficionado</p>

                                <div className="space-y-4 text-left border-t border-zinc-800 pt-8">
                                    <div className="flex items-center gap-4 text-zinc-400 group">
                                        <Mail size={14} className="text-zinc-600 group-hover:text-amber-500 transition-colors" />
                                        <span className="text-xs truncate">{user?.email}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-zinc-400 group">
                                        <Phone size={14} className="text-zinc-600 group-hover:text-amber-500 transition-colors" />
                                        <span className="text-xs">{user?.phone}</span>
                                    </div>
                                    <div className="flex items-start gap-4 text-zinc-400 group">
                                        <MapPin size={14} className="text-zinc-600 group-hover:text-amber-500 transition-colors mt-0.5" />
                                        <span className="text-xs leading-relaxed">{user?.address}</span>
                                    </div>
                                </div>

                                <div className="mt-12 flex flex-col gap-3">
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="w-full flex items-center justify-center gap-2 py-4 bg-zinc-800 hover:bg-zinc-700 transition-all rounded-2xl text-[10px] font-bold uppercase tracking-widest"
                                    >
                                        <Edit2 size={12} /> Change Details
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center justify-center gap-2 py-4 bg-rose-500/10 text-rose-500 hover:bg-rose-500/20 transition-all rounded-2xl text-[10px] font-bold uppercase tracking-widest"
                                    >
                                        <LogOut size={12} /> Logout
                                    </button>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        </motion.div>

                        <div className="bg-zinc-950 border border-zinc-900 p-2 rounded-2xl space-y-1">
                            {[
                                { id: 'history', label: 'Scent Archives', icon: Package },
                                { id: 'security', label: 'Change Password', icon: ShieldCheck }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === tab.id ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-zinc-500 hover:bg-zinc-900'}`}
                                >
                                    <tab.icon size={16} /> {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-2"
                    >
                        <AnimatePresence mode="wait">
                            {activeTab === 'history' ? (
                                <motion.div
                                    key="history"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="flex items-center justify-between pb-6 border-b border-zinc-900">
                                        <h2 className="text-3xl font-serif">Past Journeys</h2>
                                        <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">{orders.length} Curated Experiences</p>
                                    </div>

                                    {orders.length === 0 ? (
                                        <div className="py-32 text-center bg-zinc-900/10 rounded-[40px] border border-dashed border-zinc-800">
                                            <Package className="w-12 h-12 text-zinc-800 mx-auto mb-6" />
                                            <h3 className="text-xl font-serif mb-2 text-zinc-400">No Past Journeys</h3>
                                            <button onClick={() => navigate("/products")} className="mt-6 text-amber-500 text-[10px] uppercase font-bold tracking-widest border-b border-amber-500/20 pb-1">Start your journey</button>
                                        </div>
                                    ) : (
                                        <div className="space-y-6">
                                            {orders.map((order) => (
                                                <div key={order.orderId} className="bg-zinc-950 border border-zinc-900 p-8 rounded-[32px] group hover:border-amber-500/20 transition-all duration-500">
                                                    <div className="flex flex-col md:flex-row justify-between gap-8">
                                                        <div className="flex gap-8">
                                                            <div className="w-20 h-20 bg-zinc-900 rounded-2xl overflow-hidden flex-shrink-0 border border-white/5">
                                                                <img 
                                                                    src={order.product[0]?.productImage && (order.product[0].productImage.startsWith('http') || order.product[0].productImage.startsWith('data:'))
                                                                        ? order.product[0].productImage
                                                                        : (order.product[0]?.productImage ? `${import.meta.env.VITE_API_URL.replace('/api', '')}${order.product[0].productImage}` : "/images/sample.jpg")} 
                                                                    alt="" 
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                                                />
                                                            </div>
                                                            <div>
                                                                <div className="flex items-center gap-3 mb-3">
                                                                    <span className="text-[10px] font-black text-amber-500 tracking-widest">{order.orderId}</span>
                                                                    <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${statusColors[order.status] || "bg-zinc-800"}`}>{order.status}</span>
                                                                </div>
                                                                <h4 className="text-xl font-serif mb-2">
                                                                    {order.product.length > 1 ? `${order.product[0]?.productName} & More` : order.product[0]?.productName}
                                                                </h4>
                                                                <div className="flex items-center gap-6 text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
                                                                    <span className="flex items-center gap-2"><Calendar size={12} /> {new Date(order.createdAt).toLocaleDateString()}</span>
                                                                    <span className="flex items-center gap-2"><CreditCard size={12} /> ${order.totalAmount.toLocaleString()}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-end">
                                                            <button className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all">
                                                                <ChevronRight size={20} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="security"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="flex items-center justify-between pb-6 border-b border-zinc-900">
                                        <h2 className="text-3xl font-serif">Change Password</h2>
                                        <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Last updated: Just now</p>
                                    </div>

                                    <div className="bg-zinc-950 border border-zinc-900 p-10 rounded-[40px] space-y-10">
                                        <div className="flex items-start gap-8">
                                            <div className="w-16 h-16 bg-amber-500/5 rounded-2xl flex items-center justify-center text-amber-500">
                                                <Lock size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-serif mb-2 text-white/90">Authentication Security</h3>
                                                <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">Ensure your scent journey remains exclusive. We recommend a complex signature for maximum protection.</p>
                                            </div>
                                        </div>

                                        <form onSubmit={handleUpdatePassword} className="space-y-6 max-w-sm">
                                            <div className="space-y-2">
                                                <label className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest ml-1">New Signature Password</label>
                                                <div className="relative">
                                                    <input
                                                        type={showPassword ? "text" : "password"}
                                                        value={passwordForm.newPassword}
                                                        onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                                                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-sm focus:border-amber-500 outline-none transition-all placeholder:text-zinc-800"
                                                        placeholder="••••••••"
                                                    />
                                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-700 hover:text-zinc-400 transition-colors">
                                                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest ml-1">Verify Signature</label>
                                                <input
                                                    type="password"
                                                    value={passwordForm.confirmPassword}
                                                    onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                                                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-sm focus:border-amber-500 outline-none transition-all placeholder:text-zinc-800"
                                                    placeholder="••••••••"
                                                />
                                            </div>
                                            <button type="submit" className="w-full py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-amber-500 transition-all font-serif">Authorize Change</button>
                                        </form>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>

            {/* Modal Edit Identity */}
            <AnimatePresence>
                {isEditing && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center px-4 backdrop-blur-2xl bg-black/80"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-zinc-900 border border-zinc-800 w-full max-w-xl p-10 rounded-[40px] relative shadow-2xl"
                        >
                            <button onClick={() => setIsEditing(false)} className="absolute top-8 right-8 text-zinc-600 hover:text-white"><ChevronRight size={24} className="rotate-180" /></button>
                            <h3 className="text-3xl font-serif mb-2">Refine Identity</h3>
                            <p className="text-zinc-500 text-sm mb-10">Adjust your details for a tailored fragrance journey.</p>

                            <form onSubmit={handleUpdateProfile} className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">First Name</label>
                                        <input type="text" value={editForm.firstName} onChange={(e) => setEditForm({ ...editForm, firstName: e.target.value })} className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-sm focus:border-amber-600 outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Last Name</label>
                                        <input type="text" value={editForm.lastName} onChange={(e) => setEditForm({ ...editForm, lastName: e.target.value })} className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-sm focus:border-amber-600 outline-none transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Phone</label>
                                    <input type="text" value={editForm.phone} onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })} className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-sm focus:border-amber-600 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Address</label>
                                    <textarea rows={3} value={editForm.address} onChange={(e) => setEditForm({ ...editForm, address: e.target.value })} className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-sm focus:border-amber-600 outline-none transition-all resize-none" />
                                </div>
                                <button type="submit" className="w-full py-5 bg-amber-600 text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-amber-500 transition-all font-serif">Seal Identity</button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Profile;
