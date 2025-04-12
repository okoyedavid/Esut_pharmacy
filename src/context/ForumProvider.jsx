import { createContext, useContext } from "react";
import { useGetData } from "../hooks/useGetData";
import SpinnerFullPage from "../ui/SpinnerFullPage";

const Forum = createContext();

function ForumProvider({ children }) {
  const { data: posts, isLoading } = useGetData("forum");
  const { data: users, isLoading: isLoadingUsers } = useGetData("users");

  const { data: likes, isLoadingLikes } = useGetData("likes", {
    column: "table",
    value: "forum",
  });

  if ((isLoading || isLoadingLikes, isLoadingUsers)) return <SpinnerFullPage />;

  const forumPosts = posts?.map((post) => {
    const user = users.filter((us) => us.user_id === post.user_id)[0];

    return {
      ...post,
      avatar: user.avatar,
      name: user.name,
      position: user.position,
      status: user.status,
    };
  });

  const totalPosts = [...forumPosts].reverse();
  return (
    <Forum.Provider value={{ totalPosts, likes }}>{children}</Forum.Provider>
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
