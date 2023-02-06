import React from "react";
import { FieldComponentProps } from "../ApiReference/ApiParamField";

import ApiParamBaseInput from "./ApiParamBaseInput";

const ApiParamBooleanField = (props: FieldComponentProps<"boolean">) => {
  return <ApiParamBaseInput {...props} enum={[false, true]} />;
};

export default ApiParamBooleanField;
