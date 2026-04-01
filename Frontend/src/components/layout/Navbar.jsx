import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check in case page starts scrolled
        handleScroll();
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] z-50">
            <nav className={`relative overflow-hidden flex items-center justify-between px-6 py-3 rounded-4xl transition-all duration-500 linear
                ${isScrolled 
                    ? "bg-black/95 backdrop-blur-2xl border-none shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
                    : "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
                } text-white group`}>

                <div className="absolute top-0 -inset-full h-full w-full liquid-shimmer opacity-20 pointer-events-none" />

                <h1 className="text-xl font-serif tracking-widest">
                    Élan Fragrance
                </h1>

                <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
                    <Link to="/" className="hover:text-amber-500 transition-colors duration-300">Home</Link>
                    <Link to="/about" className="hover:text-amber-500 transition-colors duration-300">About</Link>
                    <Link to="/contact" className="hover:text-amber-500 transition-colors duration-300">Contact</Link>
                    <Link to="/products" className="hover:text-amber-500 transition-colors duration-300">Products</Link>
                </div>

                <div className="flex items-center gap-6">
                    <Link to="/login" className="text-[10px] uppercase font-bold tracking-widest hover:text-amber-500 transition-colors duration-300">
                        Log In
                    </Link>

                    <Link to="/cart" className="relative group/cart transition-all duration-300">
                        <svg
                            className="w-5 h-5 group-hover/cart:text-amber-500 transition-colors duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <span className="absolute -top-1 -right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-amber-500 text-[7px] font-black text-white shadow-sm transition-transform duration-300 group-hover/cart:scale-110">
                            0
                        </span>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;


