import React from 'react';
import { ArrowUpRight, Quote } from 'lucide-react';

const Hero = () => {
    // Placeholder for avatars
    const avatars = [
        "https://randomuser.me/api/portraits/women/44.jpg",
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/women/68.jpg"
    ];

    return (
        <section className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-8rem)]">
            {/* Left Column */}
            <div className="flex flex-col gap-8 relative z-10">
                {/* Social Proof */}
                <div className="flex items-center gap-4 animate-fade-in-up">
                    <div className="flex -space-x-4">
                        {avatars.map((src, i) => (
                            <img key={i} src={src} alt="User" className="w-12 h-12 rounded-full border-[3px] border-white object-cover shadow-sm" />
                        ))}
                    </div>
                    <span className="px-5 py-2 bg-white/60 backdrop-blur-md border border-white/60 rounded-full text-sm font-semibold text-gray-700 shadow-sm">
                        Plus 25k Trusted users!
                    </span>
                </div>

                {/* Headline */}
                <h1 className="text-6xl lg:text-8xl font-sans font-semibold leading-[1.05] text-gray-900 tracking-tight animate-fade-in-up delay-100">
                    Discover your best <br />
                    <span className="font-serif italic font-normal text-6xl lg:text-[5.5rem] leading-none">Perfume</span> at today
                </h1>

                {/* Subtext */}
                <p className="text-gray-500 text-lg leading-relaxed max-w-lg mb-4 animate-fade-in-up delay-200">
                    Selecting a perfume is a personal journey. Consider your lifestyle, favorite scents, and the impression you want to leave.
                </p>

                {/* CTA */}
                <div className="flex items-center gap-5 mt-2 animate-fade-in-up delay-300">
                    <button className="px-10 py-4 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl">
                        Explore Shop
                    </button>
                    <button className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all hover:rotate-45 shadow-xl hover:shadow-2xl cursor-pointer">
                        <ArrowUpRight size={28} strokeWidth={2.5} />
                    </button>
                </div>
            </div>

            {/* Right Column (Visual) */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in-left delay-300">
                {/* Visual Flair Elements */}
                <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-200/20 rounded-full blur-[100px] -z-10"></div>
                <div className="absolute bottom-0 left-10 w-48 h-48 bg-purple-200/20 rounded-full blur-[80px] -z-10"></div>

                {/* Floating Quote */}
                <div className="absolute bottom-20 -left-6 z-20 hidden lg:flex flex-col bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/60 max-w-[280px]">
                    <Quote className="text-gray-900 mb-3 fill-current" size={20} />
                    <p className="text-sm text-gray-600 font-medium italic leading-relaxed">
                        "The scent that defines your presence and elevates your style."
                    </p>
                </div>

                {/* Main Image */}
                <div className="relative z-0 group">
                    {/* Decorative circle behind image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-transparent via-white/50 to-blue-50/0 rounded-full border border-white/20"></div>

                    {/* Image with some depth */}
                    <img
                        src="https://images.unsplash.com/photo-1592914610354-fd354ea45e48?q=80&w=800&auto=format&fit=crop"
                        alt="Luxury Perfume"
                        className="relative z-10 w-full max-w-md h-auto rounded-[3rem] shadow-2xl object-cover hover:translate-y-[-10px] transition-transform duration-700 ease-out"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
