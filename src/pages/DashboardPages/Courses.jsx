import CourseOverview from "../../Features/Dashboard/Courses/CourseOverview";
import ProgressCharts from "../../Features/Dashboard/Courses/ProgressCharts";
import CoursesList from "../../Features/Dashboard/Courses/CoursesList";
import Modal from "../../ui/Modal";
import PageHead from "../../ui/PageHead";
import CourseProvider from "../../context/CourseProvider";
import CourseSearchBar from "../../Features/Dashboard/Courses/CourseSearchBar";
import PageMotion from "../../ui/PageMotion";

const Courses = () => {
  return (
    <CourseProvider>
      <PageMotion>
        <PageHead
          title={"My Courses"}
          subtitle={"Track your academic progress and course performance"}
        />
        {/* Academic Overview Cards */}
        <CourseOverview />
        {/* Course Progress Chart */}
        <ProgressCharts />
        {/* Course List Section */}
        <CourseSearchBar />
        <Modal>
          <CoursesList />
        </Modal>
      </PageMotion>
    </CourseProvider>
  );
};

export default Courses;
