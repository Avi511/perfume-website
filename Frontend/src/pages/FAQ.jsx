import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus, Search } from "lucide-react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How should I store my Élan fragrance?",
      answer: "To preserve the molecular integrity of our natural essences, store your bottle in a cool, dark environment away from direct sunlight and humidity. The box provided with your acquisition is designed specifically for optimal preservation."
    },
    {
      question: "Are your ingredients ethically sourced?",
      answer: "Absolutely. We maintain direct relationships with artisan growers globally. From our Bulgarian roses to Indian Sandalwood, every element is sourced via sustainable, fair-trade protocols that protect both the environment and the local communities."
    },
    {
      question: "Can I track my international shipment?",
      answer: "Yes. Once your order has been hand-inspected and dispatched from our atelier, you will receive an encrypted tracking link via email providing real-time concierge updates on your selection’s journey."
    },
    {
      question: "Do you offer bespoke olfactory creations?",
      answer: "Bespoke services are available by invitation only for our private collection clients. Please contact our Master Perfumer’s assistant via the Contact page for a preliminary consultation."
    },
    {
      question: "What is the concentration of your scents?",
      answer: "Most of our collection is at Parfum or Eau de Parfum concentration (15-30% oil concentration), ensuring an exceptional longevity and sillage that evolves throughout the day."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-4 sm:px-8 lg:px-12 font-sans selection:bg-amber-500/30">
      <div className="max-w-3xl mx-auto">
        <header className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500">Inquiry & Knowledge</span>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight">FAQ</h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-8"></div>
          </motion.div>
        </header>

        <section className="relative mb-20">
           <div className="relative">
             <Search size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600" />
             <input 
               type="text" 
               placeholder="Search the archive..." 
               className="w-full bg-zinc-950 border border-zinc-900 rounded-full pl-16 pr-8 py-5 text-sm focus:border-amber-500/50 outline-none transition-all placeholder:text-zinc-800"
             />
           </div>
        </section>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-[32px] transition-all duration-500 overflow-hidden ${
                activeIndex === index ? "bg-zinc-900/40 border-amber-500/30 shadow-2xl" : "bg-zinc-950/20 border-zinc-900 hover:border-zinc-800"
              }`}
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-8 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-6">
                  <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${activeIndex === index ? "text-amber-500" : "text-zinc-700"}`}>
                    0{index + 1}
                  </span>
                  <h3 className={`text-lg font-serif transition-colors ${activeIndex === index ? "text-white" : "text-zinc-400 group-hover:text-zinc-300"}`}>
                    {faq.question}
                  </h3>
                </div>
                <div className={`transition-transform duration-500 ${activeIndex === index ? "rotate-180 text-amber-500" : "text-zinc-700"}`}>
                  {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-10 pl-24 text-zinc-500 font-light leading-relaxed text-sm">
                      <div className="max-w-xl">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <section className="mt-32 bg-zinc-950/50 border border-zinc-900 rounded-[40px] p-12 flex flex-col items-center gap-8 text-center">
           <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
             <HelpCircle className="text-amber-500" size={24} strokeWidth={1.5} />
           </div>
           <div className="space-y-3">
             <h3 className="text-xl font-serif">Still curious?</h3>
             <p className="text-xs text-zinc-600 font-light uppercase tracking-widest leading-relaxed">Our concierge is available for unique olfactory inquiries.</p>
           </div>
           <button className="px-10 py-4 bg-amber-600 text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-white transition-all">
             Speak with a Specialist
           </button>
        </section>
      </div>
    </div>
  );
}

export default FAQ;
