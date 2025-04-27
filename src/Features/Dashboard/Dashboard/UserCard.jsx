import { motion } from "framer-motion";
import { useCourses } from "../../../context/CourseProvider";
import { useUser } from "../../../context/UserProvider";
import { useGetData } from "../../../hooks/useGetData";
import LoadingGrid from "../../../ui/LoadingGrid";
import { gradePoints } from "../../../utils/Constants";
import { getPassedLevels } from "../../../utils/helper";
function UserCard() {
  const {
    resultsWithAssessments,
    isLoading: loadingresults,
    isLoadingAssessments,
  } = useCourses();

  const { user_id } = useUser();
  const { data, isLoading: loadingusers } = useGetData("users", {
    column: "user_id",
    value: user_id,
  });

  if (loadingresults || loadingusers || isLoadingAssessments)
    return <LoadingGrid parent={1} kids={2} styles={"quad"} />;

  const [user] = data;
  const pastLevels = getPassedLevels(Number(user.level));

  const passedCourses = resultsWithAssessments.filter(
    (item) => item.grade !== "AR" && pastLevels.includes(Number(item.level))
  );

  // 4. Calculate total grade points and total units
  const totalUnits = passedCourses.reduce((acc, curr) => acc + curr.units, 0);
  const totalGradePoints = passedCourses.reduce(
    (acc, curr) => acc + (gradePoints[curr.grade] ?? 0) * curr.units,
    0
  );

  // 5. Compute CGPA
  const cgpa = (totalGradePoints / totalUnits).toFixed(2);

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white dark:bg-gray-900 p-6 rounded-xl col-span-2 shadow-sm"
    >
      <div className="flex items-center gap-6 mb-6">
        <img
          src={user.avatar || "https://www.gravatar.com/avatar/?d=mp"}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-gray-600 dark:text-gray-50">
            PharmD - {user.level} Level
          </p>
          <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600">
            {user.position}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
          <p className="text-sm text-gray-600">GPA</p>
          <p className="text-2xl font-bold text-blue-600">{cgpa}</p>
        </div>
        <div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg">
          <p className="text-sm text-gray-600">Credits</p>
          <p className="text-2xl font-bold text-green-600">{totalUnits}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default UserCard;
