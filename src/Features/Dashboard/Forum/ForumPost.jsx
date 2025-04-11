import { useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Bookmark, Heart, MessageCircle } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useForum } from "../../../context/ForumProvider";
import CreateComment from "./CreateComment";
import Comment from "./Comments";

function ForumPost() {
  const { posts } = useForum();
  const [searchParams] = useSearchParams();
  const post_id = searchParams.get("id");

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

  const post = posts.filter((item) => item.id === Number(post_id))[0];

  return (
    <motion.div>
      {/* Post Header */}
      <div className="p-4">
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
            <span>{post.comments}</span>
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
      </div>

      {/* Comments Section */}
      <Comment id={post.id} />
      <CreateComment id={post.id} commentsNo={post.comments} />
    </motion.div>
  );
}

export default ForumPost;
