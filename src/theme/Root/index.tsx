import React from "react";

import { ApiReferenceTokenProvider } from "@site/src/components/ApiReference/ApiReferenceToken";

const Root = ({ children }) => {
  return <ApiReferenceTokenProvider>{children}</ApiReferenceTokenProvider>;
};

export default Root;
