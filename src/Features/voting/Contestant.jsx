import { useSearchParams } from "react-router-dom";
import { sampleVoters } from "../../utils/Constants";
import Button from "../../ui/Button";

function Contestant() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("contestant");
  const category = searchParams.get("category");

  const contestant = sampleVoters.find((voter) => voter.name === name);
  if (!contestant) return null;

  const { image, votes } = contestant;

  return (
    <div className="max-w-6xl mx-auto pt-22 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-8 md:gap-16 border border-blue-100 shadow-lg rounded-xl md:p-6">
        <div className="relative md:scale-[1.25] md:-translate-x-3 ">
          <div className="bg-blue-500 w-fit p-3 rounded-tr-xl absolute right-0 text-white">
            {votes} votes
          </div>
          <img
            className="object-cover rounded-t-xl"
            src={image}
            alt={`Contestant ${name}`}
          />
          <div className="">
            <h3 className="text-blue-800 absolute -translate-y-13 md:translate-x-[-254px] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight bg-white z-2 px-4 py-2 rounded">
              {name}
            </h3>
          </div>
        </div>

        <div className="p-4 flex flex-col gap-4">
          <p className="poetsen-one-regular">
            Vote for {name} to help them win the {category} for the PANS 2025
            Week! You can vote for your favorite contestant by clicking the
            button below. Your vote will be counted towards their total votes.
          </p>

          <Button size="lg">Vote {name}</Button>
        </div>
      </div>
    </div>
  );
}

export default Contestant;
