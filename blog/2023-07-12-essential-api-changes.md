---
title: "⚠️ Coming September 11th: Essential API Changes"
slug: "essential-api-changes"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

Beginning on **September 11th, 2023**, we're implementing a series of significant API changes, some of which are breaking changes, but will ultimately provide you with a faster, more reliable, and more consistent experience.

These changes are:

- The `total` field in the response body and the `disable_total` query parameter will be removed from a number of endpoints. Customers who have already stopped using these features following earlier updates will not be affected. The affected endpoints include [`getTokenTransfers`](/web3-data-api/evm/reference/get-wallet-token-transfers), [`getNFTs`](/web3-data-api/evm/reference/get-wallet-nfts), [`getWalletNFTCollections`](/web3-data-api/evm/reference/wallet-api/get-nft-collections-by-wallet), [`getNFTTrades`](/web3-data-api/evm/reference/get-nft-trades), [`getNFTTransfers`](/web3-data-api/evm/reference/get-wallet-nft-transfers), [`getContractNFTTransfers`](/web3-data-api/evm/reference/get-nft-contract-transfers), [`getNFTOwners`](/web3-data-api/evm/reference/get-nft-owners), [`getTokenAddressTransfers`](/web3-data-api/evm/reference/get-token-transfers), [`getWalletTokenIdTransfers`](/web3-data-api/evm/reference/get-nft-transfers), [`getAllTokenIds`](/web3-data-api/evm/reference/get-contract-nfts), [`getNFTTransfersFromToBlock`], [`getNFTTransfersByBlock`], [`getTokenIdOwners`](/web3-data-api/evm/reference/get-nft-token-id-owners), [`getTransactions`](/web3-data-api/evm/reference/wallet-api/get-transactions-by-wallet), [`getContractEvents`].
  - Global totals will be re-introduced under new endpoints. See the [migration guide](/web3-data-api/breaking-changes/migration-guide) for more detail.
- The `direction` query parameter is being removed from the [`getNFTTransfers`](/web3-data-api/evm/reference/get-wallet-nft-transfers) endpoint.
- For the [`getLogsByAddress`] endpoint, the `topic0` field will now be required, and we will be removing the `topic1`, `topic2`, and `topic3` fields.
- The following endpoints will be deprecated: [`searchNFTs`](/2.0/web3-data-api/evm/reference/search-nfts), [`getErc20Mints`](/2.0/web3-data-api/evm/reference/get-erc20-mints), [`getErc20Burns`](/2.0/web3-data-api/evm/reference/get-erc20-burns), [`getErc20Transfers`](/2.0/web3-data-api/reference/get-erc20-transfers), [`getErc20Approvals`](/2.0/web3-data-api/evm/reference/get-erc20-approvals).

If you are affected by these changes you can find a detailed [migration guide here](/web3-data-api/breaking-changes/migration-guide).

These changes will improve the speed, consistency, and scalability of our API, making it easier for you to work with whilst laying the foundations for what’s coming next… In the short term, expect enhancements like **wallet net-worth**, **NFT prices** and **ERC20 holders**. Rest assured, more improvements are on the way very soon!

Check out our [Roadmap](https://roadmap.moralis.io/) to stay up-to-date with all of the features we have coming soon.
