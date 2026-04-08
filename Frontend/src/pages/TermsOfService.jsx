import { motion } from "framer-motion";
import { Scale, FileText, AlertCircle, CheckCircle2, Gavel, ShieldAlert } from "lucide-react";
import termsHero from "../assets/terms_hero.png";

function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30">
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img src={termsHero} className="w-full h-full object-cover" alt="Terms" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-amber-500">Legal Accord</span>
            <h1 className="text-6xl md:text-8xl font-serif leading-none tracking-tighter">
              Brand <br /> <span className="italic font-light">Protocol</span>
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
          <span className="text-[8px] uppercase tracking-[0.4em] font-bold">Terms of Service</span>
          <Gavel size={16} className="animate-bounce" />
        </motion.div>
      </section>

      <section className="bg-[#f5f5f5] text-zinc-900 py-32 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="flex flex-col items-center text-center space-y-8">
            <Scale size={40} strokeWidth={1} className="text-amber-600" />
            <h2 className="text-5xl md:text-7xl font-serif text-black leading-tight">Agreement of <br /> Interaction</h2>
            <p className="max-w-2xl text-zinc-500 leading-relaxed font-light text-xl">
              By interacting with the Élan Fragrance digital boutique, you acknowledge and agree to the following protocols, established to maintain the integrity of our craftsmanship and your client experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: FileText, title: "Intellectual Property", text: "All olfactory formulations, visual narratives, and brand identifiers are the exclusive property of Élan Fragrance." },
              { icon: AlertCircle, title: "Usage Limitations", text: "Commercial redistribution or unauthorized sampling of our proprietary blends is strictly prohibited by digital law." },
              { icon: CheckCircle2, title: "Client Conduct", text: "We maintain a high standard of interaction for our community. Respectful engagement is expected with our concierges." }
            ].map((item, i) => (
              <div key={i} className="p-12 bg-zinc-50 rounded-[48px] border border-zinc-100 hover:shadow-xl transition-all duration-700 space-y-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-zinc-200">
                  <item.icon size={24} strokeWidth={1} className="text-amber-600" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest">{item.title}</h4>
                <p className="text-zinc-600 font-light leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-32 px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <span className="text-amber-500 text-[10px] font-black uppercase tracking-widest">Liability</span>
            <h2 className="text-4xl font-serif">Avenue of Resolution</h2>
            <p className="text-zinc-400 font-light leading-relaxed">
              In the rare event of a dispute, all legal matters are governed by international commercial law. We strive for amicable resolutions through our private concierge channels before formal arbitration.
            </p>
            <div className="flex justify-start">
              <ShieldAlert size={64} strokeWidth={0.5} className="text-zinc-800" />
            </div>
          </div>

          <div className="space-y-12">
            <div className="p-8 border-l border-amber-500/30 bg-zinc-950/50">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-4">Product Representation</h4>
              <p className="text-zinc-500 text-xs leading-relaxed font-sans font-light">
                While we strive for color accuracy in our cinematic visuals, actual bottle shades may vary slightly due to the natural maturation of raw ingredients.
              </p>
            </div>
            <div className="p-8 border-l border-zinc-800 bg-zinc-950/50">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-4">Pricing Adjustments</h4>
              <p className="text-zinc-500 text-xs leading-relaxed font-sans font-light">
                Prices are subject to change based on the volatility of global raw materials (e.g. Orris root, Oud).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHITE BACKGROUND (FOOTER STYLE) */}
      <section className="bg-[#f5f5f5] py-40 border-t border-zinc-100">
        <div className="max-w-xl mx-auto text-center space-y-8 px-4">
          <h2 className="text-3xl font-serif text-black">Integrity in every interaction.</h2>
          <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-[0.6em]">Updated April 2026</p>
        </div>
      </section>
    </div>
  );
}

export default TermsOfService;
