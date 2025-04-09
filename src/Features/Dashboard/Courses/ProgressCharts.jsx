import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart as BarChartIcon,
  LineChart as LineChartIcon,
  PieChart as PieChartIcon,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Button from "../../../ui/Button";
import Wrapper from "../../../ui/Wrapper";
import { settingsvariants } from "../../../utils/Constants";
import { useCourses } from "../../../context/CourseProvider";

const ProgressCharts = () => {
  const [chartType, setChartType] = useState("bar");
  const { result } = useCourses();

  // Sample course data

  // Convert grades to numerical values
  const gradeToPoints = {
    A: 5.0,
    B: 4.0,
    C: 3.0,
    D: 0,
    E: 0,
    F: 0,
  };

  // Prepare data for different chart types
  const barChartData = result.map((course) => ({
    name: course.code,
    "Grade Points": gradeToPoints[course.grade] || 0,
    Units: course.units,
    Progress:
      course.grade === "A"
        ? 100
        : course.grade === "B"
        ? 80
        : course.grade === "C"
        ? 60
        : 0,
  }));

  const pieChartData = Object.entries(
    result.reduce((acc, course) => {
      acc[course.grade] = (acc[course.grade] || 0) + 1;
      return acc;
    }, {})
  ).map(([grade, count]) => ({
    name: grade,
    value: count,
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

  const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, fill, payload, value } = props;

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {`${payload.name}: ${value}`}
        </text>
        <path d={`M${cx},${cy}L${cx},${cy}`} fill="none" stroke={fill} />
        <circle cx={cx} cy={cy} r={innerRadius} fill={fill} />
        <circle cx={cx} cy={cy} r={outerRadius} fill="none" stroke={fill} />
      </g>
    );
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Wrapper>
          <p className="font-semibold">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </Wrapper>
      );
    }
    return null;
  };

  return (
    <motion.div variants={settingsvariants.itemVariants}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Course Progress Overview</h2>
        <div className="flex gap-2">
          <Button
            variant={chartType === "bar" ? "primary" : "secondary"}
            size="sm"
            icon={<BarChartIcon className="h-4 w-4" />}
            onClick={() => setChartType("bar")}
          >
            Bar
          </Button>
          <Button
            variant={chartType === "line" ? "primary" : "secondary"}
            size="sm"
            icon={<LineChartIcon className="h-4 w-4" />}
            onClick={() => setChartType("line")}
          >
            Line
          </Button>
          <Button
            variant={chartType === "pie" ? "primary" : "secondary"}
            size="sm"
            icon={<PieChartIcon className="h-4 w-4" />}
            onClick={() => setChartType("pie")}
          >
            Pie
          </Button>
        </div>
      </div>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "bar" ? (
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="Grade Points" fill="#8884d8" />
              <Bar dataKey="Units" fill="#82ca9d" />
              <Bar dataKey="Progress" fill="#ffc658" />
            </BarChart>
          ) : chartType === "line" ? (
            <LineChart data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="Grade Points"
                stroke="#8884d8"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="Units"
                stroke="#82ca9d"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="Progress"
                stroke="#ffc658"
                strokeWidth={2}
              />
            </LineChart>
          ) : (
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                activeShape={renderActiveShape}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>

      <div className="hidden  mt-6 md:grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-purple-600 mb-2">
            Average Grade Points
          </h3>
          <p className="text-2xl font-bold text-purple-700">
            {(
              result.reduce(
                (acc, course) => acc + (gradeToPoints[course.grade] || 0),
                0
              ) / result.length
            ).toFixed(2)}
          </p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-green-600 mb-2">
            Total Units
          </h3>
          <p className="text-2xl font-bold text-green-700">
            {result.reduce((acc, course) => acc + course.units, 0)}
          </p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-blue-600 mb-2">
            Completion Rate
          </h3>
          <p className="text-2xl font-bold text-blue-700">
            {Math.round(
              (result.filter((c) => c.status === "completed").length /
                result.length) *
                100
            )}
            %
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgressCharts;
