import { useEffect, useState } from "react";
import { settingsvariants } from "../../../utils/Constants";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Heart,
  Share2,
  BadgeCheck,
  Clock,
  Bookmark,
} from "lucide-react";
import { formatTimestamp } from "../../../utils/helper";
import { useNavigate } from "react-router-dom";
import { useForum } from "../../../context/ForumProvider";
import {
  deleteData,
  getData,
  insertData,
  updateTable,
} from "../../../services/backend";
import { useGetUser } from "../../../hooks/useGetUser";
import { AiFillHeart } from "react-icons/ai";

function ForumFeed() {
  const { posts, likes } = useForum();
  const { data } = useGetUser();

  const [likedPosts, setLikedPosts] = useState(new Set());
  const [savedPosts, setSavedPosts] = useState(new Set());

  useEffect(() => {
    if (likes) {
      const hasLikes = likes.filter((item) => item.user_id === data.id);
      if (hasLikes.length > 0) {
        const likeid = new Set(hasLikes.map((like) => like.post_id));
        setLikedPosts(likeid);
      }
    }
  }, [data.id, likes]);

  const toggleLike = async (postId, likes) => {
    console.log(postId);
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });

    const isLiked = await getData("likes", [
      { column: "user_id", value: data.id },
      { column: "post_id", value: postId },
      { column: "table", value: "forum" },
    ]);
    if (isLiked.length === 0) {
      await insertData("likes", {
        user_id: data.id,
        post_id: postId,
        table: "forum",
      });

      await updateTable(
        "forum",
        { likes: likes + 1 },
        { column: "id", value: postId }
      );

      return;
    }

    await deleteData("likes", [
      { column: "user_id", value: data.id },
      { column: "post_id", value: postId },
      { column: "table", value: "forum" },
    ]);

    await updateTable(
      "forum",
      { likes: likes - 1 },
      { column: "id", value: postId }
    );
  };

  const toggleSave = async (postId) => {
    setSavedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };
  const navigate = useNavigate();
  const { itemVariants, containerVariants } = settingsvariants;

  function handleClick(id) {
    navigate(`/dashboard/forum/post?id=${id}`);
  }

  return (
    <motion.div variants={containerVariants} className="space-y-6">
      {posts?.map((post) => (
        <motion.div
          key={post.id}
          variants={itemVariants}
          className="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          {/* Post Header */}
          <div className="p-4" onClick={() => handleClick(post.id)}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{post.author.name}</h3>
                    {post.author.verified && (
                      <BadgeCheck className="h-4 w-4 text-blue-500" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{post.author.role}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {formatTimestamp(post.created_at)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Post Content */}
            <p className="text-gray-800 mb-4">{post.content}</p>

            {/* Post Images */}
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
                    className="w-full h-64 object-cover rounded-lg cursor-pointer"
                  />
                ))}
              </div>
            )}

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(post.id, post.likes);
                  }}
                  className={`flex items-center gap-2 ${
                    likedPosts.has(post.id) ? "text-red-500" : "text-gray-600"
                  }`}
                >
                  {likedPosts.has(post.id) ? (
                    <AiFillHeart className={`h-5 text-red-600 w-5`} />
                  ) : (
                    <Heart className={` h-5 w-5`} />
                  )}
                  <span>{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                </button>
                <button
                  onClick={() => handleClick(post.id)}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>{post.comments}</span>
                </button>
                <button className="text-gray-600">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
              <button
                onClick={() => toggleSave(post.id)}
                className={`${
                  savedPosts.has(post.id) ? "text-blue-500" : "text-gray-600"
                }`}
              >
                <Bookmark className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ForumFeed;
