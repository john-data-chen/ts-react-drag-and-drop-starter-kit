import React from "react";
import { useTheme } from "../hooks/useTheme";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../theme/ThemeSets";

interface ThemeWrapperProps {
  children: React.ReactNode;
}
export const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const { isDarkMode } = useTheme();
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
