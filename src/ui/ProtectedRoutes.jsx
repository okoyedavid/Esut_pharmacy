import { useEffect } from "react";
import { useGetUser } from "../hooks/useGetUser";
import SpinnerFullPage from "./SpinnerFullPage";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useGetUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/auth");
    }
  }, [isAuthenticated, navigate, isLoading]);

  if (isLoading) return <SpinnerFullPage />;

  if (isAuthenticated) return children;
}

export default ProtectedRoutes;
