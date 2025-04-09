import { useGetUser } from "../../../hooks/useGetUser";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { updateCurrentUser } from "../../../services/ApiAuth";
import { useMutate } from "../../../hooks/useMutate";

function useUpdateUser() {
  const { mutate, isPending } = useMutate(updateCurrentUser, "update user");
  const { data } = useGetUser();
  const {
    name,
    level,
    phone_no,
    username,
    avatar: oldAvatar,
  } = data.user_metadata;

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
      email: data.email,
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
