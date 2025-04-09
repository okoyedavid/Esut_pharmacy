import toast from "react-hot-toast";
import { supabase } from "./supabase";

export async function fetchSubjects(level) {
  const { data: subjects, error } = await supabase
    .from("courses")
    .select("*")
    .eq("level", level)
    .order("code", { ascending: true });

  if (error) {
    toast.error("We encountered an error fetching the subjects");
    console.error(error);
    return null;
  }

  return subjects;
}

export async function getCurrentUserSubjects({ id, level }) {
  const { data, error } = await supabase
    .from("users")
    .select(level)
    .eq("user_id", id);

  if (error) throw new Error("couldnt fetch subjects");

  const [subjects] = data;

  return subjects[level];
}

export function calculateAge(dateofbirth) {
  const today = new Date();

  const currentYear = today.getFullYear();
  const dob = dateofbirth.split("-")[0];
  const currentMonth = today.getMonth();
  const monthOfBirth = dateofbirth.split("-")[1];

  const Currentage = currentYear - dob;

  const age = currentMonth > monthOfBirth ? Currentage : Currentage - 1;

  return age;
}
