import { motion } from "framer-motion";
import { Lock, Eye, ShieldCheck, Database } from "lucide-react";

function LegalPrivacy() {
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
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500">Security & Integrity</span>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight">Privacy Policy</h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-8"></div>
          </motion.div>
        </header>

        <div className="space-y-20">
          <section className="bg-zinc-950/40 border border-zinc-900 rounded-[40px] p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/[0.02] rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-amber-500">
                  <ShieldCheck size={24} strokeWidth={1} />
                  <h2 className="text-xl font-serif uppercase tracking-widest">Our Commitment</h2>
                </div>
                <p className="text-zinc-500 leading-relaxed font-light">
                  At Élan Fragrance, we treat your personal data with the same reverence we apply to our rare essences. Your privacy is not just a legal obligation; it is a foundational pillar of our luxury service.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zinc-400">
                    <Database size={18} strokeWidth={1} />
                    <h3 className="text-xs font-bold uppercase tracking-widest">Data Collection</h3>
                  </div>
                  <p className="text-[13px] text-zinc-600 font-light leading-relaxed">
                    We only collect information essential for your acquisition process: name, shipping coordinates, and contact details for olfactory consultations.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zinc-400">
                    <Eye size={18} strokeWidth={1} />
                    <h3 className="text-xs font-bold uppercase tracking-widest">Transparency</h3>
                  </div>
                  <p className="text-[13px] text-zinc-600 font-light leading-relaxed">
                    Élan Fragrance never monetizes your data. We do not sell, trade, or share your profile with external marketing entities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-10">
            <div className="flex items-center gap-6 border-b border-zinc-900 pb-6">
               <Lock size={28} strokeWidth={1} className="text-amber-500" />
               <h2 className="text-3xl font-serif">Security Matrix</h2>
            </div>
            <div className="prose prose-invert max-w-none text-zinc-500 font-light space-y-8">
              <p>We implement bank-grade SSL encryption for all digital interactions. Your financial data is processed through industry-leading payment gateways (PayHere, Stripe) and is never stored on Élan’s internal servers.</p>
              
              <div className="bg-zinc-900/40 p-8 rounded-3xl space-y-4">
                <h4 className="text-white text-sm font-bold uppercase tracking-widest">Your Rights</h4>
                <p className="text-xs leading-relaxed">You retain the right to request a full inventory of your data, or its permanent deletion from our olfactory archives, at any time. To exercise these rights, please contact our Data Privacy Officer via the Concierge.</p>
              </div>
              
              <p className="text-[11px] uppercase tracking-widest font-bold text-zinc-700">Effective Date: October 2026</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default LegalPrivacy;
