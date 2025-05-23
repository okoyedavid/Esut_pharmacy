import { BadgeCheck } from "lucide-react";
import { formatTimestamp } from "../../../utils/helper";
import { useGetData } from "../../../hooks/useGetData";
import CreateComment from "./CreateComment";

function Comment({ id, commentsNo }) {
  const { data: comments, isLoading } = useGetData(
    "comments",
    {
      column: "post_id",
      value: id,
    },
    "*, users(name, avatar, position, status)"
  );

  if (isLoading) return <p>Loading comments..............</p>;

  const currentComments = [...comments].reverse();

  return (
    <div>
      <div className="p-4">
        <h4 className="font-semibold mb-4">Comments</h4>
        <div className="space-y-4 mb-4">
          {currentComments.map((comment) => (
            <div key={comment.id} className="flex gap-3">
              <img
                src={comment.users.avatar}
                alt={comment.users.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{comment?.name}</span>
                  {comment?.users.status !== "STUDENT" && (
                    <BadgeCheck className="h-4 w-4 text-blue-500" />
                  )}
                </div>
                <p className="text-gray-800">{comment?.comment}</p>
                <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                  <span>{formatTimestamp(comment?.created_at)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CreateComment id={id} commentsNo={commentsNo} />
    </div>
  );
}

export default Comment;
