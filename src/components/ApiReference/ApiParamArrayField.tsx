import React from "react";
import {
  FieldComponentProps,
  apiParamInitialValue,
} from "../ApiReference/ApiParamField";
import ApiParamInfo from "../ApiReference/ApiParamInfo";
import ApiParamField from "../ApiReference/ApiParamField";

import styles from "./styles.module.css";

const ApiParamArrayField = ({
  param,
  field,
  form,
}: FieldComponentProps<"array">) => {
  const arrayValues = Array.isArray(field.value) ? [...field.value] : [];

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
                  </button>{" "}
                  {param.name}[{index}]
                </div>

                <ApiParamField
                  param={param.field}
                  prefix={`${field.name}[${index}]`}
                />
              </div>
            </div>
          ))
        ) : (
          <div className={styles.emptyArray}>No items in the array</div>
        )}

        <button
          type="button"
          onClick={() => {
            form.setFieldValue(field.name, [
              ...arrayValues,
              apiParamInitialValue(param.field),
            ]);
          }}
          className={styles.groupHeader}
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default ApiParamArrayField;
