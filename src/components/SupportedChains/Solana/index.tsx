import React from "react";
import Table from "../Utils/index";

const SolanaChainData = () => {
  const headers = ["Name", "SolNetwork", "Type"] as const;

  const data: Record<(typeof headers)[number], string>[] = [
    {
      Name: "Solana mainnet",
      SolNetwork: "SolNetwork.MAINNET",
      Type: "Mainnet",
    },
    {
      Name: "Solana devnet",
      SolNetwork: "SolNetwork.DEVNET",
      Type: "Testnet",
    },
  ];

  return <Table headers={headers} data={data} />;
};

export default SolanaChainData;
