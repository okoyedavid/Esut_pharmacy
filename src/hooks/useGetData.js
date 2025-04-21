import { useQuery } from "@tanstack/react-query";
import { getData } from "../services/backend";

function useGetData(table, filter, select = "*") {
  const { data, isLoading } = useQuery({
    queryKey: [table, filter],
    queryFn: () => getData(table, filter, select),
  });

  return { data, isLoading };
}

export { useGetData };
