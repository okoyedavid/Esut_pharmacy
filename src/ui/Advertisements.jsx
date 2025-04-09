import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Ticket,
  Calendar,
  Coffee,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Button from "./Button";

const Advertisements = ({ className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const ads = [
    {
      id: 1,
      title: "Dinner Night 2024",
      type: "event",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
      description:
        "Join us for an elegant evening of fine dining and networking",
      price: "₦5,000",
      date: "March 25, 2024",
      icon: Coffee,
      cta: "Get Tickets",
      highlight: true,
    },
    // },
    // {
    //   id: 2,
    //   title: "Lagos Tech Summit",
    //   type: "conference",
    //   image:
    //     "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    //   description:
    //     "Experience the future of technology at Nigeria's biggest tech conference",
    //   price: "₦15,000",
    //   date: "April 15, 2024",
    //   icon: GraduationCap,
    //   cta: "Register Now",
    //   featured: true,
    // },
    // {
    //   id: 3,
    //   title: "Campus Music Festival",
    //   type: "entertainment",
    //   image:
    //     "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80",
    //   description: "A night of amazing performances from top artists",
    //   price: "₦3,000",
    //   date: "March 30, 2024",
    //   icon: Music,
    //   cta: "Buy Tickets",
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`space-y-6 mb-8 ${className}`}
    >
      {/* Featured Ad */}
      {ads
        .filter((ad) => ad.featured)
        .map((ad) => (
          <motion.div
            key={ad.id}
            variants={itemVariants}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 z-10" />
            <img
              src={ad.image}
              alt={ad.title}
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="relative z-20 p-8 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-sm font-medium backdrop-blur-sm mb-4">
                    Featured Event
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{ad.title}</h3>
                  <p className="text-white/90 mb-4">{ad.description}</p>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {ad.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Ticket className="h-4 w-4" />
                      {ad.price}
                    </span>
                  </div>
                </div>
                <motion.div
                  className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  <ad.icon className="h-8 w-8 text-white" />
                </motion.div>
              </div>
              <Button
                variant="accent"
                size="lg"
                icon={<ArrowRight className="h-5 w-5" />}
                className="mt-4 w-auto"
              >
                {ad.cta}
              </Button>
            </div>
          </motion.div>
        ))}

      {/* Regular Ads Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ads
          .filter((ad) => !ad.featured)
          .map((ad) => (
            <motion.div
              key={ad.id}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-xl shadow-sm group ${
                ad.highlight ? "md:col-span-2" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <img
                src={ad.image}
                alt={ad.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-sm font-medium backdrop-blur-sm mb-2">
                      {ad.type.charAt(0).toUpperCase() + ad.type.slice(1)}
                    </span>
                    <h3 className="text-xl font-bold">{ad.title}</h3>
                  </div>
                  <motion.div
                    className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ad.icon className="h-6 w-6 text-white" />
                  </motion.div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      {ad.date}
                    </span>
                    <span className="flex items-center gap-2 text-sm">
                      <Ticket className="h-4 w-4" />
                      {ad.price}
                    </span>
                  </div>
                  <Button
                    variant="secondary"
                    size="sm"
                    icon={<ExternalLink className="h-4 w-4" />}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                  >
                    {ad.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </motion.div>
  );
};

export default Advertisements;
