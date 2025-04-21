import CategoryManagement from "./CategoryManagement";
import ContestantManagement from "./ContestantManagement";
import EventSettings from "./EventSettings";

const AdminPage = () => {
  const isLoading = false;
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-8 text-gray-900 dark:text-gray-100 min-h-screen font-sans transition-colors duration-200">
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      ) : (
        <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8 md:py-12">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <EventSettings />
            <CategoryManagement />
            <ContestantManagement />
          </div>
        </main>
      )}
    </div>
  );
};

export default AdminPage;
