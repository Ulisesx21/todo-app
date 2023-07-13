import { useEffect, useState } from "react";
import { getItem, setItem } from "../utils/localStorage";
import { ThemeContext } from "./ThemeContext";


export const ThemeProvider = ({ children }) => {

  const [isDark, setIsDark] = useState(getItem("Mode") || false);

  const toggleTheme = () => {
    setIsDark((isDark) => !isDark);
  };

  useEffect(() => {
    setItem("Mode", isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};