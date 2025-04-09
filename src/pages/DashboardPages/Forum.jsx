import ForumFeed from "../../Features/Dashboard/Forum/ForumFeed";
import ForumSearch from "../../Features/Dashboard/Forum/ForumSearch";
import ForumHead from "../../Features/Dashboard/Forum/ForumHead";
import PageMotion from "../../ui/PageMotion";

const Forum = () => {
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

export default Forum;
