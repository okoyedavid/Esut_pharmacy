import { settingsvariants } from "../../utils/Constants";
import { motion } from "framer-motion";

function NewsHeader() {
  return (
    <motion.div variants={settingsvariants.itemVariants} className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Campus Updates</h1>
      <p className="text-gray-600">
        Stay informed about the latest news, events, and announcements
      </p>
    </motion.div>
  );
}

export default NewsHeader;
