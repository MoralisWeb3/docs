import React, { useState } from "react";
import { FieldComponentProps, apiParamInitialValue } from "./ApiParamField";
import ApiParamInfo from "./ApiParamInfo";
import ApiParamField from "./ApiParamField";

import styles from "./styles.module.css";

const typeOptions = ["string", "array", "boolean", "json", "number"];

const RpcParamArrayField = ({
  param,
  field,
  form,
}: FieldComponentProps<"array">) => {
  const arrayValues = Array.isArray(field.value) ? [...field.value] : [];
  const [selectedType, setSelectedType] = useState("string");

  const handleAddItem = (type) => {
    let initialValue;
    switch (type) {
      case "string":
        initialValue = "";
        break;
      case "number":
        initialValue = 0;
        break;
      case "boolean":
        initialValue = false;
        break;
      case "json":
        initialValue = {};
        break;
      case "array":
        initialValue = [""];
        break;
      default:
        initialValue = "";
    }
    form.setFieldValue(field.name, [...arrayValues, initialValue]);
  };

  return (
    <div className={styles.groupContainer}>
      {param.name && (
        <div className={styles.groupHeader}>
          <ApiParamInfo param={param} />
        </div>
      )}

      <div className={styles.group}>
        {arrayValues.length > 0 ? (
          arrayValues.map((value, index) => (
            <div key={index} className={styles.field}>
              <div className={styles.group}>
                <div className={styles.groupHeader}>
                  <button
                    type="button"
                    onClick={() =>
                      form.setFieldValue(field.name, [
                        ...arrayValues.slice(0, index),
                        ...arrayValues.slice(index + 1),
                      ])
                    }
                  >
                    Remove
                  </button>
                  {param.name}[{index}]
                </div>

                {/* Dynamic Field based on type */}
                <ApiParamField
                  param={{ ...param.field, type: typeof value }}
                  prefix={`${field.name}[${index}]`}
                />
              </div>
            </div>
          ))
        ) : (
          <div className={styles.emptyArray}>No items in the array</div>
        )}

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className={styles.typeSelector}
        >
          {typeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={() => handleAddItem(selectedType)}
          className={styles.groupHeader}
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default RpcParamArrayField;
