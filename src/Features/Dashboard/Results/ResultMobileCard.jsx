import { Edit3 } from "lucide-react";
import Button from "../../../ui/Button";

function ResultCard({ course, handleSelectCourse }) {
  return (
    <div className="rounded-xl border border-gray-200 shadow-sm p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-800">{course.title}</h3>
        <span className="text-xs text-gray-500">{course.code}</span>
      </div>
      <div className="grid grid-cols-2 text-xs gap-y-2 text-gray-600">
        <span className="font-medium">Units:</span>
        <span className="text-right">{course.units}</span>

        <span className="font-medium">Quiz:</span>
        <span className="text-right">
          {course.assessments[0].score}/{course.assessments[0].total}
        </span>

        <span className="font-medium">Exam:</span>
        <span className="text-right">
          {course.assessments[1].score}/{course.assessments[1].total}
        </span>

        <span className="font-medium">Total:</span>
        <span className="text-right">
          {course.assessments[1].score + course.assessments[0].score}/100
        </span>

        <span className="font-medium">Grade:</span>
        <span className="text-right">
          <span
            className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
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
        </span>
      </div>

      <div className="mt-4 text-right">
        <Button
          variant="secondary"
          size="sm"
          icon={<Edit3 className="h-4 w-4" />}
          onClick={() => handleSelectCourse(course)}
        >
          Edit
        </Button>
      </div>
    </div>
  );
}

export default ResultCard;
