import { useLocation, useNavigate } from "react-router-dom";
import { settingsvariants } from "../../utils/Constants";
import { motion } from "framer-motion";
import Button from "../../ui/Button";
import SpinnerFullPage from "../../ui/SpinnerFullPage";
import { Bookmark, Heart, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";
import { useGetData } from "../../hooks/useGetData";

function NewsGrid() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedCategory = searchParams.get("selected") || "all";
  const searchQuery = searchParams.get("query") || "";
  const { data: updates, isLoading } = useGetData("news");

  const navigate = useNavigate();
  const [bookmarkedPosts, setBookmarkedPosts] = useState(new Set());
  const [likedPosts, setLikedPosts] = useState(new Set());

  if (isLoading) return <SpinnerFullPage />;

  const filteredUpdates = updates.filter(
    (update) =>
      (selectedCategory === "all" || update.category === selectedCategory) &&
      (update.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        update.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const { itemVariants, containerVariants } = settingsvariants;

  const toggleBookmark = (id) => {
    setBookmarkedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleLike = (id) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };
  return (
    <motion.div
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-2 py-8 lg:grid-cols-3  gap-6"
    >
      {filteredUpdates.map((update) => (
        <motion.div
          key={update.id}
          variants={itemVariants}
          whileHover={{ y: -4 }}
          className="rounded-xl shadow-sm overflow-hidden  dark:bg-gray-800 cursor-pointer"
          onClick={() => navigate(`/news/update?id=${update.id}`)}
        >
          <div className="relative">
            <img
              src={update.image}
              alt={update.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleBookmark(update.id);
                }}
                className={`p-2 rounded-full ${
                  bookmarkedPosts.has(update.id)
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                <Bookmark className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  update.type === "featured"
                    ? "bg-purple-100 text-purple-600"
                    : update.type === "important"
                    ? "bg-red-100 text-red-600"
                    : update.type === "new"
                    ? "bg-green-100 text-green-600"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                {update.type.charAt(0).toUpperCase() + update.type.slice(1)}
              </span>
              <span className="text-sm text-gray-600">{update.date}</span>
            </div>

            <h3 className="font-bold text-lg mb-2">{update.title}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {update.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(update.id);
                  }}
                  className={`flex items-center gap-1 ${
                    likedPosts.has(update.id) ? "text-red-600" : "text-gray-600"
                  }`}
                >
                  <Heart className="h-5 w-5" />
                  <span>
                    {update.likes + (likedPosts.has(update.id) ? 1 : 0)}
                  </span>
                </button>
                <button className="flex items-center gap-1 text-gray-600">
                  <MessageCircle className="h-5 w-5" />
                  <span>{update.comments}</span>
                </button>
              </div>
              <Button
                variant="secondary"
                size="sm"
                icon={<Share2 className="h-4 w-4" />}
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle share
                }}
              >
                Share
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default NewsGrid;
