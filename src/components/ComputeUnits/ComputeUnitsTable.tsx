import React, { useState, useEffect } from "react";
const camelToSnakeCase = require("../../../utils/camelToSnakeCase.mts");

interface EndpointWeightResponse {
  endpoint: string;
  path: string;
  price: number;
  rateLimitCost: number;
}

const ComputeUnitsTable = (): JSX.Element => {
  const [endpoints, setEndpoints] = useState<EndpointWeightResponse[]>([]);

  const fetchComputeUnits = async () => {
    try {
      const response = await fetch("/api/exec", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          method: "GET",
          apiHost: "https://deep-index.moralis.io/api/v2",
          path: "/info/endpointWeights",
        }),
      });

      if (!response.ok) throw new Error();

      const { body } = await response.json();

      setEndpoints(body);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchComputeUnits();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Rate Limit Cost</td>
        </tr>
      </thead>
      <tbody>
        {endpoints?.map((e, index) => {
          const { endpoint, price, rateLimitCost } = e ?? {};
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
              <td>{price}</td>
              <td>{rateLimitCost}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ComputeUnitsTable;
