import { settingsvariants } from "../../../utils/Constants";
import { useForum } from "../../../context/ForumProvider";
import { motion } from "framer-motion";
import Post from "./Post";
import Modal from "../../../ui/Modal";
import { useState } from "react";
import LoadingGrid from "../../../ui/LoadingGrid";

function ForumFeed() {
  const { totalPosts, isLoadingLikes, isLoading } = useForum();
  const [imageToView, setImageToView] = useState("");

  const { containerVariants } = settingsvariants;

  if (isLoading || isLoadingLikes) return <LoadingGrid parent={7} kids={3} />;
  return (
    <motion.div variants={containerVariants} className="space-y-6">
      {totalPosts?.map((post) => (
        <Post key={post.id} {...post} setImageToView={setImageToView} />
      ))}

      <Modal.Window name={"view image"}>
        <img
          src={imageToView}
          className={`h-full w-full object-cover rounded-lg cursor-pointer`}
        />
      </Modal.Window>
    </motion.div>
  );
}

export default ForumFeed;
