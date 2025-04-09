import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Modal from "../../../ui/Modal";

const CourseModal = ({ courses }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id") || null;

  const course = courses?.filter((item) => item.id === Number(id))[0];

  if (!course) return null;

  return (
    <Modal.Window name={"course"}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">{course.code}</h3>
        </div>
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-600 p-4 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">{course.title}</h4>
            <p className="text-gray-600 dark:text-gray-100">
              {course.description}
            </p>
          </div>
          {course.assessments && (
            <div>
              <h4 className="font-semibold mb-3">Assessment Breakdown</h4>
              <div className="space-y-3">
                {course.assessments.map((assessment, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{assessment.type}</span>
                      <span className="text-blue-600">
                        {assessment.score}/{assessment.total}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{
                          width: `${
                            (assessment.score / assessment.total) * 100
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-100">Units</p>
              <p className="text-lg font-bold">{course.units}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-100">Grade</p>
              <p className="text-lg font-bold">{course.grade}</p>
            </div>
          </div>
          {course.prerequisites && course.prerequisites.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2">Prerequisites</h4>
              <div className="flex flex-wrap gap-2">
                {course.prerequisites.map((prereq, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {prereq}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </Modal.Window>
  );
};

export default CourseModal;
