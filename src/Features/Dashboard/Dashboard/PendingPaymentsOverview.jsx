import { CreditCard } from "lucide-react";
import Button from "../../../ui/Button";
import { motion } from "framer-motion";

function PendingPaymentsOverView() {
  return (
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
        {payments
          .filter((p) => p.status === "pending")
          .map((payment, index) => (
            <div key={index} className="flex items-center justify-between">
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
  );
}

export default PendingPaymentsOverView;

const payments = [
  {
    type: "Tuition Fee",
    status: "pending",
    dueDate: "2024-05-30",
    amount: 50000,
  },
  {
    type: "Library Fee",
    status: "pending",
    dueDate: "2024-03-01",
    amount: 2000,
  },
];
