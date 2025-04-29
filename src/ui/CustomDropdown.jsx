const CustomDropdown = ({ filteredUsers }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (user) => {
    setSelectedUser(user);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-1 block p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        {selectedUser ? (
          <div className="flex items-center">
            <img
              src={selectedUser.avatar}
              alt={selectedUser.name}
              className="h-6 w-6 rounded-full mr-2"
            />
            <p className="text-white dark:text-dark-800">{selectedUser.name}</p>
          </div>
        ) : (
          "Select User"
        )}
      </button>

      {isOpen && (
        <ul className="absolute w-full bg-white border overflow-hidden h-70 border-gray-300 mt-1 rounded-md shadow-lg dark:bg-gray-700 dark:border-gray-600">
          {filteredUsers?.map((item) => (
            <li
              key={item.id}
              onClick={() => handleSelect(item)}
              className="flex items-center p-3 border-b shadow-md border-gray-500 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-600"
            >
              <img
                src={item.avatar}
                alt={item.name}
                className="h-6 w-6 rounded-full mr-2"
              />
              <p className="text-white dark:text-dark-800">{item.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
