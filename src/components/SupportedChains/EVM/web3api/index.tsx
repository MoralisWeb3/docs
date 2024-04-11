import React from "react";
import Table from "../../Utils/index";

const EVMChainData = () => {
  const headers = [
    "Name",
    "Chain Id (Int)",
    "Chain Id (Hex)",
    "EvmChain",
    "Type",
  ] as const;

  const data: Record<(typeof headers)[number], string>[] = [
    {
      Name: "Ethereum Mainnet",
      "Chain Id (Int)": "1",
      "Chain Id (Hex)": "0x1",
      EvmChain: "EvmChain.ETHEREUM",
      Type: "Mainnet",
    },
    {
      Name: "Ethereum Sepolia",
      "Chain Id (Int)": "11155111",
      "Chain Id (Hex)": "0xaa36a7",
      EvmChain: "EvmChain.SEPOLIA",
      Type: "Testnet",
    },
    {
      Name: "Ethereum Holesky",
      "Chain Id (Int)": "17000",
      "Chain Id (Hex)": "0x4268",
      EvmChain: "EvmChain.HOLESKY",
      Type: "Testnet",
    },
    {
      Name: "Polygon Mainnet",
      "Chain Id (Int)": "137",
      "Chain Id (Hex)": "0x89",
      EvmChain: "EvmChain.POLYGON",
      Type: "Mainnet",
    },
    {
      Name: "Polygon Amoy",
      "Chain Id (Int)": "80002",
      "Chain Id (Hex)": "0x13881",
      EvmChain: "EvmChain.POLYGON_AMOY",
      Type: "Testnet",
    },
    {
      Name: "Binance Smart Chain Mainnet",
      "Chain Id (Int)": "56",
      "Chain Id (Hex)": "0x38",
      EvmChain: "EvmChain.BSC",
      Type: "Mainnet",
    },
    {
      Name: "Binance Smart Chain Testnet",
      "Chain Id (Int)": "97",
      "Chain Id (Hex)": "0x61",
      EvmChain: "EvmChain.BSC_TESTNET",
      Type: "Testnet",
    },
    {
      Name: "Avalanche C-Chain",
      "Chain Id (Int)": "43114",
      "Chain Id (Hex)": "0xa86a",
      EvmChain: "EvmChain.AVALANCHE",
      Type: "Mainnet",
    },
    {
      Name: "Fantom",
      "Chain Id (Int)": "250",
      "Chain Id (Hex)": "0xfa",
      EvmChain: "EvmChain.FANTOM",
      Type: "Mainnet",
    },
    {
      Name: "Cronos Mainnet",
      "Chain Id (Int)": "25",
      "Chain Id (Hex)": "0x19",
      EvmChain: "EvmChain.CRONOS",
      Type: "Mainnet",
    },
    {
      Name: "Palm",
      "Chain Id (Int)": "11297108109",
      "Chain Id (Hex)": "0x2a15c308d",
      EvmChain: "EvmChain.PALM",
      Type: "Mainnet",
    },
    {
      Name: "Arbitrum",
      "Chain Id (Int)": "42161",
      "Chain Id (Hex)": "0xa4b1",
      EvmChain: "EvmChain.ARBITRUM",
      Type: "Mainnet",
    },
    {
      Name: "Gnosis",
      "Chain Id (Int)": "100",
      "Chain Id (Hex)": "0x64",
      EvmChain: "EvmChain.GNOSIS",
      Type: "Mainnet",
    },
    {
      Name: "Gnosis Chiado",
      "Chain Id (Int)": "10200",
      "Chain Id (Hex)": "0x27d8",
      EvmChain: "EvmChain.GNOSIS_TESTNET",
      Type: "Testnet",
    },
    {
      Name: "Base",
      "Chain Id (Int)": "8453",
      "Chain Id (Hex)": "0x2105",
      EvmChain: "EvmChain.BASE",
      Type: "Mainnet",
    },
    {
      Name: "Base Sepolia",
      "Chain Id (Int)": "84532",
      "Chain Id (Hex)": "0x14a34",
      EvmChain: "EvmChain.BASE_SEPOLIA",
      Type: "Testnet",
    },
    {
      Name: "Optimism",
      "Chain Id (Int)": "10",
      "Chain Id (Hex)": "0xa",
      EvmChain: "EvmChain.OPTIMISM",
      Type: "Mainnet",
    },
    {
      Name: "Optimism Sepolia",
      "Chain Id (Int)": "11155420",
      "Chain Id (Hex)": "0xaa37dc",
      EvmChain: "EvmChain.OPTIMISM_SEPOLIA",
      Type: "Testnet",
    },
    {
      Name: "Linea",
      "Chain Id (Int)": "59144",
      "Chain Id (Hex)": "0xe708",
      EvmChain: "EvmChain.LINEA",
      Type: "Mainnet",
    },
    {
      Name: "Linea Sepolia",
      "Chain Id (Int)": "59141",
      "Chain Id (Hex)": "0xe705",
      EvmChain: "EvmChain.LINEA_SEPOLIA",
      Type: "Testnet",
    },
  ];

  return <Table headers={headers} data={data} />;
};

export default EVMChainData;
