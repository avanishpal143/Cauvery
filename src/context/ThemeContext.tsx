import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Always default to Light Theme (Banana Leaf & Cream cafe experience)
  // Note: Dark mode is preserved in comments below as requested by user
  const [theme, setThemeState] = useState<Theme>('light');

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    // Enforce pure light theme
    root.classList.remove('dark');
    body.classList.remove('dark');
    root.style.colorScheme = 'light';
    localStorage.setItem('cauvery-theme', 'light');

    /* === DARK THEME PRESERVED IN COMMENTS ===
    if (theme === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    localStorage.setItem('cauvery-theme', theme);
    ======================================== */
  }, [theme]);

  const toggleTheme = () => {
    /* === Dark toggle preserved in comments ===
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
    =========================================== */
    setThemeState('light');
  };

  const setTheme = (_newTheme: Theme) => {
    setThemeState('light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
