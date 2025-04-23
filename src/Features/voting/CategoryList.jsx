import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useGetData } from "../../hooks/useGetData";
import LoadingGrid from "../../ui/LoadingGrid";
import VotingCategory from "./VotingCategory";

const CategoryList = () => {
  const { data: categories, isLoading } = useGetData("voting");

  if (isLoading) {
    return <LoadingGrid parent={6} styles={"tri"} />;
  }

  if (!categories || categories.length === 0) {
    return (
      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
        <h2 className="text-lg font-semibold">No Categories Available</h2>
        <p>There are currently no voting categories available.</p>
      </div>
    );
  }

  return (
    <div className="md:p-20 p-8 relative">
      <div className="flex items-center justify mb-6">
        <Award className="mr-2 text-purple-500" />
        <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Award Categories
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 "
      >
        {categories.map((category) => (
          <VotingCategory key={category.name} category={category} />
        ))}
      </motion.div>
    </div>
  );
};

export default CategoryList;
