import React, { useState } from "react";
import { FieldComponentProps } from "../ApiReference/ApiParamField";
import ApiParamInfo from "../ApiReference/ApiParamInfo";
import TextareaAutosize from "react-textarea-autosize";
import styles from "./styles.module.css";

const RpcParamArrayField = ({
  field,
  form,
  param,
}: FieldComponentProps<"rpcArray">) => {
  // Determine the initial value of the textarea. If `field.value` is an array, use it.
  // Otherwise, use `param.example` if it exists. If neither is available, default to an empty string.
  const getInitialValue = () => {
    if (Array.isArray(field.value)) {
      return JSON.stringify(field.value, null, 2);
    }
    if (param.example) {
      // Set the initial form value to the example if no value is already set
      if (!field.value) {
        form.setFieldValue(field.name, param.example);
      }
      return JSON.stringify(param.example, null, 2);
    }
    return "";
  };

  const [textAreaValue, setTextAreaValue] = useState(getInitialValue);

  // A handler to update the formik state when the textarea content changes.
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setTextAreaValue(inputValue);
    try {
      // Parse the input value to ensure it is a valid JSON array.
      const parsedValue = JSON.parse(inputValue);
      if (Array.isArray(parsedValue)) {
        form.setFieldValue(field.name, parsedValue);
        //Clear any existing errors if parsing succeeds.
        form.setErrors({
          ...form.errors,
          [field.name]: undefined,
        });
      } else {
        // Set an error if the parsed value is not an array.
        form.setErrors({
          ...form.errors,
          [field.name]: "Input is not a valid JSON array",
        });
      }
    } catch (error) {
      // Set an error if parsing fails.
      form.setErrors({
        ...form.errors,
        [field.name]: "Input is not a valid JSON",
      });
    }
  };

  // Similar styling as other input fields to ensure consistent UI.
  const inputClassName = `${styles.input} ${styles.textarea}`;

  return (
    <div className={styles.groupContainer}>
      <ApiParamInfo param={param} />
      <TextareaAutosize
        className={inputClassName}
        value={textAreaValue}
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
