import { PauseCircle, PlayCircle, Plus, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useGetData } from "../../hooks/useGetData";
import LoadingGrid from "../../ui/LoadingGrid";

import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CategoryModal from "./CategoryModal";

function Categories({ events }) {
  const { data: categories, isLoading: isLoadingCategories } = useGetData(
    "voting",
    null,
    "*, events(title)"
  );
  const { data, isLoading } = useGetData("voting_contestants");
  const navigate = useNavigate();

  if (isLoadingCategories || isLoading)
    return <LoadingGrid parent={9} kids={4} />;

  function getLength(category, type) {
    const contestants = data.filter((item) => item.name === category);

    if (type) return contestants.length;

    const votes = contestants.reduce(
      (acc, curr) => Number(acc) + Number(curr.votes),
      0
    );
    return votes;
  }

  const toggleCategoryStatus = () => {};
  return (
    <div className="py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Categories
        </h1>
        <Modal.Open name={"add category"}>
          <Button icon={<Plus size={20} />}>Add Category</Button>
        </Modal.Open>
      </div>

      {/* Categories Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories?.map((category) => (
          <div
            key={category.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate(`/admin/categories/${category.name}`)}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {category?.events?.title}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleCategoryStatus(category.name, category.id);
                }}
                className={`${
                  category.active
                    ? "text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                    : "text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300"
                }`}
              >
                {category.st ? (
                  <PlayCircle size={20} />
                ) : (
                  <PauseCircle size={20} />
                )}
              </button>
            </div>

            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Trophy size={16} className="mr-2" />
              <span>{getLength(category.name)} votes</span>
            </div>

            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              {getLength(category.name, true)} contestants
            </div>
          </div>
        ))}
      </div>

      <CategoryModal events={events} />
    </div>
  );
}

export default Categories;
