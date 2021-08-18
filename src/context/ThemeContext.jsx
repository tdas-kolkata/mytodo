import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();
export const ThemeUpdateContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const useThemeUpdateContext = () => {
  return useContext(ThemeUpdateContext);
};

export function ThemeProvider(props) {
  const [Theme, setTheme] = useState(false);
  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={Theme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {props.children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
