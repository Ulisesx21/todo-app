import { useEffect, useState } from "react";
import { getItem, setItem } from "../utils/localStorage";
import { ThemeContext } from "./ThemeContext";


export const ThemeProvider = ({ children }) => {

  const [isDark, setIsDark] = useState(getItem("todoMode") || false);

  const toggleTheme = () => {
    setIsDark((isDark) => !isDark);
  };

  useEffect(() => {
    setItem("todoMode", isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};