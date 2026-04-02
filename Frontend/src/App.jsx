import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./router/AppRoutes";
import ScrollToTop from "./router/ScrollToTop";

import { Toaster } from "react-hot-toast";

function Layout() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      <Toaster 
        position="top-right"
        reverseOrder={false}
        gutter={12}
        toastOptions={{
          className: "liquid-glass-toast",
          duration: 4000,
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
      <Layout />
    </Router>
  );
}

export default App;