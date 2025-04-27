import { Menu, MessageSquare, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserProvider";

function Header({ onToggleSidebar }) {
  const { user } = useUser();

  return (
    <header className="shadow-sm dark:shadow-md dark:bg-gray-900 sm:relative bg-white sm:w-auto fixed w-full z-40">
      <div className="flex items-center md:justify-between px-4 md:px-8 py-4">
        <button onClick={onToggleSidebar} className="lg:hidden">
          <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
        </button>
        <div>
          <h2 className="text-2xl pl-3 md:text-2xl font-bold text-gray-800 dark:text-white">
            Dashboard
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {user?.currentSemester}
          </p>
        </div>
        <div className="ml-auto flex items-center gap-4">
          {" "}
          <Link
            to="/dashboard/directory"
            className=" sm:flex items-center gap-1 text-gray-700 dark:text-gray-300"
          >
            <Users className="w-8 h-6.5" />
            <span className="hidden sm:flex text-sm">Directory</span>
          </Link>
          <Link
            to="/dashboard/forum"
            className=" sm:flex items-center gap-1 text-gray-700 dark:text-gray-300"
          >
            <MessageSquare className="w-8 h-6.5" />
            <span className="hidden sm:flex text-sm">Forum</span>
          </Link>
          {/* <button className="relative">
            <Bell className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
