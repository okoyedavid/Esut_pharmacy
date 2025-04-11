import { levels, semesters, settingsvariants } from "../../../utils/Constants";
import Input from "../../../ui/Input";
import { useSetUrl } from "../../../hooks/useSetUrl";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

function CourseSearchBar() {
  const { searchParams, setParams } = useSetUrl();
  const semester = searchParams.get("semester") || "first";
  const query = searchParams.get("query")?.toLowerCase();
  const levelurl = searchParams.get("level");

  return (
    <motion.div variants={settingsvariants.itemVariants}>
      <div className="bg-white shadow-md p-2 sm:p-4 rounded-xl mb-4">
        <div className="flex flex-col md:flex-row gap-4 mb-4 ">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search courses..."
              value={query}
              onChange={(e) => setParams({ query: e.target.value })}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {/* Level Selection */}
          <div className="flex gap-2">
            {levels.map((level) => (
              <button
                key={level.value}
                onClick={() => setParams({ level: level.value })}
                className={`px-2 py-1 sm:px-4 sm:py-2  rounded-lg text-sm font-medium transition-colors ${
                  Number(levelurl) === level.value
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {level.label}
              </button>
            ))}
          </div>

          {/* Semester Selection */}
          <div className="flex gap-2 ml-auto">
            {semesters.map((currentsemester) => (
              <button
                key={currentsemester.id}
                onClick={() => setParams({ semester: currentsemester.id })}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  semester === currentsemester.id
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {currentsemester.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CourseSearchBar;
