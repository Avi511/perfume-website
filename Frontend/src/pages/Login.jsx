import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import Button from "../components/common/Button";
import loginBg from "../assets/login-bg.png";
import { loginUser } from "../services/authService";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const response = await loginUser(formData);
      console.log(response);
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex min-h-screen bg-white overflow-hidden">
      {/* Left Side: Form */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-24 py-12 relative z-10 bg-white"
      >
        <div className="absolute top-8 left-8 sm:left-12 lg:left-24">
          <Link to="/" className="text-xl font-serif tracking-widest text-black hover:text-gray-600 transition-colors">
            Élan Fragrance
          </Link>
        </div>
        <div className="max-w-md w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-2 tracking-tight">Welcome Back</h1>
            <p className="text-gray-500 mb-10 font-sans">Please enter your details to sign in to your account.</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {error && (
                <p className="mb-4 text-red-400 text-sm">{error}</p>
              )}
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-black transition-colors">
                  <HiOutlineMail size={20} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-black outline-none transition-all duration-300 font-sans"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex justify-between items-center mb-2 ml-1">
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest">Password</label>
                <Link to="/forgot-password" size={18} className="text-xs font-sans text-gray-400 hover:text-black transition-colors">Forgot Password?</Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-black transition-colors">
                  <HiOutlineLockClosed size={20} />
                </div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-black outline-none transition-all duration-300 font-sans"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button 
                type="submit"
                disabled={loading}
                className="!w-full !bg-black !text-white !py-4 !rounded-2xl hover:!bg-gray-800 active:!scale-[0.98] transition-all duration-300 font-medium flex items-center justify-center gap-2 group">
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </motion.div>
          </form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 text-center text-gray-500 font-sans"
          >
            New to Élan? <Link to="/register" className="text-black font-semibold hover:underline decoration-1 underline-offset-4">Create an account</Link>
          </motion.p>
        </div>

        {/* Subtle Decorative Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-beige-100/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gray-100/50 rounded-full blur-3xl -z-10"></div>
      </motion.div>

      {/* Right Side: Image/Branding */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hidden lg:block lg:w-1/2 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-500 group-hover:bg-black/20"></div>
        <img
          src={loginBg}
          alt="Luxury Perfume"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        {/* Quote Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] font-sans mb-4 opacity-70">The Art of Essence</p>
            <h2 className="text-5xl font-serif leading-tight mb-6">"Fragrance is the invisible, unforgettable, fashionable accessory."</h2>
            <p className="text-lg font-sans opacity-80">— Coco Chanel</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;

