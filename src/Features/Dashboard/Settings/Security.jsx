import { motion } from "framer-motion";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import { settingsvariants } from "../../../utils/Constants";
import Formrow from "../../../ui/Formrow";
import { useForm } from "react-hook-form";
import { useMutate } from "../../../hooks/useMutate";
import { updatePassword } from "../../../services/ApiAuth";
import toast from "react-hot-toast";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Security() {
  const { itemVariants, containerVariants } = settingsvariants;
  const [showPassword, setShowPassword] = useState(false);
  const { mutate, isPending } = useMutate(updatePassword, ["update Password"]);
  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
  } = useForm();

  function onSubmit(data) {
    mutate(data, {
      onSuccess: () => toast.success("Password successfully updated"),
    });
  }
  return (
    <motion.div variants={containerVariants}>
      <h2 className="text-2xl font-bold mb-6 dark:text-white">
        Security Settings
      </h2>

      <motion.div variants={itemVariants} className="space-y-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
        >
          <h3 className="font-semibold mb-4 dark:text-white">
            Change Password
          </h3>
          <div className="space-y-4">
            <Formrow error={errors?.formerpassword?.message}>
              <Input
                type={showPassword ? "text" : "password"}
                title={"formerpassword"}
                register={register}
                validation={{
                  required: "Please fill in your current password",
                }}
                placeholder="Current Password"
              />
            </Formrow>
            <Formrow error={errors?.password?.message}>
              <Input
                type={showPassword ? "text" : "password"}
                title={"password"}
                register={register}
                validation={{
                  required: "Please fill in a new password",
                  validate: (value) =>
                    value !== watch("formerpassword") ||
                    "New password must be different",
                }}
                placeholder="New Password"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </Formrow>
            <Formrow error={errors?.confirmpassword?.message}>
              <Input
                type={showPassword ? "text" : "password"}
                title={"confirmpassword"}
                register={register}
                placeholder="Confirm New Password"
                validation={{
                  required: "Please fill in this field",
                  validate: (value) =>
                    value === watch("password") || "password does not match",
                }}
              />
            </Formrow>
          </div>
          <Button
            isLoading={isPending}
            variant="primary"
            size="lg"
            className="mt-4"
          >
            Update Password
          </Button>
        </form>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold mb-4 dark:text-white">
            Two-Factor Authentication
          </h3>
          <p className="text-gray-600 mb-4 dark:text-white">
            Add an extra layer of security to your account
          </p>
          <Button size="lg" variant="secondary">
            Enable 2FA
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
export default Security;
