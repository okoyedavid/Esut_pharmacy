import { Award, Home, Trophy, Users } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import Modal from "../../ui/Modal";
import { useEffect } from "react";

function AdminLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Modal>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans transition-colors duration-200">
        <NavBar />
        <main className="px-8 pt-20">
          <Outlet />
        </main>
      </div>
    </Modal>
  );
}

export default AdminLayout;

function NavBar() {
  return (
    <nav className="bg-white w-full fixed flex justify-between items-center px-8 dark:bg-gray-800 shadow-md">
      <h1>Admin</h1>
      <div className="px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link
              to="/"
              className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Home className="w-5 h-5 mr-2" />
              Events
            </Link>
            <Link
              to="/categories"
              className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Award className="w-5 h-5 mr-2" />
              Categories
            </Link>
            <Link
              to="/contestants"
              className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Users className="w-5 h-5 mr-2" />
              Contestants
            </Link>
            <Link
              to="/leaderboard"
              className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Trophy className="w-5 h-5 mr-2" />
              Leaderboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
