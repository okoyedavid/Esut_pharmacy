import { useGetUser } from "../../../hooks/useGetUser";
import UserCard from "./UserCard";
import PendingPaymentsOverView from "./PendingPaymentsOverview";
import Notifications from "./Notifications";

const Dashboard = () => {
  const { data } = useGetUser();
  const user = data.user_metadata;

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
