// import React from "react";
// import chainData from "../../../../../docs/configs/api-reference/evmChainData";
// import GenericTable from "../../Utils/ChainTable";

// const headers = [
//   { key: "name", label: "Name" },
//   { key: "type", label: "Type" },
//   { key: "chainID", label: "Chain ID" },
//   { key: "evmChain", label: "EvmChain" },
//   { key: "evmApi", label: "EVM API" },
//   { key: "streamsApi", label: "Streams API" },
//   { key: "rpcNodes", label: "RPC Nodes" },
//   { key: "authApi", label: "Auth API" },
// ];

// const EVMChainsCombined = () => (
//   <GenericTable data={chainData} headers={headers} />
// );

// export default EVMChainsCombined;

import React, { useState, useEffect } from "react";
import { useLocation } from "@docusaurus/router";
import chainData from "../../../../../docs/configs/api-reference/evmChainData";
import GenericTable from "../../Utils/ChainTable";
import styles from "../../tabsStyles.module.css";

const baseHeaders = [
  { key: "name", label: "Name" },
  { key: "type", label: "Type" },
  { key: "chainID", label: "Chain ID" },
  { key: "evmChain", label: "EvmChain" },
];

const serviceHeaders = {
  web3api: { key: "evmApi", label: "Web3 Data API" },
  streamsapi: { key: "streamsApi", label: "Streams API" },
  authapi: { key: "authApi", label: "Auth API" },
  rpc: { key: "rpcNodes", label: "RPC Nodes" },
};

const allHeaders = [
  ...baseHeaders,
  { key: "evmApi", label: "Web3 Data API" },
  { key: "streamsApi", label: "Streams API" },
  { key: "authApi", label: "Auth API" },
  { key: "rpcNodes", label: "RPC Nodes" },
];

const EVMChainsCombined = () => {
  const [service, setService] = useState("");
  const [list, setList] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const listParam = params.get("list");
    const serviceParam = params.get("service");

    setList(listParam || "");

    if (!listParam || listParam === "evm") {
      setService(serviceParam || "");
    } else {
      setService("");
    }
  }, [location]);

  const getHeaders = () => {
    if (!service) return allHeaders;
    return [...baseHeaders, serviceHeaders[service]];
  };

  const getFilteredData = () => {
    if (!service) return chainData;
    return chainData.filter(
      (chain) => chain[serviceHeaders[service].key]?.supported
    );
  };

  const handleServiceChange = (event) => {
    const newService = event.target.value;
    setService(newService);
    const searchParams = new URLSearchParams(location.search);
    if (newService) {
      searchParams.set("service", newService);
    } else {
      searchParams.delete("service");
    }
    if (list === "evm") {
      searchParams.set("list", "evm");
    }
    window.history.pushState(
      {},
      "",
      `${location.pathname}?${searchParams.toString()}`
    );
  };

  const showDropdown = !list || list === "evm";

  return (
    <div>
      {showDropdown && (
        <select
          className={styles.serviceSelect}
          value={service}
          onChange={handleServiceChange}
        >
          <option value="">All Services</option>
          <option value="web3api">Web3 Data API</option>
          <option value="streamsapi">Streams API</option>
          <option value="authapi">Auth API</option>
          <option value="rpc">RPC Nodes</option>
        </select>
      )}
      <GenericTable data={getFilteredData()} headers={getHeaders()} />
    </div>
  );
};

export default EVMChainsCombined;
