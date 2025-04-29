import { format } from "date-fns";
import { BadgeDollarSign, Calendar, Edit2, Plus } from "lucide-react";
import { useState } from "react";
import Button from "../../ui/Button";
import { useModal } from "../../ui/Modal";
import EditEvent from "./EditEvent";

function Events({ events, setEvents }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { open } = useModal();

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Events
        </h1>

        <Button
          onClick={() => open("Edit event")}
          icon={<Plus size={20} />}
          size="lg"
        >
          Add Event
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {event.title}
                </h2>
                <Button
                  variant={"secondary"}
                  onClick={() => {
                    setSelectedEvent(event);
                    open("Edit event");
                  }}
                >
                  <Edit2 size={20} />
                </Button>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {event.description}
              </p>

              <div className="space-y-2">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar size={16} className="mr-2" />
                  <span>
                    {format(new Date(event.startDate), "MMM d, yyyy")} -{" "}
                    {format(new Date(event.endDate), "MMM d, yyyy")}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <BadgeDollarSign size={16} className="mr-2" />
                  <span>{event.votePrice} per vote</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <EditEvent
        setEvents={setEvents}
        selectedEvent={selectedEvent}
        event={events}
      />
    </div>
  );
}

export default Events;
