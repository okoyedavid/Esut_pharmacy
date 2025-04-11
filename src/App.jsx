import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { router } from "./pages/Layout/Routes";
import "./index.css";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      staleTime: 0,
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: `bg-gray-100`,
            color: `text-blue-800`,
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
