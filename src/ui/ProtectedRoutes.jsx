import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserProvider";

function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth");
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated) return children;
}

export default ProtectedRoutes;
