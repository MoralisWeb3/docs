import React, { useCallback } from "react";

import { FieldComponentProps } from "../ApiReference/ApiParamField";

import ApiParamBaseInput from "./ApiParamBaseInput";

const ApiParamNumberField = (props: FieldComponentProps<"json">) => {
  const valueToString = useCallback((value: number) => String(value), []);
  const stringToValue = useCallback((value: string) => parseInt(value, 10), []);

  return (
    <ApiParamBaseInput
      {...props}
      valueToString={valueToString}
      stringToValue={stringToValue}
    />
  );
};

export default ApiParamNumberField;
