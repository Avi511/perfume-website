import { motion } from "framer-motion";
import { RotateCcw, PackageCheck, AlertTriangle, CheckCircle2 } from "lucide-react";

function RefundPolicy() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-4 sm:px-8 lg:px-12 font-sans selection:bg-amber-500/30">
      <div className="max-w-4xl mx-auto">
        <header className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500">Exchanges & Resolves</span>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight">Refund Policy</h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-8"></div>
          </motion.div>
        </header>

        <div className="space-y-20 relative">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

          <section className="bg-zinc-950/40 border border-zinc-900 rounded-[40px] p-10 md:p-16 space-y-12">
             <div className="flex flex-col md:flex-row gap-12 items-start">
               <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center flex-shrink-0 border border-zinc-800">
                 <RotateCcw className="text-amber-500" size={28} strokeWidth={1} />
               </div>
               <div className="space-y-6">
                 <h2 className="text-2xl font-serif">Returns Protocol</h2>
                 <p className="text-zinc-500 leading-relaxed font-light">
                   Due to the intimate and artisanal nature of fragrance formulations, we can only accept returns of items that remain in their **original, unopened, and sealed box-wrap**. Once the protective cellophane or seal is compromised, the scent is considered "acquired" and cannot be returned for hygiene and oxidation reasons.
                 </p>
               </div>
             </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/40 border border-zinc-800 p-10 rounded-[32px] space-y-6">
              <div className="flex items-center gap-3 text-amber-500">
                <CheckCircle2 size={20} strokeWidth={1.5} />
                <h3 className="text-xs font-bold uppercase tracking-[0.2em]">Eligible for Return</h3>
              </div>
              <ul className="text-xs text-zinc-500 space-y-4 font-light leading-relaxed">
                <li className="flex gap-3"><span>&middot;</span> Unopened masterwork with intact seal.</li>
                <li className="flex gap-3"><span>&middot;</span> Requests made within 14 days of delivery.</li>
                <li className="flex gap-3"><span>&middot;</span> Original receipt or digital confirmation.</li>
              </ul>
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800 p-10 rounded-[32px] space-y-6">
              <div className="flex items-center gap-3 text-rose-500">
                <AlertTriangle size={20} strokeWidth={1.5} />
                <h3 className="text-xs font-bold uppercase tracking-[0.2em]">Ineligible</h3>
              </div>
              <ul className="text-xs text-zinc-500 space-y-4 font-light leading-relaxed">
                <li className="flex gap-3"><span>&middot;</span> Samples or individual testing vials.</li>
                <li className="flex gap-3"><span>&middot;</span> Items with compromised exterior sealant.</li>
                <li className="flex gap-3"><span>&middot;</span> "Final Batch" or bespoke formulations.</li>
              </ul>
            </div>
          </div>

          <section className="space-y-10">
            <div className="flex items-center gap-6 border-b border-zinc-900 pb-6">
               <PackageCheck size={28} strokeWidth={1} className="text-amber-500" />
               <h2 className="text-3xl font-serif">Refund Process</h2>
            </div>
            <div className="prose prose-invert max-w-none text-zinc-500 font-light space-y-6">
              <p>Once your return is received and inspected at our boutique center, we will notify you of the approval or rejection of your refund. Should it be approved, a credit will be applied to your original method of payment within 5-10 business days.</p>
              <div className="bg-amber-600/5 border border-amber-600/10 p-6 rounded-2xl italic text-[11px] leading-relaxed">
                Note: Initial shipping costs are non-reversible and will be deducted from your final refund amount.
              </div>
            </div>
          </section>

          <footer className="pt-20 text-center">
             <button className="px-12 py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-amber-600 hover:text-white transition-all shadow-xl shadow-white/5">
                Initiate a Resolve
             </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default RefundPolicy;
