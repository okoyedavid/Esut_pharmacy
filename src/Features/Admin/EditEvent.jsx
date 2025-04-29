import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Formrow from "../../ui/Formrow";
import Input from "../../ui/Input";
import Modal, { useModal } from "../../ui/Modal";
import { useRef } from "react";

function EditEvent({ setEvents, selectedEvent, events }) {
  const eventImageRef = useRef();
  const { close } = useModal();

  const handleImageUpload = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(file);
    });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: selectedEvent });

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
  };

  return (
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
              className="border border-gray-500 w-full text-white pl-2"
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
                      hover:file:bg-gray-100
                      dark:hover:file:bg-gray-800
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
  );
}
export default EditEvent;
