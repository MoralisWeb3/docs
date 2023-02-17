import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useHistory, useLocation } from "@docusaurus/router";

enum NetworkEnum {
  Aptos = "aptos",
  EVM = "evm",
  Solana = "solana",
}

const networks = [
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

const SidebarMenu = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const [network] = useState<NetworkEnum | null>(() => {
    switch (pathname) {
      case "/web3-data-api-aptos":
        return NetworkEnum.Aptos;
      case "/web3-data-api-solana":
        return NetworkEnum.Solana;
      case "/web3-data-api":
        return NetworkEnum.EVM;
      default:
        return;
    }
  });

  return network ? (
    <FormControl fullWidth>
      <Select value={network}>
        {networks.map(({ value, label, link }) => (
          <MenuItem key={value} value={value} onClick={() => push(link)}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  ) : (
    <></>
  );
};

export default SidebarMenu;
