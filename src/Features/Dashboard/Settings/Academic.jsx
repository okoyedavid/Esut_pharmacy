import { motion } from "framer-motion";
import { settingsvariants } from "../../../utils/Constants";
import Wrapper from "../../../ui/Wrapper";

function Academic() {
  const { containerVariants, itemVariants } = settingsvariants;
  return (
    <motion.div variants={containerVariants}>
      <h2 className="text-2xl font-bold mb-6 dark:text-white">
        Academic Settings
      </h2>

      <motion.div variants={itemVariants} className="space-y-6">
        <Wrapper light>
          <h3 className="font-semibold mb-4 dark:text-white">
            Course Display Preferences
          </h3>
          <div className="space-y-3">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className=" dark:text-white">Show completed courses</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className=" dark:text-white">Show course credits</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className=" dark:text-white">
                Show course prerequisites
              </span>
            </label>
          </div>
        </Wrapper>
        <Wrapper light>
          <h3 className="font-semibold mb-4  dark:text-white">
            Academic Calendar
          </h3>
          <div className="space-y-3">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className=" dark:text-white">
                Sync with personal calendar
              </span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className=" dark:text-white">
                Show assignment deadlines
              </span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className=" dark:text-white">Show exam schedules</span>
            </label>
          </div>
        </Wrapper>

        <Wrapper light>
          <h3 className="font-semibold mb-4  dark:text-white">
            Study Preferences
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-100 mb-2">
                Preferred Study Time
              </label>
              <select className="w-full px-4 py-2 border  dark:text-white border-gray-300 rounded-lg">
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
                <option>Night</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-100 mb-2">
                Study Session Duration
              </label>
              <select className="w-full px-4 py-2 border  dark:text-white border-gray-300 rounded-lg">
                <option>30 minutes</option>
                <option>1 hour</option>
                <option>2 hours</option>
                <option>3 hours</option>
              </select>
            </div>
          </div>
        </Wrapper>
      </motion.div>
    </motion.div>
  );
}
export default Academic;
