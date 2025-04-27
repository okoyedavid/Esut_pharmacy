import { motion } from "framer-motion";
import { BookOpen, Calendar, Mail, MapPin, Phone, Users } from "lucide-react";
import FadeInSection from "../../ui/FadeInSection";
import QuickLink from "../../ui/QuickLinks";
import DeanMessage from "./DeanMessage";

function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0 h-screen w-screen overflow-hidden">
        <img
          src="/home-page-photo.jpg"
          alt="Background"
          className="w-full h-full object-cover object-center md:object-fixed"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 min-h-screen flex items-center justify-center"
      >
        <div className="text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Animated text */}
            <motion.h1
              className="text-5xl text-white font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.4 }}
            >
              {Array.from("Esut Faculty of Pharmaceutical sciences").map(
                (char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {char}
                  </motion.span>
                )
              )}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="text-xl text-white max-w-2xl mx-auto"
            >
              Shaping the Future of Pharmaceutical Sciences
            </motion.p>
          </motion.div>
        </div>
      </motion.header>

      {/* Content that scrolls over the fixed background */}
      <div className="relative z-10 bg-white/90 dark:bg-gray-900 backdrop-blur-md mt-screen">
        {/* Quick Links */}
        <FadeInSection>
          <section className="py-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Quick Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <QuickLink
                pathname={"/news"}
                icon={Calendar}
                title="Academic Info"
                description="View important news and schedules"
              />
              <QuickLink
                pathname={"/dashboard"}
                icon={Users}
                title="Student Portal"
                description="Access your academic resources"
              />
              <QuickLink
                pathname={"/about"}
                icon={BookOpen}
                title="Programs"
                description="Explore our degree programs"
              />
            </div>
          </section>
        </FadeInSection>

        <DeanMessage />

        {/* Research Highlights */}
        {/* <FadeInSection>
          <section className="py-16 px-4 bg-blue-50 dark:bg-blue-950">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Research Excellence
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-blue-900 p-6 rounded-xl shadow-lg"
                >
                  <Flask className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Drug Discovery</h3>
                  <p className="text-gray-600">
                    Leading research in novel therapeutic compounds
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </FadeInSection> */}

        {/* Contact Information */}
        <FadeInSection>
          <section className="bg-gray-800 text-white py-7 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Contact Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p> PMB 01660, Agbani, </p>
                    <p>Enugu State, Nigeria.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p>(+234) 123-4567-876</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>pharmacy@university.edu</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Footer */}
      </div>
    </div>
  );
}

export default Home;
