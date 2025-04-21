import { getCurrentUser } from "./ApiAuth";
import { deleteData, insertData, updateTable } from "./backend";

export async function handleCreateComment({ commentsNo, comment, id }) {
  const data = await getCurrentUser();

  await insertData("comments", { post_id: id, user_id: data.id, comment });
  await updateTable(
    "forum",
    { comments: commentsNo + 1 },
    { column: "id", value: id }
  );
}

export async function deleteLike(user_id, likes, postId) {
  await deleteData("likes", [
    { column: "user_id", value: user_id },
    { column: "post_id", value: postId },
    { column: "table", value: "forum" },
  ]);

  await updateTable(
    "forum",
    { likes: likes - 1 },
    { column: "id", value: postId }
  );
}

export async function addLike(user_id, likes, postId) {
  await insertData("likes", {
    user_id,
    post_id: postId,
    table: "forum",
  });

  await updateTable(
    "forum",
    { likes: likes + 1 },
    { column: "id", value: postId }
  );
}
