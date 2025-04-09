import Button from "../../../ui/Button";
import { motion } from "framer-motion";
import { Edit3 } from "lucide-react";
import { settingsvariants } from "../../../utils/Constants";
import ResultModal from "./ResultsModal";
import { useModal } from "../../../ui/Modal";
import { useState } from "react";
import { calculateGradePoint } from "../../../utils/helper";
import { useCourses } from "../../../context/CourseProvider";

function ResultTable() {
  const { open } = useModal();
  const [course, setCourse] = useState(null);

  const { result } = useCourses();

  // Handle course selection for the modal
  function handleSelectCourse(course) {
    setCourse(course);
    open("result modal");
  }

  return (
    <motion.div variants={settingsvariants.itemVariants}>
      <div className="rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Course Code
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Title
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">
                  Units
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">
                  Quiz Score
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">
                  Exam Score
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">
                  Total
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">
                  Grade
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {result.map((course) => {
                const totalScore = course.assessments.reduce(
                  (acc, curr) => acc + curr.score,
                  0
                );
                const totalPossible = course.assessments.reduce(
                  (acc, curr) => acc + curr.total,
                  0
                );
                const { grade } = calculateGradePoint(course.assessments);

                return (
                  <tr
                    key={course.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {course.code}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {course.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">
                      {course.units}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">
                      {course.assessments[0].score}/
                      {course.assessments[0].total}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">
                      {course.assessments[1].score}/
                      {course.assessments[1].total}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">
                      {totalScore}/{totalPossible}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          course.grade === "A"
                            ? "bg-green-100 text-green-700"
                            : course.grade === "B"
                            ? "bg-blue-100 text-blue-700"
                            : course.grade === "C"
                            ? "bg-yellow-100 text-yellow-700"
                            : course.grade === "D"
                            ? "bg-orange-100 text-orange-700"
                            : course.grade === "E"
                            ? "bg-red-100 text-red-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {grade}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Button
                        variant="secondary"
                        size="sm"
                        icon={<Edit3 className="h-4 w-4" />}
                        onClick={() => handleSelectCourse(course)}
                      >
                        Edit
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <ResultModal course={course} />
    </motion.div>
  );
}

export default ResultTable;
