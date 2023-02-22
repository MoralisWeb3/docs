import React, { useState, useMemo, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ApiReferenceTokenProvider } from "@site/src/components/ApiReference/ApiReferenceToken";
import { PaletteMode } from "@mui/material";

const Root = ({ children }) => {
  const [theme, setTheme] = useState<PaletteMode>("dark");
  const MUITheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
        },
      }),
    [theme]
  );

  // useEffect(() => {
  //   function checkTheme() {
  //     const localTheme = localStorage.getItem("theme") as PaletteMode;

  //     if (localTheme) setTheme(localTheme);
  //   }

  //   window.addEventListener("storage", checkTheme);

  //   return () => {
  //     window.removeEventListener("storage", checkTheme);
  //   };
  // }, []);

  return (
    <ThemeProvider theme={MUITheme}>
      <ApiReferenceTokenProvider>{children}</ApiReferenceTokenProvider>
    </ThemeProvider>
  );
};

export default Root;
