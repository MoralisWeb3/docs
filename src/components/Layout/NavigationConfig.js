// Navigation configuration for all sections
export const navigationConfig = {
  getStarted: {
    label: "Get Started",
    path: "/get-started",
    sidebar: "getStartedSidebar",
    description: "Quick start guides and common use cases",
    subsections: [
      { label: "Overview", path: "/get-started/overview" },
      { label: "Common Use Cases", path: "/get-started/common-use-cases" },
      { label: "Quickstart Guides", path: "/get-started/quickstart-guides" }
    ]
  },
  
  evm: {
    label: "EVM",
    path: "/web3-data-api/evm",
    sidebar: "web3apiEvmSidebar",
    description: "Web3 Data API for EVM-compatible chains",
    subsections: [
      { label: "Overview", path: "/web3-data-api/evm/overview" },
      { label: "Getting Started", path: "/web3-data-api/evm/getting-started" },
      { label: "Supported Chains", path: "/web3-data-api/evm/supported-chains" },
      { label: "API Reference", path: "/web3-data-api/evm/reference" },
      { label: "Wallet API", path: "/web3-data-api/evm/wallet-api" },
      { label: "NFT API", path: "/web3-data-api/evm/nft-api" },
      { label: "Token API", path: "/web3-data-api/evm/token-api" },
      { label: "Blockchain API", path: "/web3-data-api/evm/blockchain-api" },
      { label: "Developer Tools", path: "/web3-data-api/evm/developer-tools" },
      { label: "Integrations", path: "/web3-data-api/evm/integrations" },
      { label: "Tutorials", path: "/web3-data-api/evm/tutorials" },
      { label: "FAQs", path: "/web3-data-api/evm/faqs" },
      { label: "Breaking Changes", path: "/web3-data-api/evm/breaking-changes" }
    ]
  },
  
  solana: {
    label: "Solana",
    path: "/web3-data-api/solana",
    sidebar: "web3apiSolanaSidebar",
    description: "Web3 Data API for Solana blockchain",
    subsections: [
      { label: "Overview", path: "/web3-data-api/solana/overview" },
      { label: "Getting Started", path: "/web3-data-api/solana/getting-started" },
      { label: "API Reference", path: "/web3-data-api/solana/reference" },
      { label: "Tutorials", path: "/web3-data-api/solana/tutorials" },
      { label: "AI Agents", path: "/web3-data-api/solana/tutorials/ai-agent" },
      { label: "Pump Fun API", path: "/web3-data-api/solana/tutorials/pump-fun-api" },
      { label: "API Guides", path: "/web3-data-api/solana/tutorials/api-tutorials" },
      { label: "FAQs", path: "/web3-data-api/solana/faqs" }
    ]
  },
  
  streams: {
    label: "Streams",
    path: "/streams-api/evm",
    sidebar: "streamsEvmSidebar",
    description: "Real-time blockchain data streaming",
    subsections: [
      { label: "Overview", path: "/streams-api/evm/overview" },
      { label: "Getting Started", path: "/streams-api/evm/getting-started" },
      { label: "Records & Pricing", path: "/streams-api/evm/records-and-pricing" },
      { label: "API Reference", path: "/streams-api/evm/reference" },
      { label: "FAQ", path: "/streams-api/evm/faq" }
    ]
  },
  
  rpcNodes: {
    label: "RPC Nodes",
    path: "/rpc-nodes",
    sidebar: "rpcNodesSidebar",
    description: "High-performance RPC node infrastructure",
    subsections: [
      { label: "Overview", path: "/rpc-nodes/overview" },
      { label: "Public Endpoints", path: "/rpc-nodes/public-node-endpoints" },
      { label: "Fundamentals", path: "/rpc-nodes/fundamentals" },
      { label: "Getting Started", path: "/rpc-nodes/getting-started" },
      { label: "API Reference", path: "/rpc-nodes/reference" },
      { label: "Tutorials", path: "/rpc-nodes/tutorials" },
      { label: "Resources & FAQs", path: "/rpc-nodes/resources" }
    ]
  },
  
  cortex: {
    label: "Moralis Cortex",
    path: "/moralis-cortex",
    sidebar: "moralisCortexSidebar",
    description: "AI-powered blockchain development assistant",
    subsections: [
      { label: "Overview", path: "/moralis-cortex/overview" },
      { label: "Getting Started", path: "/moralis-cortex/getting-started" },
      { label: "What is MCP", path: "/moralis-cortex/what-is-mcp" },
      { label: "MCP vs Other Approaches", path: "/moralis-cortex/mcp-vs-other-approaches" },
      { label: "MCP Server", path: "/moralis-cortex/mcp-server-overview" },
      { label: "AI Integrations", path: "/moralis-cortex/integrations-overview" },
      { label: "Use Cases", path: "/moralis-cortex/usecases" },
      { label: "FAQs", path: "/moralis-cortex/faqs" }
    ]
  }
};

// Helper function to get current section based on pathname
export const getCurrentSection = (pathname) => {
  if (pathname.includes("/get-started")) return "getStarted";
  if (pathname.includes("/web3-data-api/evm")) return "evm";
  if (pathname.includes("/web3-data-api/solana")) return "solana";
  if (pathname.includes("/streams-api")) return "streams";
  if (pathname.includes("/rpc-nodes")) return "rpcNodes";
  if (pathname.includes("/cortex") || pathname.includes("/moralis-cortex")) return "cortex";
  return null;
};

// Helper function to get section configuration
export const getSectionConfig = (sectionKey) => {
  return navigationConfig[sectionKey] || null;
};

// Get all sections
export const getAllSections = () => {
  return Object.keys(navigationConfig).map(key => ({
    key,
    ...navigationConfig[key]
  }));
};