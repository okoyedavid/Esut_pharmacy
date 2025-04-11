import toast from "react-hot-toast";
import { deleteAvatar, uploadAvatar } from "./Action";
import { supabase } from "./supabase";
import { getData, insertData, updateTable } from "./backend";
export async function signupUser({ name, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        avatar: "",
        level: "100lvl",
      },
    },
  });

  if (error) throw new Error();

  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error("error");
    throw new Error(error.message);
  }

  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function createNewUser(id) {
  const { error } = await supabase.from("users").insert([{ user_id: id }]);

  if (error) throw new Error("there was a problem creating new user", error);
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function updateCurrentUser({
  name,
  avatar,
  level,
  email,
  phone_no,
  username,
}) {
  try {
    let updatedUserData; // Declare variable in outer scope

    // Combine updateData fields
    const updateData = {};
    if (name) updateData.data = { ...(updateData.data || {}), name };
    if (username) updateData.data = { ...(updateData.data || {}), username };
    if (level) updateData.data = { ...(updateData.data || {}), level };
    if (email) updateData.data = { ...(updateData.data || {}), email };
    if (phone_no) updateData.data = { ...(updateData.data || {}), phone_no };
    if (username) updateData.data = { ...(updateData.data || {}), username };

    // Update the user
    if (Object.keys(updateData).length > 0) {
      const { data, error } = await supabase.auth.updateUser(updateData);
      if (error) throw new Error(error.message);
      updatedUserData = data; // Assign to the outer-scoped variable
    }

    // Handle avatar upload
    if (avatar) {
      await uploadAvatar(updatedUserData.user.id, avatar);
      await deleteAvatar(updatedUserData);
    }

    await updateUsers(updatedUserData.user);

    return updatedUserData;
  } catch (error) {
    console.error("Error updating user:", error.message);
    throw error;
  }
}

async function updateUsers(user) {
  const { name, avatar, level } = user.user_metadata;
  const data = await getData("users", {
    column: "user_id",
    value: user.id,
  });

  if (data.length === 0) {
    await insertData("users", {
      user_id: user.id,
      name,
      level,
      avatar,
    });

    return;
  }

  await updateTable(
    "users",
    { name, level, avatar },
    { column: "user_id", value: user.id }
  );
}

export async function updatePassword(info) {
  const user = await getCurrentUser();

  // Re-authenticate
  const { error: authError } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: info.formerpassword,
  });

  if (authError) {
    toast.error("Current password is incorrect!");
    console.error(authError.message);
    throw new Error("User password is incorrect");
  }

  // Update password
  const { data, error: updateError } = await supabase.auth.updateUser({
    password: info.password,
  });

  if (updateError) {
    toast.error("Failed to update password!");
    console.error(updateError.message);
    throw new Error("Password update failed");
  }

  return data;
}
