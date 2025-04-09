import { motion } from "framer-motion";
import Security from "../../Features/Dashboard/Settings/Security";
import Academic from "../../Features/Dashboard/Settings/Academic";
import Privacy from "../../Features/Dashboard/Settings/Privacy";
import Notifications from "../../Features/Dashboard/Settings/Notifications";
import { useLocation } from "react-router-dom";
import UpdateUserInfo from "../../Features/Dashboard/Settings/UpdateuserInfo";
import PageMotion from "../../ui/PageMotion";

function Settings() {
  const locations = useLocation();
  const currentTab =
    new URLSearchParams(locations.search).get("tab") || "account";

  // Animation variants

  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
      <PageMotion>
        {/* Account Settings */}
        {currentTab === "account" && <UpdateUserInfo />}
        {/* Security Settings */}
        {currentTab === "security" && <Security />}
        {/* Notifications Settings */}
        {currentTab === "notifications" && <Notifications />}
        {/* Academic Settings */}
        {currentTab === "academic" && <Academic />}
        {/* Privacy Settings */}
        {currentTab === "privacy" && <Privacy />}
      </PageMotion>
    </motion.div>
  );
}

export default Settings;
