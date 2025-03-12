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

const fixedPath = {
  getWalletNetWorth: "wallet-api/get-wallet-net-worth",
  getWalletHistory: "wallet-api/get-wallet-history",
  getWalletStats: "wallet-api/get-wallet-stats",
  getHottestNFTCollectionsByTradingVolume:
    "get-top-nft-collections-by-trading-volume",
  getWalletActiveChains: "wallet-api/get-chain-activity-by-wallet",
  resolveENSDomain: "wallet-api/resolve-address",
  resolveAddress: "wallet-api/resolve-ens-domain",
  getLogsByAddress: "get-contract-logs",
  resolveAddressToDomain: "wallet-api/resolve-address-to-domain",
  resolveDomain: "wallet-api/resolve-domain",
  reSyncMetadata: "resync-metadata",
  getTokenIdMetadata: "get-nft-metadata",
  getTokenIdOwners: "get-nft-token-id-owners",
  getWalletTokenIdTransfers: "get-nft-transfers",
  getContractNFTTransfers: "get-nft-contract-transfers",
  getAllTokenIds: "get-contract-nfts",
  getNFTs: "get-wallet-nfts",
  getNFTFloorPriceByContract: "get-nft-floor-price-by-contract",
  getNFTFloorPriceByToken: "get-nft-floor-price-by-token",
  getNFTHistoricalFloorPriceByContract:
    "get-nft-historical-floor-price-by-contract",
  getTokenAddressTransfers: "get-token-transfers",
  getWalletTokenBalances: "get-wallet-token-balances",
  getTransactionVerbose: "get-decoded-transaction",
  getTransactionsVerbose: "get-decoded-wallet-transaction",
  getTransactions: "get-wallet-transactions",
  getWalletProfitabilitySummary: "wallet-api/get-wallet-profitability-summary",
  getWalletProfitability: "wallet-api/get-wallet-profitability",
  resyncNFTRarity: "resync-nft-traits-by-collection",
  getNFTByContractTraits: "get-nfts-by-traits",
  getWalletApprovals: "wallet-api/get-wallet-token-approvals",
  getEntitiesByCategory: "entity-api/get-entities-by-category",
  getEntity: "entity-api/get-entity-by-id",
  getEntityCategories: "entity-api/get-entity-categories",
  searchEntities: "entity-api/search-entities",
  getRisingLiquidityTokens: "get-tokens-with-rising-liquidity",
  getTopBuyPressureTokens: "get-tokens-with-buying-pressure",
  getExperiencedBuyerTokens: "get-tokens-with-experienced-buyers",
  getSolidPerformanceTokens: "get-tokens-with-solid-performance",
  getBlueChipTokens: "get-tokens-with-blue-chip",
  getRiskyBetTokens: "get-tokens-with-risky-bets",
  getTopGainersTokens: "get-tokens-with-top-gainers",
  getTopLosersTokens: "get-tokens-with-top-losers",
  getTrendingTokens: "get-trending-tokens",
  getDiscoveryToken: "get-token-details",
  getSwapsByPairAddress: "get-swaps-by-pair-address",
  getSwapsByTokenAddress: "get-swaps-by-token-address",
  getSwapsByWalletAddress: "get-swaps-by-wallet-address",
  getCandleSticks: "get-ohlcv-by-pair-address",
  getSnipersByPairAddress: "get-snipers-by-pair-address",
  getPairStats: "get-token-pair-stats",
  getFilteredTokens: "get-filtered-tokens",
  // getVolumeStatsByChain: "",
  // getVolumeStatsByCategory: "",
  // getTimeSeriesVolume: "",
  // getTimeSeriesVolumeByCategory: "",
  // getDateToBlock: "",
  getTokenHolders: "get-token-holders",
  // getHistoricalTokenHolders: "",
  searchTokens: "search-tokens",
};

const DynamicPriceUnits = {
  getWalletNetWorth: "chains",
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
          const hrefPath = fixedPath[endpoint]
            ? fixedPath[endpoint]
            : camelToSnakeCase(endpoint);
          const additionalInfo = dynamic
            ? `+${price} CU${price > 1 ? "s" : ""} per ${
                DynamicPriceUnits?.[endpoint]
              }`
            : "0";

          return (
            <tr key={`${endpoint}-${index}`}>
              <td>
                <a href={`/web3-data-api/${chain}/reference/${hrefPath}`}>
                  {endpoint}
                </a>
              </td>
              <td>{path}</td>
              <td>{price}</td>
              <td>{additionalInfo}</td>
              <td>{rateLimitCost}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ComputeUnitsTable;
