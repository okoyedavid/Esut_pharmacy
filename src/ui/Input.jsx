function Input({ register, title, validation, ...rest }) {
  return (
    <input
      {...rest}
      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      {...(register && validation ? register(title, validation) : {})}
    />
  );
}
export default Input;

// function Input({ register, title, validation, ...rest }) {
//   return (
//     <input
//       {...rest}
//       className="
//         w-full px-4 py-3 border rounded-lg
//         bg-gray-800 text-white placeholder-gray-400
//         focus:ring-2 focus:ring-blue-500 focus:border-transparent
//         dark:border-gray-700 dark:focus:ring-blue-400
//         dark:focus:border-blue-500

//         dark:text-gray-100 dark:bg-gray-700 dark:placeholder-gray-500
//       "
//       {...(register && validation ? register(title, validation) : {})}
//     />
//   );
// }

// export default Input;
