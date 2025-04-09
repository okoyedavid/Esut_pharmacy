import { motion } from "framer-motion";
import Button from "../../../ui/Button";
import { Download, Eye } from "lucide-react";

function ResourceModal({ resource }) {
  if (!resource) return null;
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
    >
      {resource.coverImage && (
        <div className="relative h-48 w-full">
          <img
            src={resource.coverImage}
            alt={resource.title}
            className="w-full h-full object-cover rounded-t-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            {/* {resourceTypes[resource.type].icon && (
                <resourceTypes[resource.type].icon className="h-6 w-6 text-blue-600" />
              )} */}
          </div>
          <div>
            <h3 className="text-xl font-bold">{resource.title}</h3>
            <p className="text-gray-600">{resource.author}</p>
          </div>
        </div>

        <p className="text-gray-600 mb-6">{resource.description}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <p className="text-sm text-gray-600 mb-1">Downloads</p>
            <p className="text-lg font-bold">{resource.downloads}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <p className="text-sm text-gray-600 mb-1">Views</p>
            <p className="text-lg font-bold">{resource.views}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <p className="text-sm text-gray-600 mb-1">Rating</p>
            <p className="text-lg font-bold">{resource.rating}/5.0</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <p className="text-sm text-gray-600 mb-1">Size</p>
            <p className="text-lg font-bold">{resource.fileSize}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="primary"
            icon={<Download className="h-5 w-5" />}
            fullWidth
          >
            Download
          </Button>
          <Button
            variant="secondary"
            icon={<Eye className="h-5 w-5" />}
            fullWidth
          >
            Preview
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default ResourceModal;
