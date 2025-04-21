import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import { settingsvariants } from "../../../utils/Constants";
import { useCourses } from "../../../context/CourseProvider";

const ProgressCharts = () => {
  const { result } = useCourses();
  const barChartData = result.map((course) => ({
    name: course.code,
    Grade:
      course.grade === "A"
        ? 100
        : course.grade === "B"
        ? 80
        : course.grade === "C"
        ? 60
        : course.grade === "D"
        ? 40
        : course.grade === "E"
        ? 20
        : course.grade === "F"
        ? 0
        : "AR",
    Units: course.units * 20,
  }));

  return (
    <motion.div
      className="rounded-xl shadow-sm py-4 mb-4 bg-gray-50 dark:bg-gray-800"
      variants={settingsvariants.itemVariants}
    >
      <div className="flex items-center justify-between mb-4 ml-3">
        <h2 className="text-lg font-semibold">Course Progress Overview</h2>
      </div>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />

            <Bar dataKey="Units" fill="#82ca9d" />
            <Bar dataKey="Grade" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ProgressCharts;
