import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AdminRoute = ({ children }) => {
    const { user } = useAuth();

    // Check if user is logged in and is an admin
    if (!user || !user.isAdmin) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default AdminRoute;
