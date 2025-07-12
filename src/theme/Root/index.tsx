import React from "react";
import { ApiReferenceTokenProvider } from "@site/src/components/ApiReference/ApiReferenceToken";
import { LayoutProvider } from "@site/src/components/Layout/LayoutProvider";
import { Toaster } from "@site/src/components/ui/toaster";

const Root = ({ children }) => {
  return (
    <>
      <LayoutProvider>
        <ApiReferenceTokenProvider>{children}</ApiReferenceTokenProvider>
      </LayoutProvider>
      <Toaster />
    </>
  );
};

export default Root;
