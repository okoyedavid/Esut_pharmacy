import { motion } from "framer-motion";
import Button from "../../../ui/Button";
import { settingsvariants } from "../../../utils/Constants";
import Wrapper from "../../../ui/Wrapper";
import { useDarkMode } from "../../../context/DarkModeProvider";
import { Moon, Sun } from "lucide-react";
import { logout } from "../../../services/ApiAuth";

function Privacy() {
  const { containerVariants, itemVariants } = settingsvariants;

  const { toggleTheme, isDarkMode } = useDarkMode();
  return (
    <motion.div variants={containerVariants}>
      <h2 className="text-2xl font-bold mb-6 dark:text-white">
        Privacy Settings
      </h2>

      <motion.div variants={itemVariants} className="space-y-6">
        <Wrapper light>
          <h3 className="font-semibold mb-4 dark:text-white">
            Profile Visibility
          </h3>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <div>
                <p className="font-medium">Public Profile</p>
                <p className="text-sm text-gray-600">
                  Make your profile visible to other students
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </label>
            <label className="flex items-center justify-between">
              <div>
                <p className="font-medium">Show Academic Status</p>
                <p className="text-sm text-gray-600">
                  Display your GPA and academic achievements
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </label>
          </div>
        </Wrapper>

        <Wrapper light>
          <h3 className="font-semibold mb-4">Data Usage</h3>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <div>
                <p className="font-medium">Analytics</p>
                <p className="text-sm text-gray-600">
                  Help improve the platform with usage data
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </label>
          </div>
        </Wrapper>

        <motion.div variants={containerVariants}>
          <h2 className="text-2xl font-bold mb-6 dark:text-white">
            Appearance Settings
          </h2>

          <Wrapper light>
            <h3 className="font-semibold mb-4 dark:text-white">Theme</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={toggleTheme}
                className={`p-4 rounded-lg border-2 ${
                  !isDarkMode ? "border-blue-500" : "border-gray-200"
                }`}
              >
                <Sun className="h-6 w-6 mb-2 dark:text-white" />
                <p className="font-medium dark:text-white">Light Mode</p>
              </button>
              <button
                onClick={toggleTheme}
                className={`p-4 rounded-lg border-2 ${
                  isDarkMode ? "border-blue-500" : "border-gray-200"
                }`}
              >
                <Moon className="h-6 w-6 mb-2 dark:text-white" />
                <p className="font-medium dark:text-white">Dark Mode</p>
              </button>
            </div>
          </Wrapper>
        </motion.div>

        <Wrapper light>
          <h3 className="font-semibold mb-4 dark:text-white">
            Account Management
          </h3>
          <div className="space-y-4">
            <Button onClick={logout} size="lg" variant="danger">
              Logout
            </Button>
          </div>
        </Wrapper>
      </motion.div>
    </motion.div>
  );
}

export default Privacy;
