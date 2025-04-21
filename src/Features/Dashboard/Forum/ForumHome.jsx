import Modal from "../../../ui/Modal";
import PageMotion from "../../../ui/PageMotion";
import ForumFeed from "./ForumFeed";
import ForumHead from "./ForumHead";
import ForumSearch from "./ForumSearch";
import { Plus } from "lucide-react";

const ForumHome = () => {
  return (
    <Modal>
      <div className="fixed bottom-10 right-6 z-50">
        <Modal.Open name="createpost">
          <button className="flex items-center gap-2 bg-blue-600 text-white py-3 px-5 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
            <Plus size={24} />
            <span className="font-semibold text-base">Create Post</span>
          </button>
        </Modal.Open>
      </div>
      <PageMotion>
        <ForumHead />
        <ForumSearch />
        <ForumFeed />
      </PageMotion>
    </Modal>
  );
};

export default ForumHome;
