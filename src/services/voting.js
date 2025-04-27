import { updateTable } from "./backend";

async function checkverification({ contestant, reference, votePrice }) {
  const data = await fetch(
    `https://esut-pharmacy.vercel.app/api/verify_payment?reference=${reference}`
  );

  const response = await data.json();
  const {
    status,
    data: { amount },
  } = response;

  if (!status) {
    throw new Error("Payment failed please retry");
  }

  const votes_to_add = amount / votePrice / 100;

  await updateTable(
    "voting_contestants",
    { votes: Number(contestant.votes) + Number(votes_to_add) },
    { column: "id", value: contestant.id }
  );
}

export { checkverification };
