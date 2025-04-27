function Input({ register, title, validation, ...rest }) {
  return (
    <input
      {...rest}
      className="pl-10 w-full px-4 py-3 border border-gray-300 dark:text-gray-50 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      {...(register && validation ? register(title, validation) : {})}
    />
  );
}
export default Input;
