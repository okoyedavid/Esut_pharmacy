import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Trophy, Plus, PauseCircle, PlayCircle } from "lucide-react";

function Categories({ events, setEvents }) {
  const [isCategoryFormOpen, setIsCategoryFormOpen] = useState(false);
  const [selectedEventForCategory, setSelectedEventForCategory] =
    useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setEvents(
      events.map((event) =>
        event.id === selectedEventForCategory.id
          ? {
              ...event,
              categories: [
                ...event.categories,
                {
                  id: Date.now().toString(),
                  name: data.name,
                  votes: 0,
                  isPaused: false,
                  contestants: [],
                },
              ],
            }
          : event
      )
    );
    setIsCategoryFormOpen(false);
    reset();
  };

  const toggleCategoryStatus = (eventId, categoryId) => {
    setEvents(
      events.map((event) =>
        event.id === eventId
          ? {
              ...event,
              categories: event.categories.map((category) =>
                category.id === categoryId
                  ? { ...category, isPaused: !category.isPaused }
                  : category
              ),
            }
          : event
      )
    );
  };

  // Flatten all categories from all events
  const allCategories = events.flatMap((event) =>
    event.categories.map((category) => ({
      ...category,
      eventTitle: event.title,
      eventId: event.id,
    }))
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Categories
        </h1>
        <button
          onClick={() => {
            if (events.length > 0) {
              setSelectedEventForCategory(events[0]);
              setIsCategoryFormOpen(true);
            }
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={20} /> Add Category
        </button>
      </div>

      {/* Category Form Modal */}
      {isCategoryFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Add Category
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Event
                </label>
                <select
                  {...register("eventId", { required: "Event is required" })}
                  onChange={(e) =>
                    setSelectedEventForCategory(
                      events.find((event) => event.id === e.target.value)
                    )
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  {events.map((event) => (
                    <option key={event.id} value={event.id}>
                      {event.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Category Name
                </label>
                <input
                  {...register("name", {
                    required: "Category name is required",
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setIsCategoryFormOpen(false);
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
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Categories Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allCategories.map((category) => (
          <div
            key={category.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate(`/categories/${category.id}`)}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {category.eventTitle}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleCategoryStatus(category.eventId, category.id);
                }}
                className={`${
                  category.isPaused
                    ? "text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                    : "text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300"
                }`}
              >
                {category.isPaused ? (
                  <PlayCircle size={20} />
                ) : (
                  <PauseCircle size={20} />
                )}
              </button>
            </div>

            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Trophy size={16} className="mr-2" />
              <span>{category.votes} votes</span>
            </div>

            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              {category.contestants.length} contestants
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
