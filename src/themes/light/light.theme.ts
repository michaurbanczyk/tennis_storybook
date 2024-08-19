import { createTheme } from "@mui/material";
import { common, cyan, pink } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: pink["A200"],
    },
    secondary: {
      main: cyan["A400"],
    },
    background: {
      default: common["white"],
    },
  },
});
