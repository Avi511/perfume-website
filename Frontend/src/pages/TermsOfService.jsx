import { motion } from "framer-motion";
import { Scale, FileText, AlertCircle, CheckCircle2 } from "lucide-react";

function TermsOfService() {
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
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500">Legal Agreement</span>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight">Terms of Service</h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-8"></div>
          </motion.div>
        </header>

        <div className="space-y-20">
          <section className="space-y-12">
            <div className="flex items-center gap-4 text-amber-500">
              <Scale size={24} strokeWidth={1} />
              <h2 className="text-xl font-serif uppercase tracking-widest">Master Service Agreement</h2>
            </div>
            <div className="prose prose-invert max-w-none text-zinc-500 font-light space-y-8">
              <p>By interacting with the Élan Fragrance digital boutique, you acknowledge and agree to the following protocols, established to maintain the integrity of our craftsmanship and your client experience.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-zinc-950/50 p-8 rounded-3xl border border-zinc-900 group hover:border-amber-500/30 transition-all">
                  <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">1. Product Authenticity</h3>
                  <p className="text-[12px] leading-relaxed italic">All items purchased via elanfragrance.com are guaranteed authentic masterworks. Reselling our products as new on third-party platforms is strictly prohibited by our brand protocol.</p>
                </div>
                <div className="bg-zinc-950/50 p-8 rounded-3xl border border-zinc-900 group hover:border-amber-500/30 transition-all">
                  <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">2. Acquisition Protocol</h3>
                  <p className="text-[12px] leading-relaxed italic">We reserve the right to refuse service or cancel orders that exhibit suspicious activity or unauthorized bulk acquisition behaviors.</p>
                </div>
              </div>

              <div className="space-y-8 py-10">
                <div className="flex gap-6 items-start">
                  <FileText className="text-amber-500 flex-shrink-0" size={20} strokeWidth={1} />
                  <div>
                    <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-2">3. Intellectual Property</h4>
                    <p className="text-sm">The Élan brand, scent formulations, visual assets, and narrative content are protected by international copyright and industrial design laws. Any unauthorized reproduction is subject to legal action.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <AlertCircle className="text-amber-500 flex-shrink-0" size={20} strokeWidth={1} />
                  <div>
                    <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-2">4. Client Responsibility</h4>
                    <p className="text-sm">You are responsible for maintaining the confidentiality of your Élan Profile. Any acquisition made via your authenticated identity is considered a binding agreement.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="pt-20 text-center space-y-6">
            <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={24} className="text-emerald-500" />
            </div>
            <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.4em]">By using our platform, you accept these global protocols.</p>
            <p className="text-[9px] text-zinc-800 uppercase tracking-widest">Last Modified: October 08, 2026</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
