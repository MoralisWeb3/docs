// TableRow.js
import React from 'react';
import TableCell from './ChainTableCell';

const TableRow = ({ rowData, headers }) => (
    <tr>
        {headers.map((header, index) => (
            <td style={["evmApi", "streamsApi", "rpcNodes", "authApi"].includes(header) ? { textAlign: "center" } : {}}
                key={index}>
                <TableCell header={header} rowData={rowData} />
            </td>
        ))}
    </tr>
);

export default TableRow;
