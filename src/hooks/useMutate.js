import { useMutation } from "@tanstack/react-query";

export function useMutate(mutateFunction, key) {
  const { mutate, isPending } = useMutation({
    mutationFn: mutateFunction,
    mutationKey: [key],
  });

  return { mutate, isPending };
}
