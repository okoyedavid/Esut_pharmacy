import { motion } from "framer-motion";

function Updates() {
  const updates = [
    {
      title: "New Semester Begins",
      description: "The new semester starts on May 1st",
      date: "2024-04-01",
    },
    {
      title: "Online Exam Updates",
      description: "Final exams will be conducted online",
      date: "2024-04-02",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6"
    >
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Important Updates
      </h3>
      <div className="space-y-4">
        {updates.map((update, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4">
            <p className="font-medium text-gray-800 dark:text-white">
              {update.title}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              {update.description}
            </p>
            <p className="text-sm text-blue-600">{update.date}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
export default Updates;
