import { useParams } from "react-router-dom";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import VoteModal from "./VoteModal";
import { useGetData } from "../../hooks/useGetData";
import LoadingGrid from "../../ui/LoadingGrid";

function Contestant() {
  const { id, category } = useParams();
  const { data: contestant, isLoading } = useGetData(
    "voting_contestants",
    {
      column: "id",
      value: Number(id),
    },
    "*, users(name, avatar)"
  );

  if (!contestant || isLoading)
    return (
      <div className="max-w-6xl mx-auto pt-22 px-4 sm:px-6 lg:px-8">
        <LoadingGrid parent={1} kids={6} />
      </div>
    );

  const {
    users: { avatar, name },
    votes,
  } = contestant[0];
  return (
    <Modal>
      <div className="max-w-6xl mx-auto pt-22 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-8 md:gap-16 border border-blue-100 shadow-lg rounded-xl">
          <div className="relative md:-translate-x-3 ">
            <div className="bg-blue-500 w-fit p-3 rounded-tr-xl absolute right-0 text-white">
              {votes} votes
            </div>
            <img
              className="object-cover rounded-t-xl"
              src={avatar}
              alt={`Contestant ${name}`}
            />
            <div className="">
              <h3 className="text-blue-800 md:hidden absolute -translate-y-13 md:translate-x-[-254px] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight bg-white z-2 px-4 py-2 rounded">
                {name}
              </h3>
            </div>
          </div>
          <div className="p-4 flex justify-center flex-col gap-4">
            <h3 className="text-blue-800 hidden md:block font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight bg-white z-2 px-4 py-2 rounded">
              {name}
            </h3>
            <p className="poetsen-one-regular">
              Vote for {name} to help them win the {category} for the PANS 2025
              Week! You can vote for your favorite contestant by clicking the
              button below. Your vote will be counted towards their total votes.
            </p>
            <Modal.Open name={"vote-modal"}>
              <Button size="lg">Vote {name}</Button>
            </Modal.Open>
          </div>
        </div>
      </div>

      <Modal.Window name={"vote-modal"}>
        <VoteModal contestant={contestant} />
      </Modal.Window>
    </Modal>
  );
}

export default Contestant;
