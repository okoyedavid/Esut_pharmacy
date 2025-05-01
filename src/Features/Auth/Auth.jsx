import { motion } from "framer-motion";
import Login from "./Login";
import Signup from "./Signup";
import { useSearchParams } from "react-router-dom";

function AuthPage() {
  const [searchParams] = useSearchParams();
  const isSignup = searchParams.has("signup");

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Left Side - Image */}
      <div className="md:w-1/2 relative ">
        <div
          className="h-60 md:h-full  bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 flex items-center justify-center p-8">
            <div className="text-center">
              <motion.h1
                className="text-2xl md:text-3xl lg:text-4xl mt-10 font-bold text-white mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Welcome to ESUT Faculty of Pharmacy
              </motion.h1>
              <motion.p
                className="text-blue-100 text-sm md:text-lg max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Shaping the future of pharmaceutical education and research
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="md:w-1/2 bg-white dark:bg-gray-800 h-full p-8 md:mt-12 lg:p-16 flex items-center justify-center transition-colors duration-300">
        {!isSignup ? <Login /> : <Signup />}
      </div>
    </div>
  );
}

export default AuthPage;
