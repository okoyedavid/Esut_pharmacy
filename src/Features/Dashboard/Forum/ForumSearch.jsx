import { motion } from "framer-motion";
import { useState } from "react";
import { settingsvariants } from "../../../utils/Constants";
import {
  Image as ImageIcon,
  BadgeCheck,
  Search,
  TrendingUp,
  Users,
  Calendar,
  Microscope,
} from "lucide-react";
import Button from "../../../ui/Button";
import Modal, { useModal } from "../../../ui/Modal";
import CreatePost from "./CreatePost";

function ForumSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const { open } = useModal();

  const { itemVariants } = settingsvariants;

  const filters = [
    { id: "all", label: "All Posts", icon: Users },
    { id: "trending", label: "Trending", icon: TrendingUp },
    { id: "announcements", label: "Announcements", icon: BadgeCheck },
    { id: "events", label: "Events", icon: Calendar },
    { id: "research", label: "Research", icon: Microscope },
  ];

  return (
    <motion.div variants={itemVariants} className="mb-8">
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <Button
            onClick={() => open("createpost")}
            variant="primary"
            icon={<ImageIcon className="h-5 w-5" />}
          >
            Create Post
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <filter.icon className="h-4 w-4" />
              {filter.label}
            </button>
          ))}
        </div>
      </div>
      <Modal.Window name={"createpost"}>
        <CreatePost />
      </Modal.Window>
    </motion.div>
  );
}

export default ForumSearch;
