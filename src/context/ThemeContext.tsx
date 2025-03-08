import React, { createContext, useContext } from "react";

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

const ThemeContext = createContext<Theme | undefined>(undefined);

export const ThemeProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Theme;
}) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
