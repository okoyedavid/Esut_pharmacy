import toast from "react-hot-toast";
import { useMutate } from "../../hooks/useMutate";
import { useSetUrl } from "../../hooks/useSetUrl";
import Button from "../../ui/Button";
import Modal, { useModal } from "../../ui/Modal";
import { deleteContestant } from "../../utils/admin";

function DeleteContestant({ contestants }) {
  const { close } = useModal();
  const { mutate, isPending } = useMutate(
    deleteContestant,
    "delete contestant",
    "voting_contestants"
  );
  const { searchParams } = useSetUrl();
  const user_id = searchParams.get("id");

  const user = contestants?.filter((user) => user.id === Number(user_id))[0];

  function handleDelete() {
    mutate(user.user_id, {
      onSuccess: () => {
        toast.success(`${user.users.name} deleted successfully`);
        close();
      },
    });
  }

  return (
    <Modal.Window name="Delete Contestant">
      <h1>Confirm Delete</h1>
      <div className="my-4">
        <h2 className="font-bold">
          Are you sure you want to Delete {user?.users.name}
        </h2>
        <span className="text-red-500"> This action cant be undone</span>
      </div>

      <div className="flex gap-4 justify-end">
        <Button onClick={close} variant="secondary">
          Cancel
        </Button>
        <Button isLoading={isPending} variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </Modal.Window>
  );
}

export default DeleteContestant;
