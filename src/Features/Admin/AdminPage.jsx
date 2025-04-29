// Components
import { useGetData } from "../../hooks/useGetData";
import LoadingGrid from "../../ui/LoadingGrid";
import Categories from "./Categories";
import Events from "./Events";
import Leaderboard from "./Leaderboard";

function AdminPage() {
  const { data, isLoading } = useGetData("events");

  if (isLoading) return <LoadingGrid parent={9} kids={4} />;

  return (
    <>
      <Events events={data} />

      <Categories events={data} />
      {/*  <Contestants events={events} setEvents={setEvents} />
        <Leaderboard events={data} />
        */}
    </>
  );
}

export default AdminPage;
