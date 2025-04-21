import CategoryList from "../Features/voting/CategoryList";
import VotingBanner from "../Features/voting/VotingBanner";

function Voting() {
  return (
    <div className="min-h-screen relative">
      <VotingBanner />
      <CategoryList />
    </div>
  );
}
export default Voting;
