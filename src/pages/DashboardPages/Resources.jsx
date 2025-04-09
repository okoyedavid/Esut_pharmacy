import ResourceSearch from "../../Features/Dashboard/Resources/ResourceSearch";
import ResourceGrid from "../../Features/Dashboard/Resources/ResourcesGrid";
import PageMotion from "../../ui/PageMotion";
import PageHead from "../../ui/PageHead";

const Resources = () => {
  return (
    <PageMotion>
      <PageHead
        title={"Learning Resources"}
        subtitle={" Access study materials, textbooks, and past questions"}
      />

      {/* Search and Filter Section */}
      <ResourceSearch />
      {/* Resources Grid */}
      <ResourceGrid />
    </PageMotion>
  );
};

export default Resources;
