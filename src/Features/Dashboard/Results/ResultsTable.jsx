import { motion } from "framer-motion";
import { settingsvariants } from "../../../utils/Constants";
import ResultModal from "./ResultsModal";
import { useModal } from "../../../ui/Modal";
import { useState } from "react";
import { useCourses } from "../../../context/CourseProvider";
import ResultsRow from "./ResultsRow";
import ResultCard from "./ResultMobileCard"; // new component

function ResultTable() {
  const { open } = useModal();
  const [course, setCourse] = useState(null);
  const { result } = useCourses();

  function handleSelectCourse(course) {
    setCourse(course);
    open("result modal");
  }

  return (
    <motion.div variants={settingsvariants.itemVariants}>
      {/* Desktop Table */}
      <div className="hidden sm:block rounded-xl shadow-sm w-full overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left font-medium text-gray-500">
                  Course Code
                </th>
                <th className="px-6 py-4 text-left font-medium text-gray-500">
                  Title
                </th>
                <th className="px-6 py-4 text-center font-medium text-gray-500">
                  Units
                </th>
                <th className="px-6 py-4 text-center font-medium text-gray-500">
                  Quiz
                </th>
                <th className="px-6 py-4 text-center font-medium text-gray-500">
                  Exam
                </th>
                <th className="px-6 py-4 text-center font-medium text-gray-500">
                  Total
                </th>
                <th className="px-6 py-4 text-center font-medium text-gray-500">
                  Grade
                </th>
                <th className="px-6 py-4 text-center font-medium text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {result.map((course) => (
                <ResultsRow
                  key={course.id}
                  course={course}
                  handleSelectCourse={handleSelectCourse}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="sm:hidden space-y-4 mt-4">
        {result.map((course) => (
          <ResultCard
            key={course.id}
            course={course}
            handleSelectCourse={handleSelectCourse}
          />
        ))}
      </div>

      <ResultModal course={course} />
    </motion.div>
  );
}

export default ResultTable;
