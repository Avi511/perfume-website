import { motion } from "framer-motion";
import { Truck, Globe, ShieldCheck, Clock, ChevronDown } from "lucide-react";
import shippingHero from "../assets/shipping_hero.png";

function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30">
      {/* SECTION 1: DARK HERO */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img src={shippingHero} className="w-full h-full object-cover opacity-60" alt="Shipping" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-amber-500">Concierge & Logistics</span>
            <h1 className="text-6xl md:text-8xl font-serif leading-none tracking-tighter">
              Bespoke <br /> <span className="italic font-light">Delivery</span>
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
          <span className="text-[8px] uppercase tracking-[0.4em] font-bold">Policy Details</span>
          <ChevronDown size={16} className="animate-bounce" />
        </motion.div>
      </section>

      <section className="bg-[#f5f5f5] text-zinc-900 py-32 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 text-amber-600">
              <Globe size={24} strokeWidth={1} />
              <h2 className="text-sm font-bold uppercase tracking-[0.4em]">Global Reach</h2>
            </div>
            <h3 className="text-4xl font-serif leading-tight text-black">Delivering essence <br /> to your doorstep.</h3>
            <p className="text-zinc-600 leading-relaxed font-light text-lg">
              Élan Fragrance delivers to over 120 countries worldwide. Our logistics network is optimized for the delicate nature of luxury glassware and volatile essences, ensuring your curation arrives in pristine condition.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 bg-zinc-50 p-12 rounded-[48px] border border-zinc-100"
          >
            <div className="flex items-center gap-4 text-amber-600">
              <Clock size={24} strokeWidth={1} />
              <h2 className="text-sm font-bold uppercase tracking-[0.4em]">Processing</h2>
            </div>
            <p className="text-zinc-800 leading-relaxed font-light italic text-xl">
              "Each order undergoes a rigorous quality inspection at our atelier. We allow 1-2 business days for your selection to be authenticated and hand-packaged."
            </p>
            <div className="w-12 h-px bg-zinc-200"></div>
          </motion.div>
        </div>
      </section>

      <section className="bg-black text-white py-32 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-amber-500">Methods</span>
            <h2 className="text-4xl md:text-6xl font-serif">Avenue of Transit</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { id: "STD", label: "Standard", time: "5 - 7 Business Days", price: "Complimentary" },
              { id: "PRI", label: "Priority", time: "2 - 3 Business Days", price: "Rs. 2,500" },
              { id: "INT", label: "International", time: "7 - 14 Business Days", price: "Rs. 5,000" }
            ].map((method) => (
              <div key={method.id} className="group p-12 bg-zinc-950 border border-zinc-900 rounded-[40px] hover:border-amber-500/30 transition-all duration-700 hover:shadow-2xl">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center mb-8 border border-zinc-800 group-hover:bg-amber-500 group-hover:text-black transition-all">
                  <span className="text-xs font-black">{method.id}</span>
                </div>
                <h3 className="text-xl font-serif mb-2">{method.label}</h3>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-6">{method.time}</p>
                <p className={`text-sm font-bold ${method.price === 'Complimentary' ? 'text-emerald-500' : 'text-amber-500'}`}>{method.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] text-zinc-900 py-32 px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="flex items-center gap-8 border-b border-zinc-100 pb-12">
            <ShieldCheck size={32} strokeWidth={1} className="text-amber-600" />
            <h2 className="text-4xl font-serif">Shipping Limitations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <p className="text-zinc-600 font-light leading-relaxed">
              Due to international aviation regulations regarding "Dangerous Goods" (alcohol-based products), certain regions may have restricted shipping methods available. We only utilize specialized luxury couriers like DHL Express and FedEx to ensure regulatory compliance.
            </p>
            <ul className="space-y-6">
              {[
                "No delivery to P.O. Boxes",
                "Signature required for orders > Rs. 20k",
                "Client responsible for import duties"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-zinc-800">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShippingPolicy;
