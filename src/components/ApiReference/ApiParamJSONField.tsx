import React, { useCallback } from "react";

import { FieldComponentProps } from "../ApiReference/ApiParamField";

import ApiParamBaseInput from "./ApiParamBaseInput";

const ApiParamJSONField = (props: FieldComponentProps<"json">) => {
  const valueToString = useCallback(
    (value: object | string) =>
      typeof value === "string" ? value : JSON.stringify(value),
    []
  );
  const stringToValue = useCallback((value: string) => {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }, []);

  return (
    <ApiParamBaseInput
      {...props}
      valueToString={valueToString}
      stringToValue={stringToValue}
      multiline
    />
  );
};

export default ApiParamJSONField;
