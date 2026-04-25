import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineArrowLeft } from "react-icons/hi";
import Button from "../components/common/Button";
import loginBg from "../assets/login-bg.png";
import axios from "axios";
import toast from "react-hot-toast";

function ForgotPassword() {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/forgot-password`, { email });
      toast.success("Reset link sent to your email.");
      setSubmitted(true);
    } catch (error) {
      const message = error.response?.data?.error || error.response?.data?.message || "Something went wrong. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white overflow-hidden">
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
          {!submitted ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h1 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-2 tracking-tight">Forgot Password?</h1>
                <p className="text-gray-500 mb-10 font-sans">Enter your email address and we'll send you a link to reset your password.</p>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-black transition-colors">
                      <HiOutlineMail size={20} />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
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
                  <Button
                    type="submit"
                    disabled={loading}
                    className="!w-full !bg-black !text-white !py-4 !rounded-2xl hover:!bg-gray-800 active:!scale-[0.98] transition-all duration-300 font-medium flex items-center justify-center gap-2 group"
                  >
                    {loading ? "Sending link..." : "Send Reset Link"}
                  </Button>
                </motion.div>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <HiOutlineMail size={40} className="text-black" />
              </div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">Check your email</h2>
              <p className="text-gray-500 mb-8 font-sans">
                We've sent a password reset link to <span className="font-semibold text-black">{email}</span>.
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                className="!bg-transparent !text-black hover:!underline decoration-1 underline-offset-4"
              >
                Didn't receive the email? Try again
              </Button>
            </motion.div>
          )}

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
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] font-sans mb-4 opacity-70">Security & Privacy</p>
            <h2 className="text-5xl font-serif leading-tight mb-6">"Your security is our signature."</h2>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ForgotPassword;
