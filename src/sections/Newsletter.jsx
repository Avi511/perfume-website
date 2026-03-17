import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 bg-dark relative border-t border-white/5 border-b">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <div className="max-w-2xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-display text-primary mb-6">Join Our Exclusive Circle</h2>
          <p className="text-gray-400 font-sans mb-10 leading-relaxed text-sm">
            Subscribe to discover our latest olfactory creations, exclusive previews, and invitations to private events. Enjoy complementary shipping on your first order.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-secondary/50 border border-white/10 text-accent px-6 py-4 outline-none focus:border-primary/50 transition-colors w-full font-sans text-sm tracking-wide placeholder-gray-500"
              required
            />
            <button 
              type="submit" 
              className="bg-primary text-dark font-semibold uppercase tracking-widest text-xs px-10 py-4 hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-gray-500 mt-6 uppercase tracking-wider">
            By subscribing, you agree to our Terms of Service & Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
