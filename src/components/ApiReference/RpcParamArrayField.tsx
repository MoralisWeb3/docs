import React, { useState, useEffect } from "react";
import { FieldComponentProps } from "../ApiReference/ApiParamField";
import ApiParamInfo from "../ApiReference/ApiParamInfo";
import TextareaAutosize from "react-textarea-autosize";
import styles from "./styles.module.css";

const RpcParamArrayField = ({
  field,
  form,
  param,
}: FieldComponentProps<"rpcArray">) => {
  // Set the initial value of the textarea to the example JSON if it exists
  const [textAreaValue, setTextAreaValue] = useState(
    param.example ? JSON.stringify(param.example, null, 2) : ""
  );

  useEffect(() => {
    // If the field value is an array, update the textarea value accordingly
    if (field.value && Array.isArray(field.value)) {
      const stringifiedValue = JSON.stringify(field.value, null, 2);
      setTextAreaValue(stringifiedValue);
    }
    // If the field value is not set and param.example exists, use the example as the initial value
    else if (!field.value && param.example) {
      const stringifiedExample = JSON.stringify(param.example, null, 2);
      setTextAreaValue(stringifiedExample);
      form.setFieldValue(field.name, param.example);
    }
  }, [field.value, form, param.example]);

  // A handler to update the formik state when the textarea content changes.
  const handleInputChange = (event) => {
    try {
      // Parse the input value to ensure it is a valid JSON array.
      const parsedValue = JSON.parse(event.target.value);
      if (Array.isArray(parsedValue)) {
        form.setFieldValue(field.name, parsedValue);
      } else {
        form.setErrors({
          ...form.errors,
          [field.name]: "Input is not a valid JSON array",
        });
      }
    } catch (error) {
      // If parsing fails, update the error state.
      form.setErrors({
        ...form.errors,
        [field.name]: "Input is not a valid JSON",
      });
    }
    setTextAreaValue(event.target.value);
  };

  // Similar styling as other input fields to ensure consistent UI.
  const inputClassName = `${styles.input} ${styles.textarea}`;

  return (
    <div className={styles.groupContainer}>
      <ApiParamInfo param={param} />
      <TextareaAutosize
        className={inputClassName}
        value={textAreaValue} // Use the component state instead of the field value.
        onChange={handleInputChange}
        placeholder='Enter array data in JSON format, e.g., [1, "two", true]'
      />
      {form.touched[field.name] && form.errors[field.name] && (
        <div className={styles.errorText}>{form.errors[field.name]}</div>
      )}
    </div>
  );
};

export default RpcParamArrayField;
