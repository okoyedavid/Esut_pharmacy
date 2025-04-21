import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../Features/Dashboard/SideBar";
import Header from "../../Features/Dashboard/Header";

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen md:h-screen flex relative dark:bg-gradient-to-br from-gray-900 to-black transition-colors">
      {/* Sidebar */}
      <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:overflow-hidden">
        <Header onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
        <div className="flex-1 md:overflow-y-auto px-2 md:pt-5 pt-6 relative  bg-gray-50 dark:bg-gray-800">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
