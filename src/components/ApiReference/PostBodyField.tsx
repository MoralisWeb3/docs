import React, { useState, useCallback } from "react";
import ApiParamInfo from "../ApiReference/ApiParamInfo";
import TextareaAutosize from "react-textarea-autosize";
import styles from "./styles.module.css";

interface PostBodyFieldProps {
  field: any;
  form: any;
  param: any;
}

/**
 * PostBodyField Component
 * 
 * Provides a simplified body parameter input for POST and PUT endpoints, similar to RPC endpoints.
 * Features:
 * - Single textarea for JSON input
 * - Auto-generates examples from configs.json field definitions
 * - JSON validation and formatting
 * 
 * This replaces the complex individual field structure with a single JSON input,
 * avoiding formatting and parsing issues while providing a better user experience.
 */
const PostBodyField = ({ field, form, param }: PostBodyFieldProps) => {
  const generateExampleFromConfig = useCallback(() => {
    if (param.example) {
      return param.example;
    }
    
    // Generate example from fields if available
    if (param.type === "object" && param.fields) {
      const example = {};
      param.fields.forEach((fieldParam: any) => {
        if (fieldParam.example !== undefined) {
          example[fieldParam.name] = fieldParam.example;
        } else if (fieldParam.type === "string") {
          example[fieldParam.name] = fieldParam.description || "string_value";
        } else if (fieldParam.type === "number") {
          example[fieldParam.name] = 1;
        } else if (fieldParam.type === "boolean") {
          example[fieldParam.name] = true;
        } else if (fieldParam.type === "array" && fieldParam.field) {
          if (fieldParam.field.type === "object" && fieldParam.field.fields) {
            const arrayItemExample = {};
            fieldParam.field.fields.forEach((subField: any) => {
              if (subField.example !== undefined) {
                arrayItemExample[subField.name] = subField.example;
              }
            });
            example[fieldParam.name] = [arrayItemExample];
          } else {
            example[fieldParam.name] = [];
          }
        }
      });
      return example;
    }
    
    return {};
  }, [param]);

  const getInitialValue = useCallback(() => {
    if (field.value && typeof field.value === "object") {
      return JSON.stringify(field.value, null, 2);
    } else if (param.example) {
      if (!field.value) {
        form.setFieldValue(field.name, param.example);
      }
      return JSON.stringify(param.example, null, 2);
    } else {
      const generatedExample = generateExampleFromConfig();
      if (Object.keys(generatedExample).length > 0) {
        if (!field.value) {
          form.setFieldValue(field.name, generatedExample);
        }
        return JSON.stringify(generatedExample, null, 2);
      }
    }
    return "{}";
  }, [field.value, param.example, generateExampleFromConfig, form, field.name]);

  const [textAreaValue, setTextAreaValue] = useState(getInitialValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
    try {
      const parsedValue = JSON.parse(event.target.value);
      form.setFieldValue(field.name, parsedValue);
      form.setErrors({
        ...form.errors,
        [field.name]: undefined,
      });
    } catch (error) {
      form.setErrors({
        ...form.errors,
        [field.name]: "Input is not valid JSON",
      });
    }
  };

  const handleBlur = () => {
    try {
      // On blur, attempt to format the JSON text.
      const formattedText = JSON.stringify(JSON.parse(textAreaValue), null, 2);
      setTextAreaValue(formattedText);
    } catch (error) {
      // If the current text is not valid JSON, don't change the formatting.
    }
  };

  const hasError = form.touched[field.name] && form.errors[field.name];
  const inputClassName = `${styles.jsonCodeEditor} ${hasError ? styles.invalid : ''}`;

  return (
    <div className={styles.groupContainer}>
      <ApiParamInfo 
        param={{
          ...param,
          name: "Request Body",
          description: param.description || "Complete request body as JSON object. Paste your request body or modify the example below."
        }} 
      />
      <TextareaAutosize
        className={inputClassName}
        value={textAreaValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        placeholder='{\n  "key": "value",\n  "anotherKey": "anotherValue"\n}'
        minRows={8}
      />
      {hasError && (
        <div className={styles.errorText}>{form.errors[field.name]}</div>
      )}
    </div>
  );
};

export default PostBodyField;