import { useUser } from "../../../context/UserProvider";
import Notifications from "./Notifications";
import PendingPaymentsOverView from "./PendingPaymentsOverview";
import UserCard from "./UserCard";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Academic Status Card */}
        <UserCard user={user} />

        {/* Pending Payments Card */}
        <PendingPaymentsOverView />
      </div>
      <Notifications />
    </div>
  );
};

export default Dashboard;
