import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus, Search, Sparkles, MessageCircle } from "lucide-react";
import faqHero from "../assets/faq_hero.png";

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
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30">
      {/* SECTION 1: DARK HERO */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img src={faqHero} className="w-full h-full object-cover" alt="FAQ" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-amber-500 italic">Inquiry & Knowledge</span>
            <h1 className="text-6xl md:text-8xl font-serif leading-none tracking-tighter text-white">
              Curated <br /> <span className="italic font-light">Dialogue</span>
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
          <span className="text-[8px] uppercase tracking-[0.4em] font-bold">The Knowledge Archive</span>
          <Sparkles size={16} className="animate-pulse" />
        </motion.div>
      </section>

      {/* SECTION 2: WHITE BACKGROUND (ARCHIVE) */}
      <section className="bg-white text-zinc-900 py-32 px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="text-center space-y-6">
             <h2 className="text-5xl md:text-7xl font-serif text-black leading-tight italic">Common Narratives</h2>
             <p className="text-zinc-500 text-sm uppercase tracking-widest font-bold">Insights into the atelier</p>
          </div>

          <div className="relative mb-20 group max-w-2xl mx-auto">
             <Search size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400 group-hover:text-amber-500 transition-colors" />
             <input 
               type="text" 
               placeholder="Search the archive..." 
               className="w-full bg-zinc-50 border border-zinc-100 rounded-full pl-16 pr-8 py-6 text-sm focus:border-amber-500/50 outline-none transition-all placeholder:text-zinc-400 shadow-sm"
             />
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`group border rounded-[32px] transition-all duration-700 overflow-hidden ${
                  activeIndex === index ? "bg-black text-white border-black shadow-2xl scale-[1.02]" : "bg-zinc-50 border-zinc-100 hover:bg-white hover:border-zinc-200"
                }`}
              >
                <button 
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full px-10 py-10 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${activeIndex === index ? "text-amber-500 font-serif text-lg lowercase italic" : "text-zinc-300"}`}>
                      {activeIndex === index ? "q" : index + 1}
                    </span>
                    <h3 className={`text-xl font-serif transition-colors ${activeIndex === index ? "text-white" : "text-zinc-900 group-hover:text-black"}`}>
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`transition-all duration-500 ${activeIndex === index ? "rotate-180 text-amber-500" : "text-zinc-300"}`}>
                    <ChevronDown size={20} strokeWidth={1} />
                  </div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                    >
                      <div className="px-10 pb-12 pl-28 text-zinc-400 font-light leading-relaxed text-lg">
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
        </div>
      </section>

      {/* SECTION 3: DARK BACKGROUND (CONTACT) */}
      <section className="bg-black text-white py-40 px-4 mt-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent"></div>
        <div className="max-w-2xl mx-auto rounded-[60px] p-16 flex flex-col items-center gap-10 text-center border border-zinc-900 bg-zinc-950">
           <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 relative group">
             <motion.div 
               animate={{ scale: [1, 1.2, 1] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute inset-0 bg-amber-500/5 rounded-full blur-xl"
             ></motion.div>
             <MessageCircle className="text-amber-500 relative z-10" size={32} strokeWidth={1} />
           </div>
           
           <div className="space-y-4">
             <h3 className="text-3xl font-serif">Still curious?</h3>
             <p className="text-xs text-zinc-500 font-light uppercase tracking-widest leading-relaxed">Our concierge is available for unique olfactory inquiries.</p>
           </div>
           
           <button className="relative px-12 py-5 bg-amber-600 text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-white transition-all overflow-hidden group">
             <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Speak with a Specialist</span>
           </button>
        </div>
      </section>

      <footer className="bg-black py-20 text-center text-zinc-800 text-[10px] uppercase font-bold tracking-widest border-t border-zinc-900">
         Archive 2026
      </footer>
    </div>
  );
}

const ChevronDown = ({ size, strokeWidth, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

export default FAQ;
