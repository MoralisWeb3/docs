import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import { useHistory, useLocation } from "@docusaurus/router";
import EthereumLogo from "@site/static/img/content/networks/ethereum.webp";
import AptosLogo from "@site/static/img/content/networks/aptos.webp";
import SolanaLogo from "@site/static/img/content/networks/solana.webp";

interface PageSidebar {
  path: string;
  network: string;
}

const networks = {
  "web3-data-api": [
    {
      value: "aptos",
      label: "Aptos",
      logo: AptosLogo,
    },
    {
      value: "evm",
      label: "EVM",
      logo: EthereumLogo,
    },
    {
      value: "solana",
      label: "Solana",
      logo: SolanaLogo,
    },
  ],
  "streams-api": [
    {
      value: "aptos",
      label: "Aptos",
      logo: AptosLogo,
    },
    {
      value: "evm",
      label: "EVM",
      logo: EthereumLogo,
    },
  ],
  "authentication-api": [
    {
      value: "aptos",
      label: "Aptos",
      logo: AptosLogo,
    },
    {
      value: "evm",
      label: "EVM",
      logo: EthereumLogo,
    },
    {
      value: "solana",
      label: "Solana",
      logo: SolanaLogo,
    },
  ],
};

const SidebarMenu = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const [pageState] = useState<PageSidebar | undefined>(() => {
    const [path, network] = pathname.split("/").slice(1);
    if (path && network) return { path, network };
    return;
  });

  return pageState ? (
    <FormControl fullWidth>
      <Select value={pageState.network}>
        {networks?.[pageState?.path ?? "web3-data-api"]?.map(
          ({ value, label, logo }) => (
            <MenuItem
              key={value}
              value={value}
              onClick={() => push(`/${pageState.path}/${value}`)}
            >
              <Grid container alignItems="center" spacing={2}>
                <Grid item sx={{ marginTop: "5px" }}>
                  <img src={logo} alt="logo" height={20} width="auto" />
                </Grid>
                <Grid item>{label}</Grid>
              </Grid>
            </MenuItem>
          )
        )}
      </Select>
    </FormControl>
  ) : (
    <></>
  );
};

export default SidebarMenu;
