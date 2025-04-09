import { settingsvariants } from "../utils/Constants";
import { motion } from "framer-motion";

function PageMotion({ children }) {
  const { containerVariants } = settingsvariants;
  return (
    <motion.div
      variants={containerVariants}
      className="max-w-6xl mx-auto bg-white md:p-8 p-2 dark:bg-gray-900 rounded-xl min-h-screen"
    >
      {children}
    </motion.div>
  );
}

export default PageMotion;
