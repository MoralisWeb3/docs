import * as defaults from "../../configs/defaults.json";
import { getParamOverride } from "./overrides";

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
 * This function now only returns override values from overrides.json
 * The old defaults system has been removed to prevent conflicts
 */
export const getDefaultForParam = (
    paramName: string | undefined,
    paramType?: string,
    endpoint?: string,
    paramLocation?: "pathParams" | "queryParams" | "bodyParam",
    apiCategory?: string
): any => {
    // For bodyParam without a paramName, we want the entire body object
    if (paramLocation === "bodyParam" && !paramName) {
        const override = getParamOverride(endpoint, undefined, paramLocation, apiCategory);
        return override; // Return the object directly, not stringified
    }

    // Handle undefined or null paramName for other cases
    if (!paramName) {
        return undefined;
    }

    // Check if there's an override for this parameter
    const override = getParamOverride(endpoint, paramName, paramLocation, apiCategory);
    if (override !== undefined) {
        // Convert to string if needed (for consistency with existing behavior)
        return override === null ? undefined : String(override);
    }

    // No default values - only overrides are used
    return undefined;
};
