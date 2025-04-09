import { motion } from "framer-motion";
import { settingsvariants } from "../../../utils/Constants";
import { useState } from "react";
import Wrapper from "../../../ui/Wrapper";

function Notifications() {
  const { itemVariants, containerVariants } = settingsvariants;
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    sms: true,
    academicUpdates: true,
    financialAlerts: true,
    eventReminders: true,
  });
  return (
    <motion.div variants={containerVariants}>
      <h2 className="text-2xl font-bold mb-6">Notification Preferences</h2>

      <motion.div variants={itemVariants} className="space-y-6">
        <Wrapper light>
          <h3 className="font-semibold mb-4">Email Notifications</h3>
          <div className="space-y-3">
            {Object.entries(notificationSettings).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                  </p>
                  <p className="text-sm text-gray-600">
                    Receive notifications about {key.toLowerCase()}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={() =>
                      setNotificationSettings((prev) => ({
                        ...prev,
                        [key]: !prev[key],
                      }))
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        </Wrapper>

        <Wrapper>
          <h3 className="font-semibold mb-4">Mobile Notifications</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Push Notifications</p>
                <p className="text-sm text-gray-600">
                  Receive push notifications on your mobile device
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </Wrapper>
      </motion.div>
    </motion.div>
  );
}

export default Notifications;
