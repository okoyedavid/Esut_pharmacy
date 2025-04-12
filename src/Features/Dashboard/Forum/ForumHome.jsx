import PageMotion from "../../../ui/PageMotion";
import Modal from "../../../ui/Modal";
import ForumFeed from "./ForumFeed";
import ForumHead from "./ForumHead";
import ForumSearch from "./ForumSearch";

const ForumHome = () => {
  return (
    <Modal>
      <PageMotion>
        <ForumHead />
        <ForumSearch />
        <ForumFeed />
      </PageMotion>
    </Modal>
  );
};

export default ForumHome;
