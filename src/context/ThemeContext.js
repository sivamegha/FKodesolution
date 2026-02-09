import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Context create panrom
const ThemeContext = createContext();

// 2. Main Provider Component
export const ThemeProvider = ({ children }) => {
  // Local storage-la irunthu preference eduthukkurom (Page refresh pannaalum mode maarathu)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? true : false;
  });

  // Mode maarum pothu Body Background matrum Local Storage-ah update panrom
  useEffect(() => {
    const body = document.body;
    
    // Background transition smooth-ah iruka inline style
    body.style.transition = "background-color 0.5s ease, color 0.5s ease";

    if (isDarkMode) {
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      body.style.backgroundColor = "#0a0a0a"; // Deep Dark Background
      body.style.color = "#ffffff";           // White Text
    } else {
      body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      body.style.backgroundColor = "#ffffff"; // Pure White Background
      body.style.color = "#0f172a";           // Slate Dark Text
    }
  }, [isDarkMode]);

  // Toggle Function
  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Custom Hook (Usage-ah simple aaka)
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};