import { departments } from "../../utils/Constants";
import { motion } from "framer-motion";

function Departments() {
  return (
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
        {departments.map((department, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="group overflow-hidden rounded-xl shadow-md "
          >
            <div className="relative h-[250px] ">
              <img
                src={department.image}
                alt={department.name}
                className="object-cover border border-blue-200 w-full h-full rounded-xl"
              />
              <div className="absolute inset-0 transition-all duration-300" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-white">
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
  );
}
export default Departments;
