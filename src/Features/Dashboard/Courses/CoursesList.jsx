import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import CourseModal from "./CourseListModal";
import { useModal } from "../../../ui/Modal";
import { useSetUrl } from "../../../hooks/useSetUrl";
import { useCourses } from "../../../context/CourseProvider";
import { settingsvariants } from "../../../utils/Constants";

function CoursesList() {
  const { setParams } = useSetUrl();
  const { open } = useModal();
  const { result } = useCourses();

  function handleSelectCourse(course) {
    setParams({ id: course });
    open("course");
  }

  return (
    <motion.div
      variants={settingsvariants.itemVariants}
      className="max-w-6xl mx-auto bg-white md:p-4 dark:bg-gray-900 rounded-xl min-h-screen"
    >
      {result.map((course) => (
        <div
          key={course.id}
          className="bg-white shadow-md border border-blue-100 dark:bg-gray-900 rounded-xl mb-2 md:p-6 p-3 cursor-pointer"
          onClick={() => handleSelectCourse(course.id)}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">{course.code}</h3>
                <p className="text-sm text-gray-600">{course.title}</p>
              </div>
            </div>
            <div className="text-right">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  course.grade === "A"
                    ? "bg-green-100 text-green-600"
                    : course.grade === "B"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                Grade: {course.grade}
              </span>
            </div>
          </div>

          {/* {course.status === "ongoing" && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium">{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          )} */}

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                {course.units} Units
              </span>
              <span className="text-sm text-gray-600">
                Level {course.level}
              </span>
            </div>
            {/* {course.status === "completed" && (
              <span className="flex items-center gap-1 text-green-600">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Completed</span>
              </span>
            )} */}
          </div>
        </div>
      ))}
      <CourseModal courses={result} />
    </motion.div>
  );
}

export default CoursesList;
