import { motion, AnimatePresence } from "framer-motion";
import { Mail, Quote, Award } from "lucide-react";
import Button from "../../../ui/Button";
import { executives, settingsvariants } from "../../../utils/Constants";
import { useState } from "react";

function DirectoryGrid() {
  const [setSelectedExecutive] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const { itemVariants, containerVariants } = settingsvariants;

  const expandCard = (id) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };
  return (
    <motion.div
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {executives.map((executive) => (
        <motion.div
          key={executive.id}
          variants={itemVariants}
          className={`bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer transition-all duration-300 ${
            expandedCard === executive.id ? "lg:col-span-2 lg:row-span-2" : ""
          }`}
          onClick={() => setSelectedExecutive(executive)}
        >
          <div className="relative">
            <img
              src={executive.image}
              alt={executive.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-4 right-4">
              <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                <executive.icon className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">{executive.name}</h3>
              <p className="text-white/80">{executive.role}</p>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                {executive?.department}
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                {executive?.level} Level
              </span>
            </div>

            <p className="text-gray-600 mb-4">{executive?.bio}</p>

            <div className="flex items-center gap-4">
              <Button
                variant="secondary"
                size="sm"
                icon={<Mail className="h-4 w-4" />}
              >
                Contact
              </Button>
              <Button
                variant="secondary"
                size="sm"
                icon={<Quote className="h-4 w-4" />}
                onClick={(e) => {
                  e.stopPropagation();
                  expandCard(executive.id);
                }}
              >
                {expandedCard === executive.id ? "Less Info" : "More Info"}
              </Button>
            </div>

            <AnimatePresence>
              {expandedCard === executive.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-4 pt-4 border-t"
                >
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="italic text-gray-600">{executive.quote}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Achievements</h4>
                      <ul className="space-y-2">
                        {executive.achievements.map((achievement, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-gray-600"
                          >
                            <Award className="h-4 w-4 text-yellow-500" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default DirectoryGrid;
