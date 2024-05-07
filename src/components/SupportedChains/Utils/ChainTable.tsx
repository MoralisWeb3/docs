import React from "react";
import TableRow from "./ChainTableRow";

const TableHeader = ({ headers }) => (
  <thead style={{ textAlign: "left" }}>
    <tr>
      {headers.map((header, index) => (
        <th key={index} dangerouslySetInnerHTML={{ __html: header.label }}></th>
      ))}
    </tr>
  </thead>
);

const GenericTable = ({ data, headers }) => (
  <table>
    <TableHeader headers={headers} />
    <tbody>
      {data.map((row, index) => (
        <TableRow
          key={index}
          rowData={row}
          headers={headers.map((h) => h.key)}
        />
      ))}
    </tbody>
  </table>
);

export default GenericTable;
