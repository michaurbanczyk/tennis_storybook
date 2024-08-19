import { color, spacing } from "./ao.variables";
import { createTheme } from "@mui/material";
import { ITheme, IThemeOptions } from "../types";
import { Button } from "./components/button";

export const australianOpenTheme: ITheme = createTheme({
  themeName: "ao",
  spacing,
  palette: {
    background: {
      default: color.greyscale[100],
    },
    primary: {
      light: color.primary[100],
      main: color.primary[300],
      dark: color.primary[500],
    },
    secondary: {
      light: color.secondary[100],
      main: color.secondary[300],
      dark: color.secondary[500],
    },
  },
  customComponents: {
    Button: Button,
  },
} as IThemeOptions);
