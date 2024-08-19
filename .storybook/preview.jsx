import React, { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-icons";
import { australianOpenTheme } from "../src/themes/ao/ao.theme";
import { rolandGarrosTheme } from "../src/themes/rg/rg.theme";

export const globalTypes = {
  theme: {
    name: "Theme",
    title: "Theme",
    description: "Theme for your components",
    defaultValue: "ao",
    toolbar: {
      icon: "paintbrush",
      dynamicTitle: true,
      items: [
        { value: "ao", left: "☀️", title: "Australian Open" },
        { value: "wim", left: "🌙", title: "Wimbledon" },
        { value: "rg", left: "🌙", title: "Roland Garros" },
      ],
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true, // Adds the description and default columns
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const THEMES = {
  ao: australianOpenTheme,
  rg: rolandGarrosTheme,
};

export const withMuiTheme = (Story, context) => {
  const { theme: themeKey } = context.globals;
  const theme = useMemo(() => THEMES[themeKey] || THEMES["light"], [themeKey]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withMuiTheme];
