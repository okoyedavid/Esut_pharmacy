import { createContext, useContext, useEffect, useState } from "react";
import { useGetData } from "../hooks/useGetData";

const Forum = createContext();

function ForumProvider({ children }) {
  const [totalPosts, setTotalPosts] = useState([]);
  const { data: posts, isLoading } = useGetData(
    "forum",
    null,
    "*, users(name, position, avatar, status)"
  );

  const { data: likes, isLoadingLikes } = useGetData("likes", {
    column: "table",
    value: "forum",
  });

  useEffect(() => {
    if (!isLoadingLikes && !isLoading) {
      const sortedPosts = posts.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      setTotalPosts(sortedPosts);
    }
  }, [isLoadingLikes, isLoading, posts]);

  return (
    <Forum.Provider value={{ totalPosts, likes, isLoadingLikes, isLoading }}>
      {children}
    </Forum.Provider>
  );
}

export default ForumProvider;

export function useForum() {
  const context = useContext(Forum);
  if (context === undefined) {
    throw new Error(
      "You are trying to access the forum context outside its provider"
    );
  }

  return context;
}
