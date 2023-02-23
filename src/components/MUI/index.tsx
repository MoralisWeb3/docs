import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import BrowserOnly from "@docusaurus/BrowserOnly";
import MUIThemeBrowser from "./MUIThemeBrowser";

const MUIThemeProvider = ({ children }): JSX.Element => {
  const [theme, setTheme] = useState<PaletteMode | undefined>();
  const MUITheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
        },
      }),
    [theme]
  );

  return (
    <>
      <BrowserOnly>{() => <MUIThemeBrowser setTheme={setTheme} />}</BrowserOnly>
      <ThemeProvider theme={MUITheme}>{children}</ThemeProvider>
    </>
  );
};

export default MUIThemeProvider;
