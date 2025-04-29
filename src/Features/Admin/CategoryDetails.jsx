import { ArrowLeft, Plus, Trash2, User } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetData } from "../../hooks/useGetData";
import { useSetUrl } from "../../hooks/useSetUrl";
import Button from "../../ui/Button";
import LoadingGrid from "../../ui/LoadingGrid";
import Modal, { useModal } from "../../ui/Modal";
import AddContestant from "./AddContestant";
import DeleteContestant from "./DeleteContestant";
function CategoryDetails() {
  const { setParams } = useSetUrl();
  const { open } = useModal();
  const { id } = useParams();
  const [level, setLevel] = useState(100);

  const navigate = useNavigate();
  const { data, isLoading } = useGetData("voting", null, "*, events(title)");
  const { data: contestantsData, isLoading: isLoadingContestants } = useGetData(
    "voting_contestants",
    null,
    "*, users(name, avatar)"
  );
  const { data: users } = useGetData("users", [
    {
      column: "level",
      value: level,
    },
  ]);

  // Find the category and its event
  if (isLoading || isLoadingContestants)
    return <LoadingGrid parent={1} kids={8} />;

  const category = data.find((category) => category.name === id);

  if (!category || !data) {
    return <div>Category not found</div>;
  }

  const contestants = contestantsData.filter((item) => item.name === id);

  return (
    <div>
      <button
        onClick={() => navigate("/admin")}
        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mb-6"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Categories
      </button>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {category.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {data?.events?.title}
          </p>
        </div>
        <Modal.Open name={"Add contestant"}>
          <Button icon={<Plus size={20} />}> New </Button>
        </Modal.Open>
      </div>

      {/* Contestants List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {contestants.map((contestant) => (
          <div
            key={contestant.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={contestant?.users?.avatar}
              alt={contestant?.users?.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    {contestant?.users?.name}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {contestant.level}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setParams({ id: contestant.id });
                    open("Delete Contestant");
                  }}
                  className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                >
                  <Trash2 size={20} />
                </button>
              </div>

              <div className="mt-4 flex items-center text-gray-600 dark:text-gray-300">
                <User size={16} className="mr-2" />
                <span>{contestant.votes} votes</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <AddContestant setLevel={setLevel} users={users} />
      <DeleteContestant contestants={contestants} />
    </div>
  );
}

export default CategoryDetails;
