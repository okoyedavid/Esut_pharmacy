import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Award,
  Book,
  Globe,
  Building2,
  Microscope,
  Stethoscope,
  LineChart,
  Leaf,
  FlaskRound,
  Pill,
} from "lucide-react";

function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <img
          src="/Esut.png"
          className="w-full h-72 object-cover rounded-t-xl"
        />

        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="text-center">
            <motion.h1
              className="text-2xl md:text-3xl lg:text-4xl mt-8 font-bold text-white mb-4"
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
              className="bg-black/5 shadow-lg backdrop-blur-sm rounded-xl p-6 text-center hover:bg-black/10 transition-colors"
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
                className="bg-black/5 shadow-lg backdrop-blur-sm rounded-xl p-4 hover:bg-black/10 "
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-black mb-8 text-center">
            Our Departments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Pharmaceutical Chemistry",
                icon: FlaskRound,
                image:
                  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
                description:
                  "Advancing drug development and chemical analysis in pharmacy.",
              },
              {
                name: "Pharmaceutics",
                icon: Pill,
                image:
                  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
                description:
                  "Formulating and delivering effective pharmaceutical products.",
              },
              {
                name: "Pharmacology & Toxicology",
                icon: Microscope,
                image:
                  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
                description:
                  "Studying drug interactions and the effects of chemicals on health.",
              },
              {
                name: "Clinical Pharmacy & Pharmacy Practice",
                icon: Stethoscope,
                image:
                  "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80",
                description:
                  "Enhancing patient care through evidence-based pharmacy practice.",
              },
              {
                name: "Pharmacognosy & Natural Medicine",
                icon: Leaf,
                image:
                  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
                description:
                  "Exploring the medicinal potential of natural products.",
              },
              {
                name: "Social & Administrative Pharmacy",
                icon: LineChart,
                image:
                  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
                description:
                  "Managing pharmaceutical policies, business, and healthcare systems.",
              },
            ].map((department, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={department.image}
                    alt={department.name}
                    className="object-cover w-full h-full rounded-xl"
                  />
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] transition-all duration-300" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-2">
                      <department.icon className="w-6 h-6 text-blue-300" />
                      <h3 className="text-xl font-semibold text-black">
                        {department.name}
                      </h3>
                    </div>
                    <p className="text-blue-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {department.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 bg-black/5 hover:bg-black/10 backdrop-blur-lg rounded-xl p-8 shadow-lg"
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
