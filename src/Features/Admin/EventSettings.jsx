import { Calendar } from "lucide-react";
import { useState } from "react";

// Event Settings Section
const EventSettings = () => {
  const [event, setEvent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Fetch current event
  const isLoading = false;

  //   const {
  //     data: eventData,
  //     isLoading,
  //     refetch,
  //   } = useQuery({
  //     queryKey: ["/api/voting-event"],
  //     queryFn: async () => {
  //       try {
  //         const response = await apiRequest("GET", "/api/voting-event");
  //         if (response.ok) {
  //           return response.json();
  //         }
  //         return null;
  //       } catch (error) {
  //         console.error("Error fetching event:", error);
  //         return null;
  //       }
  //     },
  //   });

  //   useEffect(() => {
  //     if (eventData) {
  //       // Convert date strings to local format for input fields
  //       const formattedEvent = {
  //         ...eventData,
  //         // Format dates for input fields: YYYY-MM-DDThh:mm
  //         startDate: new Date(eventData.startDate).toISOString().slice(0, 16),
  //         endDate: new Date(eventData.endDate).toISOString().slice(0, 16),
  //       };
  //       setEvent(formattedEvent);
  //     }
  //   }, [eventData]);

  // Update event mutation
  //   const updateEvent = useMutation({
  //     mutationFn: async (updatedEvent) => {
  //       // Convert local date format back to ISO for API
  //       const apiEvent = {
  //         ...updatedEvent,
  //         startDate: new Date(updatedEvent.startDate).toISOString(),
  //         endDate: new Date(updatedEvent.endDate).toISOString(),
  //       };

  //       const response = await apiRequest(
  //         "PUT",
  //         `/api/voting-event/${updatedEvent.id}`,
  //         apiEvent
  //       );
  //       if (!response.ok) {
  //         const errorData = await response.json();
  //         throw new Error(errorData.error || "Failed to update event");
  //       }
  //       return response.json();
  //     },
  //     onSuccess: () => {
  //       refetch();
  //       setIsEditing(false);
  //       toast({
  //         title: "Event Updated",
  //         description: "The voting event has been updated successfully",
  //       });
  //     },
  //     onError: (error) => {
  //       toast({
  //         title: "Failed to Update Event",
  //         description: error.message,
  //         variant: "destructive",
  //       });
  //     },
  //   });
  function updateEvent() {}

  function createEvent() {}
  // Create new event mutation
  //   const createEvent = useMutation({
  //     mutationFn: async (newEvent) => {
  //       // Convert local date format to ISO for API
  //       const apiEvent = {
  //         ...newEvent,
  //         startDate: new Date(newEvent.startDate).toISOString(),
  //         endDate: new Date(newEvent.endDate).toISOString(),
  //       };

  //       const response = await apiRequest("POST", "/api/voting-event", apiEvent);
  //       if (!response.ok) {
  //         const errorData = await response.json();
  //         throw new Error(errorData.error || "Failed to create event");
  //       }
  //       return response.json();
  //     },
  //     onSuccess: () => {
  //       refetch();
  //       setIsEditing(false);
  //       toast({
  //         title: "Event Created",
  //         description: "A new voting event has been created successfully",
  //       });
  //     },
  //     onError: (error) => {
  //       toast({
  //         title: "Failed to Create Event",
  //         description: error.message,
  //         variant: "destructive",
  //       });
  //     },
  //   });

  const handleSubmit = (e) => {
    e.preventDefault();
    //     if (!event) return;
    //     if (event.id) {
    //       updateEvent.mutate(event);
    //     } else {
    //       createEvent.mutate(event);
    //     }
    //   };
    //   const handleEdit = () => {
    //     setIsEditing(true);
  };

  const handleCancel = () => {
    // if (eventData) {
    //   // Reset to original data
    //   const formattedEvent = {
    //     ...eventData,
    //     startDate: new Date(eventData.startDate).toISOString().slice(0, 16),
    //     endDate: new Date(eventData.endDate).toISOString().slice(0, 16),
    //   };
    //   setEvent(formattedEvent);
    // } else {
    //   // Initialize new event with default values
    //   const now = new Date();
    //   const oneWeekLater = new Date();
    //   oneWeekLater.setDate(now.getDate() + 7);
    //   setEvent({
    //     id: 0, // Will be ignored for create
    //     title: "",
    //     description: "",
    //     startDate: now.toISOString().slice(0, 16),
    //     endDate: oneWeekLater.toISOString().slice(0, 16),
    //     votePrice: 50,
    //     active: true,
    //   });
    // }
    // setIsEditing(false);
  };

  // Initialize new event if none exists
  const handleCreateNew = () => {
    // const now = new Date();
    // const oneWeekLater = new Date();
    // oneWeekLater.setDate(now.getDate() + 7);
    // setEvent({
    //   id: 0, // Will be ignored for create
    //   title: "",
    //   description: "",
    //   startDate: now.toISOString().slice(0, 16),
    //   endDate: oneWeekLater.toISOString().slice(0, 16),
    //   votePrice: 50,
    //   active: true,
    // });
    // setIsEditing(true);
  };
  function handleEdit() {}

  if (isLoading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold mb-4">Voting Event Settings</h3>
        <div className="text-center py-4">
          <div className="animate-spin h-6 w-6 border-2 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Loading event settings...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Voting Event Settings</h3>

      {!event && !isEditing ? (
        <div className="text-center py-6 bg-gray-50 dark:bg-gray-700/30 rounded-md">
          <Calendar size={32} className="mx-auto text-gray-400 mb-2" />
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            No active voting event found.
          </p>
          <button
            onClick={handleCreateNew}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-medium"
          >
            Create New Event
          </button>
        </div>
      ) : isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Event Title
            </label>
            <input
              type="text"
              id="title"
              value={event?.title || ""}
              onChange={(e) => setEvent({ ...event, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              value={event?.description || ""}
              onChange={(e) =>
                setEvent({ ...event, description: e.target.value })
              }
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="startDate"
                className="block text-sm font-medium mb-1"
              >
                Start Date
              </label>
              <input
                type="datetime-local"
                id="startDate"
                value={event?.startDate || ""}
                onChange={(e) =>
                  setEvent({ ...event, startDate: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                required
              />
            </div>
            <div>
              <label
                htmlFor="endDate"
                className="block text-sm font-medium mb-1"
              >
                End Date
              </label>
              <input
                type="datetime-local"
                id="endDate"
                value={event?.endDate || ""}
                onChange={(e) =>
                  setEvent({ ...event, endDate: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="votePrice"
                className="block text-sm font-medium mb-1"
              >
                Vote Price (in Naira)
              </label>
              <input
                type="number"
                id="votePrice"
                value={event?.votePrice || 0}
                onChange={(e) =>
                  setEvent({ ...event, votePrice: parseInt(e.target.value) })
                }
                min="1"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                required
              />
            </div>
            <div>
              <label
                htmlFor="active"
                className="block text-sm font-medium mb-1"
              >
                Status
              </label>
              <select
                id="active"
                value={event?.active ? "active" : "inactive"}
                onChange={(e) =>
                  setEvent({ ...event, active: e.target.value === "active" })
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={updateEvent.isPending || createEvent.isPending}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-medium disabled:opacity-70"
            >
              {updateEvent.isPending || createEvent.isPending
                ? "Saving..."
                : "Save Event"}
            </button>
          </div>
        </form>
      ) : event ? (
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <h4 className="text-lg font-semibold">{event.title}</h4>
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                event.active
                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400"
              }`}
            >
              {event.active ? "Active" : "Inactive"}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-400">
            {event.description || "No description provided."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Start Date
              </h5>
              <p>{new Date(event.startDate).toLocaleString()}</p>
            </div>
            <div>
              <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                End Date
              </h5>
              <p>{new Date(event.endDate).toLocaleString()}</p>
            </div>
          </div>

          <div>
            <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Vote Price
            </h5>
            <p>₦{event.votePrice}</p>
          </div>

          <div className="pt-2">
            <button
              onClick={handleEdit}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-medium"
            >
              Edit Event
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default EventSettings;
