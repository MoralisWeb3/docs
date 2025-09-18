import defaults from "../../configs/defaults.json";

/**
 * Get default values for various blockchain-related parameters
 * These defaults are used across API examples and documentation
 */
export const getDefaults = () => defaults;

/**
 * Get default EVM chain (as hex value)
 */
export const getDefaultEvmChain = () => defaults.evmChain;

/**
 * Get default EVM wallet address
 */
export const getDefaultEvmWallet = () => defaults.evmWallet;

/**
 * Get default EVM token address
 */
export const getDefaultEvmToken = () => defaults.evmToken;

/**
 * Get default EVM pair address
 */
export const getDefaultEvmPair = () => defaults.evmPair;

/**
 * Get default EVM NFT address
 */
export const getDefaultEvmNft = () => defaults.evmNft;

/**
 * Get default Solana network
 */
export const getDefaultSolChain = () => defaults.solChain;

/**
 * Get default Solana wallet address
 */
export const getDefaultSolWallet = () => defaults.solWallet;

/**
 * Get default Solana token address
 */
export const getDefaultSolToken = () => defaults.solToken;

/**
 * Get default Solana pair address
 */
export const getDefaultSolPair = () => defaults.solPair;

/**
 * Get default Solana NFT address
 */
export const getDefaultSolNft = () => defaults.solNft;

/**
 * Get default Solana exchange
 */
export const getDefaultSolExchange = () => defaults.solExchange;

/**
 * Get default value based on parameter name, type, and API context
 */
export const getDefaultForParam = (paramName: string, paramType?: string, endpoint?: string): string | undefined => {
  const name = paramName.toLowerCase();
  const type = paramType?.toLowerCase();
  const endpointLower = endpoint?.toLowerCase() || "";

  // Determine if this is Solana-related based on multiple indicators
  const isSolana = endpointLower.includes("solana") ||
                   endpointLower.includes("sol") ||
                   endpointLower.includes("/token/mainnet") ||
                   endpointLower.includes("solana-gateway") ||
                   name.includes("sol") ||
                   name.includes("network");

  // Only provide defaults for string type parameters unless specifically designed for other types
  // This prevents address values being used for boolean/number parameters

  // Boolean parameters - only provide boolean defaults
  if (type === "boolean") {
    if (name === "nft_metadata") {
      return defaults.nft_metadata?.toString();
    }
    // For other boolean params, don't provide defaults unless specifically needed
    return undefined;
  }

  // Number parameters - only provide number defaults
  if (type === "number") {
    if (name === "limit") {
      return "100";
    }
    // For other number params, don't provide defaults unless specifically needed
    return undefined;
  }

  // String parameters - provide address defaults only for appropriate parameters
  if (type === "string" || !type) {
    // Chain/Network - only exact matches
    if (name === "chain" || name === "network") {
      return isSolana ? defaults.solChain : defaults.evmChain;
    }

    // Wallet/Address - only exact matches to avoid false positives
    if (name === "address" || name === "wallet" || name === "owner") {
      return isSolana ? defaults.solWallet : defaults.evmWallet;
    }

    // Token - only exact matches
    if (name === "token" || name === "token_address") {
      return isSolana ? defaults.solToken : defaults.evmToken;
    }

    // Pair - only exact matches
    if (name === "pair" || name === "pair_address") {
      return isSolana ? defaults.solPair : defaults.evmPair;
    }

    // NFT contract address - only exact matches
    if (name === "contract_address" || name === "nft_address") {
      return isSolana ? defaults.solNft : defaults.evmNft;
    }

    // Exchange (Solana specific)
    if (name === "exchange") {
      return isSolana ? defaults.solExchange : undefined;
    }

    // Cursor is typically optional for pagination
    if (name === "cursor") {
      return undefined;
    }
  }

  return undefined;
};