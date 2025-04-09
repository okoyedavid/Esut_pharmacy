import { Search, Calculator } from "lucide-react";
import { motion } from "framer-motion";
import { levels, semesters, settingsvariants } from "../../../utils/Constants";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import { useSetUrl } from "../../../hooks/useSetUrl";
function ResultsSearch() {
  const { searchParams, setParams } = useSetUrl();
  const query = searchParams.get("query") || "";
  const level = searchParams.get("level");
  const currentsemester = searchParams.get("semester");

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
            placeholder="Search courses..."
            value={query}
            onChange={(e) => setParams({ query: e.target.value })}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="primary" icon={<Calculator className="h-5 w-5" />}>
            Calculate GPA
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {/* Level Selection */}
        <div className="flex gap-2">
          {levels.map((currentlevel) => (
            <button
              key={currentlevel}
              onClick={() => setParams({ level: currentlevel })}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                level === currentlevel
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {currentlevel} Level
            </button>
          ))}
        </div>

        {/* Semester Selection */}
        <div className="flex gap-2 ml-auto">
          {semesters.map((semester) => (
            <button
              key={semester.id}
              onClick={() => setParams({ semester: semester.id })}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentsemester === semester.id
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {semester.label}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ResultsSearch;
