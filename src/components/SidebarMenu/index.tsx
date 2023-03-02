import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import { useHistory, useLocation } from "@docusaurus/router";
import { useColorMode } from "@docusaurus/theme-common";
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
      value: "evm",
      label: "EVM",
      logo: EthereumLogo,
    },
    {
      value: "aptos",
      label: "Aptos",
      logo: AptosLogo,
    },

    {
      value: "solana",
      label: "Solana",
      logo: SolanaLogo,
    },
  ],
  "streams-api": [
    {
      value: "evm",
      label: "EVM",
      logo: EthereumLogo,
    },
    {
      value: "aptos",
      label: "Aptos",
      logo: AptosLogo,
    },
  ],
  "authentication-api": [
    {
      value: "evm",
      label: "EVM",
      logo: EthereumLogo,
    },
    {
      value: "aptos",
      label: "Aptos",
      logo: AptosLogo,
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
  const theme = useTheme();
  const { colorMode } = useColorMode();
  const [pageState] = useState<PageSidebar | undefined>(() => {
    const [path, network] = pathname.split("/").slice(1);
    if (path && network) return { path, network };
    return;
  });

  return pageState && networks?.[pageState?.path] ? (
    <Grid
      container
      sx={{
        gap: 1,
        p: 2,
        borderRadius: 2,
        background: "linear-gradient(#009EFF, #09FFD0)",
      }}
    >
      <Grid xs={12}>
        <b>{pageState?.path?.split("-")?.join(" ")?.toUpperCase()}</b>
      </Grid>
      <Grid xs={12}>
        <FormControl fullWidth>
          <Select
            value={pageState.network}
            sx={{
              background: colorMode === "dark" ? "#1c212f" : "white",
            }}
          >
            {networks?.[pageState?.path as string]?.map(
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
      </Grid>
    </Grid>
  ) : (
    <></>
  );
};

export default SidebarMenu;
