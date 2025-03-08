export interface ColorTokens {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  error: string;
  success: string;
  warning: string;
  info: string;
}

export interface SpacingTokens {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface FontTokens {
  sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  families: {
    regular: string;
    medium: string;
    bold: string;
  };
}

export interface ThemeTokens {
  colors: ColorTokens;
  spacing: SpacingTokens;
  fonts: FontTokens;
}
