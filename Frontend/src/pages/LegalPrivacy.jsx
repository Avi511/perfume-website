import { motion } from "framer-motion";
import { Lock, Eye, ShieldCheck, Database, ScrollText, CheckCircle } from "lucide-react";
import privacyHero from "../assets/privacy_hero.png";

function LegalPrivacy() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30">
      {/* SECTION 1: DARK HERO */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-zinc-900">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img src={privacyHero} className="w-full h-full object-cover" alt="Privacy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-amber-500">Security & Integrity</span>
            <h1 className="text-6xl md:text-8xl font-serif leading-none tracking-tighter">
              Private <br /> <span className="italic font-light">Sanctuary</span>
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
          <span className="text-[8px] uppercase tracking-[0.4em] font-bold">Privacy Matrix</span>
          <ScrollText size={16} className="animate-pulse" />
        </motion.div>
      </section>

      {/* SECTION 2: WHITE BACKGROUND */}
      <section className="bg-white text-zinc-900 py-32 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="flex items-center gap-4 text-amber-600">
               <ShieldCheck size={28} strokeWidth={1} />
               <h2 className="text-sm font-bold uppercase tracking-[0.4em]">Our Commitment</h2>
            </div>
            <h3 className="text-4xl md:text-6xl font-serif leading-tight text-black">Your data is as <br /> rare as our essences.</h3>
            <p className="text-zinc-600 leading-relaxed font-light text-xl">
              At Élan Fragrance, we treat your personal data with the same reverence we apply to our rare ingredients. Your privacy is not just a legal obligation; it is a foundational pillar of our luxury service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Database, title: "Data Collection", text: "We only collect essential details: name, coordinates, and contact for consultations." },
              { icon: Eye, title: "Transparency", text: "Élan Fragrance never monetizes your data. We do not sell or trade your profile." }
            ].map((item, i) => (
              <div key={i} className="bg-zinc-50 p-10 rounded-[40px] border border-zinc-100 space-y-6 group hover:bg-black hover:text-white transition-all duration-700">
                 <item.icon size={32} strokeWidth={1} className="text-amber-600 group-hover:text-amber-500 transition-colors" />
                 <h4 className="text-xs font-black uppercase tracking-widest">{item.title}</h4>
                 <p className="text-sm leading-relaxed opacity-70 font-light">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: BLACK BACKGROUND */}
      <section className="bg-black text-white py-32 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="flex flex-col items-center text-center space-y-6">
             <Lock size={48} strokeWidth={1} className="text-amber-500" />
             <h2 className="text-4xl md:text-6xl font-serif">Security Matrix</h2>
             <p className="text-zinc-500 text-sm italic uppercase tracking-[0.3em]">Encrypted Interactions</p>
          </div>
          
          <div className="prose prose-invert max-w-none space-y-12">
            <p className="text-zinc-300 text-lg font-light leading-relaxed text-center py-10 border-y border-zinc-900">
              We implement bank-grade SSL encryption for all digital interactions. Your financial data is processed through industry-leading payment gateways (PayHere, Stripe) and is never stored on Élan’s internal servers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-6">
                 <h4 className="text-amber-500 text-xs font-bold uppercase tracking-widest">Digital Sovereignty</h4>
                 <p className="text-zinc-400 text-sm leading-relaxed font-light font-sans">
                   Every digital touchpoint is monitored by our security concierge to prevent unauthorized access to your private curation history.
                 </p>
               </div>
               <div className="space-y-6">
                 <h4 className="text-amber-500 text-xs font-bold uppercase tracking-widest">Global Compliance</h4>
                 <p className="text-zinc-400 text-sm leading-relaxed font-light font-sans">
                   We adhere to GDPR and international privacy frameworks, ensuring your rights are protected across all territorial boundaries.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHITE BACKGROUND (RIGHTS) */}
      <section className="bg-white text-zinc-900 py-32 px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto bg-zinc-950 text-white rounded-[60px] p-12 md:p-24 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-full h-full bg-amber-500/5 translate-x-1/2 translate-y-1/2 rounded-full blur-[120px] group-hover:bg-amber-500/10 transition-colors"></div>
          
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl font-serif">Your Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {[
                 "Request a full inventory of your data",
                 "Permanent deletion from archives",
                 "Correction of personal profiles",
                 "Withdrawal of marketing consent"
               ].map((right, i) => (
                 <div key={i} className="flex gap-4">
                    <CheckCircle size={20} className="text-amber-500 shrink-0" />
                    <p className="text-xs font-bold uppercase tracking-widest leading-relaxed text-zinc-400">{right}</p>
                 </div>
               ))}
            </div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-[0.4em] pt-10 border-t border-zinc-900">Effective Date: October 2026 | Data Privacy Officer Assigned</p>
          </div>
        </div>
      </section>

      {/* FOOTER: DARK */}
      <footer className="bg-black py-40 text-center border-t border-zinc-900">
         <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.6em]">Privacy Is Luxury</p>
      </footer>
    </div>
  );
}

export default LegalPrivacy;
