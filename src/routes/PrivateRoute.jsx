/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const isAuthenticated = localStorage.getItem("userToken") === import.meta.env.VITE_USER_TOKEN;

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

export default PrivateRoute;
