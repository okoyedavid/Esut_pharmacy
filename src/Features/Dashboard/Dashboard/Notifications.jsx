import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, Info } from "lucide-react";

function Notifications() {
  const notificationIcons = {
    info: <Info className="text-blue-500" />,
    warning: <AlertTriangle className="text-yellow-500" />,
    success: <CheckCircle className="text-green-500" />,
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6"
      >
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Recent Notifications
        </h3>
        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
            >
              {notificationIcons[notification.type]}
              <div>
                <p className="font-medium text-gray-800 dark:text-white">
                  {notification.message}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {notification.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Notifications;

const notifications = [
  {
    type: "info",
    message: "Your semester registration is due",
    date: "2024-04-01",
  },
  {
    type: "warning",
    message: "Course registration closes in 3 days",
    date: "2024-04-05",
  },
  {
    type: "success",
    message: "You have been successfully enrolled in CS101",
    date: "2024-03-20",
  },
];
