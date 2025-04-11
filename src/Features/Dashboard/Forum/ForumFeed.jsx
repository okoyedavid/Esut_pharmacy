import { settingsvariants } from "../../../utils/Constants";
import { useForum } from "../../../context/ForumProvider";
import { motion } from "framer-motion";
import Post from "./Post";

function ForumFeed() {
  const { posts } = useForum();

  const { containerVariants } = settingsvariants;
  return (
    <motion.div variants={containerVariants} className="space-y-6">
      {posts?.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </motion.div>
  );
}

export default ForumFeed;
