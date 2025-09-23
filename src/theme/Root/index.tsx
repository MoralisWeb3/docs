import React from "react";
import { ApiReferenceTokenProvider } from "@site/src/components/ApiReference/ApiReferenceToken";
import { Toaster } from "@site/src/components/ui/toaster";

const Root = ({ children }) => {
    return (
        <>
            <ApiReferenceTokenProvider>{children}</ApiReferenceTokenProvider>
            <Toaster />
        </>
    );
};

export default Root;
