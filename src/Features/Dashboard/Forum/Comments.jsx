import { BadgeCheck } from "lucide-react";
import { formatTimestamp } from "../../../utils/helper";
import { useGetData } from "../../../hooks/useGetData";

function Comment({ id }) {
  const { data: comments, isLoading } = useGetData("comments", {
    column: "post_id",
    value: id,
  });

  const { data, isLoading: loadingusers } = useGetData("users");

  if (isLoading || loadingusers) return <p>Loading comments..............</p>;

  const totalComments = comments.map((item) => {
    const users = data.filter((user) => user.user_id === item.user_id)[0];

    return {
      ...item,
      name: users.name,
      avatar: users.avatar,
      position: users.position,
      status: users.status,
    };
  });

  const currentComments = [...totalComments].reverse();

  return (
    <div>
      <div className="p-4">
        <h4 className="font-semibold mb-4">Comments</h4>
        <div className="space-y-4 mb-4">
          {currentComments.map((comment) => (
            <div key={comment.id} className="flex gap-3">
              <img
                src={comment.avatar}
                alt={comment.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{comment?.name}</span>
                  {comment?.status !== "STUDENT" && (
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
    </div>
  );
}

export default Comment;
