import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Mail, Trash2, Search, ChevronLeft, RefreshCw,
    Calendar, AlertCircle, CheckCircle, Clock,
    ChevronDown, ChevronUp, Reply, Eye
} from "lucide-react";
import api from "../../services/api";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import ConfirmationModal from "../../components/common/ConfirmationModal";

const AdminContacts = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [expandedId, setExpandedId] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [contactToDelete, setContactToDelete] = useState(null);

    const fetchContacts = async () => {
        try {
            setLoading(true);
            const { data } = await api.get("/contact");
            setContacts(data);
        } catch (error) {
            console.error("Failed to fetch inquiries:", error);
            toast.error("Archive resonance failure: Could not retrieve inquiries.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const handleDelete = (id, e) => {
        if (e) e.stopPropagation();
        setContactToDelete(id);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        if (!contactToDelete) return;
        try {
            await api.delete(`/contact/${contactToDelete}`);
            toast.success("Inquiry deleted successfully");
            setContacts(contacts.filter(c => c._id !== contactToDelete));
        } catch (error) {
            toast.error("Inquiry deletion failure. Security override required.");
        } finally {
            setIsDeleteModalOpen(false);
            setContactToDelete(null);
        }
    };

    const handleUpdateStatus = async (id, status, e) => {
        if (e) e.stopPropagation();
        try {
            await api.put(`/contact/${id}/status`, { status });
            setContacts(contacts.map(c => c._id === id ? { ...c, status } : c));
            if (status === 'replied') {
                toast.success("Inquiry marked as resolved");
            }
        } catch (error) {
            console.error("Status update error:", error);
            toast.error("Signal state update failed.");
        }
    };

    const filteredContacts = contacts.filter(c =>
        c.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.message?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getStatusIcon = (status) => {
        switch (status) {
            case 'unseen': return <Clock size={12} className="text-amber-500" />;
            case 'seen': return <Eye size={12} className="text-blue-500" />;
            case 'replied': return <CheckCircle size={12} className="text-emerald-500" />;
            default: return null;
        }
    };

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-24 px-4 sm:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <Link to="/admin/dashboard" className="flex items-center gap-2 text-zinc-500 hover:text-emerald-500 transition-colors mb-6 group w-fit">
                        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Return to Console</span>
                    </Link>
                    <h2 className="text-emerald-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-2">Archive Records</h2>
                    <h1 className="text-4xl md:text-5xl font-serif">Inquiry Nexus</h1>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative group w-full sm:w-64">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-800 group-focus-within:text-emerald-500 transition-colors" />
                        <input
                            type="text"
                            placeholder="Filter archive..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-zinc-950 border border-zinc-900 rounded-2xl pl-12 pr-4 py-3 text-sm focus:border-emerald-500/50 outline-none transition-all placeholder:text-zinc-800 font-light"
                        />
                    </div>
                    <button
                        onClick={fetchContacts}
                        className="p-3 bg-zinc-950 border border-zinc-900 rounded-2xl hover:bg-zinc-900 transition-all text-zinc-600 hover:text-white"
                        title="Refresh Archive"
                    >
                        <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                {loading ? (
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="bg-zinc-950 border border-zinc-900 rounded-3xl h-24 animate-pulse" />
                        ))}
                    </div>
                ) : filteredContacts.length > 0 ? (
                    <div className="space-y-4">
                        <AnimatePresence>
                            {filteredContacts.map((contact) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={contact._id}
                                    onClick={() => {
                                        setExpandedId(expandedId === contact._id ? null : contact._id);
                                        if (contact.status === 'unseen') handleUpdateStatus(contact._id, 'seen');
                                    }}
                                    className={`group cursor-pointer bg-zinc-950 border transition-all duration-500 rounded-[32px] overflow-hidden ${expandedId === contact._id ? 'border-zinc-700 ring-1 ring-zinc-700' : 'border-zinc-900 hover:border-zinc-800'}`}
                                >
                                    <div className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="flex items-center gap-6">
                                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${contact.status === 'unseen' ? 'bg-amber-500/10 text-amber-500' : 'bg-zinc-900 text-zinc-600'}`}>
                                                <Mail size={20} />
                                            </div>
                                            <div>
                                                <h3 className="font-serif text-xl mb-1">{contact.name}</h3>
                                                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">{contact.email}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-8">
                                            <div className="flex items-center gap-2 px-4 py-2 bg-black/40 rounded-xl border border-zinc-900">
                                                {getStatusIcon(contact.status)}
                                                <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">
                                                    {contact.status}
                                                </span>
                                            </div>

                                            <div className="hidden lg:flex items-center gap-2 text-zinc-600">
                                                <Calendar size={12} />
                                                <span className="text-[10px] font-bold tracking-widest">{new Date(contact.createdAt).toLocaleDateString()}</span>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={(e) => handleDelete(contact._id, e)}
                                                    className="p-3 text-zinc-700 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                                                    title="Delete Inquiry"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                                {expandedId === contact._id ? <ChevronUp size={20} className="text-zinc-700" /> : <ChevronDown size={20} className="text-zinc-700" />}
                                            </div>
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {expandedId === contact._id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="border-t border-zinc-900"
                                            >
                                                <div className="p-12 bg-black/20">
                                                    <div className="max-w-3xl">
                                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-6 block">Transmission Content</span>
                                                        <p className="text-lg text-zinc-300 font-light leading-relaxed mb-12 italic">
                                                            "{contact.message}"
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="text-center py-32 bg-zinc-950/50 rounded-[48px] border border-dashed border-zinc-900">
                        <AlertCircle className="w-12 h-12 text-zinc-800 mx-auto mb-4" />
                        <h3 className="text-xl font-serif text-zinc-500">No transmissions in archive</h3>
                    </div>
                )}
            </div>

            <ConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                title="Delete Inquiry"
                message="Are you sure you want to permanently remove this inquiry from the archive? This action cannot be undone."
                confirmText="Delete Inquiry"
                cancelText="Keep Record"
            />
        </div>
    );
};

export default AdminContacts;
