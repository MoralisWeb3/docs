// TableCell.js
import React from "react";

const SupportedIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#117FFF" />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 7L10 15L6 11"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const UnsupportedIcon = ({ reason }: { reason?: string }) => (
    <div className="tooltip-container">
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22 12C22 17.5225 17.5225 22 12 22C6.4775 22 2 17.5225 2 12C2 6.4775 6.4775 2 12 2C17.5225 2 22 6.4775 22 12Z"
                fill="#7d7c84"
            />
            <path
                d="M11 11H13V16.5H11V11ZM13.25 8.25C13.25 8.9395 12.6895 9.5 12 9.5C11.3105 9.5 10.75 8.9395 10.75 8.25C10.75 7.5605 11.3105 7 12 7C12.6895 7 13.25 7.5605 13.25 8.25Z"
                fill="white"
            />
        </svg>

        {reason && <span className="tooltip-text">{reason}</span>}
    </div>
);

const TableCell = ({ header, rowData }) => {
    // Nested data from chainData, or items that need extra styling, need to be handled specifically
    if (header === "name") {
        return (
            <div style={{ display: "flex", alignItems: "center" }}>
                {rowData.isNew ? <span className="new-chain">New</span> : ""}
                <img
                    src={rowData.logo}
                    alt={`${rowData.name} logo`}
                    style={{ width: 20, height: 20, marginRight: 10 }}
                />
                {rowData.name}
            </div>
        );
    } else if (header === "blockConfirmations") {
        return rowData.streamsApi && rowData.streamsApi.supported ? (
            <span>{rowData.streamsApi.blockConfirmations}</span>
        ) : (
            <span>No Confirmation Data</span>
        );
    } else if (header === "internalTxs") {
        return (
            rowData.streamsApi &&
            rowData.streamsApi.supported && (
                <span>
                    {rowData.streamsApi.internalTxs ? (
                        <SupportedIcon />
                    ) : (
                        <UnsupportedIcon reason={rowData.streamsApi.reason} />
                    )}
                </span>
            )
        );
    } else if (header === "queryParams") {
        const queryParams = rowData.evmApi && rowData.evmApi.queryParams;
        return queryParams && queryParams.length > 0 ? (
            <ul>
                {queryParams.map((param, index) => (
                    <li key={index}>
                        <code>{param}</code>
                    </li>
                ))}
            </ul>
        ) : (
            <span>No Query Parameters Supported</span>
        );
    } else if (header === "urls") {
        const urls = rowData.rpcNodes.urls;
        return urls && urls.length > 0 ? (
            <ul>
                {urls.map((url, index) => (
                    <li key={index}>
                        <code>{url}</code>
                    </li>
                ))}
            </ul>
        ) : (
            <span>No URLs Available</span>
        );
    } else if (header === "extendedRpcApi") {
        const isSupported = rowData.evmApi?.supported && rowData.rpcNodes?.supported;
        return isSupported ? <SupportedIcon /> : <UnsupportedIcon reason="Unsupported" />;
    } else if (["evmApi", "streamsApi", "rpcNodes", "authApi"].includes(header)) {
        const { supported, reason } = rowData[header];
        return supported ? <SupportedIcon /> : <UnsupportedIcon reason={reason} />;
    } else if (header === "evmChain") {
        return <code>{rowData[header]}</code>;
    }

    // If the data is not nested from chainData, and no extra styling is needed, the cell data will be output here
    return <>{rowData[header]}</>;
};

export default TableCell;
