import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SearchNews from "./SearchNews";
import NewsHeader from "./NewsHeader";
import NewsGrid from "./NewsGrid";
import { settingsvariants } from "../../utils/Constants";
import Advertisements from "../../ui/Advertisements";

const { containerVariants } = settingsvariants;

function NewsHome() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900  pt-18 px-2">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <NewsHeader />
        {/* Search and Filter Section */}
        <SearchNews />
        <Advertisements />
        {/* Updates Grid */}
        <NewsGrid />
      </motion.div>
    </div>
  );
}

export default NewsHome;
