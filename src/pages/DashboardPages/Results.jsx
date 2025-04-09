import ResultsSearch from "../../Features/Dashboard/Results/ResultSearch";
import ResultTable from "../../Features/Dashboard/Results/ResultsTable";
import Modal from "../../ui/Modal";
import ResultCards from "../../Features/Dashboard/Results/ResultCards";
import PageMotion from "../../ui/PageMotion";
import PageHead from "../../ui/PageHead";
import CourseProvider from "../../context/CourseProvider";

const Results = () => {
  return (
    <CourseProvider>
      <PageMotion>
        {/* Header Section */}

        <PageHead
          title={"Academic Results"}
          subtitle={
            "View and manage your course results and academic performance"
          }
        />

        {/* Academic Overview Cards */}
        <ResultCards />
        {/* Controls Section */}
        <ResultsSearch />
        {/* Results Table */}
        <Modal>
          <ResultTable />
        </Modal>
      </PageMotion>
    </CourseProvider>
  );
};

export default Results;
