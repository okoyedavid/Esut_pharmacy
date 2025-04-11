import ForumProvider from "../../context/ForumProvider";
import PageMotion from "../../ui/PageMotion";
import { Outlet } from "react-router-dom";

const Forum = () => {
  return (
    <ForumProvider>
      <PageMotion>
        <Outlet />
      </PageMotion>
    </ForumProvider>
  );
};

export default Forum;
