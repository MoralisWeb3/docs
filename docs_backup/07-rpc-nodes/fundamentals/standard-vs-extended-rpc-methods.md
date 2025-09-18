---
title: "Standard vs Extended RPC Methods"
slug: "/rpc-methods"
sidebar_label: "Standard vs Extended RPC"
sidebar_position: 3
---

When interacting with blockchain networks, **RPC (Remote Procedure Call) methods** are essential for querying data, submitting transactions, and interacting with smart contracts. There are two categories of RPC methods supported by Moralis: **Standard RPC Methods** and **Extended RPC Methods**.

### Standard RPC Methods

**Standard RPC methods** are the foundational set of methods that are available on most EVM (Ethereum Virtual Machine) compatible blockchains, including Ethereum, Binance Smart Chain, Polygon, and others. These methods are typically defined by the Ethereum JSON-RPC specification and provide the basic functionality required to interact with a blockchain.

#### Common Standard RPC Methods:

- **eth_blockNumber**: Returns the latest block number.
- **eth_getBalance**: Retrieves the balance of a given account.
- **eth_call**: Executes a call to a smart contract without submitting a transaction.
- **eth_sendTransaction**: Sends a transaction to the blockchain.
- **eth_getTransactionByHash**: Retrieves the details of a transaction by its hash.
- **eth_getLogs**: Fetches event logs from smart contracts.

These methods enable developers to:

- Query blockchain data (e.g., block, transaction, or account data).
- Send transactions and interact with smart contracts.
- Monitor event logs and contract executions.

Standard RPC methods are ideal for performing basic blockchain operations, such as querying balances, submitting transactions, or deploying contracts.

### Extended RPC Methods

**Extended RPC methods**, provided by Moralis, go beyond the standard methods by offering more specialized, complex, and aggregated functionalities. These methods allow developers to retrieve more comprehensive data or perform advanced operations that are not available through standard methods. Extended methods simplify complex blockchain interactions, reducing the need to make multiple requests to achieve a single task.

#### Common Extended RPC Methods:

- **eth_getTokenBalances**: Retrieves all ERC20 token balances of a given wallet address in one call.
- **eth_getNFTBalances**: Fetches all NFTs held by a specific wallet.
- **eth_getDecodedTransactions**: Returns transaction history for a wallet, with decoded data for easier interpretation.
- **eth_getTokenPrice**: Retrieves the price of a specific ERC20 token by its contract address.
- **eth_getTokenMetadata**: Provides metadata for a given ERC20 token, such as its name, symbol, and decimals.

These extended methods offer:

- **Aggregated Data Retrieval**: Fetch all token balances or NFT holdings for a wallet in one request, rather than querying each token individually.
- **Decoded Data**: Obtain transaction history or smart contract interactions in a human-readable format, reducing the need for manual decoding.
- **Advanced Queries**: Retrieve data that typically requires multiple standard calls, simplifying the integration and improving performance.

### Key Differences

| Feature            | Standard RPC Methods                                               | Extended RPC Methods                                                   |
| ------------------ | ------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| **Scope**          | Basic blockchain interactions                                      | Advanced and aggregated functionalities                                |
| **Complexity**     | Standardized and relatively simple methods                         | More specialized, often combining multiple actions into one request    |
| **Data Retrieval** | Requires multiple requests for complex data (e.g., token balances) | Fetches aggregated data in a single request (e.g., all token balances) |
| **Usability**      | Requires more manual processing and multiple queries               | Provides decoded, human-readable data                                  |
| **Availability**   | Available on all EVM-compatible chains                             | Available via Moralis for enhanced functionality                       |

### When to Use Standard vs Extended Methods

- **Standard RPC Methods**: Use these for basic operations, such as querying account balances, sending transactions, or interacting with deployed smart contracts.

  - Examples:
    - Checking the balance of an Ethereum address.
    - Sending ETH or an ERC20 token.
    - Retrieving transaction details by hash.

- **Extended RPC Methods**: Use these for more advanced use cases that require detailed or aggregated data, such as fetching all token balances or NFT holdings of a wallet, retrieving decoded transaction history, or getting token metadata.

  - Examples:
    - Fetching all ERC20 token balances or NFTs in one call.
    - Obtaining decoded transaction history for a wallet.
    - Querying token metadata and prices for multiple tokens in one request.

### Conclusion

Both standard and extended RPC methods serve important roles in blockchain development. Standard methods are great for simple interactions and are widely supported across EVM-compatible networks. Extended methods, on the other hand, provide developers with advanced capabilities, enabling more complex data retrieval and reducing the overhead of multiple requests. By leveraging both, you can build efficient and powerful blockchain applications that meet a wide range of user needs.
