import React, { createContext, useState, useContext, ReactNode } from 'react';

type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};


type ThemeProviderProps = {
    children: ReactNode;
  };

export const ThemeProvider:React.FC<ThemeProviderProps>  = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem('DarkMode');
    return storedTheme ? JSON.parse(storedTheme) : true;
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('DarkMode', JSON.stringify(newMode));
  };

  const value = { darkMode, toggleDarkMode };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
