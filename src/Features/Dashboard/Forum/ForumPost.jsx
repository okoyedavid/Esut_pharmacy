import { motion } from "framer-motion";
import { BadgeCheck, Heart, MessageCircle } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useForum } from "../../../context/ForumProvider";
import Comment from "./Comments";
import { useLikes } from "./useLikes";
import { AiFillHeart } from "react-icons/ai";

function ForumPost() {
  const { totalPosts } = useForum();
  const [searchParams] = useSearchParams();
  const post_id = searchParams.get("id");
  const { toggleLike, likedPosts, initialLikedPosts } = useLikes();

  const post = totalPosts.filter((item) => item.id === Number(post_id))[0];

  const isLiked = likedPosts.has(post.id);
  const wasInitiallyLiked = initialLikedPosts.has(post.id);
  const likeDiff =
    isLiked && !wasInitiallyLiked ? 1 : !isLiked && wasInitiallyLiked ? -1 : 0;

  return (
    <motion.div>
      {/* Post Header */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={post.users.avatar}
              alt={post.users.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{post.users.name}</h3>
                {post.users.status !== "STUDENT" && (
                  <BadgeCheck className="h-4 w-4 text-blue-500" />
                )}
              </div>
              <p className="text-sm text-gray-600">{post.users.position}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="p-4">
        <p className="text-gray-800 mb-4">{post.content}</p>
        {post.images && post.images.length > 0 && (
          <div
            className={`grid gap-2 mb-4 ${
              post.images.length > 1 ? "grid-cols-2" : "grid-cols-1"
            }`}
          >
            {post.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Post image ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg"
              />
            ))}
          </div>
        )}

        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => toggleLike(post.id, post.likes)}
            className={`flex items-center gap-2 ${
              likedPosts.has(post.id) ? "text-red-500" : "text-gray-600"
            }`}
          >
            {isLiked ? (
              <AiFillHeart className={`h-5 text-red-600 w-5`} />
            ) : (
              <Heart className={` h-5 w-5`} />
            )}
            <span>{post.likes + likeDiff}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600">
            <MessageCircle className="h-5 w-5" />
            <span>{post.comments}</span>
          </button>
        </div>
      </div>

      {/* Comments Section */}
      <Comment id={post.id} commentsNo={post.comments} />
    </motion.div>
  );
}

export default ForumPost;
