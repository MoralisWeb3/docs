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
      Chain: "ETH SEPOLIA",
      "Chain Id (Hex)": "0xaa36a7",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 18,
      Note: "",
    },
    {
      Chain: "ETH HOLESKY",
      "Chain Id (Hex)": "0x4268",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 18,
      Note: "",
    },
    {
      Chain: "BSC",
      "Chain Id (Hex)": "0x38",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 18,
      Note: "",
    },
    {
      Chain: "BSC TESTNET",
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
      Chain: "POLYGON AMOY",
      "Chain Id (Hex)": "0x13882",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 100,
      Note: "🔥 NEW",
    },
    {
      Chain: "FANTOM",
      "Chain Id (Hex)": "0xfa",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 100,
      Note: "",
    },
    {
      Chain: "FANTOM TESTNET",
      "Chain Id (Hex)": "0xfa2",
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
      Chain: "CRONOS",
      "Chain Id (Hex)": "0x19",
      "Internal Transaction Supported": "❌ NO",
      "Blocks until confirmed": 100,
      Note: "",
    },
    {
      Chain: "RONIN",
      "Chain Id (Hex)": "0x7e4",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 100,
      Note: "",
    },
    {
      Chain: "ARBITRUM",
      "Chain Id (Hex)": "0xa4b1",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 100,
      Note: "",
    },
    {
      Chain: "ARBITRUM SEPOLIA",
      "Chain Id (Hex)": "0x66eee",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 100,
      Note: "🔥 NEW",
    },
    {
      Chain: "PALM",
      "Chain Id (Hex)": "0x2a15c308d",
      "Internal Transaction Supported": "",
      "Blocks until confirmed": "",
      Note: "",
    },
    {
      Chain: "GNOSIS",
      "Chain Id (Hex)": "0x64",
      "Internal Transaction Supported": "❌ NO",
      "Blocks until confirmed": "100",
      Note: "",
    },
    {
      Chain: "GNOSIS CHIADO",
      "Chain Id (Hex)": "0x27d8",
      "Internal Transaction Supported": "❌ NO",
      "Blocks until confirmed": "100",
      Note: "",
    },
    {
      Chain: "BASE",
      "Chain Id (Hex)": "0x2105",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": "100",
      Note: "",
    },
    {
      Chain: "BASE SEPOLIA",
      "Chain Id (Hex)": "0x14a34",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": "100",
      Note: "🔥 NEW",
    },
    {
      Chain: "OPTIMISM",
      "Chain Id (Hex)": "0xa",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 100,
      Note: "",
    },
    {
      Chain: "OPTIMISM SEPOLIA",
      "Chain Id (Hex)": "0xaa37dc",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 600,
      Note: "🔥 NEW",
    },
    {
      Chain: "LINEA",
      "Chain Id (Hex)": "0xe708",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 100,
      Note: "🔥 NEW",
    },
    {
      Chain: "LINEA SEPOLIA",
      "Chain Id (Hex)": "0xe705",
      "Internal Transaction Supported": "✅ YES",
      "Blocks until confirmed": 100,
      Note: "🔥 NEW",
    },
  ];

  return <Table headers={headers} data={data} />;
};

export default EVMStreamChainData;
