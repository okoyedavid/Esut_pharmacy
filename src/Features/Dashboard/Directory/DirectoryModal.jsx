import { Instagram, Linkedin, Mail, Phone, Quote, Twitter } from "lucide-react";
import Button from "../../../ui/Button";
import { motion } from "framer-motion";
import Modal from "../../../ui/Modal";

const ExecutiveModal = ({ executive }) => {
  if (!executive) return null;

  return (
    <Modal.Window name={"Executives"}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-xl max-w-2xl w-full overflow-hidden"
      >
        <div className="relative h-64">
          <img
            src={executive.image}
            alt={executive.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-2xl font-bold">{executive.name}</h2>
            <p className="text-white/80">{executive.role}</p>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
              {executive.level} Level
            </span>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Quote className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold">Executive Quote</h3>
            </div>
            <p className="text-gray-600 italic">{executive.quote}</p>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-2">
              <h3 className="font-semibold mb-3">Contact Information</h3>
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
          </div> */}
        </div>
      </motion.div>
    </Modal.Window>
  );
};

export default ExecutiveModal;
