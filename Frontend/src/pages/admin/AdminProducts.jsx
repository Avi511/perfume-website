import { motion, AnimatePresence } from "framer-motion";
import {
    Package, ArrowLeft, Search, PlusCircle,
    MoreVertical, Trash2, Edit3, Eye, Filter, Download
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";

const AdminProducts = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const { data } = await api.get("/admin/products");
                setProducts(data);
            } catch (error) {
                toast.error("Failed to fetch inventory vault.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you certain you wish to purge this artifact from the collection?")) return;
        const loadToast = toast.loading("Purging artifact...");
        try {
            await api.delete(`/admin/products/${id}`);
            toast.success("Artifact removed from global collection.", { id: loadToast });
            setProducts(products.filter(p => p._id !== id));
        } catch (error) {
            toast.error("Destruction failed. Check permissions.", { id: loadToast });
        }
    };

    const filteredProducts = products.filter(p =>
        p.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.productId.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-24 px-4 sm:px-8 lg:px-12 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <Link to="/admin/dashboard" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-all text-xs font-black uppercase tracking-[0.3em] mb-6 mb-8 group">
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
                        </Link>
                        <h1 className="text-5xl font-serif leading-tight">Inventory Control</h1>
                        <p className="text-zinc-500 text-sm mt-4 italic opacity-70">Overseeing the global Élan fragrance collection artifacts.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-hover:text-amber-500 transition-colors" size={16} />
                            <input
                                type="text"
                                placeholder="Search inventory..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-zinc-950 border border-zinc-900 rounded-2xl pl-12 pr-6 py-4 text-sm w-full md:w-80 focus:border-amber-500 outline-none transition-all placeholder:text-zinc-800"
                            />
                        </div>
                        <button className="p-4 bg-zinc-950 border border-zinc-900 rounded-2xl text-zinc-500 hover:text-white transition-all shadow-xl">
                            <Filter size={20} />
                        </button>
                    </div>
                </div>

                {/* Statistics Banner */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {[
                        { label: "Total Artifacts", value: products.length },
                        { label: "Critical Stock", value: products.filter(p => p.productQuantity < 5).length },
                        { label: "Premium Tier", value: products.filter(p => p.productPrice > 5000).length },
                        { label: "System Sync", value: "Verified" }
                    ].map((s, i) => (
                        <div key={i} className="bg-zinc-950 border border-zinc-900 p-6 rounded-[32px] text-center">
                            <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] mb-1">{s.label}</p>
                            <p className="text-xl font-serif text-white">{s.value}</p>
                        </div>
                    ))}
                </div>

                {/* Inventory Table */}
                <div className="bg-zinc-950 border border-zinc-900 rounded-[48px] overflow-hidden shadow-2xl relative">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-zinc-900 text-[10px] text-zinc-600 font-black uppercase tracking-[0.3em]">
                                    <th className="px-10 py-8">Reference</th>
                                    <th className="px-10 py-8">Product Master</th>
                                    <th className="px-10 py-8">Financial Value</th>
                                    <th className="px-10 py-8">Atelier Stock</th>
                                    <th className="px-10 py-8">Status</th>
                                    <th className="px-10 py-8 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-900/50">
                                <AnimatePresence mode="popLayout">
                                    {loading ? (
                                        [...Array(5)].map((_, i) => (
                                            <tr key={i} className="animate-pulse">
                                                <td colSpan="6" className="px-10 py-6"><div className="h-4 bg-zinc-900/50 rounded w-full"></div></td>
                                            </tr>
                                        ))
                                    ) : filteredProducts.map((p) => (
                                        <motion.tr
                                            key={p._id}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="group hover:bg-white/[0.02] transition-colors"
                                        >
                                            <td className="px-10 py-6 text-[10px] font-black text-zinc-500 font-mono tracking-widest">{p.productId}</td>
                                            <td className="px-10 py-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-zinc-900 rounded-xl overflow-hidden border border-white/5">
                                                        <img 
                                                            src={p.productImage && (p.productImage.startsWith('http') || p.productImage.startsWith('data:'))
                                                                ? p.productImage
                                                                : (p.productImage ? `${import.meta.env.VITE_API_URL.replace('/api', '')}${p.productImage}` : "/images/sample.jpg")} 
                                                            alt="" 
                                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-white/90">{p.productName}</p>
                                                        <p className="text-[10px] text-zinc-600 uppercase tracking-widest">Perfumes Registry</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-10 py-6 text-sm font-medium font-serif">Rs. {p.productPrice.toLocaleString()}</td>
                                            <td className="px-10 py-6">
                                                <span className={`text-xs font-bold ${p.productQuantity < 10 ? 'text-amber-500' : 'text-zinc-400'}`}>
                                                    {p.productQuantity} Reserved
                                                </span>
                                            </td>
                                            <td className="px-10 py-6">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">In Collection</span>
                                                </div>
                                            </td>
                                            <td className="px-10 py-6 text-right">
                                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button className="p-3 bg-zinc-900 hover:bg-amber-600 hover:text-white rounded-xl transition-all" title="View Detail">
                                                        <Eye size={14} />
                                                    </button>
                                                    <button className="p-3 bg-zinc-900 hover:bg-white hover:text-black rounded-xl transition-all" title="Edit Artifact">
                                                        <Edit3 size={14} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(p._id)}
                                                        className="p-3 bg-zinc-900 hover:bg-red-600 hover:text-white rounded-xl transition-all"
                                                        title="Purge Artifact"
                                                    >
                                                        <Trash2 size={14} />
                                                    </button>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </AnimatePresence>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProducts;
