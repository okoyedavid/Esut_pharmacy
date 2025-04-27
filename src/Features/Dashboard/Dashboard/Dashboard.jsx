import CourseProvider from "../../../context/CourseProvider";
import Notifications from "./Notifications";
import PendingPaymentsOverView from "./PendingPaymentsOverview";
import UserCard from "./UserCard";

const Dashboard = () => {
  return (
    <CourseProvider>
      <div className="grid grid-cols-1 pt-12 sm:pt-1 md:pt-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <UserCard />
        {/* Pending Payments Card */}
        <PendingPaymentsOverView />
      </div>
      <Notifications />
    </CourseProvider>
  );
};

export default Dashboard;
