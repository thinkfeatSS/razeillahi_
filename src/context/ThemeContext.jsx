// src/context/ThemeContext.js
import React, {createContext, useState, useContext} from 'react';
import {lightTheme, darkTheme} from '../styles/styles';
import {PaperProvider} from 'react-native-paper';

// Create a ThemeContext
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
      <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
        <PaperProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          {children}
        </PaperProvider>
      </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useMyTheme = () => useContext(ThemeContext);
