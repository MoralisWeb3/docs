import React from "react";
import Table from "../../Utils/index";

const EVMStreamChainData = () => {
  const headers = [
    "Chain",
    "Chain Id (Hex)",
    "Internal Transaction Supported",
    "Blocks until confirmed",
    "Note",
  ] as const;

  const data: Record<(typeof headers)[number], string | number>[] = [
    {
      Chain: "ETH",
      "Chain Id (Hex)": "0x1",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 12,
      Note: "",
    },
    {
      Chain: "GOERLI",
      "Chain Id (Hex)": "0x5",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 12,
      Note: "",
    },
    {
      Chain: "SEPOLIA",
      "Chain Id (Hex)": "0xaa36a7",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 18,
      Note: "",
    },
    {
      Chain: "BNB",
      "Chain Id (Hex)": "0x38",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 18,
      Note: "",
    },
    {
      Chain: "BNB TEST",
      "Chain Id (Hex)": "0x61",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 18,
      Note: "",
    },
    {
      Chain: "POLYGON",
      "Chain Id (Hex)": "0x89",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 100,
      Note: "",
    },
    {
      Chain: "MUMBAI",
      "Chain Id (Hex)": "0x13881",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 100,
      Note: "",
    },
    {
      Chain: "FANTOM TEST",
      "Chain Id (Hex)": "0xfa2",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 100,
      Note: "",
    },
    {
      Chain: "FANTOM",
      "Chain Id (Hex)": "0xfa",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 100,
      Note: "",
    },
    {
      Chain: "AVAX",
      "Chain Id (Hex)": "0xa86a",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 100,
      Note: "",
    },
    {
      Chain: "AVAX TEST _(deprecated)_",
      "Chain Id (Hex)": "0xa869",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 100,
      Note: "",
    },
    {
      Chain: "CRONOS",
      "Chain Id (Hex)": "0x19",
      "Internal Transaction Supported": "❌ Very soon",
      "Blocks until confirmed": 100,
      Note: "Planned support within a couple of days",
    },
    {
      Chain: "CRONOS TEST _(deprecated)_",
      "Chain Id (Hex)": "0x152",
      "Internal Transaction Supported": "❌ NO",
      "Blocks until confirmed": 100,
      Note: "",
    },
    {
      Chain: "RONIN",
      "Chain Id (Hex)": "0x7e4",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 100,
      Note: "🔥 NEW",
    },
    {
      Chain: "ARBITRUM",
      "Chain Id (Hex)": "0xa4b1",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 100,
      Note: "🔥 NEW",
    },
    {
      Chain: "ARBITRUM TEST",
      "Chain Id (Hex)": "0x66eed",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 100,
      Note: "🔥 NEW",
    },
    {
      Chain: "OPTIMISM",
      "Chain Id (Hex)": "0xa",
      "Internal Transaction Supported": "",
      "Blocks until confirmed": 100,
      Note: "🔥 NEW",
    },
    {
      Chain: "PALM",
      "Chain Id (Hex)": "0x2a15c308d",
      "Internal Transaction Supported": "",
      "Blocks until confirmed": "",
      Note: "🔥 NEW",
    },
  ];

  return <Table headers={headers} data={data} />;
};

export default EVMStreamChainData;
