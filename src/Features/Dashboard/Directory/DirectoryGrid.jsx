import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Award,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
} from "lucide-react";
import Button from "../../../ui/Button";
import SpinnerFullPage from "../../../ui/SpinnerFullPage";
import { settingsvariants } from "../../../utils/Constants";
import { useState } from "react";
import { useGetData } from "../../../hooks/useGetData";

function DirectoryGrid() {
  const [expandedCard, setExpandedCard] = useState(null);
  const { itemVariants, containerVariants } = settingsvariants;
  const { data: executives, isLoading } = useGetData("excos");

  const expandCard = (id) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  if (isLoading) return <SpinnerFullPage />;
  return (
    <motion.div
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {executives.map((executive) => (
        <motion.div
          key={executive.id}
          variants={itemVariants}
          className={`bg-white rounded-xl h-fit shadow-sm overflow-hidden cursor-pointer transition-all duration-300 ${
            expandedCard === executive.id ? "lg:col-span-2 lg:row-span-2" : ""
          }`}
          onClick={() => setExpandedCard(executive.name)}
        >
          <div className="relative">
            <img
              src={executive.image}
              alt={executive.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-4 right-4"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">{executive.name}</h3>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                {executive?.level} Level
              </span>
            </div>
            <p className="text-gray-600">{executive.role}</p>

            <div className="flex items-center gap-4">
              <Button
                variant="secondary"
                size="sm"
                icon={<Quote className="h-4 w-4" />}
                onClick={(e) => {
                  e.stopPropagation();
                  expandCard(executive.id);
                }}
              >
                {expandedCard === executive.name ? "Less Info" : "More Info"}
              </Button>
            </div>

            <AnimatePresence>
              {expandedCard === executive.name && (
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
                        {executive.achievements.awards.map(
                          (achievement, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-2 text-gray-600"
                            >
                              <Award className="h-4 w-4 text-yellow-500" />
                              {achievement}
                            </li>
                          )
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div className="space-y-2">
                            <h3 className="font-semibold mb-3">
                              Contact Information
                            </h3>
                            <p className="flex items-center gap-2 text-gray-600">
                              <Mail className="h-4 w-4" />
                              {executive.contacts.email}
                            </p>
                            <p className="flex items-center gap-2 text-gray-600">
                              <Phone className="h-4 w-4" />
                              {executive.contacts.phone}
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h3 className="font-semibold mb-3">Social Media</h3>
                            <div className="flex gap-2">
                              <Button
                                variant="secondary"
                                size="sm"
                                icon={<Twitter className="h-4 w-4" />}
                              >
                                Twitter
                              </Button>
                              <Button
                                variant="secondary"
                                size="sm"
                                icon={<Linkedin className="h-4 w-4" />}
                              >
                                LinkedIn
                              </Button>
                              <Button
                                variant="secondary"
                                size="sm"
                                icon={<Instagram className="h-4 w-4" />}
                              >
                                Instagram
                              </Button>
                            </div>
                          </div>
                        </div>
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
