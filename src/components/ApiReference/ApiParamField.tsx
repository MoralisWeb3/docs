import React from "react";
import { Field as FormikField, FieldProps } from "formik";

import ApiParamInfo from "./ApiParamInfo";
import { getDefaultForParam } from "@site/src/utils/defaults";
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

export const PRIMITIVE_TYPES: ApiParam["type"][] = ["string", "number", "boolean", "json"];

export const buildParamPath = (param: ApiParam | string, prefix?: string) =>
    [prefix, typeof param === "string" ? param : param.name].filter((x) => x != null).join(".") ||
    null;

const inferTypeFromExample = (example: any): ApiParam["type"] | null => {
    if (example === null || example === undefined) return null;

    if (typeof example === "boolean") return "boolean";
    if (typeof example === "number") return "number";
    if (Array.isArray(example)) return "array";
    if (typeof example === "object") return "object";
    if (typeof example === "string") {
        // Try to parse as number
        if (!isNaN(Number(example)) && example.trim() !== "") {
            return "number";
        }
        return "string";
    }

    return "string"; // default fallback
};

interface ApiParamFieldProps {
    prefix: string;
    param: ApiParam;
}

export const apiParamInitialValue = (param, endpoint) => {
    // Handle missing type by inferring from example or defaulting to string
    const type = param.type || inferTypeFromExample(param.example) || "string";

    if (type === "oneOf") {
        return {};
    }

    const path = param.name ? buildParamPath(param) : null;

    // Use example if provided, otherwise try to get default value
    let exampleValue = param.example;
    // Only use defaults if example is truly not provided (undefined or null)
    // but allow 0, false, and empty string as valid examples
    if (
        (exampleValue === undefined || exampleValue === null) &&
        PRIMITIVE_TYPES.includes(type) &&
        param.name
    ) {
        exampleValue = getDefaultForParam(param.name, type, endpoint);
    }

    const value = PRIMITIVE_TYPES.includes(type)
        ? exampleValue
        : type === "object"
        ? param.fields?.reduce(
              (obj, field) => ({ ...obj, ...apiParamInitialValue(field, endpoint) }),
              {}
          )
        : type === "array" && param.field
        ? (param.example || []).map((item) => item)
        : type === "record"
        ? {}
        : undefined;

    if (path) {
        return { [path]: value };
    }

    return param.name ? { [param.name]: value } : value;
};

const validateField = (param: ApiParam) => (value: string) => {
    const type = param?.type || inferTypeFromExample(param?.example) || "string";

    if (!param || !type || !PRIMITIVE_TYPES.includes(type)) return;

    if (type === "json" && value != null) {
        try {
            if (typeof value === "string") JSON.parse(value);
        } catch {
            return "Invalid JSON";
        }
    }
};

const ApiParamField = ({ prefix, param }: ApiParamFieldProps) => {
    // Handle missing type by inferring from example or defaulting to string
    const inferredParam = {
        ...param,
        type: param.type || inferTypeFromExample(param.example) || "string",
    };

    const Component = apiParamComponents[inferredParam.type as ApiParam["type"]];

    // If component is still undefined, fall back to string component
    const SafeComponent = Component || apiParamComponents.string;

    const field = (
        <FormikField
            name={buildParamPath(inferredParam, prefix)}
            validate={validateField(inferredParam)}
        >
            {(props: FieldProps) => <SafeComponent {...props} param={inferredParam} />}
        </FormikField>
    );

    return (
        <div className={styles.field}>
            {PRIMITIVE_TYPES.includes(inferredParam.type as ApiParam["type"]) ? (
                <>
                    <ApiParamInfo param={inferredParam} />

                    <div className={styles.fieldInput}>{field}</div>
                </>
            ) : (
                field
            )}
        </div>
    );
};

export default ApiParamField;
