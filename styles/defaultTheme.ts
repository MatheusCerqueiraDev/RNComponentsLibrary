import { ThemeTokens } from "@/types";

export const defaultTheme: ThemeTokens = {
  colors: {
    primary: "#2BAD75",
    secondary: "#5856D6",
    background: "#FFFFFF",
    text: "#000000",
    error: "#FF3B30",
    success: "#34C759",
    warning: "#FF9500",
    info: "#5856D6",
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  fonts: {
    sizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 20,
      xl: 24,
    },
    families: {
      regular: "System",
      medium: "System",
      bold: "System",
    },
  },
};
