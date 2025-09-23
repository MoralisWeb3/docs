# API Parameter Override System

This system allows you to override default parameter values for API endpoints without modifying the auto-generated `configs.json` file.

## How It Works

The override system automatically detects which endpoint is being rendered and applies the appropriate overrides.

### Override Priority (highest to lowest):
1. **Specific endpoint overrides** - Values defined for a specific API endpoint
2. **Global overrides** - Values that apply to all endpoints with matching parameter names
3. **Example values from configs.json** - Falls back to the example values in the generated config

### Supported Override Types:

1. **Path Parameters** (`pathParams`)
   - Individual path parameters that appear in the URL
   - Example: `/users/{id}` → can override `id`

2. **Query Parameters** (`queryParams`)
   - Individual query string parameters
   - Example: `?limit=10&order=DESC` → can override `limit` and `order`

3. **Body Parameters** (`bodyParam`)
   - Complete request body object for POST/PUT/PATCH requests
   - The entire body is replaced with your override object

**Important:**
- Overrides take precedence over example values in configs.json
- No changes to MDX files are needed - the system works automatically
- The endpoint is identified by its unique path

## Configuration File

The overrides are configured in `/configs/overrides.json`.

### Structure

```json
{
  "overrides": {
    "api-category": {
      "endpoints": {
        "endpoint-name": {
          "pathParams": {
            "paramName": value  // Individual path parameters
          },
          "queryParams": {
            "paramName": value  // Individual query parameters
          },
          "bodyParam": {
            // Complete body object to use as example
            "field1": "value1",
            "field2": {
              "nestedField": "value"
            }
          }
        }
      }
    }
  },
  "globalOverrides": {
    "paramName": value  // Applies to all endpoints
  }
}
```

## Examples

### Example 1: Override a specific endpoint's limit parameter

To change the `limit` parameter for a specific endpoint from 100 to 50:

```json
{
  "overrides": {
    "token": {
      "endpoints": {
        "getWalletTokenBalances": {
          "queryParams": {
            "limit": 50
          }
        }
      }
    }
  }
}
```

### Example 2: Override supply and supplyPercent for a market data endpoint

```json
{
  "overrides": {
    "market-data": {
      "endpoints": {
        "getTopCryptoCurrenciesByTradingVolume": {
          "queryParams": {
            "supply": 50000.25,
            "supplyPercent": 50
          }
        }
      }
    }
  }
}
```

### Example 3: Global override for all limit parameters

To set a default limit of 25 for ALL endpoints that have a `limit` parameter:

```json
{
  "globalOverrides": {
    "limit": 25
  }
}
```

### Example 4: Override with body parameters

For endpoints that accept a request body, you can provide the entire body object:

```json
{
  "overrides": {
    "cortex": {
      "endpoints": {
        "chatCompletion": {
          "bodyParam": {
            "model": "gpt-4",
            "messages": [
              {
                "role": "system",
                "content": "You are a helpful assistant"
              },
              {
                "role": "user",
                "content": "Hello!"
              }
            ],
            "temperature": 0.7,
            "max_tokens": 1000
          }
        }
      }
    }
  }
}
```

### Example 5: Multiple overrides

```json
{
  "overrides": {
    "token": {
      "endpoints": {
        "getWalletTokenBalances": {
          "queryParams": {
            "limit": 50,
            "chain": "0x89"
          }
        }
      }
    },
    "nft": {
      "endpoints": {
        "getNFTsByWallet": {
          "queryParams": {
            "limit": 100
          }
        }
      }
    },
    "solana": {
      "endpoints": {
        "getTokenPrice": {
          "queryParams": {
            "network": "mainnet"
          }
        }
      }
    }
  },
  "globalOverrides": {
    "cursor": null,
    "offset": 0
  }
}
```

## How to Find Endpoint Names

1. Look in `/configs/api-reference/configs.json`
2. The structure is: `api-category` → `endpoint-name`
3. API categories (must match exactly from configs.json):
   - `market-data` - Market and trading data
   - `token` - Token-related APIs
   - `nft` - NFT APIs
   - `balance` - Balance APIs
   - `transaction` - Transaction APIs
   - `block` - Block APIs
   - `events` - Event APIs
   - `defi` - DeFi protocols
   - `resolve` - Name resolution (ENS, etc.)
   - `ipfs` - IPFS APIs
   - `streams` - Real-time blockchain data streams
   - `auth` - Authentication APIs
   - `solana` - Solana blockchain APIs
   - `cortex` - Cortex APIs
   - `rpc` - RPC node APIs

## Important Notes

1. **Don't modify `configs.json`** - This file is auto-generated and changes will be lost
2. **Overrides persist** - Your overrides in `overrides.json` will remain even when `configs.json` is regenerated
3. **Type consistency** - Make sure override values match the expected type (number, string, boolean, etc.)
4. **Null values** - Use `null` to explicitly set a parameter as undefined/empty

## Testing Your Overrides

1. Add your overrides to `/configs/overrides.json`
2. Start the development server: `npm start`
3. Navigate to the API reference page for the endpoint you modified
4. The input fields should show your override values

## Troubleshooting

- If overrides aren't appearing, check:
  - JSON syntax is valid in `overrides.json`
  - Endpoint names match exactly
  - Parameter names match exactly (case-sensitive)
  - The development server has been restarted after changes