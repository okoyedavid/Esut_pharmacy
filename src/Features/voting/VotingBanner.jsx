import { Calendar } from "lucide-react";
import LoadingBanner from "./LoadingBanner";
import { event } from "../../utils/Constants";
import { useTimeRemaining } from "../../hooks/useTimeRemaining";
import { formatDate } from "../../utils/helper";
import TimeContainer from "../../ui/TimeContainer";

// Calculate time remaining until event ends

const VotingBanner = () => {
  const isLoading = false;
  const timeRemaining = useTimeRemaining(event?.endDate || null);

  const Remaining = [
    { label: "DAYS", value: timeRemaining.days },
    { label: "HOURS", value: timeRemaining.hours },
    { label: "MINUTES", value: timeRemaining.minutes },
    { label: "SECONDS", value: timeRemaining.seconds },
  ];

  if (isLoading) {
    return <LoadingBanner />;
  }

  return (
    <div className="relative h-[50vh] py-8 flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600/25  text-white shadow-lg">
      <img
        src="/award.jpg"
        className="absolute inset-0 h-full w-full -z-2 object-cover"
        alt=""
      />
      <h2 className="sm:text-3xl text-2xl mt-10 font-bold text-center">
        {event.title}
      </h2>
      <p className="text-center mb-3 sm:mb-6">{event.description}</p>

      <div className="flex items-center flex-col justify-center am:mb-6 mb-3 space-x-4">
        <div className="flex items-center">
          <Calendar className="mr-2" size={18} />
          <span>
            {formatDate(event.startDate)} - {formatDate(event.endDate)}
          </span>
        </div>
      </div>

      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold mb-2">Voting ends in:</h3>
      </div>

      <div className="flex justify-center space-x-4">
        {Remaining.map((item) => (
          <TimeContainer key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};

export default VotingBanner;
