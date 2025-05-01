import { motion } from "framer-motion";

function Banner({ heading, children }) {
  return (
    <motion.section
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="bg-blue-600 text-white py-20"
      data-id="ubdd0ncz2"
      data-path="pages/Services.js"
    >
      <div
        className="container px-4 md:px-6"
        data-id="0mabya5m7"
        data-path="pages/Services.js"
      >
        <div
          className="text-center"
          data-id="lemlwoulf"
          data-path="pages/Services.js"
        >
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 text-white mt-6"
            data-id="s4ocbn50y"
            data-path="pages/Services.js"
          >
            {heading}
          </h1>
          <p
            className="text-xl mb-0"
            data-id="doa1m71o2"
            data-path="pages/Services.js"
          >
            {children}
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Banner;
