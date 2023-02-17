import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ApiReferenceTokenProvider } from "@site/src/components/ApiReference/ApiReferenceToken";

const theme = createTheme({});

const Root = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ApiReferenceTokenProvider>{children}</ApiReferenceTokenProvider>
    </ThemeProvider>
  );
};

export default Root;
