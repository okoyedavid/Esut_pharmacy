import { supabaseUrl } from "./api";
import { insertData } from "./backend";
import { supabase } from "./supabase";

async function deleteAvatar(updatedUserData) {
  const todelete = updatedUserData.user.user_metadata.avatar;
  const fileName = todelete.split("/").pop();

  const { error } = await supabase.storage.from("avatars").remove([fileName]);

  if (error) {
    console.error("Error deleting avatar:", error.message);
    return;
  }
}

async function uploadAvatar(user_id, avatar) {
  const fileName = `avatar-${user_id}-${Math.random()}`;
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // Update avatar in the user
  const avatarUrl = `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`;
  const { data: finalUpdatedUser, error: error2 } =
    await supabase.auth.updateUser({
      data: {
        avatar: avatarUrl,
      },
    });

  if (error2) throw new Error(error2.message);

  return finalUpdatedUser;
}

async function uploadImages(images, id) {
  if (images.length === 0) return [];

  const toUpload = await Promise.all(
    images.map(async (image) => {
      const fileName = `forum-${id}-${Math.random()}`;
      const { error: storageError } = await supabase.storage
        .from("forum")
        .upload(fileName, image);

      if (storageError) throw new Error(storageError.message);

      return `${supabaseUrl}/storage/v1/object/public/forum/${fileName}`;
    })
  );

  return toUpload;
}

async function createPost({ content, images, id }) {
  const toUpload = await uploadImages(images, id);

  await insertData("forum", {
    user_id: id,
    content,
    ...(images ? { images: toUpload } : {}),
  });
}
export { uploadAvatar, deleteAvatar, createPost };
