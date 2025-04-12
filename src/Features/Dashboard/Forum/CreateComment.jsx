import { Loader, Send } from "lucide-react";
import { useState } from "react";
import { useGetUser } from "../../../hooks/useGetUser";
import { useMutate } from "../../../hooks/useMutate";
import toast from "react-hot-toast";
import { handleCreateComment } from "../../../services/forum";

function CreateComment({ id, commentsNo }) {
  const [comment, setComment] = useState("");
  const { data } = useGetUser();

  const { avatar } = data.user_metadata;

  const { mutate, isPending } = useMutate(
    handleCreateComment,
    "create comment",
    "comments"
  );

  function createComment() {
    if (!comment) return;
    mutate(
      { commentsNo, id, comment },
      {
        onSuccess: () => {
          toast.success("comment sent");
          setComment("");
        },
      }
    );
  }
  return (
    <div className="flex gap-3">
      <img
        src={avatar}
        alt="User"
        className="w-8 h-8 rounded-full object-cover"
      />
      <div className="flex-1 relative">
        <textarea
          value={comment}
          disabled={isPending}
          onChange={(e) => {
            setComment(e.target.value);
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          rows={1}
          placeholder="Write a comment..."
          className="w-full resize-none overflow-hidden px-0 py-1 border-b border-gray-400 focus:outline-none focus:border-blue-500 transition-all"
        />

        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          <button
            disabled={!comment || isPending}
            onClick={createComment}
            className="text-blue-500 hover:text-blue-600"
          >
            {isPending ? (
              <Loader className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateComment;
