import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "../../../context/UserProvider";
import { useMutate } from "../../../hooks/useMutate";
import { updateCurrentUser } from "../../../services/ApiAuth";

function useUpdateUser() {
  const { mutate, isPending } = useMutate(
    updateCurrentUser,
    "update user",
    "user"
  );
  const { user, user_email } = useUser();
  const { name, level, phone_no, username, avatar: oldAvatar } = user;

  const [avatar, setAvatar] = useState(null);
  const [image, setImage] = useState(oldAvatar);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name,
      level,
      email: user_email,
      phone_no,
      username,
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
    if (file) {
      // In a real app, you would upload this to your storage service
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return {
    handleFileChange,
    register,
    errors,
    handleSubmit,
    image,
    avatar,
    mutate,
    isPending,
  };
}
export { useUpdateUser };
