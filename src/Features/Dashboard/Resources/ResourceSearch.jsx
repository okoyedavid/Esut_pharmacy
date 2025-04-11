import { Filter, Search } from "lucide-react";
import Button from "../../../ui/Button";
import { departments, settingsvariants } from "../../../utils/Constants";
import { motion } from "framer-motion";
import Input from "../../../ui/Input";
import { useSetUrl } from "../../../hooks/useSetUrl";

function ResourceSearch() {
  const { searchParams, setParams } = useSetUrl();
  const query = searchParams.get("query") || "";
  const department = searchParams.get("department") || "pharmacology";
  return (
    <motion.div
      variants={settingsvariants.itemVariants}
      className="rounded-xl shadow-sm p-6 mb-8"
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
        <Button variant="secondary" icon={<Filter className="h-5 w-5" />}>
          Filter
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {departments.map((dept) => (
          <button
            key={dept.id}
            onClick={() => setParams({ department: dept.id })}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              department === dept.id
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {dept.name}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export default ResourceSearch;
