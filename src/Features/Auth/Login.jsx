import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import { useAuth } from "./UseAuth";
import Input from "../../ui/Input";
import Formrow from "../../ui/Formrow";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { isLoggingIn, LoginUser } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    LoginUser({ email: formData.email, password: formData.password });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <motion.div
      className="w-full h-[calc(100vh-16rem)] max-w-md"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
        Sign In
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Formrow name={"Email Address"}>
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5" />
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
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5" />
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
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </Formrow>

        <Button
          className="w-full"
          isLoading={isLoggingIn}
          type="submit"
          size="lg"
        >
          Sign In
          <ArrowRight className="h-5 w-5" />
        </Button>
      </form>

      <div className="mt-6 text-center">
        <Link
          to={"/auth?signup"}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
        >
          Don&apos;t have an account? Sign up
        </Link>
      </div>

      <div className="mt-4 text-center">
        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm">
          Forgot your password?
        </button>
      </div>
    </motion.div>
  );
}

export default Login;
