import React from "react";
import styles from "./styles.module.css";

interface StatusCodeBadgeProps {
    status: string | number;
}

const StatusCodeBadge: React.FC<StatusCodeBadgeProps> = ({ status }) => {
    const statusCode = String(status);
    let statusClass = "";

    if (statusCode === "429") {
        statusClass = "rateLimit"; // 429 - Rate Limited (Purple)
    } else if (statusCode.startsWith("2")) {
        statusClass = "success"; // 2xx - Success (Green)
    } else if (statusCode.startsWith("4")) {
        statusClass = "clientError"; // 4xx - Client Error (Yellow/Orange)
    } else if (statusCode.startsWith("5")) {
        statusClass = "serverError"; // 5xx - Server Error (Red)
    }

    return (
        <span
            data-badge-type="status-code"
            data-status-code={statusCode}
            className={`${styles.statusCodeBadge} ${styles[statusClass]}`}
        >
            {statusCode}
        </span>
    );
};

export default StatusCodeBadge;
