import { Loader, Mail, Vote } from "lucide-react";
import { useState } from "react";
import Input from "../../ui/Input";

import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { PaystackButton } from "react-paystack";
import { useParams } from "react-router-dom";
import { paystack_pk } from "../../services/api";
import Formrow from "../../ui/Formrow";
import { useModal } from "../../ui/Modal";
import { event } from "../../utils/Constants";
import PaymentSuccess from "./PaymentSuccess";
import { checkverification } from "../../services/voting";
import { useMutate } from "../../hooks/useMutate";

function VoteModal({ contestant }) {
  const { category } = useParams();
  const [email, setEmail] = useState("");
  const { close } = useModal();
  const [voteCount, setVoteCount] = useState(1);
  const [success, setSuccess] = useState(false);
  const totalAmount = event.votePrice * voteCount;
  const reference = new Date().getTime().toString();

  const { mutate, isPending } = useMutate(
    checkverification,
    "checkvote",
    "voting_contestants"
  );

  const componentProps = {
    email,
    amount: totalAmount * 100,
    reference,
    publicKey: paystack_pk,
    text: "Pay Now",
    onSuccess: () => {
      const votePrice = event.votePrice;
      mutate(
        { contestant, reference, votePrice },
        {
          onSuccess: () => setSuccess(true),
        }
      );
    },
    onClose: () => toast.success("Payment closed"),
    metadata: {
      custom_fields: [
        {
          display_name: `Payment For ${category}`,
          variable_name: `payment of ${totalAmount} for ${category} at the ${event.title}`,
          value: event.title,
        },
        {
          ...contestant,
        },
      ],
    },
  };

  if (success)
    return (
      <PaymentSuccess
        onClose={close}
        paymentDetails={{
          amount: totalAmount,
          contestantName: contestant.name,
        }}
      />
    );

  if (isPending)
    return (
      <div className="flex gap-4">
        <Loader size={20} className="animate-spin text-blue-500" />
        <p className="text-sm space-x-0.5">
          Confirming payment &gt;&gt;&gt;&gt;{" "}
        </p>
      </div>
    );

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <h2 className="text-xl dark:text-gray-50 font-semibold mb-4">
        Vote for {contestant.users.name}
      </h2>

      <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-500 rounded-lg mb-2">
        <Vote className="h-6 w-6 text-blue-600" />
        <div>
          <h4 className="font-semibold">Event: {event.title}</h4>
          <p className="text-sm text-gray-600">Category: {category}</p>

          <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
            Price per vote: ₦{event.votePrice}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <Formrow name={"Email Address"}>
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5" />
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </Formrow>

        <Formrow name={"Number of Votes"}>
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setVoteCount(Math.max(1, voteCount - 1))}
              className="px-3 py-2 border dark:text-white border-gray-300 dark:border-gray-600 rounded-l-md bg-gray-100 dark:bg-gray-700"
            >
              -
            </button>
            <input
              type="number"
              id="voteCount"
              value={voteCount}
              onChange={(e) =>
                setVoteCount(Math.max(1, parseInt(e.target.value) || 1))
              }
              min="1"
              className="w-20 text-center dark:text-white py-2 border-t border-b border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            />
            <button
              type="button"
              onClick={() => setVoteCount(voteCount + 1)}
              className="px-3 py-2 border dark:text-white border-gray-300 dark:border-gray-600 rounded-r-md bg-gray-100 dark:bg-gray-700"
            >
              +
            </button>
          </div>

          <div className="mb-4 py-4 rounded-md">
            <div className="flex dark:text-white justify-start items-center font-semibold">
              <span>Total amount:</span>
              <span>₦{totalAmount}</span>
            </div>
          </div>
        </Formrow>

        <div className="flex justify-end">
          <button
            type="button"
            className="mr-2 px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-md"
          >
            Cancel
          </button>

          <PaystackButton
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md flex items-center"
            {...componentProps}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default VoteModal;
