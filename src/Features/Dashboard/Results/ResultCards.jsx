import { Award, BookOpen, GraduationCap } from "lucide-react";
import { settingsvariants } from "../../../utils/Constants";
import { calculateGPA } from "../../../utils/helper";
import { motion } from "framer-motion";
import Wrapper from "../../../ui/Wrapper";
import { useCourses } from "../../../context/CourseProvider";

import { getClassification } from "../../../utils/helper";
function ResultCards() {
  const { result } = useCourses();

  const GPA = calculateGPA(result);
  const { classification, standing } = getClassification(GPA);
  return (
    <motion.div
      variants={settingsvariants.itemVariants}
      className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6"
    >
      <Wrapper light>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <GraduationCap className="h-6 w-6 text-blue-600" />
          </div>
          <span className="text-sm font-medium text-blue-600">Current GPA</span>
        </div>
        <h3 className="text-2xl font-bold mb-1">{GPA}</h3>
        <p className="text-gray-600 dark:text-gray-50 text-sm">Semester GPA</p>
      </Wrapper>

      <Wrapper light>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-green-100 rounded-lg">
            <Award className="h-6 w-6 text-green-600" />
          </div>
          <span className="text-sm font-medium text-green-600">{standing}</span>
        </div>
        <h3 className="text-xl font-bold mb-1">{classification}</h3>
        <p className="text-gray-600 dark:text-gray-50 text-sm">
          Academic Standing
        </p>
      </Wrapper>

      <Wrapper light>
        <div className=" flex items-center justify-between mb-4">
          <div className="p-3 bg-purple-100 rounded-lg">
            <BookOpen className="h-6 w-6 text-purple-600" />
          </div>
          <span className="text-sm font-medium text-purple-600">
            Total Units
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-1 ">
          {result.reduce((acc, course) => acc + course.units, 0)}
        </h3>
        <p className="text-gray-600 dark:text-gray-50 text-sm">Credit Units</p>
      </Wrapper>
    </motion.div>
  );
}
export default ResultCards;
