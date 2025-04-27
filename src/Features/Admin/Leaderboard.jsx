import { Medal, Trophy } from "lucide-react";

function Leaderboard({ events }) {
  // Get top categories by total votes
  const topCategories = events
    .flatMap((event) =>
      event.categories.map((category) => ({
        ...category,
        eventTitle: event.title,
      }))
    )
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 3);

  // Get top contestants across all categories
  const topContestants = events
    .flatMap((event) =>
      event.categories.flatMap((category) =>
        category.contestants.map((contestant) => ({
          ...contestant,
          categoryName: category.name,
          eventTitle: event.title,
        }))
      )
    )
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 10);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Leaderboard
      </h1>

      {/* Top Categories */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Trophy className="mr-2" /> Top Categories
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {topCategories.map((category, index) => (
            <div
              key={category.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex items-start gap-4"
            >
              <div
                className={`
                rounded-full p-2 flex-shrink-0
                ${index === 0 ? "bg-yellow-100 text-yellow-600" : ""}
                ${index === 1 ? "bg-gray-100 text-gray-600" : ""}
                ${index === 2 ? "bg-orange-100 text-orange-600" : ""}
              `}
              >
                <Trophy size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {category.eventTitle}
                </p>
                <p className="text-sm font-medium text-gray-900 dark:text-white mt-1">
                  {category.votes} votes
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Contestants */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Medal className="mr-2" /> Top Contestants
        </h2>
        <div className="space-y-4">
          {topContestants.map((contestant, index) => (
            <div
              key={contestant.id}
              className="flex items-center gap-4 bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
            >
              <div className="flex-shrink-0 w-12 h-12">
                <img
                  src={contestant.imageUrl}
                  alt={contestant.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {contestant.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {contestant.categoryName} • {contestant.eventTitle}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900 dark:text-white">
                  {contestant.votes} votes
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  #{index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
