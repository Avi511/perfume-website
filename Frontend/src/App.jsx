import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./router/AppRoutes";
import ScrollToTop from "./router/ScrollToTop";

import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

function Layout() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/forgot-password" || location.pathname.startsWith("/reset-password/");

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={12}
        toastOptions={{
          className: "liquid-glass-toast",
          duration: 1500,
          success: {
            iconTheme: {
              primary: "rgba(0, 0, 0, 0.7)",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "rgba(100, 0, 0, 0.7)",
              secondary: "#fff",
            },
          },
        }}
      />
      <ScrollToTop />
      {!isAuthPage && <Navbar />}
      <AppRoutes />
      {!isAuthPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Layout />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;