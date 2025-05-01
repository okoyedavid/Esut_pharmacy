// import { motion } from "framer-motion";

import {
  AlignRight,
  ArrowDown,
  HomeIcon,
  InfoIcon,
  Newspaper,
  VoteIcon,
} from "lucide-react";

// import {
//   Home,
//   Info,
//   LogIn,
//   Menu,
//   Newspaper,
//   UserCircle2Icon,
//   X,
// } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useUser } from "../context/UserProvider";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { isAuthenticated } = useUser();

//   return (
//     <nav className="w-full z-50 fixed bg-white/80 dark:bg-gray-900 backdrop-blur-md shadow-md">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           <Link to={"/"} className="flex items-center">
//             <img
//               src="/logo.png"
//               className="h-12 w-12 border-2 rounded-full border-blue-600 dark:border-blue-900"
//             />
//             <span className="ml-2 text-xl font-bold dark:text-gray-50">
//               Faculty of Pharmacy
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link
//               to={"/"}
//               className="text-gray-700 dark:text-gray-50 dark:text-gray-300 hover:flex items-center gap-2"
//             >
//               <Home className="h-4 w-4" />
//               Home
//             </Link>
//             <Link
//               to={"/about"}
//               className="text-gray-700 dark:text-gray-50 dark:text-gray-300 hover:flex items-center gap-2"
//             >
//               <Info className="h-4 w-4" />
//               About
//             </Link>
//             <Link
//               to={"/news"}
//               className="text-gray-700 dark:text-gray-50 dark:text-gray-300 hover:flex items-center gap-2"
//             >
//               <Newspaper className="h-4 w-4" />
//               News
//             </Link>
//             {isAuthenticated ? (
//               <Link to={"/dashboard"}>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
//                 >
//                   <UserCircle2Icon className="h-4 w-4" />
//                   Dashboard
//                 </motion.button>
//               </Link>
//             ) : (
//               <Link to={"/auth"}>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
//                 >
//                   <LogIn className="h-4 w-4" />
//                   Login
//                 </motion.button>
//               </Link>
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 dark:text-gray-50 hover:
//             >
//               {isOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="md:hidden pb-4"
//           >
//             <div className="flex flex-col space-y-4">
//               <Link
//                 onClick={() => setIsOpen(false)}
//                 to={"/"}
//                 className="text-gray-700 dark:text-gray-50 hover:flex items-center gap-2"
//               >
//                 <Home className="h-4 w-4" />
//                 Home
//               </Link>
//               <Link
//                 onClick={() => setIsOpen(false)}
//                 to={"/about"}
//                 className="text-gray-700 dark:text-gray-50 hover:flex items-center gap-2"
//               >
//                 <Info className="h-4 w-4" />
//                 About
//               </Link>
//               <Link
//                 onClick={() => setIsOpen(false)}
//                 to={"/news"}
//                 className="text-gray-700 dark:text-gray-50 hover:flex items-center gap-2"
//               >
//                 <Newspaper className="h-4 w-4" />
//                 News
//               </Link>
//               {isAuthenticated ? (
//                 <Link to={"/dashboard"}>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
//                   >
//                     <UserCircle2Icon className="h-4 w-4" />
//                     Dashboard
//                   </motion.button>
//                 </Link>
//               ) : (
//                 <Link to={"/auth"}>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
//                   >
//                     <LogIn className="h-4 w-4" />
//                     Login
//                   </motion.button>
//                 </Link>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// Navbar component for the application

