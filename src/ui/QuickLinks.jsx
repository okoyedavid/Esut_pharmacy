import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function QuickLink({ icon: Icon, pathname, title, description }) {
  return (
    <Link to={pathname}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white p-6 rounded-xl dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
      >
        <Icon className="w-8 h-8 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </Link>
  );
}

export default QuickLink;
