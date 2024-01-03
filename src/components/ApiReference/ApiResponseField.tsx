import React, { useState, useEffect } from "react";

// Replace these imports with the actual path in your project
import { ApiParam, PRIMITIVE_TYPES } from "./ApiParamField";
import ApiParamInfo from "./ApiParamInfo";
import styles from "./styles.module.css";

export interface ApiResponse {
  status: number;
  description: string | undefined;
  body?: ApiParam;
}

export const buildResponse = (field: ApiParam) => {
  if (!field) {
    return "";
  }

  if (PRIMITIVE_TYPES.includes(field?.type)) {
    return field?.example || "";
  }

  if (field.type === "array") {
    return [buildResponse(field.field)];
  }

  if (field?.type === "record") {
    return { "{KEY}": buildResponse(field.field) };
  }

  if (field?.type === "object") {
    return (field?.fields || []).reduce(
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
  parentType = '',
  isInsideObject = false, // Indicates if this component is inside an object
  isInsideArray = false, // Indicates if this component is directly inside an array
}: {
  field?: ApiParam;
  parentType?: string;
  isInsideObject?: boolean;
  isInsideArray?: boolean;
}) => {
  // Define the initial collapsed state based on whether it's inside an object or an array and its type
  const initialCollapsedState = !((isInsideObject || isInsideArray) && field?.type === 'object');

  const [collapsed, setCollapsed] = useState(initialCollapsedState);

  useEffect(() => {
    // Automatically expand if this is an object and it's inside an object or an array
    if ((isInsideObject || isInsideArray) && field?.type === 'object') {
      setCollapsed(false);
    }
  }, [isInsideObject, isInsideArray, field]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const renderFields = (fields, parentType, isInsideObject, isInsideArray) => {
    // Make sure to pass down the isInsideObject and isInsideArray flags to all children
    return fields.map((field, index) => (
      <ApiResponseField
        key={index}
        field={field}
        parentType={parentType}
        isInsideObject={isInsideObject || parentType === 'object'}  // Update the flag if the current level or any ancestor is an object
        isInsideArray={isInsideArray || parentType === 'array'}  // Update the flag if the current level or any ancestor is an array
      />
    ));
  };

  if (!field) {
    return null;
  }

  if (PRIMITIVE_TYPES.includes(field?.type)) {
    return <div className={styles.field}><ApiParamInfo param={field} /></div>;
  }

  if (field.type === 'object') {
    return (
      <div className={styles.field}>
        <div className={styles.groupContainer}>
          <button type="button" className={styles.groupHeader} onClick={toggleCollapsed}>
            <ApiParamInfo param={field} />
          </button>
          {!collapsed && field.fields && (
            <div className={styles.group}>
              {renderFields(field.fields, 'object', isInsideObject, isInsideArray)}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (field.type === 'array') {
    return (
      <div className={styles.field}>
        <div className={styles.groupContainer}>
          <button type="button" className={styles.groupHeader} onClick={toggleCollapsed}>
            <ApiParamInfo param={field} />
          </button>
          {!collapsed && field.field && (
            <div className={styles.group}>
              <ApiResponseField
                field={field.field}
                parentType='array'
                isInsideArray={true}  // Direct children of an array are inside an array
                isInsideObject={isInsideObject}  // Inherit the isInsideObject flag from the parent
              />
            </div>
          )}
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
