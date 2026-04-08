import { motion } from "framer-motion";
import { RotateCcw, PackageCheck, AlertTriangle, CheckCircle2, ShoppingCart, RefreshCcw } from "lucide-react";
import refundHero from "../assets/refund_hero.png";

function RefundPolicy() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30">
      {/* SECTION 1: DARK HERO */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img src={refundHero} className="w-full h-full object-cover" alt="Refunds" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-amber-500">Exchanges & Resolves</span>
            <h1 className="text-6xl md:text-8xl font-serif leading-none tracking-tighter">
              Graceful <br /> <span className="italic font-light">Returns</span>
            </h1>
            <div className="w-12 h-px bg-amber-500/50 mx-auto"></div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[8px] uppercase tracking-[0.4em] font-bold">Refund Policy</span>
          <ShoppingCart size={16} className="animate-pulse" />
        </motion.div>
      </section>

      {/* SECTION 2: WHITE BACKGROUND */}
      <section className="bg-white text-zinc-900 py-32 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
             <div className="flex items-center gap-4 text-amber-600">
                <RotateCcw size={24} strokeWidth={1} />
                <h2 className="text-xs font-bold uppercase tracking-[0.4em]">Protocol</h2>
             </div>
             <h3 className="text-4xl md:text-6xl font-serif text-black leading-tight">Artisanal <br /> Reciprocity</h3>
             <p className="text-zinc-600 font-light leading-relaxed text-lg">
               Due to the intimate and artisanal nature of fragrance formulations, we can only accept returns of items that remain in their **original, unopened, and sealed box-wrap**. Once the protective cellophane or seal is compromised, the scent is considered "acquired" and cannot be returned for hygiene and oxidation reasons.
             </p>
          </div>
          
          <div className="space-y-6 bg-zinc-50 p-12 rounded-[60px] border border-zinc-100">
             <div className="flex items-center gap-4 text-emerald-600">
                <CheckCircle2 size={24} strokeWidth={1} />
                <h4 className="text-xs font-bold uppercase tracking-widest">Eligible Criteria</h4>
             </div>
             <ul className="space-y-6">
                {[
                  "Unopened masterwork with intact seal",
                  "Requests within 14 days of delivery",
                  "Original receipt or digital confirmation"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-widest text-zinc-500">
                    <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                    {item}
                  </li>
                ))}
             </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3: DARK BACKGROUND (PROCESS) */}
      <section className="bg-black text-white py-32 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-20">
           <div className="flex flex-col items-center text-center space-y-6">
              <PackageCheck size={48} strokeWidth={1} className="text-amber-500" />
              <h2 className="text-4xl font-serif">Refund Process</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group p-10 bg-zinc-950 border border-zinc-900 rounded-[40px] hover:border-amber-500/30 transition-all duration-700">
                 <RefreshCcw className="text-zinc-700 mb-6 group-hover:rotate-180 transition-transform duration-1000" size={32} strokeWidth={1} />
                 <h4 className="text-lg font-serif mb-4">Inspection</h4>
                 <p className="text-zinc-500 text-sm leading-relaxed font-light font-sans">
                   Once your return is received at our boutique center, we will notify you of the approval or rejection of your refund within 5 business days.
                 </p>
              </div>
              <div className="group p-10 bg-zinc-950 border border-zinc-900 rounded-[40px] hover:border-amber-500/30 transition-all duration-700">
                 <div className="w-8 h-8 rounded-full border border-zinc-700 mb-6 group-hover:border-amber-500 transition-colors flex items-center justify-center">
                    <span className="text-[10px] font-bold">10</span>
                 </div>
                 <h4 className="text-lg font-serif mb-4">Resolution</h4>
                 <p className="text-zinc-500 text-sm leading-relaxed font-light font-sans">
                    A credit will be applied to your original method of payment within 5-10 business days. Note: Initial shipping costs are non-reversible.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 4: WHITE BACKGROUND (WARNING) */}
      <section className="bg-white py-32 px-4">
         <div className="max-w-2xl mx-auto bg-amber-50/50 border border-amber-100/50 p-12 rounded-[48px] text-center space-y-6">
            <AlertTriangle className="mx-auto text-amber-600" size={32} strokeWidth={1} />
            <h3 className="text-xl font-serif text-black italic">Ineligible Items</h3>
            <p className="text-zinc-500 text-xs uppercase tracking-widest leading-relaxed">
               Samples or individual testing vials | Items with compromised sealant | Bespoke formulations
            </p>
         </div>
      </section>

      <footer className="footer bg-black py-20 text-center border-t border-zinc-900">
         <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.4em]">Graceful Exchanges</p>
      </footer>
    </div>
  );
}

export default RefundPolicy;
