// ThemeContext.jsx
import { createContext, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { makeTheme } from "./theme/makeTheme";
import CssBaseline from "@mui/material/CssBaseline";

export const ThemeContext = createContext();

export default function AppThemeProvider({ children }) {
  const [mode, setMode] = useState("dark_blue");

  const theme = useMemo(() => makeTheme(mode), [mode]);

  const value = useMemo(
    () => ({
      mode,
      setMode
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}