import { resources, settingsvariants } from "../../../utils/Constants";
import { motion } from "framer-motion";
import {
  BookOpen,
  FileText,
  Download,
  Clock,
  BookMarked,
  Share2,
  FileQuestion,
} from "lucide-react";
import { useState } from "react";
import { useSetUrl } from "../../../hooks/useSetUrl";

function ResourceGrid() {
  const { searchParams, setParams } = useSetUrl();
  const query = searchParams.get("query");
  const department = searchParams.get("department") || "pharmaceutics";

  const [bookmarkedResources, setBookmarkedResources] = useState(new Set());

  const resourceTypes = {
    textbook: { label: "Textbook", icon: BookOpen },
    notes: { label: "Lecture Notes", icon: FileText },
    questions: { label: "Past Questions", icon: FileQuestion },
    handout: { label: "Handout", icon: FileText },
  };

  const resourceList = resources[department].filter((item) => {
    return (
      !query ||
      item.type?.toLowerCase().includes(query) ||
      item.title?.toLowerCase().includes(query) ||
      item.author?.toLowerCase().includes(query)
    );
  });

  console.log(resourceList);

  const toggleBookmark = (id) => {
    setBookmarkedResources((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <motion.div
      variants={settingsvariants.containerVariants}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {resourceList.map((resource) => (
        <motion.div
          key={resource.id}
          variants={settingsvariants.itemVariants}
          whileHover={{ y: -4 }}
          className="rounded-xl shadow-sm overflow-hidden cursor-pointer group"
          onClick={() => setParams({ resource: resource.id })}
        >
          {resource.coverImage ? (
            <div className="relative h-48">
              <img
                src={resource.coverImage}
                alt={resource.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">{resource.title}</p>
                <p className="text-sm text-white/80">{resource.author}</p>
              </div>
            </div>
          ) : (
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              {/* {resourceTypes[resource.type].icon && (
                  <resourceTypes[resource.type].icon className="h-12 w-12 text-gray-400" />
                )} */}
            </div>
          )}

          <div className="p-6">
            {!resource.coverImage && (
              <>
                <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.author}</p>
              </>
            )}

            <div className="flex items-center justify-between mb-4">
              <span className="flex items-center gap-1 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                {new Date(resource.uploadDate).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-600">
                <Download className="h-4 w-4" />
                {resource.downloads}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1 text-sm font-medium text-blue-600">
                {/* {resourceTypes[resource.type].icon && (
                    <resourceTypes[resource.type].icon className="h-4 w-4" />
                  )} */}
                {resourceTypes[resource.type].label}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleBookmark(resource.id);
                  }}
                  className={`p-2 rounded-full transition-colors ${
                    bookmarkedResources.has(resource.id)
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <BookMarked className="h-4 w-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle share
                  }}
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ResourceGrid;
