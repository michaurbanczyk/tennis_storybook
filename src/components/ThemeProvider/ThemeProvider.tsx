import React, { FC, ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  ThemeOptions,
} from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { createTheme } from "@mui/material/styles";
import { IThemeOptions } from "../../themes/types";
export type CacheOptions = {
  shouldCache?: boolean;
  speedy?: boolean;
  prepend?: boolean;
};

export interface ThemeProviderProps {
  theme: IThemeOptions;
  cacheOptions?: CacheOptions;
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  theme,
  cacheOptions = { shouldCache: false, speedy: true, prepend: false },
  children,
}) => {
  const currentTheme = createTheme(theme as ThemeOptions);

  const emotionCache = createCache({
    key: "emotion-cache-no-speedy",
    speedy: cacheOptions.speedy,
    prepend: cacheOptions.prepend,
  });

  return (
    <StyledEngineProvider injectFirst>
      {cacheOptions.shouldCache ? (
        <CacheProvider value={emotionCache}>
          <MUIThemeProvider theme={currentTheme}>
            <CssBaseline />
            {children}
          </MUIThemeProvider>
        </CacheProvider>
      ) : (
        <MUIThemeProvider theme={currentTheme}>
          <CssBaseline />
          {children}
        </MUIThemeProvider>
      )}
    </StyledEngineProvider>
  );
};
