import Button from '../components/common/Button';
import contactImg from '../assets/contact_luxury.png';
import boutiqueImg from '../assets/paris_boutique.png';
import contactHero from '../assets/contact_hero_dark.png';
import contactHeroLight from '../assets/contact_hero.png';

function Contact() {
  return (
    <div className="bg-white text-gray-900 selection:bg-amber-100">
      {/* Dynamic Header / Hero with Dark Background Image */}
      <section className="relative pt-48 pb-24 px-4 overflow-hidden min-h-[100vh] flex items-center bg-black">
        {/* Background Image & Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={contactHero}
            alt="Contact Concierge"
            className="w-full h-full object-cover scale-105 opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="flex flex-col gap-6 max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.6em] text-amber-500 animate-fade-in">Concierge Service</span>
            <h1 className="text-6xl md:text-8xl font-serif tracking-tighter leading-none animate-fade-in delay-100 text-white">
              We’d Love to <br /> <span className="italic font-light">Hear From You</span>
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-xl leading-relaxed tracking-wide animate-fade-in delay-200">
              Our experts are here to assist you with scent consultations, bespoke orders, and any inquiries regarding our collections.
            </p>
          </div>
        </div>
      </section>



      {/* Main Contact Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          {/* Left: Contact Info & Form */}
          <div className="w-full lg:w-1/2 flex flex-col gap-16">
            <div className="flex flex-col gap-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="space-y-4 group">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-black flex items-center gap-3">
                    <span className="w-6 h-px bg-amber-600/30" /> Visit Us
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">
                    No. 12, Ocean Crest Residences,
                    Galle Face Terrace,
                    Colombo 03,
                    Sri Lanka
                  </p>
                </div>
                <div className="space-y-4 group">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-black flex items-center gap-3">
                    <span className="w-6 h-px bg-amber-600/30" /> Get In Touch
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">
                    fragranceelan@gmail.com<br />
                    +94 77 659 9189
                  </p>
                </div>
              </div>

              <div className="space-y-4 group">
                <h4 className="text-xs font-bold uppercase tracking-widest text-black flex items-center gap-3">
                  <span className="w-6 h-px bg-amber-600/30" /> Hours of Elegance
                </h4>
                <div className="grid grid-cols-2 text-[10px] uppercase tracking-widest text-gray-400 font-bold max-w-xs">
                  <span>Mon — Fri</span>
                  <span>10AM — 7PM</span>
                  <span>Sat</span>
                  <span>11AM — 5PM</span>
                </div>
              </div>
            </div>

            {/* Premium Form */}
            <form
              action="https://formsubmit.io/send/fragranceelan@gmail.com"
              method="POST"
              className="flex flex-col gap-10 bg-zinc-50/50 p-8 md:p-12 rounded-3xl border border-zinc-100 shadow-sm relative z-10 group"
            >
              <div className="space-y-2">
                <h3 className="text-3xl font-serif">Compose a Message</h3>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Expected response: 24h</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-3 group/field">
                  <label className="text-[10px] uppercase tracking-widest font-black text-gray-400 group-focus-within/field:text-amber-600 transition-colors">FULL NAME</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="E.g. Gabriel Blanc"
                    className="bg-transparent border-b border-zinc-200 py-3 outline-none text-sm placeholder:text-zinc-300 focus:border-amber-600 transition-all font-light"
                  />
                </div>
                <div className="flex flex-col gap-3 group/field">
                  <label className="text-[10px] uppercase tracking-widest font-black text-gray-400 group-focus-within/field:text-amber-600 transition-colors">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="hello@example.com"
                    className="bg-transparent border-b border-zinc-200 py-3 outline-none text-sm placeholder:text-zinc-300 focus:border-amber-600 transition-all font-light"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 group/field">
                <label className="text-[10px] uppercase tracking-widest font-black text-gray-400 group-focus-within/field:text-amber-600 transition-colors">YOUR INQUIRY</label>
                <textarea
                  name="message"
                  required
                  placeholder="How can we assist you today?"
                  rows="4"
                  className="bg-transparent border-b border-zinc-200 py-3 outline-none text-sm placeholder:text-zinc-300 focus:border-amber-600 transition-all resize-none font-light"
                ></textarea>
              </div>

              <div className="pt-4 overflow-hidden rounded-full self-start group/btn">
                <Button type="submit" className="!bg-black !text-white !px-16 py-5 !rounded-full relative overflow-hidden">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* Right: Immersive Visuals */}
          <div className="w-full lg:w-1/2 flex flex-col gap-12 relative h-full">
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl skew-y-1">
              <img
                src={contactImg}
                alt="Luxury Perfume"
                className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-80 mb-2">Our Signature</p>
                <h4 className="text-3xl font-serif">AUREA</h4>
              </div>
            </div>

            <div className="bg-black text-white p-10 rounded-3xl space-y-6 -mt-20 relative z-20 shadow-2xl ml-10">
              <h3 className="text-2xl font-serif leading-tight">Private Olfactory Consultation</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Book a personalized session with our master perfumers to discover a scent profile uniquely tailored to your personality.
              </p>
              <Button className="!glass-button !border-white/20 !text-white !w-full">Book Experience</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Boutique Experience Section */}
      <section className="py-32 bg-zinc-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-10">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-amber-600">The Boutique Experience</span>
              <h2 className="text-5xl font-serif leading-tight">Visit the Heart of Élan</h2>
              <p className="text-gray-500 text-lg font-light">Explore our Colombo showroom, where every scent is housed in hand-blown glass and vintage surroundings.</p>
            </div>
            <Button className="!bg-white !text-black !border-black/10 shadow-lg px-12">View Virtual Tour</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[600px]">
            <div className="md:col-span-8 rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={contactHeroLight}
                alt="Paris Showroom"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
            </div>
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl p-8 flex flex-col justify-between group">
                <h4 className="text-xl font-serif group-hover:text-amber-600 transition-colors">Exclusive Boutique Editions</h4>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Only available in-store</p>
                <div className="w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center -ml-2">
                  <svg className="w-4 h-4 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>
              <div className="bg-amber-600 rounded-3xl overflow-hidden shadow-xl p-8 text-white flex flex-col justify-between hover:bg-amber-700 transition-colors">
                <h4 className="text-xl font-serif">Bespoke Gifting Service</h4>
                <p className="text-xs text-white/60 font-bold uppercase tracking-widest">Handmade packaging</p>
                <svg className="w-12 h-12 text-white/20 self-end -mb-4 -mr-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

