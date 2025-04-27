import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Button from "../../../ui/Button";
import { useUser } from "../../../context/UserProvider";
import Modal from "../../../ui/Modal";
import { paystack_pk } from "../../../services/api";
import { PaystackButton } from "react-paystack";

function PaymentModal({ paymentTypes }) {
  const { user_email, user_id } = useUser();
  const [searchParams] = useSearchParams();
  const currrentPayment = searchParams.get("payment") || null;

  const reference = new Date().getTime().toString();

  const paymentInfo = paymentTypes.filter(
    (item) => item.id === Number(currrentPayment)
  );

  if (paymentInfo.length === 0) return null;

  const [payment] = paymentInfo;

  const componentProps = {
    email: user_email,
    amount: payment.amount * 100,
    reference,
    publicKey: paystack_pk,
    text: "Pay Now",
    onSuccess: () => {
      //  const votePrice = event.votePrice;
    },
    //onClose: () => toast.success("Payment closed"),
    metadata: {
      custom_fields: [
        {
          display_name: `Payment For ${payment.title}`,
          variable_name: `${payment.description}`,
          value: payment.title,
        },
        {
          Date: new Date().getTime().toString(),
          madeBy: user_id,
        },
      ],
    },
  };
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

          {payment.status === "completed" ? null : (
            <>
              <div className="flex  justify-end gap-5">
                <Button className="" variant={"secondary"} size={"lg"}>
                  Cancel
                </Button>
                <PaystackButton
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md flex items-center"
                  {...componentProps}
                />
              </div>

              <div className="mt-6 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  Please note that this payment is non-refundable
                </p>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </Modal.Window>
  );
}

export default PaymentModal;
