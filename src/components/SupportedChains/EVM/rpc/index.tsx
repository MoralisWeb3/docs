import React from "react";
import chainData from "../../../../../configs/api-reference/evmChainData";
import GenericTable from "../../Utils/ChainTable";
import Admonition from "@theme/Admonition";

const headers = [
  { key: "name", label: "Name" },
  { key: "type", label: "Type" },
  { key: "chainID", label: "Chain ID" },
  { key: "evmChain", label: "EvmChain" },
  { key: "urls", label: "URLs" },
];

const RpcChainData = () => {
  const supportedNodes = chainData.filter(
    (item) => item.rpcNodes && item.rpcNodes.supported
  );

  return (
    <div>
      <Admonition type="tip" title="Supported Chains">
        <p>
          See the table below for all supported RPC Nodes. For wider chains we
          support across all products, check the{" "}
          <a href="/supported-chains">full list of supported chains.</a>
        </p>
      </Admonition>
      <GenericTable data={supportedNodes} headers={headers} />
    </div>
  );
};

export default RpcChainData;
