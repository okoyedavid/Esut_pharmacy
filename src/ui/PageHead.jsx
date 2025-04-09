import { settingsvariants } from "../utils/Constants";
import { motion } from "framer-motion";

function PageHead({ title, subtitle }) {
  return (
    <motion.div variants={settingsvariants.itemVariants} className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h1>
      <p className="text-gray-600 dark:text-gray-200">{subtitle}</p>
    </motion.div>
  );
}

export default PageHead;
