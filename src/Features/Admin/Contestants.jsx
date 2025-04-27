import { useState } from "react";
import { User, Search } from "lucide-react";

function Contestants({ events }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [sortBy, setSortBy] = useState("votes");

  // Flatten all contestants from all categories and events
  const allContestants = events.flatMap((event) =>
    event.categories.flatMap((category) =>
      category.contestants.map((contestant) => ({
        ...contestant,
        categoryName: category.name,
        eventTitle: event.title,
      }))
    )
  );

  // Filter and sort contestants
  const filteredContestants = allContestants
    .filter((contestant) => {
      const matchesSearch = contestant.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" ||
        contestant.categoryName === selectedCategory;
      const matchesLevel =
        selectedLevel === "all" || contestant.level === selectedLevel;
      return matchesSearch && matchesCategory && matchesLevel;
    })
    .sort((a, b) => {
      if (sortBy === "votes") return b.votes - a.votes;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  // Get unique categories for filter
  const categories = [...new Set(allContestants.map((c) => c.categoryName))];
  const levels = [...new Set(allContestants.map((c) => c.level))];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Contestants
      </h1>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Search
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search contestants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Level
            </label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="all">All Levels</option>
              {levels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="votes">Most Votes</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
      </div>

      {/* Contestants Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredContestants.map((contestant) => (
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
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {contestant.name}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {contestant.level}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {contestant.categoryName}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {contestant.eventTitle}
              </p>

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

export default Contestants;
