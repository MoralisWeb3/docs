import React from "react";
import GenericTable from "../../Utils/ChainTable";
import chainData from "@site/configs/api-reference/evmChainData";
import Admonition from "@theme/Admonition";

const headers = [
  { key: "name", label: "Name" },
  { key: "type", label: "Type" },
  { key: "chainID", label: "Chain ID" },
  { key: "evmChain", label: "EvmChain" },
  { key: "queryParams", label: "<code>chain</code> Query Parameters" },
];

const EVMChainData = () => {
  const supportedApiChains = chainData.filter(
    (item) => item.evmApi && item.evmApi.supported
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
      <GenericTable data={supportedApiChains} headers={headers} />
    </div>
  );
};
export default EVMChainData;
