import React from "react";
// import chainData from "../../../../../configs/api-reference/evmChainData";
import chainData from "../../../../../configs/api-reference/evmChainData";
import GenericTable from "../../Utils/ChainTable";
import Admonition from "@theme/Admonition";

const headers = [
    { key: "name", label: "Name" },
    { key: "type", label: "Type" },
    { key: "chainID", label: "Chain ID" },
    // { key: "evmChain", label: "EvmChain" },
    { key: "internalTxs", label: "Internal Transaction Support" },
    { key: "blockConfirmations", label: "Blocks Until Confirmed" },
];

const EVMStreamChainData = () => {
    const supportedStreamChains = chainData.filter(
        (item) => item.streamsApi && item.streamsApi.supported
    );

    return (
        <div>
            <Admonition type="tip" title="Supported Chains">
                <p>
                    See the table below for all supported chains we support on Streams. For wider
                    chains we support across all products, check the{" "}
                    <b>
                        <a href="/supported-chains">full list of supported chains.</a>
                    </b>
                </p>
            </Admonition>
            <GenericTable data={supportedStreamChains} headers={headers} />
        </div>
    );
};

export default EVMStreamChainData;
