import React from "react";
import Table from "../../Utils/index";

const EVMAuthChainData = () => {
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
      Name: "Ethereum Görli",
      "Chain Id (Int)": "5",
      "Chain Id (Hex)": "0x5",
      EvmChain: "EvmChain.GOERLI",
      Type: "Testnet",
    },
    {
      Name: "Ethereum Sepolia",
      "Chain Id (Int)": "11155111",
      "Chain Id (Hex)": "0xaa36a7",
      EvmChain: "EvmChain.SEPOLIA",
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
      Name: "Polygon Mumbai",
      "Chain Id (Int)": "80001",
      "Chain Id (Hex)": "0x13881",
      EvmChain: "EvmChain.MUMBAI",
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
      EvmChain: "EvmChain.GNOSIS_CHIADO",
      Type: "Testnet",
    },
  ];

  return <Table headers={headers} data={data} />;
};

export default EVMAuthChainData;
