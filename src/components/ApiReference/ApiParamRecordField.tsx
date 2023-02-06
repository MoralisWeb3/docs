import React from "react";
import omit from "lodash/omit";

import {
  FieldComponentProps,
  apiParamInitialValue,
} from "../ApiReference/ApiParamField";
import ApiParamInfo from "../ApiReference/ApiParamInfo";
import ApiParamField from "../ApiReference/ApiParamField";

import styles from "./styles.module.css";

const ApiParamRecordField = ({
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
        {Object.entries(field.value).map(([key], index) => (
          <div key={index} className={styles.field}>
            <div className={styles.group}>
              <div className={styles.groupHeader}>
                <div className={styles.inlineForm}>
                  <span>
                    <button
                      type="button"
                      onClick={() =>
                        form.setFieldValue(field.name, omit(field.value, key))
                      }
                    >
                      -
                    </button>{" "}
                    {param.name}[KEY]
                  </span>
                  <input
                    className={styles.input}
                    value={key}
                    onChange={(event) => {
                      form.setFieldValue(
                        field.name,
                        Object.entries(field.value)?.reduce(
                          (obj, [fieldKey, fieldValue]) => ({
                            ...obj,
                            [fieldKey === key ? event.target.value : fieldKey]:
                              fieldValue,
                          }),
                          {}
                        )
                      );
                    }}
                  />
                </div>
              </div>

              <ApiParamField
                param={param.field}
                prefix={`${field.name}[${key}]`}
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={() => {
            if (field.value[""]) return;

            form.setFieldValue(field.name, {
              ...field.value,
              "": apiParamInitialValue(param.field),
            });
          }}
          className={styles.groupHeader}
        >
          + ADD
        </button>
      </div>
    </div>
  );
};

export default ApiParamRecordField;
