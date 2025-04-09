import { Award, BookOpen, GraduationCap } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { resultsData, settingsvariants } from "../../../utils/Constants";
import { calculateGPA } from "../../../utils/helper";
import { motion } from "framer-motion";

function ResultCards() {
  const [searchParams] = useSearchParams();

  const semester = searchParams.get("semester") || "first";

  return (
    <motion.div
      variants={settingsvariants.itemVariants}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
    >
      <div className="rounded-xl shadow-sm dark:bg-gray-800 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <GraduationCap className="h-6 w-6 text-blue-600" />
          </div>
          <span className="text-sm font-medium text-blue-600">Current GPA</span>
        </div>
        <h3 className="text-2xl font-bold mb-1">
          {calculateGPA(resultsData[400][semester])}
        </h3>
        <p className="text-gray-600 text-sm">Semester GPA</p>
      </div>

      <div className="rounded-xl shadow-sm p-6 dark:bg-gray-800">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-green-100 rounded-lg">
            <Award className="h-6 w-6 text-green-600" />
          </div>
          <span className="text-sm font-medium text-green-600">Standing</span>
        </div>
        <h3 className="text-xl font-bold mb-1">First Class</h3>
        <p className="text-gray-600 text-sm">Academic Standing</p>
      </div>

      <div className="rounded-xl  dark:bg-gray-800 shadow-sm p-6">
        <div className=" flex items-center justify-between mb-4">
          <div className="p-3 bg-purple-100 rounded-lg">
            <BookOpen className="h-6 w-6 text-purple-600" />
          </div>
          <span className="text-sm font-medium text-purple-600">
            Total Units
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-1">
          {resultsData[400][semester].reduce(
            (acc, course) => acc + course.units,
            0
          )}
        </h3>
        <p className="text-gray-600 text-sm">Credit Units</p>
      </div>
    </motion.div>
  );
}
export default ResultCards;
