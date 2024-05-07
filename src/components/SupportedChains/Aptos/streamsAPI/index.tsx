import React from "react";
import Table from "../../Utils/index";

const AptosStreamsChainData = () => {
  const headers = ["Name", "Type"] as const;

  const data: Record<(typeof headers)[number], string>[] = [
    {
      Name: "Aptos Mainnet",
      Type: "Mainnet",
    },
    {
      Name: "Aptos Testnet",
      Type: "Testnet",
    },
  ];

  return <Table headers={headers} data={data} />;
};

export default AptosStreamsChainData;
