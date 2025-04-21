import { settingsvariants } from "../../../utils/Constants";
import { motion } from "framer-motion";
import Input from "../../../ui/Input";
import { useSetUrl } from "../../../hooks/useSetUrl";
import { Search } from "lucide-react";

function ResourceSearch() {
  const { searchParams, setParams } = useSetUrl();
  const query = searchParams?.get("query") || "";

  return (
    <motion.div
      variants={settingsvariants.itemVariants}
      className="rounded-xl shadow-sm dark:bg-gray-800 p-6 mb-8"
    >
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search resources..."
            value={query}
            onChange={(e) => setParams({ query: e.target.value })}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default ResourceSearch;
