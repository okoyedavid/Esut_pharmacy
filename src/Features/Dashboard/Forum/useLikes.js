import { useEffect, useState } from "react";
import { useGetUser } from "../../../hooks/useGetUser";
import { getData } from "../../../services/backend";
import { addLike, deleteLike } from "../../../services/forum";
import { useForum } from "../../../context/ForumProvider";

function useLikes() {
  const { data } = useGetUser();

  const { likes } = useForum();
  const [likedPosts, setLikedPosts] = useState(new Set());

  const [initialLikedPosts, setInitialLikedPosts] = useState(new Set());

  useEffect(() => {
    if (likes) {
      const hasLikes = likes.filter((item) => item.user_id === data.id);
      if (hasLikes.length > 0) {
        const likeid = new Set(hasLikes.map((like) => like.post_id));
        setLikedPosts(likeid);
        setInitialLikedPosts(likeid);
      }
    }
  }, [data.id, likes]);

  const toggleLike = async (postId, likes) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });

    const isLiked = await getData("likes", [
      { column: "user_id", value: data.id },
      { column: "post_id", value: postId },
      { column: "table", value: "forum" },
    ]);

    if (isLiked.length === 0) {
      await addLike(data, likes, postId);
      return;
    }

    await deleteLike(data, likes, postId);
  };

  return { toggleLike, likedPosts, initialLikedPosts };
}
export { useLikes };
