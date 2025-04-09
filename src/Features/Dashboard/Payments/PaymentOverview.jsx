import { Wallet, Receipt, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { settingsvariants } from "../../../utils/Constants";
import Wrapper from "../../../ui/Wrapper";

const { itemVariants } = settingsvariants;
function PaymentOverview() {
  return (
    <motion.div
      variants={itemVariants}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
    >
      <Wrapper light>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Wallet className="h-6 w-6 text-blue-600" />
          </div>
          <span className="text-sm font-medium text-blue-600">
            This Semester
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-1">₦248,000</h3>
        <p className="text-gray-600 text-sm">Total Outstanding</p>
      </Wrapper>

      <Wrapper light>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-green-100 rounded-lg">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <span className="text-sm font-medium text-green-600">Paid</span>
        </div>
        <h3 className="text-2xl font-bold mb-1">₦153,000</h3>
        <p className="text-gray-600 text-sm">Total Paid</p>
      </Wrapper>
      <Wrapper light>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-yellow-100 rounded-lg">
            <Clock className="h-6 w-6 text-yellow-600" />
          </div>
          <span className="text-sm font-medium text-yellow-600">Pending</span>
        </div>
        <h3 className="text-2xl font-bold mb-1">5</h3>
        <p className="text-gray-600 text-sm">Pending Payments</p>
      </Wrapper>

      <Wrapper light>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-purple-100 rounded-lg">
            <Receipt className="h-6 w-6 text-purple-600" />
          </div>
          <span className="text-sm font-medium text-purple-600">History</span>
        </div>
        <h3 className="text-2xl font-bold mb-1">12</h3>
        <p className="text-gray-600 text-sm">Total Transactions</p>
      </Wrapper>
    </motion.div>
  );
}
export default PaymentOverview;
