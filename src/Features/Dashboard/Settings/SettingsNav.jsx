import { User, Lock, Bell, Shield, ChevronRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
function SettingsNav() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const currentTab = params.get("tab") || "account";

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mt-2 ml-6 mr-2 max-h-[80vh] overflow-y-auto rounded-lg bg-gray-100 dark:bg-gray-800 p-4 shadow-inner"
    >
      {tabs.map((tab) => (
        <Link to={tab.path} key={tab.id}>
          <motion.button
            whileHover={{ x: 6 }}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-all 
                ${
                  currentTab === tab.id
                    ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
          >
            <tab.icon className="h-5 w-5 shrink-0" />
            <span className="text-sm font-medium truncate">{tab.label}</span>
            <ChevronRight
              className={`h-4 w-4 ml-auto transform transition-transform ${
                currentTab === tab.id ? "rotate-90" : ""
              }`}
            />
          </motion.button>
        </Link>
      ))}
    </motion.div>
  );
}

export default SettingsNav;
const tabs = [
  {
    path: "/dashboard/settings?tab=account",
    id: "account",
    label: "Account",
    icon: User,
  },
  {
    path: "/dashboard/settings?tab=security",
    id: "security",
    label: "Security",
    icon: Shield,
  },
  {
    path: "/dashboard/settings?tab=notifications",
    id: "notifications",
    label: "Notifications",
    icon: Bell,
  },

  {
    path: "/dashboard/settings?tab=academic",
    id: "academic",
    label: "Academic",
    icon: BookOpen,
  },
  {
    path: "/dashboard/settings?tab=privacy",
    id: "privacy",
    label: "Privacy",
    icon: Lock,
  },
];
