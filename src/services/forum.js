import { getCurrentUser } from "./ApiAuth";
import { insertData, updateTable } from "./backend";

export async function handleCreateComment({ commentsNo, comment, id }) {
  const data = await getCurrentUser();

  await insertData("comments", { post_id: id, user_id: data.id, comment });
  await updateTable(
    "forum",
    { comments: commentsNo + 1 },
    { column: "id", value: id }
  );
}
