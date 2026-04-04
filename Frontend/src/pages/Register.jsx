import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import Button from "../components/common/Button";
import loginBg from "../assets/login-bg.png";
import { registerUser } from "../services/authService";
import toast from "react-hot-toast";


function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      const msg = "Passwords do not match";
      setError(msg);
      toast.error(msg);
      return;
    }

    setLoading(true);
    try {
      const response = await registerUser(formData);
      console.log(response);
      toast.success(`${response.firstName} Your account has been created successfully. Welcome to Élan!`);
      navigate("/login");
    } catch (error) {
      const message = error.response?.data?.error || error.response?.data?.message || "Registration failed. Please try again.";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white overflow-hidden py-12 lg:py-0">
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
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[10s] hover:scale-110"
        />

        <div className="absolute inset-0 z-20 flex flex-col justify-end p-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] font-sans mb-4 opacity-70">Define Your Scent</p>
            <h2 className="text-5xl font-serif leading-tight mb-6">"A perfume is like a piece of clothing, a message, a way of presenting oneself."</h2>
            <p className="text-lg font-sans opacity-80">— Paloma Picasso</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-24 py-8 relative z-10 bg-white min-h-screen lg:min-h-0 overflow-y-auto"
      >
        <div className="absolute top-8 right-8 sm:right-12 lg:right-24">
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
            <h1 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-2 tracking-tight">Join Élan</h1>
            <p className="text-gray-500 mb-6 font-sans">Create your account to experience the art of luxury fragrance.</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 ml-1">First Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-black transition-colors">
                    <HiOutlineUser size={18} />
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-1 focus:ring-black outline-none transition-all duration-300 font-sans text-sm"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 ml-1">Last Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-black transition-colors">
                    <HiOutlineUser size={18} />
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-1 focus:ring-black outline-none transition-all duration-300 font-sans text-sm"
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-black transition-colors">
                  <HiOutlineMail size={18} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-1 focus:ring-black outline-none transition-all duration-300 font-sans text-sm"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 ml-1">Phone Number</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-black transition-colors">
                  <HiOutlinePhone size={18} />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+94 77 000 0000"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-1 focus:ring-black outline-none transition-all duration-300 font-sans text-sm"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 ml-1">Physical Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 top-3 pointer-events-none text-gray-400 group-focus-within:text-black transition-colors">
                  <HiOutlineLocationMarker size={18} />
                </div>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Residential Address"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-1 focus:ring-black outline-none transition-all duration-300 font-sans text-sm resize-none h-20"
                />
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 ml-1">Password</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-black transition-colors">
                    <HiOutlineLockClosed size={18} />
                  </div>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-1 focus:ring-black outline-none transition-all duration-300 font-sans text-sm"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 ml-1">Verify</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-black transition-colors">
                    <HiOutlineLockClosed size={18} />
                  </div>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-1 focus:ring-black outline-none transition-all duration-300 font-sans text-sm"
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="pt-2"
            >
              <Button
                type="submit"
                disabled={loading}
                className="!w-full !bg-black !text-white !py-3.5 !rounded-2xl hover:!bg-gray-800 active:!scale-[0.98] transition-all duration-300 font-medium flex items-center justify-center gap-2 group">
                {loading ? "Creating..." : "Create Account"}
              </Button>
            </motion.div>
          </form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-6 text-center text-gray-500 font-sans text-sm"
          >
            Already have an account? <Link to="/login" className="text-black font-semibold hover:underline decoration-1 underline-offset-4">Log in here</Link>
          </motion.p>
        </div>

        <div className="absolute top-10 right-10 w-24 h-24 bg-beige-100/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gray-100/50 rounded-full blur-3xl -z-10"></div>
      </motion.div>
    </div>
  );
}

export default Register;

