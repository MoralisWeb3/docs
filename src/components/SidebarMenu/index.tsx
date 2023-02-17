import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useHistory } from "@docusaurus/router";

const chains = [
  {
    value: "aptos",
    label: "Aptos",
    link: "/web3-data-api-aptos",
  },
  {
    value: "evm",
    label: "EVM",
    link: "/web3-data-api",
  },
  {
    value: "solana",
    label: "Solana",
    link: "/web3-data-api-solana",
  },
];

const SidebarMenu = (props: TextFieldProps) => {
  const { push } = useHistory();
  return (
    <TextField select fullWidth label="Chain" defaultValue="evm" {...props}>
      {chains.map(({ value, label, link }) => (
        <MenuItem key={value} value={value} onClick={() => push(link)}>
          {label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SidebarMenu;
