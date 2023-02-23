import React from "react";
import { ApiReferenceTokenProvider } from "@site/src/components/ApiReference/ApiReferenceToken";
import MUIThemeProvider from "../../components/MUI/index";

const Root = ({ children }) => {
  return (
    <>
      <MUIThemeProvider>
        <ApiReferenceTokenProvider>{children}</ApiReferenceTokenProvider>
      </MUIThemeProvider>
    </>
  );
};

export default Root;
