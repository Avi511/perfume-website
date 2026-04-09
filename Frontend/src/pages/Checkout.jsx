import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";
import toast from "react-hot-toast";
import {
  CreditCard,
  Truck,
  ShieldCheck,
  ArrowLeft,
  ChevronRight,
  Package,
  MapPin,
  Phone,
  Mail,
  Lock,
  Wallet,
  CheckCircle
} from "lucide-react";

function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      toast.error("Please log in to continue your order.", {
        icon: "🔒",
        style: {
          borderRadius: "20px",
          background: "#000",
          color: "#d4af37",
        },
      });
      navigate("/login");
    }
  }, [user, navigate]);

  const [formData, setFormData] = useState({
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
  });

  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("COD"); // COD, PayHere
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: ""
  });

  const handlePayHerePayment = async () => {
    try {
      setLoading(true);
      const orderId = `ORDER_${Date.now()}`;

      const response = await api.post("/payhere/start", {
        order_id: orderId,
        amount: cartTotal,
        currency: "LKR",
        items: `Perfume Order (${cartItems.length} items)`,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: "Colombo",
        country: "Sri Lanka",
      });

      const payment = response.data.payment;

      window.payhere.onCompleted = async function onCompleted(orderId) {
        console.log("Payment completed. OrderID:", orderId);

        try {
          const orderData = {
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            totalAmount: cartTotal,
            paymentMethod: "PayHere",
            orderId: orderId, // Store the PayHere order ID
            product: cartItems.map((item) => ({
              productId: item.productId || item.id || item._id,
              productName: item.name,
              productImage: item.image,
              productPrice: item.price,
              quantity: item.qty,
              productTotal: item.price * item.qty,
            })),
          };
          await api.post("/orders", orderData);

          toast.success("Payment completed successfully.", {
            icon: '✅',
            style: { borderRadius: '20px', background: '#000', color: '#d4af37' }
          });
          clearCart();
          navigate("/profile");
        } catch (err) {
          console.error("Failed to save order after payment:", err);
          toast.error("Payment successful but order recording failed. Please contact support.");
        }
      };

      window.payhere.onDismissed = function onDismissed() {
        toast("Payment cancelled.", { icon: '❌' });
        setLoading(false);
      };

      window.payhere.onError = function onError(error) {
        console.error("PayHere error:", error);
        toast.error("Digital transaction failed standard protocol.");
        setLoading(false);
      };

      window.payhere.startPayment(payment);
    } catch (error) {
      console.error(error);
      toast.error("Unable to initialize PayHere secure matrix.");
    } finally {
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center pt-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="w-24 h-24 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-8 border border-zinc-800">
            <Package className="w-10 h-10 text-zinc-500" />
          </div>
          <h1 className="text-4xl font-serif">Your cart is empty.</h1>
          <p className="text-zinc-500 font-light max-w-sm mx-auto">
            Add some items before checking out.
          </p>
          <Link
            to="/products"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-black px-10 py-4 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] transition-all"
          >
            Browse Products
          </Link>
        </motion.div>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please log in to complete your order.");
      navigate("/login");
      return;
    }

    try {
      setLoading(true);

      const orderData = {
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        totalAmount: cartTotal,
        paymentMethod: paymentMethod,
        product: cartItems.map((item) => ({
          productId: item.productId || item.id || item._id,
          productName: item.name,
          productImage: item.image,
          productPrice: item.price,
          quantity: item.qty,
          productTotal: item.price * item.qty,
        })),
      };

      await api.post("/orders", orderData);

      toast.success("Order placed successfully.", {
        icon: "✨",
        style: {
          borderRadius: "20px",
          background: "#000",
          color: "#d4af37",
        },
      });

      clearCart();
      navigate("/profile");
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-4 sm:px-8 lg:px-12 font-sans selection:bg-amber-500/30">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-all text-[10px] font-black uppercase tracking-[0.3em] mb-8 group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />{" "}
            Back to Cart
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-serif leading-tight">
                Checkout
              </h1>
              <p className="text-zinc-500 text-sm mt-4 font-light italic opacity-70">
                Complete your order details below.
              </p>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 border-b border-zinc-900 pb-2">
              <span className="text-zinc-700">Details</span>
              <ChevronRight size={12} className="text-zinc-800" />
              <span className="text-amber-500">Payment</span>
              <ChevronRight size={12} className="text-zinc-800" />
              <span className="text-zinc-700">Delivery</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form Side */}
          <div className="lg:col-span-7 space-y-12">
            <form onSubmit={handleCheckout} className="space-y-12">
              <section className="space-y-8">
                <div className="flex items-center gap-3 border-b border-zinc-900 pb-4">
                  <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
                    <MapPin className="w-5 h-5 text-amber-500" />
                  </div>
                  <h2 className="text-xl font-serif">Delivery Address</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 group-focus-within:text-amber-500 transition-colors">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className="w-full bg-zinc-950 border border-zinc-900 rounded-2xl px-6 py-4 text-sm focus:border-amber-500 outline-none transition-all placeholder:text-zinc-800"
                      required
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 group-focus-within:text-amber-500 transition-colors">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className="w-full bg-zinc-950 border border-zinc-900 rounded-2xl px-6 py-4 text-sm focus:border-amber-500 outline-none transition-all placeholder:text-zinc-800"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 group-focus-within:text-amber-500 transition-colors">
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                    rows="3"
                    className="w-full bg-zinc-950 border border-zinc-900 rounded-2xl px-6 py-4 text-sm focus:border-amber-500 outline-none transition-all placeholder:text-zinc-800 resize-none"
                    required
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 group-focus-within:text-amber-500 transition-colors flex items-center gap-2">
                      <Mail size={12} />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="For order confirmation"
                      className="w-full bg-zinc-950 border border-zinc-900 rounded-2xl px-6 py-4 text-sm focus:border-amber-500 outline-none transition-all placeholder:text-zinc-800"
                      required
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 group-focus-within:text-amber-500 transition-colors flex items-center gap-2">
                      <Phone size={12} />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="For delivery contact"
                      className="w-full bg-zinc-950 border border-zinc-900 rounded-2xl px-6 py-4 text-sm focus:border-amber-500 outline-none transition-all placeholder:text-zinc-800"
                      required
                    />
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="flex items-center gap-3 border-b border-zinc-900 pb-4">
                  <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
                    <Wallet className="w-5 h-5 text-amber-500" />
                  </div>
                  <h2 className="text-xl font-serif">Select Payment Method</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { id: "COD", label: "Cash on Delivery", icon: Truck, desc: "Pay at your door" },
                    { id: "PayHere", label: "PayHere", icon: CheckCircle, desc: "LKR Gateway" }
                  ].map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id)}
                      className={`relative p-6 rounded-3xl border text-left transition-all duration-300 group ${paymentMethod === method.id
                        ? "bg-amber-600/10 border-amber-600/50 shadow-[0_0_20px_rgba(212,175,55,0.05)]"
                        : "bg-zinc-950 border-zinc-900 hover:border-zinc-700"
                        }`}
                    >
                      {paymentMethod === method.id && (
                        <CheckCircle size={14} className="absolute top-4 right-4 text-amber-500" />
                      )}
                      <method.icon
                        size={20}
                        className={`mb-4 transition-colors ${paymentMethod === method.id ? "text-amber-500" : "text-zinc-600 group-hover:text-zinc-400"}`}
                      />
                      <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${paymentMethod === method.id ? "text-white" : "text-zinc-500"}`}>
                        {method.label}
                      </p>
                      <p className="text-[9px] text-zinc-600 uppercase tracking-tight">{method.desc}</p>
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">

                  {paymentMethod === "PayHere" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-amber-600/5 border border-amber-600/20 rounded-[32px] p-8 text-center">
                        <p className="text-[10px] text-amber-500 font-bold uppercase tracking-widest mb-2">PayHere Secure Matrix</p>
                        <p className="text-[11px] text-zinc-500 max-w-xs mx-auto">
                          You will interact with the PayHere secure payment interface to finalize this acquisition in LKR.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {paymentMethod === "COD" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-zinc-950 border border-zinc-900 rounded-[32px] p-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-all duration-700 pointer-events-none"></div>
                        <div className="flex items-start justify-between relative z-10">
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-white italic">Cash on Delivery Authorization</p>
                            <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">
                              Authorize payment upon physical possession of artifacts. Secure and personal.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>

              <button
                type="button"
                onClick={(e) => {
                  if (paymentMethod === "PayHere") {
                    handlePayHerePayment();
                  } else {
                    handleCheckout(e);
                  }
                }}
                disabled={loading}
                className="w-full bg-amber-600 hover:bg-amber-500 text-black font-black uppercase text-[11px] tracking-[0.4em] py-6 rounded-2xl transition-all shadow-2xl shadow-amber-900/10 flex items-center justify-center gap-4 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  "Processing..."
                ) : (
                  <>
                    Place Order <ShieldCheck size={16} />
                  </>
                )}
              </button>
            </form>

            <div className="flex items-center justify-center gap-8 py-8 border-t border-zinc-900">
              <div className="flex items-center gap-2 text-zinc-700">
                <Lock size={14} />
                <span className="text-[9px] font-bold uppercase tracking-widest">
                  Secure payment
                </span>
              </div>
              <div className="flex items-center gap-2 text-zinc-700">
                <Truck size={14} />
                <span className="text-[9px] font-bold uppercase tracking-widest">
                  Fast delivery
                </span>
              </div>
            </div>
          </div>

          {/* Cart Side */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-8">
              <div className="bg-zinc-950 border border-zinc-900 rounded-[48px] p-10 shadow-2xl space-y-10 border-t-zinc-800">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-6">
                  <h3 className="text-xl font-serif">Order Summary</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                    {cartItems.length} Item{cartItems.length > 1 ? "s" : ""}
                  </span>
                </div>

                <div className="max-h-[40vh] overflow-y-auto pr-4 custom-scrollbar space-y-6">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-6 group"
                    >
                      <div className="w-20 h-24 bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 relative flex-shrink-0">
                        <img
                          src={
                            item.image &&
                              (item.image.startsWith("http") ||
                                item.image.startsWith("data:"))
                              ? item.image
                              : item.image
                                ? `${import.meta.env.VITE_API_URL.replace(
                                  "/api",
                                  ""
                                )}${item.image}`
                                : "/images/sample.jpg"
                          }
                          alt={item.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <span className="absolute bottom-2 left-2 text-[8px] font-black text-white/80 bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-md">
                          x{item.qty}
                        </span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-xs font-medium text-white/90 truncate">
                          {item.name}
                        </p>
                        <p className="text-[9px] text-zinc-600 uppercase tracking-widest italic">
                          {item.category || "Product"}
                        </p>
                        <p className="text-xs font-serif text-amber-500/80">
                          Rs. {item.price.toLocaleString()}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-4 pt-6 border-t border-zinc-900">
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                    <span>Subtotal</span>
                    <span className="text-zinc-400">
                      Rs. {cartTotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                    <span>Delivery</span>
                    <span className="text-emerald-500">Free</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t-2 border-zinc-900 mt-6">
                    <p className="text-xs font-black uppercase tracking-[0.4em] text-white">
                      Total
                    </p>
                    <p className="text-2xl font-serif text-amber-500">
                      Rs. {cartTotal.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-600/5 border border-amber-600/10 p-8 rounded-[40px] flex items-center gap-5">
                <div className="w-12 h-12 bg-amber-600/10 rounded-2xl flex items-center justify-center border border-amber-600/20">
                  <ShieldCheck className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-1">
                    Genuine Products Guaranteed
                  </p>
                  <p className="text-[9px] text-zinc-500 uppercase tracking-widest leading-relaxed">
                    Direct from the brand.
                    <br />
                    Quality checked in every bottle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;