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
  return (
    <div className={styles.groupContainer}>
      {param.name && (
        <div className={styles.groupHeader}>
          <ApiParamInfo param={param} />
        </div>
      )}

      <div className={styles.group}>
        {(Array.isArray(field.value) ? [...field.value] : []).map(
          (value, index) => (
            <div key={index} className={styles.field}>
              <div className={styles.group}>
                <div className={styles.groupHeader}>
                  <button
                    type="button"
                    onClick={() =>
                      form.setFieldValue(field.name, [
                        ...field.value.slice(0, index),
                        ...field.value.slice(index + 1),
                      ])
                    }
                  >
                    -
                  </button>{" "}
                  {param.name}[{index}]
                </div>

                <ApiParamField
                  param={param.field}
                  prefix={`${field.name}[${index}]`}
                />
              </div>
            </div>
          )
        )}

        <button
          type="button"
          onClick={() => {
            form.setFieldValue(field.name, [
              ...field.value,
              apiParamInitialValue(param.field),
            ]);
          }}
          className={styles.groupHeader}
        >
          + ADD
        </button>
      </div>
    </div>
  );
};

export default ApiParamArrayField;
