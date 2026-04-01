import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-black text-white pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-2xl font-serif tracking-widest">Élan Fragrance</h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Crafting timeless fragrances that evoke memories and define elegance. Discover the essence of luxury with Élan Fragrance.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-amber-500">Shop</h3>
                        <div className="flex flex-col gap-4 text-sm text-gray-300">
                            <Link to="/products" className="hover:text-white transition">All Collection</Link>
                            <Link to="/products?category=parfum" className="hover:text-white transition">Parfums</Link>
                            <Link to="/products?category=eau" className="hover:text-white transition">Eau de Toilette</Link>
                            <Link to="/gift-sets" className="hover:text-white transition">Gift Sets</Link>
                        </div>
                    </div>

                    {/* Support */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-amber-500">Support</h3>
                        <div className="flex flex-col gap-4 text-sm text-gray-300">
                            <Link to="/about" className="hover:text-white transition">Our Story</Link>
                            <Link to="/contact" className="hover:text-white transition">Contact Us</Link>
                            <Link to="/shipping" className="hover:text-white transition">Shipping & Returns</Link>
                            <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                        </div>
                    </div>

                    {/* Newsletter & Contact */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-amber-500">Newsletter</h3>
                        <p className="text-gray-400 text-sm">Join our mailing list for exclusive updates.</p>
                        <div className="flex border-b border-white/20 pb-2">
                            <input
                                type="email"
                                placeholder="EMAIL ADDRESS"
                                className="bg-transparent border-none outline-none text-xs tracking-widest w-full placeholder:text-gray-600 focus:ring-0"
                            />
                            <button className="text-xs font-bold hover:text-amber-500 transition">JOIN</button>
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                            <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-widest">
                                No. 12, Ocean Crest Residences, Colombo 03, SL
                            </p>
                            <p className="text-[10px] text-amber-600 font-bold tracking-widest">
                                elanFragrance2026@gmail.com <br /> +94 77 659 9189
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
                    <p className="text-[10px] text-gray-500 tracking-widest uppercase">
                        © 2026 Élan Fragrance. All Rights Reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-gray-500 hover:text-white transition">
                            <span className="text-[10px] uppercase tracking-widest">Instagram</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white transition">
                            <span className="text-[10px] uppercase tracking-widest">Pinterest</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white transition">
                            <span className="text-[10px] uppercase tracking-widest">Facebook</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
