export const apis = {
  web3Api: {
    title: "Web3 Data API",
    to: "/web3-data-api/evm",
    description:
      "Get all the blockchain data you need with our highly scalable APIs.",
    icons: [
      { src: "/img/product-icons/web3-data-api.svg", alt: "Web3 Data API" },
    ],
  },
  streamsApi: {
    title: "Streams API",
    to: "/streams-api",
    description:
      "Receive blockchain data by listing to realtime on-chain events.",
    icons: [{ src: "/img/product-icons/streams-api.svg", alt: "Streams API" }],
  },
  authenticationApi: {
    title: "Authentication API",
    to: "/authentication-api",
    description:
      "Authenticate users with their wallet to safely interact with your backend.",
    icons: [
      {
        src: "/img/product-icons/authentication-api.svg",
        alt: "Authentication API",
      },
    ],
  },
  evmApi: {
    title: "EVM API",
    to: "/web3-data-api/evm",
    description: "Get NFT, token and transaction data from EVM chains.",
    icons: [{ src: "/img/product-icons/evm-api.svg", alt: "EVM API" }],
  },
  solanaApi: {
    title: "Solana API",
    to: "/web3-data-api/solana",
    description: "Fetch user and token data from the Solana blockchain.",
    icons: [{ src: "/img/product-icons/solana-api.svg", alt: "Solana API" }],
  },
  nftApi: {
    title: "NFT API",
    to: "/web3-data-api/evm/nft-api",
    description: "Summon all NFT transfers, prices, and metadata in realtime.",
    icons: [{ src: "/img/product-icons/nft-api.svg", alt: "NFT API" }],
  },
  tokenApi: {
    title: "Token API",
    to: "/web3-data-api/evm/token-api",
    description:
      "Access all the information you need for any ERC20 tokens from multiple blockchains.",
    icons: [{ src: "/img/product-icons/token-api.svg", alt: "Token API" }],
  },
  balanceApi: {
    title: "Balance API",
    to: "/web3-data-api/evm/balance-api",
    description: "Get the native balance for a specific wallet address.",
    icons: [{ src: "/img/product-icons/balance-api.svg", alt: "Balance API" }],
  },
  transactionApi: {
    title: "Transaction API",
    to: "/web3-data-api/evm/transaction-api",
    description: "Get transaction data from multiple blockchains.",
    icons: [
      { src: "/img/product-icons/transaction-api.svg", alt: "Transaction API" },
    ],
  },
  eventsApi: {
    title: "Events API",
    to: "/web3-data-api/evm/events-api",
    description:
      "Get all the logs and events for contracts across multiple blockchains.",
    icons: [{ src: "/img/product-icons/events-api.svg", alt: "Events API" }],
  },
  blockApi: {
    title: "Block API",
    to: "/web3-data-api/evm/block-api",
    description: "Get data on specific blocks across multiple blockchains.",
    icons: [{ src: "/img/product-icons/block-api.svg", alt: "Block API" }],
  },
  defiApi: {
    title: "DeFi API",
    to: "/web3-data-api/evm/defi-api",
    description:
      "Get liquidity reserves and pair data across multiple blockchains.",
    icons: [{ src: "/img/product-icons/defi-api.svg", alt: "DeFi API" }],
  },
}

export const integrations = {
  firebase: {
    title: "Firebase",
    to: "/authentication-api/integrations/firebase-nodejs",
    description:
      "Authenticate a user to your Firebase application with an EVM or Solana wallet.",
    icons: [{ src: "/img/external-logos/firebase.svg", alt: "Firebase" }],
  },
  parseServer: {
    title: "Parse Server",
    to: "/authentication-api/integrations/parse-server-nodejs",
    description: "Authenticate a user to your Parse server with MetaMask.",
    icons: [
      { src: "/img/external-logos/parse-server.svg", alt: "Parse Server" },
    ],
  },
  supabase: {
    title: "Supabase",
    to: "/authentication-api/integrations/supabase-nodejs",
    description: "Combine Web3 authentication with Supabase authentication.",
    icons: [{ src: "/img/external-logos/supabase.svg", alt: "Supabase" }],
  },
  playFab: {
    title: "PlayFab",
    to: "/authentication-api/integrations/azure-playfab-nodejs-unity",
    description: "Set up a complete gaming backend platform for Web3 games.",
    icons: [{ src: "/img/external-logos/playfab.svg", alt: "PlayFab" }],
  },
}
