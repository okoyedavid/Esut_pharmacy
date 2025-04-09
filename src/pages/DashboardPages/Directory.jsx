import DirectoryHead from "../../Features/Dashboard/Directory/DirectoryHead";
import DirectoryGrid from "../../Features/Dashboard/Directory/DirectoryGrid";
import PageMotion from "../../ui/PageMotion";

const Directory = () => {
  return (
    <PageMotion>
      <DirectoryHead />
      <DirectoryGrid />
    </PageMotion>
  );
};

export default Directory;
