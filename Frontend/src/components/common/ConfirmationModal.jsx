import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, X } from "lucide-react";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message, confirmText = "Confirm", cancelText = "Cancel", type = "danger" }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/90 backdrop-blur-md"
                ></motion.div>
                
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    className="relative bg-zinc-950 border border-zinc-900 w-full max-w-md rounded-[40px] p-10 overflow-hidden shadow-2xl"
                >
                    <button 
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 text-zinc-500 hover:text-white transition-colors"
                    >
                        <X size={20} />
                    </button>

                    <div className="flex flex-col items-center text-center">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                            type === "danger" ? "bg-red-500/10 text-red-500" : "bg-amber-500/10 text-amber-500"
                        }`}>
                            <AlertCircle size={32} />
                        </div>
                        
                        <h3 className="text-2xl font-serif mb-3 text-white">{title}</h3>
                        <p className="text-zinc-500 text-sm mb-10 leading-relaxed font-sans">
                            {message}
                        </p>

                        <div className="flex gap-4 w-full">
                            <button
                                onClick={onClose}
                                className="flex-1 py-4 border border-zinc-900 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white/5 transition-all text-zinc-400"
                            >
                                {cancelText}
                            </button>
                            <button
                                onClick={onConfirm}
                                className={`flex-1 py-4 text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl transition-all ${
                                    type === "danger" 
                                        ? "bg-red-600 text-white hover:bg-red-700 shadow-[0_10px_20px_-10px_rgba(220,38,38,0.5)]" 
                                        : "bg-white text-black hover:bg-zinc-200"
                                }`}
                            >
                                {confirmText}
                            </button>
                        </div>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ConfirmationModal;
