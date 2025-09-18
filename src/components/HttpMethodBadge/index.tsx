import React from "react";
import styles from "./styles.module.css";

interface HttpMethodBadgeProps {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
}

const HttpMethodBadge: React.FC<HttpMethodBadgeProps> = ({ method }) => {
  return (
    <span 
      data-badge-type="http-method" 
      data-http-method={method}
      className={`${styles.httpMethodBadge} ${styles[method.toLowerCase()]}`}
    >
      {method}
    </span>
  );
};

export default HttpMethodBadge;