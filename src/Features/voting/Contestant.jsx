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
    "*, users(name, users.avatar)"
  );

  if (isLoading)
    return (
      <div className="max-w-6xl mx-auto pt-22 px-4 sm:px-6 lg:px-8">
        <LoadingGrid parent={1} kids={6} />
      </div>
    );

  const { users, votes } = contestant[0];

  console.log(contestant);

  async function checkverification() {
    const data = await fetch(
      "https://esut-pharmacy.vercel.app/api/verify_payment?reference=1745402744356"
    );

    const response = await data.json();
    console.log(response);
  }

  return (
    <Modal>
      <div className="max-w-6xl mx-auto pt-22 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-8 md:gap-16 border border-blue-100 shadow-lg rounded-xl">
          <div className="relative">
            <div className="bg-blue-500 w-fit p-3 rounded-tr-xl absolute right-0 text-white">
              {votes} votes
            </div>
            <img
              className="object-cover min-h-[50vh] max-h-screen w-full rounded-t-xl"
              src={users?.avatar}
              alt={`Contestant ${users?.name}`}
            />
            <div className="">
              <h3 className="text-blue-800 md:hidden dark:bg-gray-800 absolute -translate-y-13 md:translate-x-[-254px] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight bg-white z-2 px-4 py-2 rounded">
                {users?.name}
              </h3>
            </div>
          </div>
          <div className="p-4 flex justify-center flex-col gap-4">
            <h3 className="text-blue-800 hidden md:block font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight bg-white dark:bg-gray-800 z-2 px-4 py-2 rounded">
              {users?.name}
            </h3>
            <p className="poetsen-one-regular">
              Vote for {users?.name} to help them win the {category} for the
              PANS 2025 Week! You can vote for your favorite contestant by
              clicking the button below. Your vote will be counted towards their
              total votes.
            </p>
            {/* <Modal.Open name={"vote-modal"}> */}
            <Button onClick={checkverification} size="lg">
              Vote {users?.name}
            </Button>
            {/* </Modal.Open> */}
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
