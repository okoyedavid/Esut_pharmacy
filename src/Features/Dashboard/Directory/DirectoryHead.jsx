import { settingsvariants } from "../../../utils/Constants";
import { motion } from "framer-motion";

function DirectoryHead() {
  const { itemVariants } = settingsvariants;
  return (
    <motion.div variants={itemVariants} className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Meet Our Student Executives
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Dedicated leaders working together to enhance the academic and social
        experience of every pharmacy student
      </p>
    </motion.div>
  );
}

export default DirectoryHead;
