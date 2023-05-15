import React, { useState, useCallback } from "react";
import clsx from "clsx";
import TextareaAutosize from "react-textarea-autosize";

import { FieldComponentProps } from "../ApiReference/ApiParamField";
import ApiParamInputOverlay from "./ApiParamInputOverlay";
import styles from "./styles.module.css";

interface ApiParamBaseInputProps extends FieldComponentProps {
  multiline?: boolean;
  enum?: Array<string | boolean>;
  valueToString?: (
    value: string | FieldComponentProps["param"]["example"]
  ) => string;
  stringToValue?: (
    value: string
  ) => string | FieldComponentProps["param"]["example"];
}

const ApiParamBaseInput = ({
  multiline,
  enum: options,
  field,
  meta,
  form,
  param,
  valueToString,
  stringToValue,
}: ApiParamBaseInputProps) => {
  const [focused, setFocused] = useState(false);
  const inputClassName = clsx(styles.input, {
    [styles.invalid]: meta.touched && meta.error,
  });

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleBlur = useCallback((event) => {
    if (event.currentTarget.contains(event.relatedTarget)) return;

    setFocused(false);
  }, []);

  const handleChange = useCallback(
    (event) => {
      const value = event.currentTarget.value;

      form.setFieldValue(
        event.currentTarget.name,
        options
          ? options.find((option) => String(option) === value)
          : (stringToValue ? stringToValue(value) : value) || undefined
      );
    },
    [form, options, stringToValue]
  );

  const fieldProps = {
    ...field,
    value:
      field.value == null
        ? ""
        : valueToString
        ? valueToString(field.value)
        : String(field.value),
    onChange: handleChange,
  };

  return (
    <div
      tabIndex={-1}
      className={styles.inputContainer}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {options ? (
        <select
          {...fieldProps}
          className={inputClassName}
          disabled={param?.disabled}
        >
          <option />
          {options.map((option, index) => (
            <option key={index}>{String(option)}</option>
          ))}
        </select>
      ) : multiline ? (
        <TextareaAutosize
          {...fieldProps}
          className={inputClassName}
          disabled={param?.disabled}
        />
      ) : (
        <input
          {...fieldProps}
          className={inputClassName}
          disabled={param?.disabled}
        />
      )}
      {focused && !param?.disabled && (
        <ApiParamInputOverlay
          field={field}
          form={form}
          meta={meta}
          param={param}
        />
      )}
    </div>
  );
};

export default ApiParamBaseInput;
