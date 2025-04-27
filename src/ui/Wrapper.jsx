function Wrapper({ children, light = false }) {
  if (light)
    return (
      <div className="bg-gray-50 dark:bg-gray-800 p-4 shadow-sm rounded-lg">
        {children}
      </div>
    );

  return (
    <div className="bg-gray-50 dark:bg-gray-900 sm:p-6 p-3 shadow-md rounded-lg">
      {children}
    </div>
  );
}

export default Wrapper;
