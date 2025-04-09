function Wrapper({ children, light = false }) {
  if (light)
    return (
      <div className="bg-gray-50 dark:bg-gray-800 p-6 shadow-sm rounded-lg">
        {children}
      </div>
    );

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">{children}</div>
  );
}

export default Wrapper;
