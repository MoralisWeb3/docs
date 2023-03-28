import React, { useCallback } from "react";

import { FieldComponentProps } from "../ApiReference/ApiParamField";

import styles from "./styles.module.css";

type ApiParamInputOverlayProps = FieldComponentProps;

const ApiParamInputOverlay = ({
  field,
  meta,
  form,
  param,
}: ApiParamInputOverlayProps) => {
  const error = meta.touched && meta.error;
  const exampleValue = param.example;

  const setExampleValue = useCallback(
    (event) => {
      event.currentTarget.blur();

      form.setFieldValue(field.name, exampleValue);
    },
    [field.name, exampleValue, form]
  );

  if (!error && !exampleValue) return null;

  return (
    <div className={styles.inputOverlay}>
      {error && <div className={styles.inputOverlayError}>{error}</div>}
      {exampleValue && (
        <button
          type="button"
          className={styles.inputOverlayButton}
          onClick={setExampleValue}
        >
          Set Example Value
          <small>
            {typeof exampleValue === "object"
              ? JSON.stringify(exampleValue)
              : exampleValue}
          </small>
        </button>
      )}
    </div>
  );
};

export default ApiParamInputOverlay;
