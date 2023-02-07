import React from "react";
import { FieldComponentProps } from "../ApiReference/ApiParamField";
import ApiParamInfo from "../ApiReference/ApiParamInfo";
import ApiParamField from "../ApiReference/ApiParamField";

import styles from "./styles.module.css";

const ApiParamObjectField = ({
  param,
  field,
}: FieldComponentProps<"object">) => {
  return (
    <div className={styles.groupContainer}>
      {param.name && (
        <div className={styles.groupHeader}>
          <ApiParamInfo param={param} />
        </div>
      )}

      <div className={styles.group}>
        {param.fields?.map((fieldParam, index) => (
          <ApiParamField key={index} param={fieldParam} prefix={field.name} />
        ))}
      </div>
    </div>
  );
};

export default ApiParamObjectField;
