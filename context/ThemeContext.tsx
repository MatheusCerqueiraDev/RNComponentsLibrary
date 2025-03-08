import { defaultTheme } from "@/styles/defaultTheme";
import { ThemeTokens } from "@/types";
import React, { createContext, useContext } from "react";

const ThemeContext = createContext<ThemeTokens>(defaultTheme);

export const ThemeProvider: React.FC<{
  theme?: ThemeTokens;
  children: React.ReactNode;
}> = ({ theme = defaultTheme, children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
