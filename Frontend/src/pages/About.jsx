import Button from '../components/common/Button';
import perfumeVideo from '../assets/video_02.mp4';
import aboutImg from '../assets/philosophy_luxury.png';
import labImg from '../assets/perfume_lab_luxury.png';

function About() {
  return (
    <div className="bg-white text-gray-900 selection:bg-amber-100">
      {/* Cinematic Hero Section */}
      <section className="relative h-[100vh] flex flex-col items-center justify-center bg-black overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 contrast-125"
        >
          <source src={perfumeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="space-y-6 animate-fade-in">
            <span className="text-xs font-black uppercase tracking-[0.6em] text-amber-500/80">Since 2026</span>
            <h1 className="text-6xl md:text-8xl font-serif text-white tracking-tighter leading-none">
              A Legacy in <br /> <span className="italic font-light">Every Breath</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
              Élan Fragrance was founded on a simple yet profound belief: that scent is the most intimate form of memory.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white">Discover More</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* The Philosophy Section */}
      <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] group">
              <img
                src={aboutImg}
                alt="Philosophy of Scents"
                className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-50 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-zinc-100 rounded-full blur-3xl -z-10" />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-amber-600">The Élan Way</span>
              <h2 className="text-5xl md:text-6xl font-serif leading-[1.1]">The Art of <br />Invisible Elegance</h2>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
              <p>
                We don't create perfumes; we capture moments. At Élan, our philosophy is anchored in the belief that a fragrance should not precede a person, but rather linger like a whispered secret.
              </p>
              <p>
                Founded by a collective of master perfumers from Grasse, Élan Fragrance represents the pinnacle of olfactory craftsmanship, blending centuries-old traditions with a modern, minimalist aesthetic.
              </p>
            </div>

            <div className="pt-4">
              <Button to="/products" className="!bg-black !text-white !px-12 py-4 hover:!bg-amber-800 transition-all duration-300">
                Explore Our Collection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Masterful Craftsmanship Section */}
      <section className="bg-zinc-950 py-32 text-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2 space-y-10">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.5em] text-amber-500/60">Our Process</span>
                <h2 className="text-5xl md:text-6xl font-serif leading-tight">Meticulously <br />Crafted by Hand</h2>
                <div className="w-20 h-px bg-amber-600/30" />
              </div>

              <p className="text-gray-400 text-xl font-light leading-relaxed">
                Every bottle of Élan is the result of over 12 months of formulation. From the hand-picking of Bulgarian roses at dawn to the precise maturation cycle in our Parisian atelier, we never rush perfection.
              </p>

              <div className="grid grid-cols-2 gap-12 pt-8">
                <div className="space-y-2">
                  <h4 className="text-3xl font-serif text-amber-500">200+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Rare Raw Materials</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-3xl font-serif text-amber-500">18</h4>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Months of Maturation</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl skew-y-1">
                <img
                  src={labImg}
                  alt="Perfume Laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-24">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-600">The Soul of the Brand</span>
            <h2 className="text-5xl font-serif">What We Honor</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6 group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-500">
                <svg className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif">Ethical Sourcing</h3>
              <p className="text-gray-500 leading-relaxed font-light">
                We partner directly with family-owned farms from India to Madagascar, ensuring fair wages and protecting the biodiversity of our rare botanical sources.
              </p>
            </div>

            <div className="space-y-6 group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-500">
                <svg className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.618.309a6 6 0 01-4.708.294l-.202-.101a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-2.334 2.334l.477 2.387a2 2 0 00.547 1.022l11.054 11.054a2 2 0 002.828 0l4.243-4.243a2 2 0 000-2.828L19.428 15.428z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif">Radical Transparency</h3>
              <p className="text-gray-500 leading-relaxed font-light">
                Every ingredient in our perfumes is tracked from soil to skin. We believe you deserve to know exactly what makes up your signature scent.
              </p>
            </div>

            <div className="space-y-6 group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-500">
                <svg className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif">Scent Innovation</h3>
              <p className="text-gray-500 leading-relaxed font-light">
                By combining molecular science with natural essences, we create olfactory experiences that challenge the boundaries of traditional perfumery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-8">
          <h2 className="text-4xl font-serif">Begin Your Olfactory Journey</h2>
          <p className="text-gray-500 font-light">Experience the essence of Élan. Visit our boutique or explore our collection online.</p>
          <div className="flex justify-center gap-6">
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

