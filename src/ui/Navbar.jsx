import {
  Home,
  Info,
  Newspaper,
  Menu,
  X,
  LogIn,
  UserCircle2Icon,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useGetUser } from "../hooks/useGetUser";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useGetUser();

  return (
    <nav className="w-full z-50 fixed bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="/logo.png"
              className="h-12 w-12 border-2 rounded-full border-blue-600"
            />
            <span className="ml-2 text-xl font-bold">Faculty of Pharmacy</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to={"/"}
              className="text-gray-700 hover:text-blue-600 flex items-center gap-2"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              to={"/about"}
              className="text-gray-700 hover:text-blue-600 flex items-center gap-2"
            >
              <Info className="h-4 w-4" />
              About
            </Link>
            <Link
              to={"/news"}
              className="text-gray-700 hover:text-blue-600 flex items-center gap-2"
            >
              <Newspaper className="h-4 w-4" />
              News
            </Link>
            {isAuthenticated ? (
              <Link to={"/dashboard"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
                >
                  <UserCircle2Icon className="h-4 w-4" />
                  Dashboard
                </motion.button>
              </Link>
            ) : (
              <Link to={"/auth"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
                >
                  <LogIn className="h-4 w-4" />
                  Login
                </motion.button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col space-y-4">
              <Link
                onClick={() => setIsOpen(false)}
                to={"/"}
                className="text-gray-700 hover:text-blue-600 flex items-center gap-2"
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                to={"/about"}
                className="text-gray-700 hover:text-blue-600 flex items-center gap-2"
              >
                <Info className="h-4 w-4" />
                About
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                to={"/news"}
                className="text-gray-700 hover:text-blue-600 flex items-center gap-2"
              >
                <Newspaper className="h-4 w-4" />
                News
              </Link>
              {isAuthenticated ? (
                <Link to={"/dashboard"}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
                  >
                    <UserCircle2Icon className="h-4 w-4" />
                    Dashboard
                  </motion.button>
                </Link>
              ) : (
                <Link to={"/auth"}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
                  >
                    <LogIn className="h-4 w-4" />
                    Login
                  </motion.button>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
