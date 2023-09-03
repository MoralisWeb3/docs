import React from "react";
import Table from "../../Utils/index";

const AptosAuthChainData = () => {
  const headers = ["Name", "AptosNetwork", "Type"] as const;

  const data: Record<(typeof headers)[number], string>[] = [
    {
      Name: "Aptos Mainnet",
      AptosNetwork: "https://mainnet-aptos-api.moralis.io",
      Type: "Mainnet",
    },
    {
      Name: "Aptos Testnet",
      AptosNetwork: "https://testnet-aptos-api.moralis.io",
      Type: "Testnet",
    },
  ];

  return <Table headers={headers} data={data} />;
};

export default AptosAuthChainData;
