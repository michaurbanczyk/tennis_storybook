import { Theme } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import { IComponents } from "./components";

export interface ITheme extends Theme {
  themeName?: string;
  customComponents?: IComponents;
}

export interface IThemeOptions extends ThemeOptions {
  themeName?: string;
  customComponents?: IComponents;
}
