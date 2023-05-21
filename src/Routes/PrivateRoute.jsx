import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location=useLocation()
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace state={{from:location}}></Navigate>;
};

export default PrivateRoute;
