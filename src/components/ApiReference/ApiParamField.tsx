import React from "react";
import { Field, FieldProps } from "formik";

import ApiParamInfo from "./ApiParamInfo";
import ApiParamTextField from "./ApiParamTextField";
import ApiParamNumberField from "./ApiParamNumberField";
import ApiParamBooleanField from "./ApiParamBooleanField";
import ApiParamJSONField from "./ApiParamJSONField";
import ApiParamArrayField from "./ApiParamArrayField";
import RpcParamArrayField from "./RpcParamArrayField";
import ApiParamRecordField from "./ApiParamRecordField";
import ApiParamObjectField from "./ApiParamObjectField";
import ApiParamOneOfField from "./ApiParamOneOfField";

import styles from "./styles.module.css";

interface ApiBaseParam<Type extends string, Value = never> {
  name?: string;
  displayName?: string;
  description?: string;
  required?: boolean;
  type: Type;
  example?: Value;
  disabled?: boolean;
}

export type ApiParam =
  | (ApiBaseParam<"string", string> & { enum?: string[] })
  | ApiBaseParam<"number", number>
  | ApiBaseParam<"boolean", boolean>
  | ApiBaseParam<"json", string | object>
  | (ApiBaseParam<"array"> & { field: ApiParam })
  | (ApiBaseParam<"rpcArray"> & { field: ApiParam })
  | (ApiBaseParam<"record"> & { field: ApiParam })
  | (ApiBaseParam<"object"> & { fields: ApiParam[] })
  | (ApiBaseParam<"oneOf"> & { options: ApiParam[] });

export interface FieldComponentProps<
  Type extends ApiParam["type"] = ApiParam["type"],
  Param extends ApiParam = Extract<ApiParam, { type: Type }>,
  Value extends ApiParam["example"] = Param["example"]
> extends FieldProps<Type extends "array" ? unknown[] : Value> {
  param: Param;
}

const apiParamComponents: Record<
  ApiParam["type"],
  React.ComponentType<FieldComponentProps<ApiParam["type"]>>
> = {
  string: ApiParamTextField,
  number: ApiParamNumberField,
  boolean: ApiParamBooleanField,
  json: ApiParamJSONField,
  array: ApiParamArrayField,
  rpcArray: RpcParamArrayField,
  record: ApiParamRecordField,
  object: ApiParamObjectField,
  oneOf: ApiParamOneOfField,
};

export const PRIMITIVE_TYPES: ApiParam["type"][] = [
  "string",
  "number",
  "boolean",
  "json",
];

export const buildParamPath = (param: ApiParam | string, prefix?: string) =>
  [prefix, typeof param === "string" ? param : param.name]
    .filter((x) => x != null)
    .join(".") || null;

interface ApiParamFieldProps {
  prefix: string;
  param: ApiParam;
}

export const apiParamInitialValue = (param) => {
  if (param.type === "oneOf") {
    return {};
  }

  const path = param.name ? buildParamPath(param) : null;
  const value = PRIMITIVE_TYPES.includes(param.type)
    ? param.example
    : param.type === "object"
    ? param.fields?.reduce(
        (obj, field) => ({ ...obj, ...apiParamInitialValue(field) }),
        {}
      )
    : param.type === "array" && param.field
    ? (param.example || []).map((item) => item)
    : param.type === "record"
    ? {}
    : undefined;

  if (path) {
    return { [path]: value };
  }

  return param.name ? { [param.name]: value } : value;
};

const validateField = (param: ApiParam) => (value: string) => {
  // console.log(param); // Add this line to check the param object
  if (!param || !param.type || !PRIMITIVE_TYPES.includes(param.type)) return;

  if (param.type === "json" && value != null) {
    try {
      if (typeof value === "string") JSON.parse(value);
    } catch {
      return "Invalid JSON";
    }
  }
};

const ApiParamField = ({ prefix, param }: ApiParamFieldProps) => {
  const Component = apiParamComponents[param.type];
  const field = (
    <Field name={buildParamPath(param, prefix)} validate={validateField(param)}>
      {(props: FieldProps) => <Component {...props} param={param} />}
    </Field>
  );

  return (
    <div className={styles.field}>
      {PRIMITIVE_TYPES.includes(param.type) ? (
        <>
          <ApiParamInfo param={param} />

          <div className={styles.fieldInput}>{field}</div>
        </>
      ) : (
        field
      )}
    </div>
  );
};

export default ApiParamField;
