import { settingsvariants } from "../../../utils/Constants";
import { motion } from "framer-motion";

function ForumHead() {
  return (
    <motion.div variants={settingsvariants.itemVariants} className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Faculty Forum</h1>
      <p className="text-gray-600">
        Connect, share, and stay updated with the pharmacy community
      </p>
    </motion.div>
  );
}

export default ForumHead;
