import { ArrowRight, Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import Button from "../../ui/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./UseAuth";
import Input from "../../ui/Input";
import Formrow from "../../ui/Formrow";

function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const { signUp, isCreatingAccount } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  function handleSubmit(e) {
    e.preventDefault();
    signUp(formData);
  }

  const iconClasses =
    "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5";
  return (
    <motion.div
      className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Create Account
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Formrow name={"Full Name"}>
          <User className={iconClasses} />
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            required
          />
        </Formrow>

        <Formrow name={"Email Address"}>
          <Mail className={iconClasses} />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </Formrow>

        <Formrow name={"Password"}>
          <Lock className={iconClasses} />
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </Formrow>

        <Formrow name={"Confirm Password"}>
          <Lock className={iconClasses} />
          <Input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm your password"
            required
          />
        </Formrow>

        <Button
          className="w-full"
          isLoading={isCreatingAccount}
          type="submit"
          size="lg"
        >
          Create Account
          <ArrowRight className="h-5 w-5" />
        </Button>
      </form>

      <div className="mt-6 text-center">
        <Link
          to={"/auth?login"}
          className="text-blue-600 hover:text-blue-800 font-medium dark:text-blue-400 dark:hover:text-blue-500"
        >
          Already have an account? Sign in
        </Link>
      </div>
    </motion.div>
  );
}

export default CreateAccount;
