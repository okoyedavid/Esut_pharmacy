import { Outlet } from "react-router-dom";
import Footer from "../../ui/Footer";
import Navbar from "../../ui/Navbar";
import { useEffect } from "react";

function HomeLayout() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // or behavior: "auto"
  }, []);
  return (
    <main className="relative dark:bg-gray-900">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default HomeLayout;
