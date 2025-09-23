import React, { useState } from "react";

const UnsupportedIcon = ({ reason }) => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);

    return (
        <div
            className="tooltip-container"
            style={{ position: "relative", display: "inline-block" }}
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="12" cy="12" r="10" fill="#7d7c84" />
                <path
                    d="M11 11H13V16.5H11V11ZM13.25 8.25C13.25 8.9395 12.6895 9.5 12 9.5C11.3105 9.5 10.75 8.9395 10.75 8.25C10.75 7.5605 11.3105 7 12 7C12.6895 7 13.25 7.5605 13.25 8.25Z"
                    fill="white"
                />
            </svg>
            {reason && isTooltipVisible && (
                <span
                    className="tooltip-text"
                    style={{
                        visibility: isTooltipVisible ? "visible" : "hidden",
                        width: "140px",
                        backgroundColor: "#555",
                        color: "#fff",
                        textAlign: "center",
                        borderRadius: "6px",
                        padding: "5px 0",
                        position: "absolute",
                        zIndex: 1,
                        bottom: "125%", // Position above the icon
                        left: "50%",
                        marginLeft: "-70px",
                        opacity: isTooltipVisible ? 1 : 0,
                        transition: "opacity 0.3s",
                    }}
                >
                    {reason}
                </span>
            )}
        </div>
    );
};

export default UnsupportedIcon;
