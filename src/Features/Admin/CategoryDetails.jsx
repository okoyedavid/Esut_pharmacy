import { ArrowLeft, Plus, Trash2, User } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function CategoryDetails({ events, setEvents }) {
  const categoryId = 0;
  const navigate = useNavigate();
  const [isContestantFormOpen, setIsContestantFormOpen] = useState(false);
  const contestantImageRef = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Find the category and its event
  const eventWithCategory = events.find((event) =>
    event.categories.some((category) => category.id === categoryId)
  );

  const category = eventWithCategory?.categories.find(
    (category) => category.id === categoryId
  );

  if (!category || !eventWithCategory) {
    return <div>Category not found</div>;
  }

  const handleImageUpload = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(file);
    });
  };

  const onSubmit = async (data) => {
    const imageFile = contestantImageRef.current?.files[0];
    let imageUrl = "";

    if (imageFile) {
      imageUrl = await handleImageUpload(imageFile);
    }

    setEvents(
      events.map((event) =>
        event.id === eventWithCategory.id
          ? {
              ...event,
              categories: event.categories.map((cat) =>
                cat.id === category.id
                  ? {
                      ...cat,
                      contestants: [
                        ...cat.contestants,
                        {
                          id: Date.now().toString(),
                          name: data.name,
                          imageUrl,
                          votes: 0,
                          level: data.level,
                        },
                      ],
                    }
                  : cat
              ),
            }
          : event
      )
    );
    setIsContestantFormOpen(false);
    reset();
  };

  const deleteContestant = (contestantId) => {
    setEvents(
      events.map((event) =>
        event.id === eventWithCategory.id
          ? {
              ...event,
              categories: event.categories.map((cat) =>
                cat.id === category.id
                  ? {
                      ...cat,
                      contestants: cat.contestants.filter(
                        (contestant) => contestant.id !== contestantId
                      ),
                    }
                  : cat
              ),
            }
          : event
      )
    );
  };

  return (
    <div>
      <button
        onClick={() => navigate("/categories")}
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
            {eventWithCategory.title}
          </p>
        </div>
        <button
          onClick={() => setIsContestantFormOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={20} /> Add Contestant
        </button>
      </div>

      {/* Contestant Form Modal */}
      {isContestantFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Add Contestant
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Level
                </label>
                <select
                  {...register("level", { required: "Level is required" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="Year 1">Year 1</option>
                  <option value="Year 2">Year 2</option>
                  <option value="Year 3">Year 3</option>
                  <option value="Year 4">Year 4</option>
                </select>
                {errors.level && (
                  <span className="text-red-500 text-sm">
                    {errors.level.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  ref={contestantImageRef}
                  required
                  className="mt-1 block w-full text-sm text-gray-500 dark:text-gray-300
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100
                    dark:file:bg-gray-700 dark:file:text-gray-300"
                />
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setIsContestantFormOpen(false);
                    reset();
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                >
                  Add Contestant
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Contestants List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {category.contestants.map((contestant) => (
          <div
            key={contestant.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={contestant.imageUrl}
              alt={contestant.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    {contestant.name}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {contestant.level}
                  </p>
                </div>
                <button
                  onClick={() => deleteContestant(contestant.id)}
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
    </div>
  );
}

export default CategoryDetails;
