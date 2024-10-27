import Colors from "../constants/colors";
import { useColorScheme as _useColorScheme } from "react-native";
import React, { createContext, useContext, useState, useEffect } from "react";

interface Props {
  children?: React.ReactNode;
}

const defaultTheme = {
  dark: false,
  colors: Colors.light,
};

const ThemeContext = createContext({
  theme: defaultTheme,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const colorScheme = _useColorScheme();
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const newTheme = Colors.light;
    // const newTheme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    setTheme({
      dark: false,
      // dark: colorScheme === 'dark',
      colors: newTheme,
    });
  }, [colorScheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = Colors.light;
      // const newTheme = !prevTheme.dark ? Colors.dark : Colors.light;
      return {
        dark: false,
        // dark: !prevTheme.dark,
        colors: newTheme,
      };
    });
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
