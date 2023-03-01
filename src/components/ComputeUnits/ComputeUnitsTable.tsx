import React, { useState, useEffect } from "react";
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
  const [endpoints, setEndpoints] = useState<EndpointWeightResponse[]>([]);

  const fetchComputeUnits = async () => {
    try {
      const response = await fetch(
        "https://deep-index.moralis.io/api/v2/info/endpointWeights",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            "X-API-Key": "TEST",
            Authorization: "Bearer TEST",
            "x-moralis-source": "api reference",
            referer: "moralis.io",
          },
        }
      );

      if (!response.ok) throw new Error();

      const fetchBody = await response.json();

      setEndpoints(fetchBody);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchComputeUnits();
  }, []);

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
        {endpoints?.map((e, index) => {
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
