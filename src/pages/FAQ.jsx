import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I find my perfect perfume?",
      answer: "Start with our Scent Quiz on the homepage. Answer a few questions about your preferences and we'll recommend perfumes that match your style."
    },
    {
      question: "What is your return policy?",
      answer: "We offer 30-day returns on all unused products. If you're not satisfied, we'll provide a full refund or exchange."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes! We ship to over 50 countries worldwide. Shipping costs vary by location, calculated at checkout."
    },
    {
      question: "How long does delivery take?",
      answer: "Standard delivery takes 5-7 business days. Express shipping (2-3 days) is available for an additional fee."
    },
    {
      question: "Are your perfumes authentic?",
      answer: "100% authentic. We source directly from authorized distributors and luxury brands. Every bottle is verified."
    },
    {
      question: "Can I customize a fragrance?",
      answer: "Yes! Our bespoke service allows you to create custom fragrances. Contact our team for details."
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-3xl px-4 mx-auto">
        <h1 className="mb-12 font-serif text-5xl font-bold text-center text-gray-900">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden border border-gray-200 rounded-lg">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full px-6 py-4 transition bg-white hover:bg-gray-50"
              >
                <h3 className="font-semibold text-left text-gray-900">{faq.question}</h3>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-600 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
