import React from "react";
import Table from "../../Utils/index";

const AptosStreamsChainData = () => {
  const headers = [
    "Chain",
    "Chain Id (HEX)",
    "Internal Transaction Supported",
    "Blocks until confirmed",
    "Note",
  ] as const;

  const data: Record<(typeof headers)[number], string>[] = [
    {
      Chain: "APTOS MAINNET",
      "Chain Id (HEX)": "mainnet",
      "Internal Transaction Supported": "Not Applicable",
      "Blocks until confirmed": "Not Applicable",
      Note: "🔥 NEW",
    },
    {
      Chain: "APTOS TESTNET",
      "Chain Id (HEX)": "testnet",
      "Internal Transaction Supported": "Not Applicable",
      "Blocks until confirmed": "Not Applicable",
      Note: "🔥 NEW",
    },
  ];

  return <Table headers={headers} data={data} />;
};

export default AptosStreamsChainData;
