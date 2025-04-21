import { createContext, useContext, useEffect, useReducer } from "react";
import { useGetUser } from "../hooks/useGetUser";
import { useLocalStorage } from "../hooks/useLocalStorage";
import SpinnerFullPage from "../ui/SpinnerFullPage";

const UserContext = createContext();

const initialState = {
  user: null,
  user_id: null,
  user_email: null,
  loading: true,
  isAuthenticated: false, // set true initially while we check localStorage
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_USER":
      return {
        user: payload.user_metadata,
        isAuthenticated: !!payload.role,
        user_id: payload.id,
        user_email: payload.email,
        loading: false,
      };
    case "NO_USER":
      return {
        user: null,
        isAuthenticated: false,
        user_id: null,
        loading: false,
        user_email: null,
      };
    case "SET_LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
}

function UserProvider({ children }) {
  const [{ user, user_email, loading, isAuthenticated, user_id }, dispatch] =
    useReducer(reducer, initialState);
  const { data: fetchedUser, isLoading: fetching } = useGetUser();
  const [storedUser, setStoredUser] = useLocalStorage("user", null);

  const shouldValidateWithServer = !storedUser;

  useEffect(() => {
    if (!shouldValidateWithServer) {
      dispatch({ type: "SET_USER", payload: storedUser });
    }
  }, [storedUser, shouldValidateWithServer]);

  useEffect(() => {
    if (shouldValidateWithServer && !fetching) {
      if (!fetchedUser) {
        dispatch({ type: "NO_USER" });

        return;
      }
      dispatch({ type: "SET_USER", payload: fetchedUser });
      setStoredUser(fetchedUser);
    }
  }, [fetchedUser, fetching, setStoredUser, shouldValidateWithServer]);

  useEffect(() => {
    if (
      !fetching &&
      storedUser &&
      fetchedUser &&
      storedUser.updated_at !== fetchedUser.updated_at
    ) {
      dispatch({ type: "SET_USER", payload: fetchedUser });
      setStoredUser(fetchedUser);
    }
  }, [fetching, storedUser, fetchedUser, setStoredUser]);

  if (loading) return <SpinnerFullPage />;

  return (
    <UserContext.Provider
      value={{ user, user_email, user_id, isAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("useUser must be used within a UserProvider");
  return context;
}

export default UserProvider;
export { useUser };
