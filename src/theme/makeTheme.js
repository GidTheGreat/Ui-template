// theme/makeTheme.js
import { createTheme } from "@mui/material/styles";
import { palettes } from "./palletes";

export const makeTheme = (mode) =>
  createTheme({
    palette: {
      mode: "dark", // you can later make this dynamic too
      ...palettes[mode]
    },
    shape: {
      borderRadius: 12
    },
    typography: {
      fontFamily: "Inter, system-ui, sans-serif"
    }
  });