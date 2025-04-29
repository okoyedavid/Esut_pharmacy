import Input from "../../ui/Input";
import Formrow from "../../ui/Formrow";
import { useForm } from "react-hook-form";
import Modal from "../../ui/Modal";
import { insertData } from "../../services/backend";
import toast from "react-hot-toast";
import { useMutate } from "../../hooks/useMutate";
import Button from "../../ui/Button";
import { Loader } from "lucide-react";

function CategoryModal({ events }) {
  const onSubmit = async (data) => {
    try {
      await insertData("voting", [{ ...data }]);
      toast.success("successfully created category");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const { mutate, isPending } = useMutate(
    onSubmit,
    "create category",
    "voting"
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <Modal.Window name={"add category"}>
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Add Category</h2>
      <form onSubmit={handleSubmit(mutate)} className="space-y-4">
        <Formrow name={"Event"}>
          <select
            {...register("events", { required: "Event is required" })}
            className="mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.title}
              </option>
            ))}
          </select>
        </Formrow>

        <Formrow name={"Category Name"} error={errors?.name?.message}>
          <Input
            title={"name"}
            register={register}
            validation={{
              required: "Category name is required",
            }}
            placeholder="Please input a new category name"
          />
        </Formrow>
        <Formrow name={"Description"} error={errors?.description?.message}>
          <Input
            title={"description"}
            register={register}
            validation={{
              required: "Category description is required",
            }}
            placeholder="Please input category description"
          />
        </Formrow>

        <div className="flex justify-end gap-4 mt-6">
          <Button
            variant={"secondary"}
            type="button"
            disabled={isPending}
            onClick={() => {
              reset();
            }}
          >
            Cancel
          </Button>
          <Button disabled={isPending} type="submit">
            {isPending ? (
              <span className="w-full h-full">
                <Loader size={20} className="animate-spin" />{" "}
              </span>
            ) : (
              "Add Category"
            )}
          </Button>
        </div>
      </form>
    </Modal.Window>
  );
}

export default CategoryModal;
