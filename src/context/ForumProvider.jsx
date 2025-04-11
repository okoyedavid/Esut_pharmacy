import { createContext, useContext } from "react";
import { useGetData } from "../hooks/useGetData";
import SpinnerFullPage from "../ui/SpinnerFullPage";

const Forum = createContext();

function ForumProvider({ children }) {
  const { data: posts, isLoading } = useGetData("forum");

  const { data: likes, isLoadingLikes } = useGetData("likes", {
    column: "table",
    value: "forum",
  });

  if (isLoading || isLoadingLikes) return <SpinnerFullPage />;
  return <Forum.Provider value={{ posts, likes }}>{children}</Forum.Provider>;
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
