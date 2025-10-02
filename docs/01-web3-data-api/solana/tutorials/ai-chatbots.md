---
title: "Building AI Chatbots with Moralis API"
slug: "/web3-data-api/solana/tutorials/ai-chatbots"
sidebar_label: "Building AI Chatbots"
sidebar_position: 4
sidebar_class_name: "sidebar-ai-chatbot-tutorials"
description: "Learn how to create intelligent AI chatbots that provide blockchain data insights using Moralis API"
---

# Building AI Chatbots with Moralis API

In today's rapidly evolving Web3 landscape, AI-powered chatbots have become essential tools for providing users with instant access to blockchain data and insights. By combining large language models (LLMs) with Moralis's comprehensive Web3 APIs, developers can create powerful conversational interfaces that unlock blockchain data for everyone.

This guide will help you build AI chatbots that can effectively:

- Parse user queries about blockchain data
- Map these queries to the appropriate Moralis API endpoints
- Format and present blockchain data in a conversational manner
- Support both EVM chains and Solana

## Table of Contents


- <a href="#getting-started">Getting Started</a>
- <a href="#ai-query-to-api-endpoint-mapping">AI Query to API Endpoint Mapping</a>
  
  - <a href="#evm-chains">EVM Chains</a>
  - <a href="#solana">Solana</a>
  - <a href="#cross-chain-capabilities">Cross-Chain Capabilities</a>
  

- <a href="#implementation-approaches">Implementation Approaches</a>
  
  - <a href="#prompt-engineering">Prompt Engineering</a>
  - <a href="#function-calling">Function Calling</a>
  - <a href="#rag-retrieval-augmented-generation">RAG (Retrieval-Augmented Generation)</a>
  

- <a href="#best-practices">Best Practices</a>
- <a href="#resources">Resources</a>


## Getting Started

Before diving into building your AI chatbot with Moralis:

