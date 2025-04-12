import { settingsvariants } from "../../../utils/Constants";
import { motion } from "framer-motion";
import { FileText, Download, Clock } from "lucide-react";
import { useSetUrl } from "../../../hooks/useSetUrl";
import { useGetData } from "../../../hooks/useGetData";
import { useState } from "react";
import Modal, { useModal } from "../../../ui/Modal";
import ResourceModal from "./ResourceModal";

function ResourceGrid() {
  const { data: resources, isLoading } = useGetData("resources");
  const { searchParams } = useSetUrl();
  const query = searchParams?.get("query")?.toLowerCase() || "";
  const [data, setData] = useState("");
  const { open } = useModal();

  if (isLoading) return <p>Loading resources</p>;

  const resourceList = resources.filter((item) => {
    return (
      !query ||
      item.semester?.toLowerCase().includes(query) ||
      item.title?.toLowerCase().includes(query) ||
      item.year?.toLowerCase().includes(query) ||
      item.semester?.toLowerCase().includes(query) ||
      item.department?.toLowerCase().includes(query)
    );
  });

  function handleClick(data) {
    setData(data);
    open("resources modal");
  }

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
          onClick={() => handleClick(resource)}
        >
          {resource.cover_image ? (
            <div className="relative h-48">
              <img
                src={resource.cover_image}
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
              <FileText className="h-12 w-12 text-gray-400" />
            </div>
          )}

          <div className="p-6">
            {!resource.cover_image && (
              <>
                <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.author}</p>
              </>
            )}
            <div className="flex items-center mb-2">
              <span className="bg-gray-300 text-sm px-2 mr-2 text-gray-500 rounded-xl">
                {resource.year}
              </span>
              <span className="bg-gray-300 text-sm px-2 mr-2 text-gray-500 rounded-xl">
                {resource.department}
              </span>
              <span className="bg-gray-300 text-sm px-2 text-gray-500 rounded-xl">
                {resource.semester} semester
              </span>
            </div>
            <div className="mb-4">
              <span className="text-sm">
                {resource.description.slice(0, 80)}......
              </span>
            </div>

            <div className="flex items-center justify-between ">
              <span className="flex items-center gap-1 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                {new Date(resource.created_at).toLocaleDateString()}
              </span>

              <Download className="h-7 w-7" />
            </div>
          </div>
        </motion.div>
      ))}

      <Modal.Window name={"resources modal"}>
        <ResourceModal resource={data} />
      </Modal.Window>
    </motion.div>
  );
}

export default ResourceGrid;
