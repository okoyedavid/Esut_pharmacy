import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NewsProvider from "../../context/NewsProvider";
import Advertisements from "../../ui/Advertisements";
import Banner from "../../ui/Banner";
import { settingsvariants } from "../../utils/Constants";
import NewsGrid from "./NewsGrid";
import SearchNews from "./SearchNews";

const { containerVariants } = settingsvariants;

function NewsHome() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Header Section */}
        <Banner heading={"Campus Updates"}>
          Stay informed about the latest news, events, and announcements
        </Banner>
        {/* Search and Filter Section */}
        <div className="max-w-6xl mx-auto mt-6">
          <SearchNews />
          <Advertisements />
          {/* Updates Grid */}
          <NewsProvider>
            <NewsGrid />
          </NewsProvider>
        </div>
      </motion.div>
    </div>
  );
}

export default NewsHome;
