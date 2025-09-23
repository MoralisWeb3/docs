import React from "react";

const headers = [
    "Name",
    "Type",
    "SolNetwork",
    "Solana API",
    "Streams API",
    "RPC Nodes",
    "Auth API",
] as const;

const data = [
    {
        Name: "Solana Mainnet",
        SolNetwork: "SolNetwork.MAINNET",
        Type: "Mainnet",
        "Solana API": { supported: true },
        "Streams API": { supported: false, reason: "Unsupported" },
        "RPC Nodes": {
            supported: false,
            reason: "Unsupported",
            urls: [],
        },
        "Auth API": { supported: true },
    },
    {
        Name: "Solana Devnet",
        SolNetwork: "SolNetwork.DEVNET",
        Type: "Devnet",
        "Solana API": { supported: true },
        "Streams API": { supported: false, reason: "Unsupported" },
        "RPC Nodes": {
            supported: false,
            reason: "Unsupported",
            urls: [],
        },
        "Auth API": { supported: true },
    },
];

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

const TableCell = ({ header, content }) => {
    if (typeof content === "object" && content !== null) {
        if (["Solana API", "Streams API", "RPC Nodes", "Auth API"].includes(header)) {
            const { supported, reason } = content;
            return supported ? <SupportedIcon /> : <UnsupportedIcon reason={reason} />;
        }
    }

    if (header === "SolNetwork") {
        return <code>{content}</code>;
    }

    return <>{content}</>;
};

const TableRow = ({ rowData }) => (
    <tr>
        {headers.map((header, index) => (
            <td
                style={
                    ["Solana API", "Streams API", "RPC Nodes", "Auth API"].includes(header)
                        ? { textAlign: "center" }
                        : {}
                }
                key={index}
            >
                <TableCell header={header} content={rowData[header]} />
            </td>
        ))}
    </tr>
);

const TableHeader = () => (
    <thead style={{ textAlign: "left" }}>
        <tr>
            {headers.map((header, index) => (
                <th key={index}>{header}</th>
            ))}
        </tr>
    </thead>
);

const SolanaCombined = () => (
    <table>
        <TableHeader />
        <tbody>
            {data.map((row, index) => (
                <TableRow key={index} rowData={row} />
            ))}
        </tbody>
    </table>
);

export default SolanaCombined;