1. **Set up your Moralis account**: Sign up at [developers.moralis.com](https://developers.moralis.com) and obtain your API key
2. **Choose your AI model provider**: Options include OpenAI, Anthropic, Cohere, or open-source models via providers like Hugging Face
3. **Plan your chatbot's capabilities**: Decide which blockchain data features you want to support
4. **Review API documentation**: Familiarize yourself with [EVM API Reference](https://docs.moralis.com/web3-data-api/evm/reference) and [Solana API Reference](https://docs.moralis.com/web3-data-api/solana/reference)

## AI Query to API Endpoint Mapping

The most crucial aspect of building an effective blockchain AI chatbot is accurately mapping natural language queries to the appropriate API endpoints. Below is a detailed breakdown for both EVM and Solana chains.

### EVM Chains

#### Wallet Analysis

| User Query                          | Moralis API Endpoint                                                                                                                | Description                                         |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| "What's in my wallet 0x123...?"     | [`getWalletTokenBalancesPrices`](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/get-wallet-token-balances-price)   | Returns all tokens with prices in a wallet          |
| "What NFTs do I own?"               | [`getWalletNFTs`](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/get-nfts-by-wallet)                               | Lists all NFTs owned by a wallet                    |
| "Show my DeFi positions"            | [`getDefiPositionsSummary`](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/get-defi-positions-summary)             | Returns all DeFi positions across protocols         |
| "What is my net worth?"             | [`getWalletNetWorth`](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/get-wallet-net-worth)                         | Calculates total portfolio value across all assets  |
| "Generate a PnL for my wallet"      | [`getWalletProfitabilitySummary`](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/get-wallet-profitability-summary) | Creates profit and loss summary for a wallet        |
| "What token approvals have I made?" | [`getWalletApprovals`](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/get-wallet-token-approvals)                  | Lists all token approval permissions granted        |
| "Show my swap history"              | [`getSwapsByWalletAddress`](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/get-swaps-by-wallet-address)            | Returns DEX swap history for a wallet               |
| "What chains am I active on?"       | [`getWalletActiveChains`](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/get-chain-activity-by-wallet)             | Shows blockchain networks where wallet has activity |
| "What's the domain for 0x123...?"   | [`resolveAddressToDomain`](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/resolve-address-to-domain)               | Resolves wallet address to ENS or other domain      |
| "What wallet owns vitalik.eth?"     | [`resolveENSDomain`](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/resolve-ens-domain)                            | Resolves ENS domain to wallet address               |

[View EVM Wallet API Documentation →](https://docs.moralis.com/web3-data-api/evm/reference#wallet-api)

#### Token Analysis

| User Query                                                   | Moralis API Endpoint                                                                                                         | Description                                                           |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| "What's the price of ETH?"                                   | [`getTokenPrice`](https://docs.moralis.com/web3-data-api/evm/reference/price/get-token-price)                                | Gets current price of a token                                         |
| "How many people hold $CGPT?"                                | [`getTokenHolderStats`](https://docs.moralis.com/web3-data-api/evm/reference/get-token-holder-stats)                         | Returns total holders and related metrics                             |
| "What is the change in $ETH holders in the last 30 days?"    | [`getHistoricalTokenHolders`](https://docs.moralis.com/web3-data-api/evm/reference/get-historical-token-holders)             | Returns token holder changes over time                                |
| "Who are the most profitable traders of $ETH?"               | [`getTopProfitableWalletPerToken`](https://docs.moralis.com/web3-data-api/evm/reference/get-top-profitable-wallet-per-token) | Lists wallets with highest profit trading a token                     |
| "What tokens are trending right now?"                        | [`getTrendingTokens`](https://docs.moralis.com/web3-data-api/evm/reference/get-trending-tokens)                              | Returns tokens with highest momentum                                  |
| "Which tokens have the biggest gains today?"                 | [`getTopGainersTokens`](https://docs.moralis.com/web3-data-api/evm/reference/get-tokens-with-top-gainers)                    | Returns tokens with highest price increases                           |
| "Show me detailed analytics for token $CGPT"                 | [`getTokenAnalytics`](https://docs.moralis.com/web3-data-api/evm/reference/get-token-analytics)                              | Returns comprehensive analytics with volume metrics and user activity |
| "What's the trading volume of $LINK?"                        | [`getTokenStats`](https://docs.moralis.com/web3-data-api/evm/reference/get-token-stats)                                      | Provides volume and other trading statistics                          |
| "Show price chart for ETH/USDT pair"                         | [`getPairCandlesticks`](https://docs.moralis.com/web3-data-api/evm/reference/price/get-ohlcv-by-pair-address)                | Returns OHLCV data for token trading pairs                            |
| "What are the top tokens by market cap?"                     | [`getTopERC20TokensByMarketCap`](https://docs.moralis.com/web3-data-api/evm/reference/get-top-erc20-tokens-by-market-cap)    | Lists tokens ranked by market capitalization                          |
| "Find tokens related to AI"                                  | [`searchTokens`](https://docs.moralis.com/web3-data-api/evm/reference/search-tokens)                                         | Searches tokens by name, symbol or category                           |
| "Show me tokens with high trading volume and low market cap" | [`getFilteredTokens`](https://docs.moralis.com/web3-data-api/evm/reference/get-filtered-tokens)                              | Filters tokens based on multiple metrics and parameters               |

[View EVM Token API Documentation →](https://docs.moralis.com/web3-data-api/evm/reference#token-api)

#### NFT Insights

| User Query                                   | Moralis API Endpoint                                                                                                                    | Description                                     |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| "Who owns this NFT collection?"              | [`getNFTOwners`](https://docs.moralis.com/web3-data-api/evm/reference/get-nft-owners)                                                   | Returns all owners for an NFT collection        |
| "What's the floor price of Bored Apes?"      | [`getNFTFloorPriceByContract`](https://docs.moralis.com/web3-data-api/evm/reference/price/get-nft-floor-price-by-contract)              | Returns minimum listing price for collection    |
| "What metadata is in this NFT?"              | [`getNFTMetadata`](https://docs.moralis.com/web3-data-api/evm/reference/get-nft-metadata)                                               | Returns all metadata for a specific NFT         |
| "Show me the rarest NFTs in this collection" | [`getNFTTraitsByCollection`](https://docs.moralis.com/web3-data-api/evm/reference/get-nft-traits-by-collection)                         | Analyzes trait rarity distribution              |
| "What NFT collections are trending?"         | [`getTopNFTCollectionsByTradingVolume`](https://docs.moralis.com/web3-data-api/evm/reference/get-top-nft-collections-by-trading-volume) | Lists collections with highest trading activity |
| "How much was this NFT last sold for?"       | [`getNFTSalePrices`](https://docs.moralis.com/web3-data-api/evm/reference/price/get-nft-sale-prices)                                    | Returns sales history for a specific NFT        |
| "Who traded this NFT collection recently?"   | [`getNFTTrades`](https://docs.moralis.com/web3-data-api/evm/reference/get-nft-trades)                                                   | Shows recent trades for a collection            |
| "Which NFT collections do I own?"            | [`getWalletNFTCollections`](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/get-nft-collections-by-wallet)              | Groups wallet NFTs by collection                |

[View EVM NFT API Documentation →](https://docs.moralis.com/web3-data-api/evm/reference#nft-api)

#### Market & DeFi Data

| User Query                                                           | Moralis API Endpoint                                                                                                   | Description                                                        |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| "What are the top DEXs by volume?"                                   | [`getVolumeStatsByCategory`](https://docs.moralis.com/web3-data-api/reference/get-volume-stats-by-category)            | Ranks DEXs by trading volume with buy/sell breakdowns              |
| "Show liquidity for ETH/USDC pair"                                   | [`getPairReserves`](https://docs.moralis.com/web3-data-api/evm/reference/get-pair-reserves)                            | Returns liquidity pool reserves                                    |
| "What pairs exist for $UNI token?"                                   | [`getTokenPairs`](https://docs.moralis.com/web3-data-api/evm/reference/get-token-pairs)                                | Lists all trading pairs for a token                                |
| "Which DeFi protocols am I using?"                                   | [`getDefiSummary`](https://docs.moralis.com/web3-data-api/evm/reference/get-defi-summary)                              | Summarizes DeFi activity by protocol                               |
| "What's the trading volume across different chains?"                 | [`getVolumeStatsByChain`](https://docs.moralis.com/web3-data-api/reference/get-volume-stats-by-chain)                  | Returns detailed volume metrics across multiple chains             |
| "Show volume trends for AI tokens over the last week"                | [`getTimeSeriesVolumeByCategory`](https://docs.moralis.com/web3-data-api/reference/get-time-series-volume-by-category) | Provides historical volume data by category with custom timeframes |
| "Compare the trading volume of AI vs Gaming tokens"                  | [`getVolumeStatsByCategory`](https://docs.moralis.com/web3-data-api/reference/get-volume-stats-by-category)            | Compares volume statistics across different token categories       |
| "How has the trading volume changed for Ethereum in the last month?" | [`getTimeSeriesVolume`](https://docs.moralis.com/web3-data-api/reference/get-time-series-volume)                       | Shows volume changes over time for specific chains                 |

[View EVM DeFi API Documentation →](https://docs.moralis.com/web3-data-api/evm/reference#defi-api)

### Solana

#### Wallet Analysis

| User Query                            | Moralis API Endpoint                                                                                             | Description                                    |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| "What's in my Solana wallet?"         | [`getPortfolio`](https://docs.moralis.com/web3-data-api/solana/reference/get-sol-portfolio)                      | Returns complete portfolio for a Solana wallet |
| "What's my SOL balance?"              | [`balance`](https://docs.moralis.com/web3-data-api/solana/reference/sol-balance)                                 | Returns native SOL balance for wallet          |
| "What SPL tokens do I own?"           | [`getSPL`](https://docs.moralis.com/web3-data-api/solana/reference/get-spl)                                      | Lists all SPL tokens owned by a wallet         |
| "Show my Solana NFTs"                 | [`getNFTs`](https://docs.moralis.com/web3-data-api/solana/reference/get-sol-nfts)                                | Returns all NFTs owned by a Solana wallet      |
| "What are my recent swaps on Solana?" | [`getSwapsByWalletAddress`](https://docs.moralis.com/web3-data-api/solana/reference/get-swaps-by-wallet-address) | Shows recent DEX swaps on Solana               |

[View Solana Wallet API Documentation →](https://docs.moralis.com/web3-data-api/solana/reference#wallet-api)

#### Token Analysis

| User Query                                              | Moralis API Endpoint                                                                                                       | Description                                                      |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| "What's the price of SOL?"                              | [`getTokenPrice`](https://docs.moralis.com/web3-data-api/solana/reference/get-sol-token-price)                             | Gets current price of a Solana token                             |
| "Show me new tokens on PumpFun"                         | [`getNewTokensByExchange`](https://docs.moralis.com/web3-data-api/solana/reference/get-new-tokens-by-exchange)             | Lists newly created tokens on Pump.fun                           |
| "What tokens are in bonding phase on Solana?"           | [`getBondingTokensByExchange`](https://docs.moralis.com/web3-data-api/solana/reference/get-bonding-tokens-by-exchange)     | Returns tokens currently in the bonding phase                    |
| "Show me tokens that have completed bonding on PumpFun" | [`getGraduatedTokensByExchange`](https://docs.moralis.com/web3-data-api/solana/reference/get-graduated-tokens-by-exchange) | Lists tokens that have completed the bonding phase               |
| "What is the bonding status of this token?"             | [`getTokenBondingStatus`](https://docs.moralis.com/web3-data-api/solana/reference/get-bonding-status-by-token-address)     | Shows precise bonding curve progress percentages                 |
| "Show the trading pairs for this Solana token"          | [`getTokenPairs`](https://docs.moralis.com/web3-data-api/solana/reference/get-token-pairs-by-address)                      | Lists all trading pairs for a Solana token                       |
| "What's the trading volume on this pair?"               | [`getTokenPairStats`](https://docs.moralis.com/web3-data-api/solana/reference/get-token-pair-stats)                        | Returns trading statistics for a token pair                      |
| "Compare multiple Solana tokens' analytics"             | [`getMultipleTokenAnalytics`](https://docs.moralis.com/web3-data-api/solana/reference/get-multiple-token-analytics)        | Fetches analytics for multiple Solana tokens in a single request |
| "Show price chart for this Solana token"                | [`getCandleSticks`](https://docs.moralis.com/web3-data-api/solana/reference/get-ohlcv-by-pair-address)                     | Returns OHLCV data for Solana token pairs                        |
| "Who are the snipers for this token?"                   | [`getSnipersByPairAddress`](https://docs.moralis.com/web3-data-api/solana/reference/get-snipers-by-pair-address)           | Lists snipers for a specific token pair                          |
| "Find trending tokens on Solana"                        | [`getTrendingTokens`](https://docs.moralis.com/web3-data-api/solana/reference/get-trending-tokens)                         | Returns trending tokens on Solana                                |

[View Solana Token API Documentation →](https://docs.moralis.com/web3-data-api/solana/reference#token-api)

#### NFT Analysis

| User Query                                | Moralis API Endpoint                                                                             | Description                                |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| "What NFTs do I own on Solana?"           | [`getNFTs`](https://docs.moralis.com/web3-data-api/solana/reference/get-sol-nfts)                | Lists all NFTs owned by a Solana wallet    |
| "What's the metadata of this Solana NFT?" | [`getNFTMetadata`](https://docs.moralis.com/web3-data-api/solana/reference/get-sol-nft-metadata) | Returns detailed metadata for a Solana NFT |

[View Solana NFT API Documentation →](https://docs.moralis.com/web3-data-api/solana/reference#nft-api)

### Cross-Chain Capabilities

For users who operate across multiple chains, your chatbot should be able to handle cross-chain queries smoothly:

| User Query                                                    | Implementation Approach                                                                                                                                                                                                          | Description                                          |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| "Show my assets across all chains"                            | Call both EVM [`getWalletNetWorth`](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/get-wallet-net-worth) and Solana [`getPortfolio`](https://docs.moralis.com/web3-data-api/solana/reference/get-sol-portfolio) | Aggregates data from multiple blockchains            |
| "Compare my ETH and SOL holdings"                             | Call EVM [`getNativeBalance`](https://docs.moralis.com/web3-data-api/evm/reference/get-native-balance) and Solana [`balance`](https://docs.moralis.com/web3-data-api/solana/reference/sol-balance)                               | Shows native balances across different chains        |
| "Which chains have the most trading volume?"                  | Call [`getVolumeStatsByChain`](https://docs.moralis.com/web3-data-api/reference/get-volume-stats-by-chain)                                                                                                                       | Shows detailed volume metrics across multiple chains |
| "Show all my NFTs on Ethereum and Solana"                     | Call EVM [`getWalletNFTs`](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/get-nfts-by-wallet) and Solana [`getNFTs`](https://docs.moralis.com/web3-data-api/solana/reference/get-sol-nfts)                      | Consolidates NFT holdings across chains              |
| "How does token trading activity compare between chains?"     | Call [`getTimeSeriesVolume`](https://docs.moralis.com/web3-data-api/reference/get-time-series-volume) for multiple chains                                                                                                        | Compares volume trends across different blockchains  |
| "Find trending tokens across all chains"                      | Call [`getTrendingTokens`](https://docs.moralis.com/web3-data-api/evm/reference/get-trending-tokens) and Solana [`getTrendingTokens`](https://docs.moralis.com/web3-data-api/solana/reference/get-trending-tokens)               | Gets trending tokens across different chains         |
| "Analyze my portfolio performance across Ethereum and Solana" | Combine EVM profitability APIs with Solana portfolio data                                                                                                                                                                        | Creates a unified cross-chain portfolio analysis     |

## Implementation Approaches

There are several approaches to building an AI chatbot with Moralis APIs:

### Prompt Engineering

This approach involves crafting detailed prompts for your AI model that include:

- Instructions on how to interpret blockchain-specific terminology
- Examples of how to map user queries to API endpoints
- Templates for formatting blockchain data in readable responses

Example Prompt:

```
You are an AI assistant specialized in blockchain data. When users ask about wallets,
tokens, or NFTs, you should:

1. Identify the type of blockchain data they're requesting and which blockchain (EVM chains or Solana)
2. Determine which Moralis API endpoint would provide this data
3. Format a clear response using the actual or sample data

Here are examples of how to match queries to Moralis API endpoints:
- "What's in wallet 0x123...?" → Use the Moralis getWalletTokenBalancesPrices API for EVM chains
- "Current price of ETH?" → Use the Moralis getTokenPrice API for EVM
- "Who are the most profitable traders of $ETH?" → Use the Moralis getTopProfitableWalletPerToken API
- "What NFTs do I own on Solana?" → Use the Moralis getNFTs API for Solana
- "Show my SOL balance" → Use the Moralis balance API for Solana
```

### Function Calling

Many AI providers now support function calling, which allows your AI model to:

- Recognize when a specialized function would best answer a query
- Request the necessary parameters to call that function
- Format the returned data into a conversational response

This approach is particularly effective for blockchain data, as it helps structure the API calls properly.

Example Function Definition:

```json
{
  "name": "getWalletPortfolio",
  "description": "Get complete portfolio data for a blockchain wallet including tokens, NFTs, and DeFi positions",
  "parameters": {
    "type": "object",
    "properties": {
      "walletAddress": {
        "type": "string",
        "description": "The blockchain wallet address (e.g., 0x123... for EVM or a Solana address)"
      },
      "chain": {
        "type": "string",
        "description": "The blockchain network",
        "enum": [
          "eth",
          "bnb",
          "polygon",
          "arbitrum",
          "optimism",
          "base",
          "avalanche",
          "solana"
        ]
      },
      "includeNFTs": {
        "type": "boolean",
        "description": "Whether to include NFTs in the response"
      },
      "includeDeFi": {
        "type": "boolean",
        "description": "Whether to include DeFi positions in the response"
      }
    },
    "required": ["walletAddress", "chain"]
  }
}
```

### RAG (Retrieval-Augmented Generation)

RAG combines AI models with information retrieval. For blockchain chatbots, this involves:

- Indexing Moralis API documentation and blockchain knowledge
- Retrieving relevant information based on user queries
- Generating responses that incorporate this specialized knowledge

For example, when a user asks about "What are my DeFi positions?", a RAG-enabled chatbot can:

1. Retrieve information about different DeFi protocols and position types
2. Pull the appropriate Moralis DeFi API endpoints ([`getDefiPositionsSummary`](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/get-defi-positions-summary) for EVM or related endpoints for Solana)
3. Generate a response that explains the positions in user-friendly terms

## Best Practices

To build an effective blockchain AI chatbot with Moralis APIs:

1. **Handle wallet addresses carefully**:

   - Validate addresses before API calls (check for proper format and length)
   - Differentiate between EVM addresses (0x...) and Solana addresses
   - Offer to save wallet addresses for returning users
   - Use ENS/domain resolution for better UX ([`resolveAddressToDomain`](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/resolve-address-to-domain) and [`resolveENSDomain`](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/resolve-ens-domain))
   - Default to showing data from multiple chains when chain isn't specified

2. **Explain blockchain concepts contextually**:

   - When showing data like token approvals, include brief explanations of security implications
   - Provide simple explanations of DeFi positions (e.g., "You have $500 in a liquidity pool earning 5% APR")
   - Translate technical terms into user-friendly language based on user expertise level
   - Explain differences between EVM and Solana when relevant

3. **Format blockchain data for readability**:

   - Convert wei/gwei/lamports to human-readable formats
   - Use proper decimal formatting based on token standards (18 decimals for most EVM tokens, 9 for many Solana tokens)
   - Present timestamps in relative format ("2 hours ago" vs Unix timestamps)
   - Format large numbers with appropriate separators and abbreviations

4. **Optimize for multi-chain experiences**:

   - Use [`getWalletActiveChains`](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/get-chain-activity-by-wallet) to show users which networks they're active on
   - When analyzing wallets, check multiple chains by default
   - Clearly label which chain each piece of data comes from
   - Allow users to compare the same data across different chains
   - Provide explicit support for both EVM and Solana queries

5. **Handle API-specific edge cases**:

   - For NFTs, check the spam flag to filter out low-quality assets (in EVM chains)
   - For token balances, filter out dust amounts (very small values)
   - For historical data, use appropriate time ranges based on chain (some chains have limited history)
   - Implement retry logic with exponential backoff for rate limiting
   - Handle differences in API responses between EVM and Solana properly

6. **Provide context-aware insights**:
   - When showing token balances, include price trends where relevant
   - For NFTs, include floor price alongside the NFT value
   - For DeFi positions, include risk assessments or comparative yields
   - Highlight anomalies or unusual patterns in transaction history
   - Compare metrics between chains when relevant

## Resources


  - <a href="https://docs.moralis.com/">Moralis Web3 API Documentation</a>
  - <a href="https://docs.moralis.com/web3-data-api/evm/reference">Moralis EVM API Reference</a>
  - <a href="https://docs.moralis.com/web3-data-api/solana/reference">Moralis Solana API Reference</a>
  - <a href="https://platform.openai.com/docs/guides/function-calling">OpenAI Function Calling Guide</a>
  - <a href="https://docs.anthropic.com/claude/docs/function-calling">Anthropic Claude Function Calling</a>


---

By following this guide, you'll be able to create a sophisticated AI chatbot that leverages Moralis APIs to provide valuable blockchain data and insights to your users in a conversational interface across both EVM chains and Solana.
