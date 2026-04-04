import { Routes, Route, Navigate } from "react-router-dom";
import SellerDashboard from "./SellerDashboard";
import { useAuth } from "../../context/AuthContext";

function SellerRouter() {
  const { user } = useAuth();
  
  if (!user || (!user.isSeller && !user.isAdmin)) {
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
      <Route index element={<SellerDashboard />} />
      <Route path="dashboard" element={<SellerDashboard />} />
    </Routes>
  );
}

export default SellerRouter;
