import React from 'react';

const FAQPage = () => {
  const faqs = [
    { question: 'What is LuxeScents?', answer: 'LuxeScents is a premium fragrance retailer offering the finest perfumes from around the world.' },
    { question: 'How do I place an order?', answer: 'You can browse our shop, add items to your cart, and proceed to checkout.' },
    { question: 'What is your return policy?', answer: 'We offer a 30-day money-back guarantee on all unopened products.' },
  ];

  return (
    <div className="py-20">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
