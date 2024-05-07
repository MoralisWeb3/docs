import React from "react";

const Table = ({
  headers,
  data,
}: {
  headers: readonly string[];
  data: Record<(typeof headers)[number], any>[];
}) => (
  <table>
    <thead
      style={{
        textAlign: "left",
      }}
    >
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {headers.map((header, cellIndex) => (
            <td key={cellIndex}>
              {["EvmChain", "SolNetwork", "AptosNetwork"].includes(header) ? (
                <code>{row[header]}</code>
              ) : (
                row[header]
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
