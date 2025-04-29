import { deleteData, insertData } from "../services/backend";

async function addContestant({ user_id, name }) {
  await insertData("voting_contestants", [{ user_id, votes: 0, name }]);
}

const deleteContestant = async (user_id) => {
  await deleteData("voting_contestants", {
    column: "user_id",
    value: user_id,
  });
};

export { addContestant, deleteContestant };
