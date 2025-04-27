import { useEffect, useState } from "react";
import { useCourses } from "../../../context/CourseProvider";
import { useGetData } from "../../../hooks/useGetData";
import { getPassedLevels } from "../../../utils/helper";
import { useUser } from "../../../context/UserProvider";

export function useCoursesData() {
  const { resultsWithAssessments } = useCourses();
  const [course, setCourse] = useState([]);
  const { data, isLoading } = useGetData("courses");
  const { user } = useUser();

  useEffect(() => {
    if (!isLoading) {
      setCourse(data);
    }
  }, [isLoading, data]);

  const total_units = course.reduce((acc, curr) => acc + curr.units, 0);
  const units_completed = resultsWithAssessments
    .filter((item) => item.grade !== "AR")
    .reduce((acc, curr) => acc + curr.units, 0);

  const percentage = ((units_completed / total_units) * 100).toFixed(1);
  const pastLevels = getPassedLevels(Number(user.level));

  return { total_units, units_completed, pastLevels, percentage, isLoading };
}
