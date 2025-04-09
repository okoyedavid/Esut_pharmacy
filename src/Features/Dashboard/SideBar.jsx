import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  CreditCard,
  FileText,
  LayoutDashboard,
  Library,
  Settings,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import SettingsNav from "./Settings/SettingsNav";
import { useState } from "react";
import { useGetUser } from "../../hooks/useGetUser";

function SideBar({ isOpen, onClose }) {
  const { data: user } = useGetUser();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  function handleClick(link) {
    if (link.path !== "/dashboard/settings") {
      navigate(link.path);
      onClose();
    } else {
      setSettingsOpen((e) => !e);
    }
  }

  const sidebarLinks = [
    {
      path: "/dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
    },
    {
      path: `/dashboard/courses?level=${user.user_metadata.level.match(
        /\d+(\.\d+)?/g
      )}&semester=first`,
      icon: BookOpen,
      label: "Courses",
    },
    { path: "/dashboard/resources", icon: Library, label: "Resources" },
    {
      path: `/dashboard/results?level=${user.user_metadata.level.match(
        /\d+(\.\d+)?/g
      )}&semester=first`,
      icon: FileText,
      label: "Results",
    },
    { path: "/dashboard/Payments", icon: CreditCard, label: "Payments" },
    { path: "/dashboard/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 backdrop-blur-sm bg-black/30 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {(isOpen || typeof window !== "undefined") && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed z-50 lg:static lg:block top-0 left-0 h-full w-64 
             shadow-lg ${!isOpen && "hidden lg:block"}
            `}
          >
            <div className="p-4">
              <div className="flex items-center gap-3 mb-8">
                <img src="/logo.png" className="h-8 w-8" />
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                  ESUT Portal
                </h1>
              </div>

              <div className="space-y-2">
                {sidebarLinks.map((link, index) => {
                  const isActive = link.path === path;
                  return (
                    <div key={index} onClick={() => handleClick(link)}>
                      <motion.button
                        whileHover={{ x: 4 }}
                        className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-all
                          ${
                            isActive
                              ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                          }
                        `}
                      >
                        <link.icon className="h-5 w-5" />
                        {link.label}
                      </motion.button>
                      {settingsOpen && link.path === "/dashboard/settings" && (
                        <SettingsNav />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default SideBar;
