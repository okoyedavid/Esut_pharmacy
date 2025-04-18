import { createContext, useContext } from "react";
import { useGetData } from "../hooks/useGetData";
import { useGetUser } from "../hooks/useGetUser";
import { useSearchParams } from "react-router-dom";
import SpinnerFullPage from "../ui/SpinnerFullPage";

const CourseContext = createContext();

function CourseProvider({ children }) {
  const [searchParams] = useSearchParams();
  const { data: user } = useGetUser();
  const level = searchParams.get("level");
  const semester = searchParams.get("semester");
  const query = searchParams.get("query")?.toLowerCase();

  const { data, isLoading } = useGetData("courses");

  const { data: assessments, isLoading: isLoadingAssessments } = useGetData(
    "assessments",
    {
      column: "user_id",
      value: user.id,
    }
  );

  if (isLoading || isLoadingAssessments) return <SpinnerFullPage />;

  // Map the courses and update the assessments
  const resultsWithAssessments = data.map((course) => {
    // Find the matching assessments for the course based on course.id
    const courseAssessments = assessments.filter(
      (assessment) => assessment.course_id === course.id
    );

    // Merge the assessments into the course object
    return {
      ...course,
      grade: courseAssessments.length > 0 ? courseAssessments[0].grade : "AR",
      assessments:
        courseAssessments.length > 0
          ? courseAssessments[0].scores
          : [
              { type: "Quiz", score: 0, total: 30 },
              { type: "Exam", score: 0, total: 70 },
            ],
    };
  });

  // Filter results based on search parameters
  const result = resultsWithAssessments.filter((item) => {
    return (
      (!level || item.level === level) &&
      (!semester || item.semester === semester) &&
      (!query ||
        item.code?.toLowerCase().includes(query) ||
        item.title?.toLowerCase().includes(query))
    );
  });

  return (
    <CourseContext.Provider value={{ result, resultsWithAssessments }}>
      {children}
    </CourseContext.Provider>
  );
}

export default CourseProvider;

export function useCourses() {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error(
      "You are trying to access the course context outside its provider"
    );
  }

  return context;
}
