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
      {resource.cover_image && (
        <div className="relative h-48 w-full">
          <img
            src={resource.cover_image}
            alt={resource.title}
            className="w-full h-full object-cover rounded-t-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg"></div>
          <div>
            <h3 className=" md:text-xl  font-bold">{resource.title}</h3>
            <p className="text-gray-600">{resource.author}</p>
          </div>
        </div>

        <div className="p-2 bg-blue-200 dark:bg-blue-400 rounded-xl mb-6">
          <p className="text-gray-700 dark:text-gray-300">
            {resource.description}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-center">
            <p className="text-sm text-gray-600 mb-1">Year</p>
            <p className="text-lg font-bold">{resource.year}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-center">
            <p className="text-sm text-gray-600 mb-1">Semester</p>
            <p className="text-lg font-bold">{resource.semester}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-center">
            <p className="text-sm text-gray-600 mb-1">Department</p>
            <p className="text-lg font-bold">{resource.department}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <a href={resource.download_link}>
            <Button
              variant="primary"
              icon={<Download className="h-5 w-5" />}
              fullWidth
            >
              Download
            </Button>
          </a>
          <a href={resource.preview_url} target="_blank">
            <Button
              variant="secondary"
              icon={<Eye className="h-5 w-5" />}
              fullWidth
            >
              Preview
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ResourceModal;
