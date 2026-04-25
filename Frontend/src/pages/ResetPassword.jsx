import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineLockClosed, HiOutlineArrowLeft } from "react-icons/hi";
import Button from "../components/common/Button";
import loginBg from "../assets/login-bg.png";
import axios from "axios";
import toast from "react-hot-toast";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/auth/reset-password/${token}`, { password });
      toast.success("Password reset successful. Please login.");
      navigate("/login");
    } catch (error) {
      const message = error.response?.data?.error || "Invalid or expired token.";
      toast.error(message);
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
            <h1 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-2 tracking-tight">Reset Password</h1>
            <p className="text-gray-500 mb-10 font-sans">Enter your new password below.</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 ml-1">New Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-black transition-colors">
                  <HiOutlineLockClosed size={20} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-black outline-none transition-all duration-300 font-sans"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 ml-1">Confirm New Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-black transition-colors">
                  <HiOutlineLockClosed size={20} />
                </div>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-black outline-none transition-all duration-300 font-sans"
                  required
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
                className="!w-full !bg-black !text-white !py-4 !rounded-2xl hover:!bg-gray-800 active:!scale-[0.98] transition-all duration-300 font-medium flex items-center justify-center gap-2 group"
              >
                {loading ? "Resetting..." : "Reset Password"}
              </Button>
            </motion.div>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 text-center"
          >
            <Link to="/login" className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors font-sans">
              <HiOutlineArrowLeft size={18} />
              <span>Back to Login</span>
            </Link>
          </motion.div>
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
        <div className="absolute inset-0 bg-black/10 z-10"></div>
        <img
          src={loginBg}
          alt="Luxury Perfume"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
      </motion.div>
    </div>
  );
}

export default ResetPassword;
