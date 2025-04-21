import { Link, useSearchParams } from "react-router-dom";
import { sampleVoters } from "../../utils/Constants";
import Contestant from "./Contestant";

const VotingList = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const contestant = searchParams.get("contestant");

  if (contestant) return <Contestant />;

  return (
    <div className="min-h-screen px-4 pt-20">
      <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
        Vote for {category} 2024-2025 Session
      </h2>
      <div className="grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 transition-transform duration-500 ease-out">
        {sampleVoters.map((voter) => {
          return (
            <Link
              to={`/voting/list?category=${category}&contestant=${voter.name}`}
              key={voter.id}
              className={`w-full p-4 transition-all duration-30`}
            >
              <div className="bg-white rounded-xl overflow-hidden animate-glow shadow-lg transition-transform hover:scale-[1.02]">
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img
                    src={voter.image}
                    alt={voter.name}
                    className="w-full h-full object-cover transition-transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm bg-opacity-90">
                      {voter.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                    {voter.name}
                  </h2>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl sm:text-3xl font-bold text-blue-600">
                        {voter.votes.toLocaleString()}
                      </span>
                      <span className="text-sm sm:text-base text-gray-500">
                        votes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default VotingList;
