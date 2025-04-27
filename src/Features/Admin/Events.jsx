import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { Calendar, DollarSign, Edit2, Plus } from "lucide-react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Modal, { useModal } from "../../ui/Modal";
import Formrow from "../../ui/Formrow";

function Events({ events, setEvents }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const eventImageRef = useRef();
  const { open, close } = useModal();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: selectedEvent });

  const handleImageUpload = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(file);
    });
  };

  const onSubmit = async (data) => {
    const imageFile = eventImageRef.current?.files[0];
    let imageUrl = selectedEvent?.imageUrl;

    if (imageFile) {
      imageUrl = await handleImageUpload(imageFile);
    }

    if (selectedEvent) {
      setEvents(
        events.map((event) =>
          event.id === selectedEvent.id
            ? { ...event, ...data, imageUrl }
            : event
        )
      );
    } else {
      setEvents([
        ...events,
        { ...data, id: Date.now().toString(), imageUrl, categories: [] },
      ]);
    }
    reset();
    setSelectedEvent(null);
  };

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
      <Modal.Window name={"Edit event"}>
        <div className="rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">
            {selectedEvent ? "Edit Event" : "Create Event"}
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Formrow name={"Title"} error={errors?.title?.message}>
              <Input
                defaultValue={selectedEvent?.title}
                title={"title"}
                register={register}
                validation={{
                  required: "Title is required",
                }}
              />
            </Formrow>

            <Formrow name={"Description"}>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                defaultValue={selectedEvent?.description}
              />
              {errors.description && (
                <span className="text-red-500 text-sm">
                  {errors.description.message}
                </span>
              )}
            </Formrow>
            <Formrow>
              <input
                type="file"
                accept="image/*"
                ref={eventImageRef}
                className="mt-1 block w-full text-sm text-gray-500 dark:text-gray-300
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100
                      dark:file:bg-gray-700 dark:file:text-gray-300"
              />
            </Formrow>

            <div className="grid grid-cols-2 gap-4">
              <Formrow name={"Start Date"} error={errors?.startDate?.message}>
                <Input
                  type="date"
                  title={"startDate"}
                  register={register}
                  validation={{
                    required: "Start date is required",
                  }}
                  defaultValue={selectedEvent?.startDate}
                />
              </Formrow>
              <Formrow name={"End Date"} error={errors?.endDate?.message}>
                <Input
                  type="date"
                  title={"endDate"}
                  register={register}
                  validation={{
                    required: "End date is required",
                  }}
                  defaultValue={selectedEvent?.endDate}
                />
              </Formrow>
            </div>

            <Formrow name={"Vote Price"} error={errors?.votePrice?.message}>
              <Input
                type="number"
                minValue={0}
                {...register("votePrice", {
                  required: "Vote price is required",
                  min: {
                    value: 0.01,
                    message: "Vote price must be greater than 0",
                  },
                })}
                defaultValue={selectedEvent?.votePrice}
              />
            </Formrow>
            <div className="flex justify-end gap-4 mt-6">
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  reset();
                  setSelectedEvent(null);
                  close();
                }}
              >
                Cancel
              </Button>
              <Button type="submit">
                {selectedEvent ? "Update Event" : "Create Event"}
              </Button>
            </div>
          </form>
        </div>
      </Modal.Window>

      {/* Events Grid */}
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
                  <DollarSign size={16} className="mr-2" />
                  <span>${event.votePrice} per vote</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
