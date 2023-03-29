import React, { useState, useCallback } from "react";

import { ApiParam, PRIMITIVE_TYPES } from "./ApiParamField";
import ApiParamInfo from "./ApiParamInfo";

import styles from "./styles.module.css";

export interface ApiResponse {
  status: number;
  description: string;
  body?: ApiParam;
}

export const buildResponse = (field: ApiParam) => {
  if (PRIMITIVE_TYPES.includes(field?.type)) {
    return field?.example;
  }

  if (field.type === "array") {
    if (field.field?.type === "oneOf") {
      return [...field.field.options.map((option) => buildResponse(option))];
    }

    return [buildResponse(field.field)];
  }

  if (field?.type === "record") {
    return { "{KEY}": buildResponse(field.field) };
  }

  if (field?.type === "object") {
    return field?.fields?.reduce(
      (obj, objField) => ({
        ...obj,
        [objField.name]: buildResponse(objField),
      }),
      {}
    );
  }

  if (field?.type === "oneOf") {
    return buildResponse(field.options[0]);
  }

  return "";
};

const ApiResponseField = ({
  field,
  collapsible,
}: {
  field: ApiParam;
  collapsible?: boolean;
}) => {
  const [collapsed, setCollapsed] = useState(!!collapsible);
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleCollapsed = useCallback(
    () => setCollapsed((collapsed) => !collapsed),
    []
  );

  if (PRIMITIVE_TYPES.includes(field?.type)) {
    const enums =
      field.type === "string" && field.enum
        ? `*[${field.enum.join(" | ")}]*`
        : "";

    return (
      <div className={styles.field}>
        <ApiParamInfo
          param={{
            ...field,
            description: [enums, field.description].filter(Boolean).join(" "),
          }}
        />
      </div>
    );
  }

  if (field.type === "object") {
    return (
      <div className={styles.field}>
        <div className={styles.groupContainer}>
          {field.name &&
            (collapsible ? (
              <button
                type="button"
                className={styles.groupHeader}
                onClick={toggleCollapsed}
              >
                <ApiParamInfo param={field} />
              </button>
            ) : (
              <div className={styles.groupHeader}>
                <ApiParamInfo param={{ ...field, type: "" as any }} />
              </div>
            ))}

          {collapsed ? null : (
            <div className={styles.group}>
              {field.fields?.map((arrayField, index) => (
                <ApiResponseField key={index} field={arrayField} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (field.type === "array") {
    return (
      <div className={styles.field}>
        <div className={styles.groupContainer}>
          {field.name && (
            <div className={styles.groupHeader}>
              <ApiParamInfo param={field} />
            </div>
          )}

          <div className={styles.group}>
            <ApiResponseField field={field.field} />
          </div>
        </div>
      </div>
    );
  }

  if (field.type === "record") {
    return (
      <div className={styles.field}>
        <div className={styles.groupContainer}>
          {field.name && (
            <div className={styles.groupHeader}>
              <ApiParamInfo param={field} />
            </div>
          )}

          <div className={styles.group}>
            <ApiResponseField field={field.field} />
          </div>
        </div>
      </div>
    );
  }

  if (field.type === "oneOf") {
    return (
      <div className={styles.field}>
        <div className={styles.groupContainer}>
          {field.name && (
            <div className={styles.groupHeader}>
              <ApiParamInfo param={field} />
            </div>
          )}

          <div className={styles.group}>
            {field.options.map((fieldParam, index) => (
              <React.Fragment key={index}>
                {expandedIndex === index ? (
                  <div className={styles.groupHeader}>
                    {fieldParam.displayName ||
                      fieldParam.name ||
                      `Option ${index + 1}`}
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setExpandedIndex(index)}
                    className={styles.groupHeader}
                  >
                    {fieldParam.displayName ||
                      fieldParam.name ||
                      `Option ${index + 1}`}
                  </button>
                )}

                {expandedIndex === index && (
                  <ApiResponseField key={index} field={fieldParam} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ApiResponseField;
