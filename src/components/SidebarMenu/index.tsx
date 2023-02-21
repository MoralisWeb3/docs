import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import { useHistory, useLocation } from "@docusaurus/router";
import EthereumLogo from "@site/static/img/content/networks/ethereum.webp";
import AptosLogo from "@site/static/img/content/networks/aptos.webp";
import SolanaLogo from "@site/static/img/content/networks/solana.webp";

enum NetworkEnum {
  Aptos = "aptos",
  EVM = "evm",
  Solana = "solana",
}

const networks = [
  {
    value: "aptos",
    label: "Aptos",
    link: "/web3-data-api/aptos",
    logo: AptosLogo,
  },
  {
    value: "evm",
    label: "EVM",
    link: "/web3-data-api/evm",
    logo: EthereumLogo,
  },
  {
    value: "solana",
    label: "Solana",
    link: "/web3-data-api/solana",
    logo: SolanaLogo,
  },
];

const SidebarMenu = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const [network] = useState<NetworkEnum | null>(() => {
    const [path] = pathname.split("/").slice(1);
    switch (path) {
      case "web3-data-api-aptos":
        return NetworkEnum.Aptos;
      case "web3-data-api-solana":
        return NetworkEnum.Solana;
      case "web3-data-api":
      case "streams-api":
      case "authentication-api":
        return NetworkEnum.EVM;
      default:
        return;
    }
  });

  return network ? (
    <FormControl fullWidth>
      <Select value={network}>
        {networks.map(({ value, label, link, logo }) => (
          <MenuItem key={value} value={value} onClick={() => push(link)}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item sx={{ marginTop: "5px" }}>
                <img src={logo} alt="logo" height={20} width="auto" />
              </Grid>
              <Grid item>{label}</Grid>
            </Grid>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  ) : (
    <></>
  );
};

export default SidebarMenu;
