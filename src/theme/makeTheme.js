// theme/makeTheme.js
import { createTheme } from "@mui/material/styles";
import { palettes } from "./palletes";

const space = {
  xs: "clamp(6px, 1.2vw, 10px)",
  sm: "clamp(10px, 1.8vw, 16px)",
  md: "clamp(14px, 2.5vw, 24px)",
  lg: "clamp(20px, 3.5vw, 36px)",
};

export const makeTheme = (mode) =>
  createTheme({
    palette: {
      mode: "dark", // you can later make this dynamic too
      ...palettes[mode]
    },
    components:{
      MuiCssBaseline: {
        styleOverrides: (theme) => ({
          body: {
            
            placeItems: "center",
      },})
    }
      
    },
    shape: {
      borderRadius: 12
    },
    typography: {
      fontFamily: "Inter, system-ui, sans-serif"
    }
  });