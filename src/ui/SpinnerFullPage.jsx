function SpinnerFullPage() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center 
                 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 border-t-4 rounded-full animate-spin"></div>
    </div>
  );
}

export default SpinnerFullPage;
