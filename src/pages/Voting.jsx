import { Outlet } from "react-router-dom";

function Voting() {
  return (
    <div className="min-h-screen relative">
      <Outlet />
    </div>
  );
}
export default Voting;
