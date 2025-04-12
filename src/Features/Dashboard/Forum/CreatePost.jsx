import { motion } from "framer-motion";
import {
  Image as ImageIcon,
  X,
  Save,
  Send,
  AlertCircle,
  Loader,
} from "lucide-react";
import Button from "../../../ui/Button";
import { useCreatePost } from "./useCreatePost";

const CreatePost = () => {
  const maxChars = 400;
  const {
    removeImage,
    handleImageChange,
    handleSubmit,
    saveDraft,
    isPending,
    isDraft,
    content,
    setContent,
    imageUrls,
  } = useCreatePost();
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="rounded-xl w-full max-w-2xl"
    >
      {/* Content */}

      <h2 className="text-xl font-semibold">Create Post</h2>

      <div className="relative mb-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          maxLength={maxChars}
        />
        <div className="absolute bottom-2 right-2 text-sm text-gray-500">
          {content.length}/{maxChars}
        </div>
      </div>

      {/* Image Preview */}
      {imageUrls.length > 0 && (
        <div
          className={`grid gap-2 mb-4 ${
            imageUrls.length > 1 ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          {imageUrls.map((url, index) => (
            <div key={index} className="relative">
              <img
                src={url}
                alt={`Preview ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 p-1 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Draft Status */}
      {isDraft && (
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <AlertCircle className="h-4 w-4" />
          Draft saved locally
        </div>
      )}

      {/* Actions */}
      <div className="p-4 bg-gray-50 rounded-b-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <label className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="hidden"
              />
              <ImageIcon className="h-5 w-5 text-gray-600" />
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              icon={<Save className="h-4 w-4" />}
              onClick={saveDraft}
            >
              Save Draft
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={
                isPending ? (
                  <Loader className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )
              }
              onClick={handleSubmit}
              disabled={isPending || !content.trim()}
            >
              {isPending ? "Posting..." : "Post"}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CreatePost;
