import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useMutate(mutateFunction, key, invalidateQueryKey) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: mutateFunction,
    mutationKey: [key],
    onSuccess: () => {
      // If invalidateQueryKey is provided, invalidate the query for that key
      if (invalidateQueryKey) {
        queryClient.invalidateQueries([invalidateQueryKey]);
      }
    },
    onError: (error) => {
      // Handle any error if needed (optional)
      console.error("Mutation failed:", error);
    },
    onSettled: () => {
      // Any cleanup or further actions can go here if needed
    },
  });

  return { mutate, isPending };
}
