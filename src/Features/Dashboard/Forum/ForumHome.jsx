import PageMotion from "../../../ui/PageMotion";
import ForumFeed from "./ForumFeed";
import ForumHead from "./ForumHead";
import ForumSearch from "./ForumSearch";

const ForumHome = () => {
  return (
    <PageMotion>
      {/* Header Section */}
      <ForumHead />
      {/* Search and Filters */}
      <ForumSearch />
      {/* Posts Feed */}
      <ForumFeed />
      {/* Post Modal */}
    </PageMotion>
  );
};

export default ForumHome;
