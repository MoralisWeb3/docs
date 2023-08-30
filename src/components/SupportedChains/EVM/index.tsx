import React from "react";
import Table from "../Utils/index";

const EVMChainData = () => {
  const headers = ["Name", "Chain id", "EvmChain", "Type"] as const;

  const data: Record<(typeof headers)[number], string>[] = [
    {
      Name: "Ethereum Mainnet",
      "Chain id": "1",
      EvmChain: "EvmChain.ETHEREUM",
      Type: "Mainnet",
    },
    {
      Name: "Ethereum Ropsten* (deprecated)*",
      "Chain id": "3",
      EvmChain: "EvmChain.ROPSTEN",
      Type: "Testnet",
    },
    {
      Name: "Ethereum Rinkeby* (deprecated)*",
      "Chain id": "4",
      EvmChain: "EvmChain.RINKEBY",
      Type: "Testnet",
    },
    {
      Name: "Ethereum Görli",
      "Chain id": "5",
      EvmChain: "EvmChain.GOERLI",
      Type: "Testnet",
    },
    {
      Name: "Ethereum Kovan* (deprecated)*",
      "Chain id": "42",
      EvmChain: "EvmChain.KOVAN",
      Type: "Testnet",
    },
    {
      Name: "Ethereum Sepolia",
      "Chain id": "11155111",
      EvmChain: "EvmChain.SEPOLIA",
      Type: "Testnet",
    },
    {
      Name: "Polygon Mainnet",
      "Chain id": "137",
      EvmChain: "EvmChain.POLYGON",
      Type: "Mainnet",
    },
    {
      Name: "Polygon Mumbai",
      "Chain id": "80001",
      EvmChain: "EvmChain.MUMBAI",
      Type: "Testnet",
    },
    {
      Name: "Binance Smart Chain Mainnet",
      "Chain id": "56",
      EvmChain: "EvmChain.BSC",
      Type: "Mainnet",
    },
    {
      Name: "Binance Smart Chain Testnet",
      "Chain id": "97",
      EvmChain: "EvmChain.BSC_TESTNET",
      Type: "Testnet",
    },
    {
      Name: "Avalanche C-Chain",
      "Chain id": "43114",
      EvmChain: "EvmChain.AVALANCHE",
      Type: "Mainnet",
    },
    {
      Name: "Fantom",
      "Chain id": "250",
      EvmChain: "EvmChain.FANTOM",
      Type: "Mainnet",
    },
    {
      Name: "Cronos Mainnet",
      "Chain id": "25",
      EvmChain: "EvmChain.CRONOS",
      Type: "Mainnet",
    },
    {
      Name: "Palm",
      "Chain id": "11297108109",
      EvmChain: "EvmChain.PALM",
      Type: "Mainnet",
    },
    {
      Name: "Arbitrum",
      "Chain id": "42161",
      EvmChain: "EvmChain.ARBITRUM",
      Type: "Mainnet",
    },
  ];

  return <Table headers={headers} data={data} />;
};

export default EVMChainData;
