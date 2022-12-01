import React from "react";

import { FieldComponentProps } from "../ApiReference/ApiParamField";
import ApiParamBaseInput from "./ApiParamBaseInput";

const ApiParamTextField = (props: FieldComponentProps<"string">) => {
  return <ApiParamBaseInput {...props} enum={props.param.enum} />;
};

export default ApiParamTextField;
