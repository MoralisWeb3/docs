import React, { useState } from "react";
import { FieldComponentProps } from "./ApiParamField";
import ApiParamInfo from "./ApiParamInfo";
import TextareaAutosize from "react-textarea-autosize";
import styles from "./styles.module.css";

const RpcParamArrayField = ({ field, form, param }: FieldComponentProps<"rpcArray">) => {
    const getInitialValue = () => {
        if (Array.isArray(field.value)) {
            return JSON.stringify(field.value, null, 2);
        } else if (param.example) {
            if (!field.value) {
                form.setFieldValue(field.name, param.example);
            }
            return JSON.stringify(param.example, null, 2);
        }
        return "";
    };

    const [textAreaValue, setTextAreaValue] = useState(getInitialValue);

    const handleInputChange = (event) => {
        setTextAreaValue(event.target.value);
        try {
            const parsedValue = JSON.parse(event.target.value);
            if (Array.isArray(parsedValue)) {
                form.setFieldValue(field.name, parsedValue);
                form.setErrors({
                    ...form.errors,
                    [field.name]: undefined,
                });
            } else {
                form.setErrors({
                    ...form.errors,
                    [field.name]: "Input is not a valid JSON array",
                });
            }
        } catch (error) {
            form.setErrors({
                ...form.errors,
                [field.name]: "Input is not a valid JSON",
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

    const inputClassName = `${styles.input} ${styles.textarea}`;

    return (
        <div className={styles.groupContainer}>
            <ApiParamInfo param={param} />
            <TextareaAutosize
                className={inputClassName}
                value={textAreaValue}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder='Enter array data in JSON format, e.g., [1, "two", true]'
            />
            {form.touched[field.name] && form.errors[field.name] && (
                <div className={styles.errorText}>{form.errors[field.name]}</div>
            )}
        </div>
    );
};

export default RpcParamArrayField;
