function Formrow({ name, children, error }) {
  return (
    <div>
      <label className="block text-sm font-medium dark:text-gray-50 text-gray-700 mb-2">
        {name}
      </label>
      <div className="relative">{children}</div>
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
    </div>
  );
}

export default Formrow;
