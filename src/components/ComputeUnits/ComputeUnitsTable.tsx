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
  getNFTsById: "token_ids",
  getNFTsByCreators: "creator_addresses",
  getNFTCollectionsById: "ids",
  getNFTCollectionsByCreator: "creator_addresses",
  getNFTOwnersByToken: "token_ids",
  getNFTTransfersByIds: "token_ids",
  getNFTTransfersByCreators: "creator_addresses",
  getNFTTransfersByWallets: "wallet_addresses",
  getCoinInfoByCoinTypeHashes: "coin_type_hashes",
  getCoinsByCreators: "creator_addresses",
  getCoinTransfersByOwnerAddresses: "owner_addresses",
  getCoinTransfersByWalletAddresses: "wallet_addresses",
  getCoinBalancesByWallets: "owner_addresses",
  getHistoricalCoinBalancesByWallets: "owner_addresses",
  getWalletNFTTransfers: "owner_addresses",
  getNFTByWalletAddresses: "owner_addresses",
  getMultipleTokenPrices: "tokens",
  getWalletActiveChains: "chains",
};

const ComputeUnitsTable = ({ chain }): JSX.Element => {
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
        {endpoints?.[chain]?.map((e: EndpointWeightResponse, index: number) => {
          const { endpoint, path, price, rateLimitCost, dynamic } = e ?? {};
          return (
            <tr key={`${endpoint}-${index}`}>
              <td>
                <a
                  href={`/web3-data-api/${chain}/reference/${camelToSnakeCase(
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
