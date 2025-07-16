# API Reference Configuration Generator

This directory contains scripts for generating the `configs.json` file that powers the API reference documentation.

## New Incremental Update Features

The generator now supports incremental updates instead of always replacing the entire file. This provides several benefits:

- **Faster updates**: Only fetch and process specific APIs
- **Preserve custom data**: Maintain any manual modifications to other API groups
- **Reduced API calls**: Only hit the endpoints you need to update
- **Better debugging**: Clear logging shows what changed

## Usage

### Basic Commands

```bash
# Update all APIs incrementally (preserves existing data)
npm run generate-reference

# Update only specific APIs
npm run generate-reference:evm      # EVM API only
npm run generate-reference:streams  # Streams API only
npm run generate-reference:solana   # Solana API only

# Force complete rebuild (old behavior)
npm run generate-reference:force
```

### Advanced Usage

```bash
# Update multiple specific APIs
node configs/generate.ts --api=evm-docs --api=streams

# Update with custom API keys
node configs/generate.ts --api=evm-docs --api=solana

# Force complete replacement
node configs/generate.ts --force-replace
```

## Available API Keys

- `evm-docs`: Moralis EVM Web3 Data API
- `streams`: Moralis Streams API  
- `solana`: Moralis Solana API

## How It Works

1. **Load Existing**: Reads the current `configs.json` file
2. **Selective Fetch**: Only fetches Swagger specs for specified APIs
3. **Merge**: Updates only the specified API groups, preserving others
4. **Write**: Saves the combined result with pretty formatting

## Output

The generator provides detailed logging:

```
Processing specific APIs: evm-docs
Fetching and processing API: evm-docs
Updated API: evm-docs
  - Previous methods: 145
  - New methods: 147
  - Change: +2
Successfully completed incremental update for 1 API(s) in configs.json
```

## Configuration

- `generate.config.json`: Controls which generation steps run
- `swagger/paths.json`: Defines API endpoints and file paths
- Command line arguments override default behavior

## Backwards Compatibility

The old behavior (complete file replacement) is still available using the `--force-replace` flag.