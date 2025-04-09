import { Search, Filter, Download } from "lucide-react";
import Button from "../../../ui/Button";
import { motion } from "framer-motion";
import { settingsvariants } from "../../../utils/Constants";

function SearchPayment({
  setActiveCategory,
  setSearchQuery,
  categories,
  searchQuery,
  activeCategory,
}) {
  const { itemVariants } = settingsvariants;
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search payments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" icon={<Filter className="h-5 w-5" />}>
            Filter
          </Button>
          <Button variant="secondary" icon={<Download className="h-5 w-5" />}>
            Export
          </Button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export default SearchPayment;
