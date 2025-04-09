import { supabaseUrl } from "./api";
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

export { uploadAvatar, deleteAvatar };
