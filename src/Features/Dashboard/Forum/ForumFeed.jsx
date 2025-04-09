import { useState } from "react";
import { settingsvariants } from "../../../utils/Constants";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Heart,
  Share2,
  MoreHorizontal,
  BadgeCheck,
  Clock,
  Bookmark,
} from "lucide-react";
import { formatTimestamp } from "../../../utils/helper";
import { useGetData } from "../../../hooks/useGetData";
import SpinnerFullPage from "../../../ui/SpinnerFullPage";

function ForumFeed() {
  const [setSelectedPost] = useState(null);

  const { data: forum, isLoading } = useGetData("forum");
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [savedPosts, setSavedPosts] = useState(new Set());
  const toggleLike = (postId) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const toggleSave = (postId) => {
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

  if (isLoading) return <SpinnerFullPage />;
  const { itemVariants, containerVariants } = settingsvariants;

  return (
    <motion.div variants={containerVariants} className="space-y-6">
      {forum?.map((post) => (
        <motion.div
          key={post.id}
          variants={itemVariants}
          className="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          {/* Post Header */}
          <div className="p-4">
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
                      {formatTimestamp(post.timestamp)}
                    </span>
                  </div>
                </div>
              </div>
              <button className="text-gray-600 hover:text-gray-900">
                <MoreHorizontal className="h-5 w-5" />
              </button>
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
                    onClick={() => setSelectedPost(post)}
                  />
                ))}
              </div>
            )}

            {/* Post Tags */}
            {post.tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Post Actions */}
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-6">
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`flex items-center gap-2 ${
                    likedPosts.has(post.id) ? "text-red-500" : "text-gray-600"
                  }`}
                >
                  <Heart className="h-5 w-5" />
                  <span>{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                </button>
                <button
                  onClick={() => setSelectedPost(post)}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>{post.comments.length}</span>
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
