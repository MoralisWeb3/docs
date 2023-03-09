import React from "react";
import endpoints from "@site/docs/configs/api-reference/compute-units.json";
const camelToSnakeCase = require("../../../utils/camelToSnakeCase.mts");

interface EndpointWeightResponse {
  endpoint: string;
  path: string;
  price: number;
  rateLimitCost: number;
  dynamic?: boolean;
}

const DynamicPriceUnits = {
  getNativeBalancesForAddresses: "wallet addresses",
  getMultipleNFTs: "NFTs",
};

const ComputeUnitsTable = (): JSX.Element => {
  return (
    <table style={{ textAlign: "center" }}>
      <thead>
        <tr>
          <td rowSpan={2}>Name</td>
          <td rowSpan={2}>Path</td>
          <td colSpan={2}>Price</td>
          <td rowSpan={2}>Rate Limit Cost</td>
        </tr>
        <tr>
          <td>Base</td>
          <td>Additional</td>
        </tr>
      </thead>
      <tbody>
        {endpoints?.map((e: EndpointWeightResponse, index: number) => {
          const { endpoint, path, price, rateLimitCost, dynamic } = e ?? {};
          return (
            <tr key={`${endpoint}-${index}`}>
              <td>
                <a
                  href={`/web3-data-api/reference/${camelToSnakeCase(
                    endpoint
                  )}`}
                >
                  {endpoint}
                </a>
              </td>
              <td>{path}</td>
              <td>{price}</td>
              <td>
                {dynamic
                  ? `+${price} CU${price > 1 ? "s" : ""} per ${
                      DynamicPriceUnits?.[endpoint]
                    }`
                  : 0}
              </td>
              <td>{rateLimitCost}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ComputeUnitsTable;
