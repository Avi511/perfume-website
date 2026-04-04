import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { HiOutlineUser, HiOutlineLogout } from "react-icons/hi";
import toast from "react-hot-toast";

function Navbar() {
    const { user, logout } = useAuth();
    const { cartCount } = useCart();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);

    const handleLogout = () => {
        logout();
        toast.success("Logged out successfully");
        navigate("/");
    };

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
                    {user?.isAdmin && (
                        <Link to="/admin/dashboard" className="text-amber-500 font-bold border-b border-amber-500/30 pb-0.5 hover:text-white hover:border-white transition-all duration-300">Admin Panel</Link>
                    )}
                    {user?.isSeller && (
                        <Link to="/seller/dashboard" className="text-amber-500 font-bold border-b border-amber-500/30 pb-0.5 hover:text-white hover:border-white transition-all duration-300">Seller Panel</Link>
                    )}
                </div>

                <div className="flex items-center gap-6">
                    {!user ? (
                        <Link to="/login" className="text-[10px] uppercase font-bold tracking-widest hover:text-amber-500 transition-colors duration-300">
                            Log In
                        </Link>
                    ) : (
                        <div className="flex items-center gap-4">
                            <Link to="/profile" className="flex items-center gap-2 group/profile transition-all duration-300">
                                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/profile:border-amber-500/50 transition-colors duration-300">
                                    <HiOutlineUser className="w-4 h-4 group-hover/profile:text-amber-500 transition-colors duration-300" />
                                </div>
                                <span className="hidden lg:block text-[10px] uppercase font-bold tracking-widest group-hover/profile:text-amber-500 transition-colors duration-300">
                                    {user.firstName || "Profile"}
                                </span>
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="p-2 hover:text-amber-500 transition-colors duration-300 transform active:scale-95"
                                title="Logout"
                            >
                                <HiOutlineLogout className="w-4 h-4" />
                            </button>
                        </div>
                    )}

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
                            {cartCount}
                        </span>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;


