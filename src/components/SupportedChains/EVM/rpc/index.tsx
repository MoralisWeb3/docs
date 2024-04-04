import React from "react";
import Table from "../../Utils/index";

const RpcChainData = () => {
  const headers = [
    "Name",
    "Chain Id (Int)",
    "Chain Id (Hex)",
    "EvmChain",
    "Type",
    "URL",
  ] as const;

  const data: Record<(typeof headers)[number], string>[] = [
    {
      Name: "Ethereum Mainnet",
      "Chain Id (Int)": "1",
      "Chain Id (Hex)": "0x1",
      EvmChain: "EvmChain.ETHEREUM",
      Type: "Mainnet",
      URL: "https://site1.moralis-nodes.com/eth/{apiKey}",
    },
    {
      Name: "Eth Holesky (testnet)",
      "Chain Id (Int)": "17000",
      "Chain Id (Hex)": "0x4268",
      EvmChain: "EvmChain.HOLESKY",
      Type: "Testnet",
      URL: "https://site1.moralis-nodes.com/holesky/{apiKey}",
    },
    {
      Name: "Polygon Mainnet",
      "Chain Id (Int)": "137",
      "Chain Id (Hex)": "0x89",
      EvmChain: "EvmChain.POLYGON",
      Type: "Mainnet",
      URL: "https://site1.moralis-nodes.com/polygon/{apiKey}",
    },
    {
      Name: "Polygon Amoy (testnet)",
      "Chain Id (Int)": "80002",
      "Chain Id (Hex)": "0x13882",
      EvmChain: "EvmChain.AMOY",
      Type: "Testnet",
      URL: "https://site1.moralis-nodes.com/amoy/{apiKey}",
    },
    {
      Name: "Binance Mainnet",
      "Chain Id (Int)": "56",
      "Chain Id (Hex)": "0x38",
      EvmChain: "EvmChain.BINANCE",
      Type: "Mainnet",
      URL: "https://site1.moralis-nodes.com/bsc/{apiKey}",
    },
    {
      Name: "Arbitrum Mainnet",
      "Chain Id (Int)": "42161",
      "Chain Id (Hex)": "0xa4b1",
      EvmChain: "EvmChain.ARBITRUM",
      Type: "Mainnet",
      URL: "https://site1.moralis-nodes.com/arbitrum/{apiKey}",
    },
    {
      Name: "Optimism Mainnet",
      "Chain Id (Int)": "10",
      "Chain Id (Hex)": "0xa",
      EvmChain: "EvmChain.OPTIMISM",
      Type: "Mainnet",
      URL: "https://site1.moralis-nodes.com/optimism/{apiKey}",
    },
    {
      Name: "Base Mainnet",
      "Chain Id (Int)": "8453",
      "Chain Id (Hex)": "0x2105",
      EvmChain: "EvmChain.BASE",
      Type: "Mainnet",
      URL: "https://site1.moralis-nodes.com/base/{apiKey}",
    },
  ];

  return <Table headers={headers} data={data} />;
};

export default RpcChainData;
