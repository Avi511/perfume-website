import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import NotFound from "../pages/NotFound";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminProducts from "../pages/admin/AdminProducts";
import AdminUsers from "../pages/admin/AdminUsers";
import AdminRoute from "../pages/admin/AdminRoute";
import Profile from "../pages/Profile";
import SellerRouter from "../pages/seller/SellerRouter";
import Review from "../pages/Review";
import LegalPrivacy from "../pages/LegalPrivacy";
import ShippingPolicy from "../pages/ShippingPolicy";
import RefundPolicy from "../pages/RefundPolicy";
import TermsOfService from "../pages/TermsOfService";
import FAQ from "../pages/FAQ";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/shipping" element={<ShippingPolicy />} />
      <Route path="/privacy" element={<LegalPrivacy />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/refund" element={<RefundPolicy />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/seller/*" element={<SellerRouter />} />
      <Route path="/reviews" element={<Review />} />

      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/products"
        element={
          <AdminRoute>
            <AdminProducts />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          <AdminRoute>
            <AdminUsers />
          </AdminRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
