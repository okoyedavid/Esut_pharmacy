import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutate } from "../../hooks/useMutate";
import Button from "../../ui/Button";
import Formrow from "../../ui/Formrow";
import Input from "../../ui/Input";
import Modal, { useModal } from "../../ui/Modal";
import { addContestant } from "../../utils/admin";
import { levels } from "../../utils/Constants";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";

function AddContestant({ setLevel, users }) {
  const { id } = useParams();
  const [selectedUser, setSelectedUser] = useState(null);
  const { close } = useModal();
  const [name, setName] = useState("");
  const { mutate, isPending } = useMutate(
    addContestant,
    "add contestants",
    "voting contestants"
  );

  const filteredUsers = users?.filter(
    (item) => !name || item.name.toLowerCase().includes(name.toLowerCase())
  );

  const contestant = filteredUsers?.filter(
    (user) => user.user_id === selectedUser
  )[0];

  function handleAddContestant() {
    mutate(
      { user_id: contestant?.user_id, name: id },
      {
        onSuccess: () => {
          toast.success("contestant successfully added"), setSelectedUser(null);
        },
      }
    );
  }

  return (
    <Modal.Window name={"Add contestant"}>
      <h2 className="text-2xl font-bold mb-4 dark:text-white">
        Add Contestant
      </h2>
      <Formrow name={"Level"}>
        <select
          onChange={(e) => setLevel(e.target.value)}
          className="mt-1 block mb-6  p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          {levels.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </Formrow>
      <Formrow name={"Search student"}>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Students Name"
          validation={{ required: "Name is required" }}
        />
      </Formrow>

      <Formrow name={"users"}>
        <select
          onChange={(e) => setSelectedUser(e.target.value)}
          className="mt-1 block mb-6 p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option>select user to add</option>
          {filteredUsers?.map((item) => (
            <option key={item.id} value={item.user_id}>
              {item.name}
            </option>
          ))}
        </select>
        {/* <CustomDropdown filteredUsers={filteredUsers} />
         */}
      </Formrow>

      {selectedUser && (
        <div className="mt-1 block p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <div className="flex">
            <img
              src={contestant.avatar}
              alt={contestant.name}
              className="h-20 w-20 rounded-full mr-2"
            />
            <div className="ml-8">
              <p>{contestant.name}</p>
              <span className="dark:text-white text-gray-900 block">
                Status: {contestant.status}
              </span>
              <span>LEVEL: {contestant.level}</span>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-end gap-4 mt-6">
        <Button variant={"secondary"} onClick={close} type="button">
          Cancel
        </Button>
        <Button onClick={handleAddContestant} type="submit">
          {isPending ? (
            <span className="w-20">
              <Loader className="animate-spin" />
            </span>
          ) : (
            "Add Contestant"
          )}
        </Button>
      </div>
    </Modal.Window>
  );
}

export default AddContestant;
