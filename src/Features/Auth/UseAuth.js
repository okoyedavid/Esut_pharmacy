import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login, signupUser } from "../../services/ApiAuth";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: LoginUser, isPending: isLoggingIn } = useMutation({
    mutationKey: ["Auth"],
    mutationFn: login,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard");
    },
  });

  const { mutate: signUp, isPending: isCreatingAccount } = useMutation({
    mutationKey: ["Auth"],
    mutationFn: signupUser,
  });

  return { LoginUser, isLoggingIn, signUp, isCreatingAccount };
}
