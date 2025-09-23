const CHAIN_ID_MAP_CANONICAL_EVM = {
    ethereum: "0x1",
    ronin: "0x7e4",
    binance: "0x38",
    base: "0x2105",
    arbitrum: "0xa4b1",
    polygon: "0x89",
    avalanche: "0xa86a",
    optimism: "0xa",
    linea: "0xe708",
    fantom: "0xfa",
    pulse: "0x171",
} as const;
const CHAIN_ID_MAP_CANONICAL_SOLANA = {
    solana: "solana",
} as const;

export const CHAIN_ID_MAP = {
    ...CHAIN_ID_MAP_CANONICAL_EVM,
    ...CHAIN_ID_MAP_CANONICAL_SOLANA,
};

type CI = typeof CHAIN_ID_MAP;
export type ChainIdString = CI[keyof CI];
