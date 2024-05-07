import React from "react";
import chainData from "../../../../../docs/configs/api-reference/evmChainData";
import GenericTable from "../../Utils/ChainTable";

const headers = [
  { key: "name", label: "Name" },
  { key: "type", label: "Type" },
  { key: "chainID", label: "Chain ID" },
  { key: "evmChain", label: "EvmChain" },
  { key: "evmApi", label: "EVM API" },
  { key: "streamsApi", label: "Streams API" },
  { key: "rpcNodes", label: "RPC Nodes" },
  { key: "authApi", label: "Auth API" },
];

const EVMChainsCombined = () => (
  <GenericTable data={chainData} headers={headers} />
);

export default EVMChainsCombined;
