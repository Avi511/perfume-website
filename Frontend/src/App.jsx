import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./router/AppRoutes";
import ScrollToTop from "./router/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;