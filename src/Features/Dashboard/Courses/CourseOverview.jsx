import { GraduationCap, Award, TrendingUp, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { gradePoints, settingsvariants } from "../../../utils/Constants";
import Wrapper from "../../../ui/Wrapper";
import { useCourses } from "../../../context/CourseProvider";
import { useCoursesData } from "./useCoursesData";
import { getClassification } from "../../../utils/helper";
import SpinnerFullPage from "../../../ui/SpinnerFullPage";

function CourseOverview() {
  const { total_units, units_completed, percentage, pastLevels, isLoading } =
    useCoursesData();
  const { resultsWithAssessments } = useCourses();

  if (isLoading) return <SpinnerFullPage />;

  const passedCourses = resultsWithAssessments.filter(
    (item) => item.grade !== "AR" && pastLevels.includes(Number(item.level))
  );

  const threshold_unit = resultsWithAssessments
    .filter((item) => pastLevels.includes(Number(item.level)))
    .reduce((acc, curr) => acc + curr.units, 0);

  // 4. Calculate total grade points and total units
  const totalUnits = passedCourses.reduce((acc, curr) => acc + curr.units, 0);
  const totalGradePoints = passedCourses.reduce(
    (acc, curr) => acc + (gradePoints[curr.grade] ?? 0) * curr.units,
    0
  );

  // 5. Compute CGPA
  const cgpa = (totalGradePoints / totalUnits).toFixed(2);
  const { classification, standing } = getClassification(cgpa);

  return (
    <motion.div
      variants={settingsvariants.itemVariants}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6"
    >
      <Wrapper>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <GraduationCap className="h-6 w-6 text-blue-600" />
          </div>
          <span className="text-sm font-medium text-blue-600">GPA</span>
        </div>
        <h3 className="text-2xl font-bold mb-1">{cgpa}</h3>
        <p className="text-gray-600 text-sm">Current CGPA</p>
      </Wrapper>

      <Wrapper>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-green-100 rounded-lg">
            <Award className="h-6 w-6 text-green-600" />
          </div>
          <span className="text-sm font-medium text-green-600">{standing}</span>
        </div>
        <h3 className="text-xl font-bold mb-1">{classification}</h3>
      </Wrapper>

      <Wrapper>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-yellow-100 rounded-lg">
            <BookOpen className="h-6 w-6 text-yellow-600" />
          </div>
          <span className="text-sm font-medium text-yellow-600">Units</span>
        </div>
        <h3 className="text-2xl font-bold mb-1">
          {units_completed}/{total_units}
        </h3>
        <p className="text-gray-600 text-sm">Units Completed</p>
      </Wrapper>

      <Wrapper>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-purple-100 rounded-lg">
            <TrendingUp className="h-6 w-6 text-purple-600" />
          </div>
          <span className="text-sm font-medium text-purple-600">Progress</span>
        </div>
        <h3 className="text-2xl font-bold mb-1">{percentage}%</h3>
        <p className="text-gray-600 text-sm">Course Completion</p>
      </Wrapper>

      {totalUnits !== threshold_unit && (
        <p className="text-sm col-span-2 text-yellow-700 bg-yellow-100 p-2 rounded-md mt-4 border border-yellow-300">
          CGPA is based on filled course grades. To view a complete cumulative
          CGPA, fill in all course grades from previous levels.
        </p>
      )}
    </motion.div>
  );
}

export default CourseOverview;
