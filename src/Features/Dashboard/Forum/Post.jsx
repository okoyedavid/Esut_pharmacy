import { MessageCircle, Heart, Share2, BadgeCheck, Clock } from "lucide-react";
import { settingsvariants } from "../../../utils/Constants";
import { motion } from "framer-motion";
import { AiFillHeart } from "react-icons/ai";
import { formatTimestamp } from "../../../utils/helper";
import { useNavigate } from "react-router-dom";
import { useLikes } from "./useLikes";
import { useModal } from "../../../ui/Modal";

function Post({
  created_at,
  id,
  content,
  likes,
  images,
  comments,
  users: { avatar, position, name, status },
  setImageToView,
}) {
  const { toggleLike, likedPosts, initialLikedPosts } = useLikes();

  const { open } = useModal();

  const isLiked = likedPosts.has(id);
  const wasInitiallyLiked = initialLikedPosts.has(id);
  const likeDiff =
    isLiked && !wasInitiallyLiked ? 1 : !isLiked && wasInitiallyLiked ? -1 : 0;

  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/dashboard/forum/post?id=${id}`);
  }

  function handleViewImage(e, image) {
    e.stopPropagation();
    setImageToView(image);
    open("view image");
  }
  return (
    <motion.div
      variants={settingsvariants.itemVariants}
      className="bg-gray-50 dark:bg-gray-800  rounded-xl shadow-sm overflow-hidden"
    >
      {/* Post Header */}
      <div className="p-4" onClick={() => handleClick(id)}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              src={avatar}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold dark:text-gray-50">{name}</h3>
                {status !== "STUDENT" && (
                  <BadgeCheck className="h-4 w-4 text-blue-500" />
                )}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="dark:text-gray-100">{position}</span>
                <span>•</span>
                <span className="flex dark:text-gray-50 items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {formatTimestamp(created_at)}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Post Content */}
        <p className="text-gray-800 dark:text-gray-50 mb-4">{content}</p>
        {/* Images */}
        {images && images.length > 0 && (
          <div
            className={`grid gap-2 mb-4 ${
              images.length > 1 ? "grid-cols-2" : "grid-cols-1"
            }`}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Post image ${index + 1}`}
                onClick={(e) => handleViewImage(e, image)}
                className={`${
                  images.length > 2 ? "h-24 md:h-40" : "h-54"
                } w-full object-cover rounded-lg cursor-pointer ${
                  images.length === 3 && index === 2 ? "col-span-2" : ""
                }`}
              />
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-6 ">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleLike(id, likes);
              }}
              className={`flex items-center gap-2 ${
                likedPosts.has(id)
                  ? "text-red-500"
                  : "text-gray-600 dark:text-gray-50"
              }`}
            >
              {likedPosts.has(id) ? (
                <AiFillHeart className={`h-5 text-red-600 w-5`} />
              ) : (
                <Heart className={`dark:text-gray-50 h-5 w-5`} />
              )}

              <span>{likes + likeDiff}</span>
            </button>
            <button
              onClick={() => handleClick(id)}
              className="flex items-center gap-2 dark:text-gray-50  text-gray-600"
            >
              <MessageCircle className="h-5 w-5" />
              <span>{comments}</span>
            </button>
            <button className="text-gray-600 dark:text-gray-50">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Post;
