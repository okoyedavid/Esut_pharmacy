import { settingsvariants } from "../../../utils/Constants";
import { useForum } from "../../../context/ForumProvider";
import { motion } from "framer-motion";
import Post from "./Post";
import Modal from "../../../ui/Modal";
import { useState } from "react";

function ForumFeed() {
  const { totalPosts } = useForum();
  const [imageToView, setImageToView] = useState("");

  const { containerVariants } = settingsvariants;
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
