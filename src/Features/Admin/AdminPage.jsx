import { useState } from "react";

// Components
import { useGetData } from "../../hooks/useGetData";
import LoadingGrid from "../../ui/LoadingGrid";
import Modal from "../../ui/Modal";
import Events from "./Events";

const initialEvents = [
  {
    id: "1",
    title: "Annual PANS Awards 2025",
    description: "",
    imageFile: null,
    imageUrl:
      "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    startDate: "2025-03-15",
    endDate: "2025-04-15",
    votePrice: 2.5,
    categories: [
      {
        id: "1",
        name: "Best New Artist",
        votes: 1250,
        isPaused: false,
        contestants: [
          {
            id: "1",
            name: "John Doe",
            imageFile: null,
            imageUrl:
              "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
            votes: 450,
            level: "Year 1",
          },
        ],
      },
      {
        id: "2",
        name: "Album of the Year",
        votes: 3480,
        isPaused: false,
        contestants: [],
      },
    ],
  },
];

function AdminPage() {
  const { data, isLoading } = useGetData("events");
  const { data: categories, isLoading: isLoadingCategories } =
    useGetData("voting");

  const initialEvents = [{ data, categories }];
  console.log(initialEvents);
  const [events, setEvents] = useState(initialEvents);

  if (isLoading || isLoadingCategories)
    return <LoadingGrid parent={9} kids={4} />;

  return (
    <Modal>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        {/* Navigation */}
        <Events events={data} setEvents={setEvents} />
        {/*  <Categories events={events} setEvents={setEvents} />
        <Contestants events={events} setEvents={setEvents} />
        <Leaderboard events={events} />
        <CategoryDetails events={events} setEvents={setEvents} /> */}
      </div>
    </Modal>
  );
}

export default AdminPage;
