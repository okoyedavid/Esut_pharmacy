import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../../Features/Auth/Auth.jsx";
import Dashboard from "../../Features/Dashboard/Dashboard/Dashboard.jsx";
import ForumHome from "../../Features/Dashboard/Forum/ForumHome.jsx";
import ForumPost from "../../Features/Dashboard/Forum/ForumPost.jsx";
import NewsHome from "../../Features/News/NewsHome.jsx";
import NewsInfo from "../../Features/News/NewsInfo.jsx";
import VotingList from "../../Features/voting/VotingList.jsx";
import Error from "../../ui/Error.jsx";
import ProtectedRoutes from "../../ui/ProtectedRoutes.jsx";
import About from "../About.jsx";
import AdminPage from "../Admin.jsx";
import Courses from "../DashboardPages/Courses.jsx";
import Directory from "../DashboardPages/Directory.jsx";
import Forum from "../DashboardPages/Forum.jsx";
import Payments from "../DashboardPages/Payment.jsx";
import Resources from "../DashboardPages/Resources.jsx";
import Results from "../DashboardPages/Results.jsx";
import Settings from "../DashboardPages/Settings.jsx";
import HomePage from "../HomePage.jsx";
import News from "../News.jsx";
import Voting from "../Voting.jsx";
import DashboardLayout from "./DashbaordLayout.jsx";
import HomeLayout from "./HomeLayout.jsx";
import VotingHome from "../../Features/voting/VotingHome.jsx";
import Contestant from "../../Features/voting/Contestant.jsx";

export const router = createBrowserRouter([
  {
    element: (
      <ProtectedRoutes>
        <DashboardLayout />
      </ProtectedRoutes>
    ),
    errorElement: <Error />,
    path: "/dashboard",
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/dashboard/settings", element: <Settings /> },
      { path: "/dashboard/payments", element: <Payments /> },
      { path: "/dashboard/courses", element: <Courses /> },
      { path: "/dashboard/results", element: <Results /> },
      { path: "/dashboard/resources", element: <Resources /> },
      { path: "/dashboard/directory", element: <Directory /> },
      {
        path: "/dashboard/forum",
        element: <Forum />,
        children: [
          { index: true, element: <ForumHome /> },
          { path: "/dashboard/forum/post", element: <ForumPost /> },
        ],
      },
    ],
  },
  {
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { element: <HomePage />, path: "/" },
      {
        element: <Voting />,
        path: "/voting",

        children: [
          { index: true, element: <VotingHome /> },
          { element: <VotingList />, path: "/voting/:category" },
          { element: <Contestant />, path: "/voting/:category/:id" },
        ],
      },
      { element: <VotingList />, path: "/voting/list" },
      { element: <AuthPage />, path: "/auth" },
      { element: <AdminPage />, path: "/admin" },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/news",
        element: <News />,
        children: [
          { index: true, element: <NewsHome /> },
          { element: <NewsInfo />, path: "/news/update" },
        ],
      },
    ],
  },
  {
    future: { v7_startTransition: true, v7_relativeSplatPath: true },
  },
]);
