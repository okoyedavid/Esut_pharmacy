import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useUser } from "../../../context/UserProvider";
import { useMutate } from "../../../hooks/useMutate";
import { createPost } from "../../../services/Action";
import { useModal } from "../../../ui/Modal";

export function useCreatePost() {
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [isDraft, setIsDraft] = useState(false);

  const maxImages = 4;

  const { user_id } = useUser();
  const { close } = useModal();

  const { mutate, isPending } = useMutate(createPost, "create Post", "forum");

  // Load draft from localStorage on mount
  useEffect(() => {
    const savedDraft = localStorage.getItem("postDraft");
    if (savedDraft) {
      const draft = JSON.parse(savedDraft);
      setContent(draft.content || "");
      setImageUrls(draft.imageUrls || []);

      setIsDraft(true);
      setImages(draft.images);
    }
  }, []);
  // Save draft to localStorage
  const saveDraft = () => {
    const draft = {
      content,
      imageUrls,
      timestamp: new Date().toISOString(),
      images,
    };
    localStorage.setItem("postDraft", JSON.stringify(draft));
    setIsDraft(true);
  };
  // Clear draft from localStorage
  const clearDraft = () => {
    localStorage.removeItem("postDraft");
    setIsDraft(false);
  };

  useEffect(() => {
    return () => {
      setImages([]);
    };
  }, []);

  useEffect(() => {
    return () => {
      imageUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [imageUrls]);

  // Handle post submission
  const handleSubmit = async () => {
    if (!content.trim()) return;

    mutate(
      { content, images, id: user_id },
      {
        onSuccess: () => {
          toast.success("Post Sent!");
          clearDraft();
          close();
        },
        onError: (error) => {
          console.error("Error submitting post:", error);
          toast.error("Failed to create Post!");
        },
      }
    );
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (imageUrls.length + files.length > maxImages) {
      toast.error(`You can only upload up to ${maxImages} images`);
      return;
    }

    const newImageUrls = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...files]);
    setImageUrls((prev) => [...prev, ...newImageUrls]);
  };

  // Remove image
  const removeImage = (index) => {
    const newImageUrls = imageUrls.filter((_, i) => i !== index);
    const newImages = images.filter((_, i) => i !== index);
    setImageUrls(newImageUrls);
    setImages(newImages);
  };

  return {
    removeImage,
    handleImageChange,
    handleSubmit,
    saveDraft,
    isPending,
    isDraft,
    content,
    setContent,
    imageUrls,
  };
}
