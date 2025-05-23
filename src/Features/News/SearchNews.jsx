import { motion } from "framer-motion";
import {
  Award,
  Bell,
  Calendar,
  Filter,
  GraduationCap,
  Megaphone,
  Search,
  Users,
} from "lucide-react";
import { useSetUrl } from "../../hooks/useSetUrl";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { settingsvariants } from "../../utils/Constants";

function SearchNews() {
  const { searchParams, setParams } = useSetUrl();
  const selectedCategory = searchParams.get("selected") || "all";

  function handleSearch(e) {
    setParams({ query: e.target.value });
  }

  function handleSelect(id) {
    setParams({ selected: id });
  }

  return (
    <motion.div variants={settingsvariants.itemVariants} className="mb-8">
      <div className="rounded-xl shadow-sm dark:bg-gray-800 p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search updates..."
              value={searchParams.get("query") || ""}
              onChange={handleSearch}
            />
          </div>
          <Button variant="secondary" icon={<Filter className="h-5 w-5" />}>
            Filter
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleSelect(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <category.icon className="h-4 w-4" />
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default SearchNews;

const categories = [
  { id: "all", label: "All Updates", icon: Bell },
  { id: "events", label: "Events", icon: Calendar },
  { id: "academic", label: "Academic", icon: GraduationCap },
  { id: "social", label: "Social", icon: Users },
  { id: "announcements", label: "Announcements", icon: Megaphone },
  { id: "achievements", label: "Achievements", icon: Award },
];
