import { useState } from 'react'
import Button from '@mui/material/Button'
import AppThemeProvider from "./ThemeContext";
import ThemeSelector from "./toggleTheme.jsx"
import ThemePlayground from "./themetest.jsx"
export default function App() {
  return (
    <AppThemeProvider>
      <Button>Shiiet</Button>
      <ThemeSelector/>
      <ThemePlayground/>
    </AppThemeProvider>
  );
}

