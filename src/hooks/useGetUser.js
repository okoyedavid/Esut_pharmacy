import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/ApiAuth";

function useGetUser() {
  const { isLoading, data } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    isLoading,
    data,
  };
}

export { useGetUser };
