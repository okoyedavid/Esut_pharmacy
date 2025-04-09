import { motion } from "framer-motion";
import {
  BookOpen,
  CreditCard,
  AlertTriangle,
  CheckCircle,
  Info,
} from "lucide-react";
import Button from "../../ui/Button";
import { useGetUser } from "../../hooks/useGetUser";

const Dashboard = () => {
  const notificationIcons = {
    info: <Info className="text-blue-500" />,
    warning: <AlertTriangle className="text-yellow-500" />,
    success: <CheckCircle className="text-green-500" />,
  };

  const { data } = useGetUser();
  const user = data.user_metadata;

  return (
    <div>
      {/* Dashboard Content */}
      <div className="md:p-8 mt-16 md:mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Academic Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 space-y-6"
          >
            <div className="flex items-center gap-4 pb-4 border-b border-gray-100 dark:border-gray-700">
              <img
                src={user?.avatar}
                alt={user?.name}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-100"
              />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  {user?.name.split(" ")[0]} {user?.name?.split(" ")[1]}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {user?.matricNumber}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Current Level
                </p>
                <p className="text-xl font-semibold text-gray-800 dark:text-white">
                  {student?.level}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">CGPA</p>
                <p className="text-xl font-semibold text-gray-800 dark:text-white">
                  {student?.gpa}
                </p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Department
                </p>
                <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  {student?.department}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Current Courses Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Current Courses
              </h3>
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <div className="space-y-3">
              {student?.courses.slice(0, 3).map((course, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {course.code}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {course.title}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      course.grade === "A"
                        ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                        : course.grade === "B"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                    }`}
                  >
                    {course.grade}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pending Payments Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Pending Payments
              </h3>
              <CreditCard className="h-6 w-6 text-blue-600" />
            </div>
            <div className="space-y-3">
              {student?.payments
                .filter((p) => p.status === "pending")
                .map((payment, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">
                        {payment.type}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Due: {payment.dueDate}
                      </p>
                    </div>
                    <p className="font-medium text-red-600">
                      ₦{payment.amount.toLocaleString()}
                    </p>
                  </div>
                ))}
              <Button variant="primary" size="sm" fullWidth>
                Pay Now
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Notifications and Updates */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Recent Notifications
            </h3>
            <div className="space-y-4">
              {student?.notifications.map((notification, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                >
                  {notificationIcons[notification.type]}
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {notification.message}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {notification.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

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
              {student?.updates.map((update, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const courses = {
  firstsemester: [
    {
      id: 34,
      code: "PRM 599",
      grade: "AR",
      level: "500",
      title: "Project (Sessional)",
      units: 3,
    },
    {
      id: 28,
      code: "PCH 521",
      grade: "AR",
      level: "500",
      title: "Medicinal Chemistry II",
      units: 2,
    },
    {
      id: 33,
      code: "PCT 524",
      grade: "AR",
      level: "500",
      title: "Current Trends in Packaging and Counterfeit Measures (Electives)",
      units: 2,
    },
    {
      id: 23,
      code: "PCL 511",
      grade: "AR",
      level: "500",
      title: "Pharmacotherapeutics I",
      units: 2,
    },
    {
      id: 24,
      code: "PCL 595",
      grade: "AR",
      level: "500",
      title: "Pharmacokinetics II Practical",
      units: 1,
    },
    {
      id: 25,
      code: "PCL 513",
      grade: "AR",
      level: "500",
      title: "Literature Evaluation & Communication Skills",
      units: 1,
    },
    {
      id: 26,
      code: "PCL 593",
      grade: "AR",
      level: "500",
      title: "Literature Evaluation & Communication Skills-Practical",
      units: 1,
    },
    {
      id: 35,
      code: "PCL 515",
      grade: "AR",
      level: "500",
      title: "Pharmacokinetics II",
      units: 2,
    },
    {
      id: 27,
      code: "PCL 517",
      grade: "AR",
      level: "500",
      title: "Pharmacotherapeutics II",
      units: 2,
    },
    {
      id: 29,
      code: "PCG 541",
      grade: "AR",
      level: "500",
      title: "Pharmacognosy (Herbal Complementary & Alternative Medicine)",
      units: 2,
    },
    {
      id: 30,
      code: "PMB 531",
      grade: "AR",
      level: "500",
      title: "Pharmaceutical Microbiology",
      units: 1,
    },
    {
      id: 31,
      code: "PMB 591",
      grade: "AR",
      level: "500",
      title: "Pharmaceutical Microbiology Practical",
      units: 1,
    },
    {
      id: 32,
      code: "PHA 553",
      grade: "AR",
      level: "500",
      title: "Clinical Pharmacology",
      units: 2,
    },
  ],
  secondsemester: [
    {
      id: 36,
      code: "PCL 512",
      grade: "AR",
      level: "500",
      title: "Clinical Pharmacy Clerkship",
      units: 3,
    },
    {
      id: 37,
      code: "PCL 514",
      grade: "AR",
      level: "500",
      title: "The Pharmacist in Primary Health Care",
      units: 2,
    },
    {
      id: 44,
      code: "PCT 514",
      grade: "AR",
      level: "500",
      title: "Cosmetology (Elective)",
      units: 2,
    },
    {
      id: 40,
      code: "PCT 532",
      grade: "AR",
      level: "500",
      title: "Pharmaceutical Technology",
      units: 2,
    },
    {
      id: 41,
      code: "PCT 592",
      grade: "AR",
      level: "500",
      title: "Pharmaceutical Technology Practical",
      units: 1,
    },
    {
      id: 39,
      code: "PHA 552",
      grade: "AR",
      level: "500",
      title: "Toxicology",
      units: 2,
    },
    {
      id: 42,
      code: "PHA 554",
      grade: "AR",
      level: "500",
      title: "Quantitative Pharmacology",
      units: 2,
    },
    {
      id: 43,
      code: "PRM 599",
      grade: "AR",
      level: "500",
      title: "Project (Sessional)",
      units: 3,
    },
    {
      id: 38,
      code: "PCH 522",
      grade: "AR",
      level: "500",
      title: "Pharmaceutical Analysis II",
      units: 2,
    },
  ],
};

const student = {
  name: "John Doe",
  matricNumber: "ESUT20230001",
  currentSemester: "2nd Semester, 2023/2024",
  profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  level: "500 Level",
  gpa: "4.75",
  department: "Pharmacy",
  courses: courses.firstsemester,
  payments: [
    {
      type: "Tuition Fee",
      status: "pending",
      dueDate: "2024-05-30",
      amount: 50000,
    },
    {
      type: "Library Fee",
      status: "paid",
      dueDate: "2024-03-01",
      amount: 2000,
    },
  ],
  notifications: [
    {
      type: "info",
      message: "Your semester registration is due",
      date: "2024-04-01",
    },
    {
      type: "warning",
      message: "Course registration closes in 3 days",
      date: "2024-04-05",
    },
    {
      type: "success",
      message: "You have been successfully enrolled in CS101",
      date: "2024-03-20",
    },
  ],
  updates: [
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
  ],
};
