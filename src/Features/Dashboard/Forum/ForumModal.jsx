import { useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Bookmark,
  Heart,
  ImageIcon,
  MessageCircle,
  Send,
  Smile,
} from "lucide-react";
import { formatTimestamp } from "../../../utils/helper";

function ForumModal({ post }) {
  const [newComment, setNewComment] = useState("");
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

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white rounded-xl max-w-2xl w-full"
    >
      {/* Post Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
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
              <p className="text-sm text-gray-600">{post.author.role}</p>
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
                className="w-full h-64 object-cover rounded-lg"
              />
            ))}
          </div>
        )}

        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => toggleLike(post.id)}
            className={`flex items-center gap-2 ${
              likedPosts.has(post.id) ? "text-red-500" : "text-gray-600"
            }`}
          >
            <Heart className="h-5 w-5" />
            <span>{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600">
            <MessageCircle className="h-5 w-5" />
            <span>{post.comments.length}</span>
          </button>
          <button
            onClick={() => toggleSave(post.id)}
            className={`flex items-center gap-2 ${
              savedPosts.has(post.id) ? "text-blue-500" : "text-gray-600"
            }`}
          >
            <Bookmark className="h-5 w-5" />
          </button>
        </div>

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
      </div>

      {/* Comments Section */}
      <div className="border-t">
        <div className="p-4">
          <h4 className="font-semibold mb-4">Comments</h4>
          <div className="space-y-4 mb-4">
            {post.comments.map((comment) => (
              <div key={comment.id} className="flex gap-3">
                <img
                  src={comment.author.image}
                  alt={comment.author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{comment.author.name}</span>
                    {comment.author.verified && (
                      <BadgeCheck className="h-4 w-4 text-blue-500" />
                    )}
                  </div>
                  <p className="text-gray-800">{comment.content}</p>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                    <button className="hover:text-gray-900">Like</button>
                    <button className="hover:text-gray-900">Reply</button>
                    <span>{formatTimestamp(comment.timestamp)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* New Comment Input */}
          <div className="flex gap-3">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80"
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex-1 relative">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                className="w-full px-4 py-2 pr-24 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <button className="text-gray-400 hover:text-gray-600">
                  <Smile className="h-5 w-5" />
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <ImageIcon className="h-5 w-5" />
                </button>
                <button className="text-blue-500 hover:text-blue-600">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ForumModal;
