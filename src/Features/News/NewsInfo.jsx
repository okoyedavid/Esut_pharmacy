import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  MessageCircle,
  Share2,
  BookMarked as BookMark,
  Heart,
  Clock,
  MapPin,
  Ticket,
} from "lucide-react";
import Button from "../../ui/Button";
import { updates } from "../../utils/Constants";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function NewsInfo() {
  const [bookmarkedPosts, setBookmarkedPosts] = useState(new Set());
  const [likedPosts, setLikedPosts] = useState(new Set());
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedCategory = searchParams.get("id") || "all";

  const update = updates.filter(
    (item) => item.id === Number(selectedCategory)
  )[0];

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
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="min-h-screen"
      >
        <div className="relative">
          <img
            src={update.image}
            alt={update.title}
            className="w-full h-72 object-cover rounded-t-xl"
          />
        </div>

        <div className="py-6 md:px-20 px-4">
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

          <h2 className="text-2xl font-bold mb-4">{update.title}</h2>
          <p className="text-gray-600 mb-6">{update.description}</p>

          {update.venue && (
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Event Details</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>{update.date}</span>
                </p>
                {update.time && (
                  <p className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>{update.time}</span>
                  </p>
                )}
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>{update.venue}</span>
                </p>
              </div>
            </div>
          )}

          {update.ticketPrice && (
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Ticket Information</h3>
              <p className="text-lg font-bold text-blue-600">
                {update.ticketPrice}
              </p>
              <Button
                variant="primary"
                className="mt-2"
                icon={<Ticket className="h-4 w-4" />}
              >
                Buy Tickets
              </Button>
            </div>
          )}

          {update.tags && (
            <div className="flex flex-wrap gap-2 mb-6">
              {update.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-4">
              <button
                onClick={() => toggleLike(update.id)}
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
            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                size="sm"
                icon={<Share2 className="h-4 w-4" />}
              >
                Share
              </Button>
              <Button
                variant={
                  bookmarkedPosts.has(update.id) ? "primary" : "secondary"
                }
                size="sm"
                icon={<BookMark className="h-4 w-4" />}
                onClick={() => toggleBookmark(update.id)}
              >
                {bookmarkedPosts.has(update.id) ? "Saved" : "Save"}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
export default NewsInfo;
