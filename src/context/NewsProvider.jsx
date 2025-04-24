import { createContext, useContext, useState } from "react";
import { useGetData } from "../hooks/useGetData";
import { useSetUrl } from "../hooks/useSetUrl";
import LoadingGrid from "../ui/LoadingGrid";

const NewsContext = createContext();

function NewsProvider({ children }) {
  const { searchParams } = useSetUrl();
  const selectedCategory = searchParams.get("selected") || "all";
  const searchQuery = searchParams.get("query") || "";
  const { data: updates, isLoading } = useGetData("news");

  const [bookmarkedPosts, setBookmarkedPosts] = useState(new Set());
  const [likedPosts, setLikedPosts] = useState(new Set());

  if (isLoading) return <LoadingGrid parent={8} kids={4} />;

  const filteredUpdates = updates.filter(
    (update) =>
      (selectedCategory === "all" || update.category === selectedCategory) &&
      (update.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        update.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
    <NewsContext.Provider
      value={{
        filteredUpdates,
        bookmarkedPosts,
        likedPosts,
        toggleBookmark,
        toggleLike,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;

export function useNews() {
  const context = useContext(NewsContext);
  if (context === undefined)
    throw new Error("You cannot acess the news context outside its provider");
  return context;
}
