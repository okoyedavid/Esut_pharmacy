import { CheckCircle } from "lucide-react";
import Button from "../../ui/Button";

const PaymentSuccess = ({ paymentDetails, onClose }) => (
  <div className="animate-scaleIn space-y-5">
    <div className="flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
        <CheckCircle className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
        Payment Successful!
      </h3>
      <p className="text-gray-600 dark:text-gray-300 max-w-md mt-2">
        Thank you for your payment. Your transaction has been completed
        successfully.
      </p>
    </div>

    <div className="backdrop-blur-md bg-white/70 dark:bg-white/10 rounded-lg border border-gray-300 dark:border-white/20 p-5 space-y-3">
      <div className="flex justify-between">
        <span className="text-gray-600 dark:text-gray-300">Amount</span>
        <span className="font-semibold text-gray-900 dark:text-white">
          ₦{paymentDetails.amount}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600 dark:text-gray-300">Contestant</span>
        <span className="font-semibold text-gray-900 dark:text-white">
          {paymentDetails.contestantName}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600 dark:text-gray-300">Transaction ID</span>
        <span className="font-semibold text-gray-900 dark:text-white">
          TXN-{Math.floor(Math.random() * 1000000)}
        </span>
      </div>
    </div>

    <Button variant="primary" fullWidth onClick={() => onClose()}>
      Close
    </Button>
  </div>
);

export default PaymentSuccess;
