import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Elena Rostova",
    role: "Fashion Editor",
    text: "LuxeScents has redefined my perception of fragrance. The Golden Dawn is simply breathtaking—an olfactory masterpiece that lingers perfectly."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Sommelier",
    text: "The complexity and depth of Midnight Bloom is astounding. It's rare to find such perfectly balanced top notes that elegantly fade into rich amber."
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Creative Director",
    text: "I've finally found my signature scent. The packaging is as luxurious as the fragrance inside. Absolute perfection in every detail."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden border-t border-white/5">
      {/* Background flare */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-3 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-accent">Words of Elegance</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div 
              key={testimonial.id}
              className="bg-secondary p-10 border border-white/5 hover:border-primary/30 transition-colors duration-500 flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <Quote className="text-primary mb-6 opacity-50" size={32} />
              <p className="text-gray-300 font-sans italic leading-relaxed mb-8 flex-grow">
                "{testimonial.text}"
              </p>
              <div>
                <h4 className="text-accent font-display text-lg mb-1">{testimonial.name}</h4>
                <p className="text-primary text-xs uppercase tracking-widest">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
