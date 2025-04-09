import { settingsvariants } from "../../../utils/Constants";
import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  BookOpen,
  Library,
  Building2,
} from "lucide-react";
import { useModal } from "../../../ui/Modal";
import { useNavigate } from "react-router-dom";
import PaymentModal from "./PaymentModal";

function PaymentList({ activeCategory, searchQuery }) {
  const filteredPayments = paymentTypes.filter(
    (payment) =>
      (activeCategory === "all" || payment.category === activeCategory) &&
      payment.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigate = useNavigate();
  const { open } = useModal();
  const handlePaymentClick = (payment) => {
    navigate(`/dashboard/payments?payment=${payment.id}`);
    open("payment");
  };

  return (
    <motion.div variants={settingsvariants.itemVariants} className="space-y-4">
      {filteredPayments.map((payment) => (
        <motion.div
          key={payment.id}
          variants={settingsvariants.itemVariants}
          whileHover={{ scale: 1.01 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 cursor-pointer"
          onClick={() => handlePaymentClick(payment)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-lg ${
                  payment.status === "completed"
                    ? "bg-green-100"
                    : "bg-blue-100"
                }`}
              >
                <payment.icon
                  className={`h-6 w-6 ${
                    payment.status === "completed"
                      ? "text-green-600"
                      : "text-blue-600"
                  }`}
                />
              </div>
              <div>
                <h3 className="font-semibold">{payment.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {payment.description}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold">
                ₦{payment.amount.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Due: {payment.dueDate}
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {payment.paymentMethods.includes("card") && (
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300">
                  Card Payment
                </span>
              )}
              {payment.paymentMethods.includes("bank-transfer") && (
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300">
                  Bank Transfer
                </span>
              )}
              {payment.paymentMethods.includes("ussd") && (
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300">
                  USSD
                </span>
              )}
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                payment.status === "completed"
                  ? "bg-green-100 text-green-600"
                  : "bg-yellow-100 text-yellow-600"
              }`}
            >
              {payment.status === "completed" ? "Paid" : "Pending"}
            </span>
          </div>
        </motion.div>
      ))}

      <PaymentModal paymentTypes={paymentTypes} />
    </motion.div>
  );
}

export default PaymentList;
const paymentTypes = [
  {
    id: 1,
    title: "Faculty Registration Fee",
    amount: 25000,
    dueDate: "2024-03-30",
    category: "faculty",
    description: "Annual faculty registration fee for Pharmacy students",
    icon: Building2,
    status: "pending",
    paymentMethods: ["card", "bank-transfer", "ussd"],
  },
  {
    id: 2,
    title: "Class Dues",
    amount: 5000,
    dueDate: "2024-03-25",
    category: "department",
    description: "400 Level class dues for academic activities",
    icon: Users,
    status: "pending",
    paymentMethods: ["card", "bank-transfer"],
  },
  {
    id: 3,
    title: "Laboratory Fee",
    amount: 15000,
    dueDate: "2024-03-28",
    category: "faculty",
    description: "Laboratory equipment and materials fee",
    icon: GraduationCap,
    status: "pending",
    paymentMethods: ["card", "bank-transfer"],
  },
  {
    id: 4,
    title: "Library Access Fee",
    amount: 2000,
    dueDate: "2024-03-22",
    category: "others",
    description: "Annual library access and maintenance fee",
    icon: Library,
    status: "completed",
    paymentMethods: ["card"],
  },
  {
    id: 5,
    title: "Student Union Fee",
    amount: 1000,
    dueDate: "2024-03-20",
    category: "others",
    description: "Annual student union membership fee",
    icon: Users,
    status: "completed",
    paymentMethods: ["card", "ussd"],
  },
  {
    id: 6,
    title: "Tuition Fee",
    amount: 150000,
    dueDate: "2024-04-15",
    category: "tuition",
    description: "Second semester tuition fee for 2023/2024 session",
    icon: BookOpen,
    status: "pending",
    paymentMethods: ["card", "bank-transfer"],
  },
  {
    id: 7,
    title: "Hostel Accommodation",
    amount: 50000,
    dueDate: "2024-04-01",
    category: "hostel",
    description: "Annual hostel accommodation fee",
    icon: Building2,
    status: "pending",
    paymentMethods: ["card", "bank-transfer"],
  },
];
