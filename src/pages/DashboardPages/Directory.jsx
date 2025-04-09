import DirectoryHead from "../../Features/Dashboard/Directory/DirectoryHead";
import DirectoryGrid from "../../Features/Dashboard/Directory/DirectoryGrid";
import PageMotion from "../../ui/PageMotion";
import Modal from "../../ui/Modal";

const Directory = () => {
  return (
    <PageMotion>
      <DirectoryHead />
      <Modal>
        <DirectoryGrid />
      </Modal>
    </PageMotion>
  );
};

export default Directory;
