import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Award,
  Book,
  Globe,
  Building2,
} from "lucide-react";
import Departments from "./Departments";

function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen  bg-white dark:bg-gray-900">
      <div className="relative">
        <img src="/Esut.png" className="w-full h-72 object-cover" />

        <div className="absolute inset-0 bg-black/40 to-transparent z-10" />

        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="text-center">
            <motion.h1
              className="text-2xl md:text-3xl relative z-11 lg:text-4xl mt-8 font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Faculty of Pharmacy - ESUT
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-4">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl text-black max-w-3xl mx-auto">
            Advancing knowledge, fostering innovation, and shaping the future of
            Pharmacy. Join us in pushing the boundaries of excellence at Enugu
            State University of Technology.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Users, label: "Enrolled Students", value: "5,000+" },
            { icon: GraduationCap, label: "Alumni", value: "20,000+" },
            { icon: Award, label: "Programs Offered", value: "15+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 shadow-blue-200 dark:shadow-blue-950 shadow-md backdrop-blur-sm rounded-xl p-6 text-center hover:bg-black/10 transition-colors"
            >
              <stat.icon className="w-12 h-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-black mb-2">
                {stat.value}
              </h3>
              <p className="text-blue-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div {...fadeInUp} className="space-y-6">
            <h2 className="text-3xl font-bold text-black mb-6">
              Excellence in Pharmacy
            </h2>
            <p className="text-black">
              As a key pillar of Enugu State University of Technology, the
              Faculty of Pharmacy is dedicated to providing top-tier education,
              research, and innovation. We cultivate skilled professionals
              equipped to tackle real-world challenges in Pharmacy.
            </p>
            <p className="text-black">
              Our faculty boasts a distinguished team of experts, cutting-edge
              research facilities, and strong industry collaborations, ensuring
              that our students are well-prepared for both academic and
              professional success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              {
                icon: Book,
                title: "Specialized Programs",
                desc: "Tailored to industry needs",
              },
              {
                icon: Globe,
                title: "Global Recognition",
                desc: "Renowned for research & innovation",
              },
              {
                icon: Users,
                title: "Expert Faculty",
                desc: "Leaders in education & research",
              },
              {
                icon: Building2,
                title: "Advanced Facilities",
                desc: "Modern labs & research centers",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/10 dark:shadow-blue-950 shadow-blue-200 shadow-md backdrop-blur-sm rounded-xl p-4 hover:bg-black/10 "
              >
                <feature.icon className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-black font-semibold mb-1">
                  {feature.title}
                </h3>
                <p className="text-blue-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Faculties */}
        <Departments />

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-white/10 dark:shadow-blue-950 shadow-blue-200 shadow-md  backdrop-blur-lg rounded-xl p-8 "
        >
          <h2 className="text-3xl font-bold text-black mb-4">
            Stay Connected with Us
          </h2>
          <p className="text-black mb-6">
            Explore research, resources, and academic insights from experts in
            the field. Stay updated with the latest advancements in
            pharmaceutical sciences.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-black px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutPage;
