import { createContext, useContext, useEffect, useState } from "react";

const DarkMode = createContext();

function DarkModeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme); // Correctly update data-theme
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const isDarkMode = theme === "dark" ? true : false;

  return (
    <DarkMode.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </DarkMode.Provider>
  );
}
export default DarkModeProvider;

export function useDarkMode() {
  const context = useContext(DarkMode);

  if (context === undefined) {
    throw new Error(
      "You are trying to acces the dark mode context outside its provider"
    );
  } else return context;
}
