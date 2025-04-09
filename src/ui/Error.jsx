import { useRouteError, useNavigate } from "react-router-dom";
import { AlertTriangle, RotateCcw, ArrowLeft } from "lucide-react";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  const isNetworkError =
    !navigator.onLine || error?.message?.includes("Failed to fetch");

  const shortExplanation = error?.status
    ? `${error.status} — ${error.statusText || "Unexpected Error"}`
    : "Unknown Error";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 max-w-lg w-full space-y-4 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <AlertTriangle className="text-yellow-500 dark:text-yellow-400 w-6 h-6" />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Something went wrong 😢
          </h1>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          {isNetworkError
            ? "This seems to be a network issue. Please check your internet connection and try again."
            : "An unexpected error occurred while processing your request."}
        </p>

        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-sm text-gray-700 dark:text-gray-200 border dark:border-gray-600">
          <p>
            <strong>Error Type:</strong> {shortExplanation}
          </p>
          <p className="mt-1">
            <strong>Message:</strong>{" "}
            {error?.data || error?.message || "No details provided."}
          </p>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>

          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <RotateCcw className="w-4 h-4" />
            Retry
          </button>
        </div>
      </div>
    </div>
  );
}

export default Error;
