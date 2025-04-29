function LoadingGrid({ kids, parent, styles }) {
  const baseStyles = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4";
  const triStyles = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4";
  const quadstyles = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4";

  let classes = baseStyles;

  if (styles === "tri") {
    classes = triStyles;
  }
  if (styles === "quad") {
    classes = quadstyles;
  }

  return (
    <div className="pt">
      <div className="flex items-center mb-6"></div>
      <div className={classes}>
        {Array.from({ length: parent }).map((i, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md animate-pulse"
          >
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md w-1/2 mb-6"></div>
            {kids && (
              <div className="grid grid-cols-2 gap-3">
                {Array.from({ length: kids }).map((j, ind) => (
                  <div
                    key={ind}
                    className="h-20 bg-gray-300 dark:bg-gray-700 rounded-md"
                  ></div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoadingGrid;
