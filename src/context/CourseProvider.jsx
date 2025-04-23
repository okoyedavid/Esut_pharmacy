import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetData } from "../hooks/useGetData";
import { useUser } from "./UserProvider";

const CourseContext = createContext();

function CourseProvider({ children }) {
  const [searchParams] = useSearchParams();

  const { user_id } = useUser();
  const level = searchParams.get("level");
  const semester = searchParams.get("semester");
  const query = searchParams.get("query")?.toLowerCase();
  const [resultsWithAssessments, setResultsWithAssessments] = useState([]);

  const { data, isLoading } = useGetData("courses");
  const { data: assessments, isLoading: isLoadingAssessments } = useGetData(
    "assessments",
    {
      column: "user_id",
      value: user_id,
    }
  );

  useEffect(() => {
    if (isLoading || isLoadingAssessments) return;

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

    setResultsWithAssessments(resultsWithAssessments);
  }, [assessments, data, isLoading, isLoadingAssessments]);

  // Map the courses and update the assessments

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
    <CourseContext.Provider
      value={{
        result,
        resultsWithAssessments,
        isLoading,
        isLoadingAssessments,
      }}
    >
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
