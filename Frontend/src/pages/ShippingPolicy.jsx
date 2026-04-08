import { motion } from "framer-motion";
import { Truck, Globe, ShieldCheck, Clock } from "lucide-react";

function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-4 sm:px-8 lg:px-12 font-sans selection:bg-amber-500/30">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500">Concierge & Logistics</span>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight">Shipping Policy</h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-8"></div>
          </motion.div>
        </header>

        {/* Content Section */}
        <div className="space-y-20 relative">
          {/* Background Decorative Blur */}
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-zinc-500/5 rounded-full blur-[120px] pointer-events-none"></div>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-amber-500">
                <Globe size={24} strokeWidth={1} />
                <h2 className="text-xl font-serif uppercase tracking-widest">Global Reach</h2>
              </div>
              <p className="text-zinc-500 leading-relaxed font-light">
                Élan Fragrance delivers to over 120 countries worldwide. Our logistics network is optimized for the delicate nature of luxury glassware and volatile essences, ensuring your curation arrives in pristine condition.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-amber-500">
                <Clock size={24} strokeWidth={1} />
                <h2 className="text-xl font-serif uppercase tracking-widest">Processing Time</h2>
              </div>
              <p className="text-zinc-500 leading-relaxed font-light">
                Each order undergoes a rigorous quality inspection at our atelier. Please allow 1-2 business days for your selection to be authenticated, hand-packaged, and dispatched.
              </p>
            </div>
          </section>

          <section className="bg-zinc-950/50 border border-zinc-900 rounded-[40px] p-10 md:p-16 space-y-12">
            <h2 className="text-3xl font-serif text-center">Delivery Methods & Estimates</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4 group">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mx-auto border border-zinc-800 group-hover:border-amber-500/50 transition-colors">
                  <span className="text-[10px] font-black text-amber-500">STD</span>
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest">Standard</h3>
                <p className="text-[11px] text-zinc-600 uppercase tracking-tighter">5 - 7 Business Days</p>
                <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">Complimentary</p>
              </div>
              <div className="space-y-4 group">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mx-auto border border-zinc-800 group-hover:border-amber-500/50 transition-colors">
                  <span className="text-[10px] font-black text-amber-500">PRI</span>
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest">Priority</h3>
                <p className="text-[11px] text-zinc-600 uppercase tracking-tighter">2 - 3 Business Days</p>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Rs. 2,500</p>
              </div>
              <div className="space-y-4 group">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mx-auto border border-zinc-800 group-hover:border-amber-500/50 transition-colors">
                  <span className="text-[10px] font-black text-amber-500">INT</span>
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest">International</h3>
                <p className="text-[11px] text-zinc-600 uppercase tracking-tighter">7 - 14 Business Days</p>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Rs. 5,000</p>
              </div>
            </div>
          </section>

          <section className="space-y-10">
            <div className="flex items-center gap-6 border-b border-zinc-900 pb-6">
               <ShieldCheck size={28} strokeWidth={1} className="text-amber-500" />
               <h2 className="text-3xl font-serif">Shipping Limitations</h2>
            </div>
            <div className="prose prose-invert max-w-none text-zinc-500 font-light space-y-6">
              <p>Due to international aviation regulations regarding "Dangerous Goods" (alcohol-based products), certain regions may have restricted shipping methods available. We only utilize specialized luxury couriers like DHL Express and FedEx to ensure regulatory compliance.</p>
              <ul className="list-disc pl-6 space-y-4">
                <li>Orders cannot be delivered to P.O. Boxes or freight forwarding addresses.</li>
                <li>Signature is required upon delivery for all orders above Rs. 20,000 to ensure chain of custody.</li>
                <li>Import duties and taxes for international orders are the responsibility of the client upon arrival in the destination country.</li>
              </ul>
            </div>
          </section>

          <footer className="pt-20 text-center">
            <p className="text-[9px] text-zinc-700 font-bold uppercase tracking-[0.4em] mb-8">Questions regarding your acquisition?</p>
            <button className="px-12 py-5 bg-amber-600/10 border border-amber-600/30 text-amber-500 text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-amber-600 hover:text-white transition-all">
              Contact Concierge
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default ShippingPolicy;
