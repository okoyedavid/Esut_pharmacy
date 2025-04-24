import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const VotingCategory = ({ category }) => {
  return (
    <motion.div whileHover={{ y: -5 }}>
      <Link
        to={`/voting/${category.name}`}
        className="relative flex items-center shadow-md dark:bg-gray-800 dark:text-gray-50 hover:border-[#4F46E5] hover:border justify-center rounded-md overflow-hidden"
      >
        {/* Top-right */}
        <svg
          viewBox="0 0 32 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 h-full pointer-events-none"
        >
          <path d="M0 40H24V36H4.8L0 40Z" fill="#4F46E5" />
          <path d="M8 40H32V36H12.8L8 40Z" fill="#7C3AED" />
          <path d="M32 16L32 40L28 40L28 20.8L32 16Z" fill="#7C3AED" />
        </svg>
        {/* Bottom-left */}
        <svg
          viewBox="0 0 32 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 h-full pointer-events-none"
        >
          <path d="M32 0H8V4H27.2L32 0Z" fill="#4F46E5" />
          <path d="M24 0H0V4H19.2L24 0Z" fill="#7C3AED" />
          <path
            d="M1.04907e-06 24L0 0L4 -1.74846e-07L4 19.2L1.04907e-06 24Z"
            fill="#7C3AED"
          />
        </svg>
        <div className="p-4 poetsen-one-regular">{category.name}</div>
      </Link>
    </motion.div>
  );
};

export default VotingCategory;
