import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { settingsvariants } from "../../../utils/Constants";
import Input from "../../../ui/Input";

function SearchPayment({ setSearchQuery, searchQuery }) {
  const { itemVariants } = settingsvariants;
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8"
    >
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="text"
          placeholder="Search payments..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </motion.div>
  );
}

export default SearchPayment;
