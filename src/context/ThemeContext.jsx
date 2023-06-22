import { createContext, useContext, useEffect, useState } from "react";
import { get, set } from "../utils/localStorage";

export const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
}

export const ThemeContextProvider = ({ children }) => {

  const [isDark, setIsDark] = useState(get("Mode") || false);

  useEffect(() => {
    set("Mode", isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  )
}