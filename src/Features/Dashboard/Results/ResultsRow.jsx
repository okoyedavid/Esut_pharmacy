import { Edit3 } from "lucide-react";
import Button from "../../../ui/Button";

function ResultsRow({ handleSelectCourse, course }) {
  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900 dark:bg-gray-800 transition-colors">
      <td className="px-2 py-2 sm:px-6 sm:py-4 text-sm font-medium text-gray-900 dark:text-gray-50">
        {course.code}
      </td>
      <td className="px-2 py-2 sm:px-6 sm:py-4 text-sm text-gray-500 dark:text-gray-50">
        {course.title}
      </td>
      <td className="px-2 py-2 sm:px-6 sm:py-4 text-sm text-gray-500 dark:text-gray-50 text-center">
        {course.units}
      </td>
      <td className="px-2 py-2 sm:px-6 sm:py-4 text-sm text-gray-500 dark:text-gray-50 text-center">
        {course.assessments[0].score}/{course.assessments[0].total}
      </td>
      <td className="px-2 py-2 sm:px-6 sm:py-4 text-sm text-gray-500 dark:text-gray-50 text-center">
        {course.assessments[1].score}/{course.assessments[1].total}
      </td>
      <td className="px-2 py-2 sm:px-6 sm:py-4 text-sm text-gray-500 dark:text-gray-50 text-center">
        {course.assessments[1].score + course.assessments[0].score}/100
      </td>
      <td className="px-2 py-2 sm:px-6 sm:py-4 text-center">
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
          {course.grade}
        </span>
      </td>
      <td className="px-2 py-2 sm:px-6 sm:py-4 text-center">
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
}

export default ResultsRow;