import { LogOut, UserPlus2Icon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserProvider";

export default function Navbar() {
  const { isAuthenticated, user } = useUser();

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle logout
  const handleLogout = () => {
    navigate("/");
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            className="h-12 w-12 border-2 object-cover rounded-full border-blue-600 dark:border-blue-900"
          />
          <span
            className={`text-2xl font-bold ${
              isScrolled ? " : isQuote ? " : "text-white"
            }`}
          >
            {" "}
            Faculty of Pharmacy
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-md font-medium transition-colors ${
                  isActive
                    ? "font-bold border-b-2 text-blue-600 border-white"
                    : isScrolled
                    ? "text-gray-800"
                    : "text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="relative group">
              <button className="flex items-center bg-white rounded-full p-2 shadow-sm focus:outline-none">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-medium">
                  {user?.name?.charAt(0).toUpperCase()}
                </span>
                <span className="ml-2 text-gray-700">{user?.name}</span>
                <ArrowDown className="ml-2 text-gray-500 text-xs" />
              </button>

              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  to={"/dashboard"}
                  className="w-full text-left gap-2 flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <UserPlus2Icon /> Dashboard
                </Link>

                <hr className="my-1" />
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  <LogOut /> Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link
                to="/auth/login"
                className={`text-sm font-medium px-4 py-2 rounded-md transition-colors ${
                  isScrolled
                    ? "hover:bg-blue-600/5"
                    : "text-black hover:bg-black/10"
                }`}
              >
                Login
              </Link>

              <Link
                to="/auth/register"
                className="text-sm font-medium px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-600/90"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden block focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X
              className={`text-2xl ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            />
          ) : (
            <AlignRight
              className={`text-2xl ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            />
          )}
        </button>
      </div>
      {/*mobile nav*/}

      <div
        className={`lg:hidden fixed top-0 right-0 h-full lg:w-2/5 w-3/5 bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">Esut Pharm</span>
            <button
              className="focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="text-gray-500 text-xl" />
            </button>
          </div>
        </div>

        <div className="p-4">
          {isAuthenticated && (
            <div className="mb-6 pb-6 border-b">
              <div className="flex items-center mb-4">
                <span className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-medium">
                  {user?.name?.charAt(0).toUpperCase()}
                </span>
                <div className="ml-3">
                  <p className="text-gray-800 font-medium">{user?.name}</p>
                  <p className="text-gray-500 text-sm capitalize">
                    {user?.role}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <Link
                  to={"/dashboard"}
                  className="flex items-center w-full rounded-md hover:bg-gray-100"
                >
                  <UserPlus2Icon className="fas fa-tachometer-alt w-8" />
                  <span>Dashboard</span>
                </Link>
              </div>
            </div>
          )}

          <nav
            className="space-y-2"
            data-id="l69dz9m5s"
            data-path="components/common/Navbar.js"
          >
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-md ${
                    isActive ? "bg-blue-600/10 " : "hover:bg-gray-100"
                  }`
                }
                end
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                <span
                  data-id="rchcejbx4"
                  data-path="components/common/Navbar.js"
                >
                  {link.name}
                </span>
              </NavLink>
            ))}
          </nav>

          <div
            className="mt-8 pt-4 border-t"
            data-id="wk1gf9rra"
            data-path="components/common/Navbar.js"
          >
            {!isAuthenticated ? (
              <div
                className="grid grid-cols-2 gap-4"
                data-id="vtvszmhd9"
                data-path="components/common/Navbar.js"
              >
                <Link
                  to="/auth?login"
                  className="text-center py-2 border border-primary rounded-md hover:bg-blue-600/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/auth?signup"
                  className="text-center py-2 bg-blue-600 text-white rounded-md hover:bg-blue-600/90"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            ) : (
              <button
                onClick={handleLogout}
                className="flex items-center justify-center w-full p-2 text-red-600 hover:bg-red-50 rounded-md"
                data-id="lgfasqrmr"
                data-path="components/common/Navbar.js"
              >
                <i
                  className="fas fa-sign-out-alt mr-2"
                  data-id="uizsk4n4w"
                  data-path="components/common/Navbar.js"
                ></i>
                <span
                  data-id="6e3vfu4pd"
                  data-path="components/common/Navbar.js"
                >
                  Logout
                </span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-md z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
          data-id="vawe96nqm"
          data-path="components/common/Navbar.js"
        ></div>
      )}
    </nav>
  );
}
const links = [
  { name: "Home", path: "/", icon: <HomeIcon className="w-4 h-4 mr-[3px]" /> },
  {
    name: "About",
    path: "/about",
    icon: <InfoIcon className="w-4 h-4 mr-[3px]" />,
  },
  {
    name: "News",
    path: "/news",
    icon: <Newspaper className="w-4 h-4 mr-[3px]" />,
  },
  {
    name: "Events",
    path: "/voting",
    icon: <VoteIcon className="w-4 h-4 mr-[3px]" />,
  },
];
