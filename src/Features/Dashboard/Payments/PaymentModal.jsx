import { AlertTriangle, Building2, CreditCard, Phone } from "lucide-react";
import Modal from "../../../ui/Modal";
import { motion } from "framer-motion";
import Button from "../../../ui/Button";
import { useLocation } from "react-router-dom";

function PaymentModal({ paymentTypes }) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const currrentPayment = params.get("payment") || null;

  const paymentInfo = paymentTypes.filter(
    (item) => item.id === Number(currrentPayment)
  );

  if (paymentInfo.length === 0) return null;

  const payment = paymentInfo[0];
  return (
    <Modal.Window name={"payment"}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Payment Details</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-500 rounded-lg">
            <payment.icon className="h-6 w-6 text-blue-600" />
            <div>
              <h4 className="font-semibold">{payment.title}</h4>
              <p className="text-sm text-gray-600">{payment.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-600">Amount</p>
              <p className="text-lg font-bold">
                ₦{payment.amount.toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-600">Due Date</p>
              <p className="text-lg font-bold">{payment.dueDate}</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Payment Methods</h4>
            <div className="grid grid-cols-1 gap-2">
              {payment.paymentMethods.includes("card") && (
                <Button
                  variant="primary"
                  fullWidth
                  icon={<CreditCard className="h-5 w-5" />}
                >
                  Pay with Card
                </Button>
              )}
              {payment.paymentMethods.includes("bank-transfer") && (
                <Button
                  variant="secondary"
                  fullWidth
                  icon={<Building2 className="h-5 w-5" />}
                >
                  Bank Transfer
                </Button>
              )}
              {payment.paymentMethods.includes("ussd") && (
                <Button
                  variant="secondary"
                  fullWidth
                  icon={<Phone className="h-5 w-5" />}
                >
                  USSD Payment
                </Button>
              )}
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            <p className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
              Please note that this payment is non-refundable
            </p>
          </div>
        </div>
      </motion.div>
    </Modal.Window>
  );
}

export default PaymentModal;
