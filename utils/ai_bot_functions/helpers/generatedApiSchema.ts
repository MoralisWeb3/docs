export const ApiSchema = {
  EvmApi: {
    nft: {
      getWalletNFTs: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get NFTs by wallet",
        description:
          "Get NFTs owned by a given address.\n* The response will include status [SYNCED/SYNCING] based on the contracts being indexed.\n* Use the token_address param to get results for a specific contract only\n* Note that results will include all indexed NFTs\n* Any request that includes the token_address param will start the indexing process for that NFT collection the very first time it is requested.",
        sdkTag: "nft",
        tags: ["NFT", "Get NFTs"],
        method: "GET",
        path: "/{address}/nft",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the wallet",
            required: true,
            schema: {
              type: "string",
              example: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "format",
            description: "The format of the token ID",
            required: false,
            schema: {
              type: "string",
              example: "decimal",
              default: "decimal",
              enum: ["decimal", "hex"],
            },
          },
          {
            in: "query",
            name: "limit",
            description: "The desired page size of the result.",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "exclude_spam",
            description: "Should spam NFTs be excluded from the result?",
            required: false,
            schema: {
              type: "boolean",
              default: false,
            },
          },
          {
            in: "query",
            name: "token_addresses",
            description: "The addresses to get balances for (optional)",
            required: false,
            schema: {
              type: "array",
              maxItems: 10,
              items: {
                type: "string",
              },
            },
          },
          {
            in: "query",
            name: "cursor",
            description:
              "The cursor returned in the previous response (used for getting the next page).",
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "normalizeMetadata",
            description: "Should normalized metadata be returned?",
            required: false,
            schema: {
              type: "boolean",
              default: false,
            },
          },
          {
            in: "query",
            name: "media_items",
            description: "Should preview media data be returned?",
            required: false,
            schema: {
              type: "boolean",
              default: false,
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns a collection of NFT owners",
            body: {
              type: "object",
              fields: [
                {
                  name: "status",
                  type: "string",
                  description:
                    "The syncing status of the address [SYNCING/SYNCED]",
                  example: "SYNCING",
                  required: false,
                },
                {
                  name: "page",
                  type: "integer",
                  description: "The current page of the result",
                  example: "2",
                  required: false,
                },
                {
                  name: "page_size",
                  type: "integer",
                  description: "The number of results per page",
                  example: "100",
                  required: false,
                },
                {
                  name: "cursor",
                  type: "string",
                  description: "The cursor to get to the next page",
                  example: "",
                  required: false,
                },
                {
                  name: "result",
                  type: "array",
                  description: "",
                  example: "",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.nft.getWalletNFTs({ \n  { chain, format, limit, excludeSpam, tokenAddresses, cursor, normalizemetadata, mediaItems }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.nft.get_wallet_n_f_ts(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getMultipleNFTs: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get Multiple NFTs",
        description:
          "Returns an array of NFTs specified in the request.\n* Note that results will include all indexed NFTs\n* Any request that includes the token_address param will start the indexing process for that NFT collection the very first time it is requested.\n* Only 25 NFTs can be fetched in one API call.",
        sdkTag: "nft",
        tags: ["NFT", "Get Mutiple NFTs"],
        method: "POST",
        path: "/nft/getMultipleNFTs",
        pathParams: [],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns a collection of NFT owners",
            body: {
              type: "array",
              field: {
                type: "object",
                fields: [
                  {
                    name: "token_address",
                    type: "string",
                    description: "The address of the NFT contract",
                    example: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
                    required: true,
                  },
                  {
                    name: "token_id",
                    type: "string",
                    description: "The token ID of the NFT",
                    example: "15",
                    required: true,
                  },
                  {
                    name: "contract_type",
                    type: "string",
                    description: "The type of NFT contract standard",
                    example: "ERC721",
                    required: true,
                  },
                  {
                    name: "owner_of",
                    type: "string",
                    description: "The wallet address of the owner of the NFT",
                    example: "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
                    required: true,
                  },
                  {
                    name: "block_number",
                    type: "string",
                    description:
                      "The block number when the amount or owner changed",
                    example: "88256",
                    required: true,
                  },
                  {
                    name: "block_number_minted",
                    type: "string",
                    description: "The block number when the NFT was minted",
                    example: "88256",
                    required: true,
                  },
                  {
                    name: "token_uri",
                    type: "string",
                    description: "The URI to the metadata of the token",
                    example: "",
                    required: false,
                  },
                  {
                    name: "metadata",
                    type: "string",
                    description: "The metadata of the token",
                    example: "",
                    required: false,
                  },
                  {
                    name: "normalized_metadata",
                    description:
                      "A normalized metadata version of the NFT's metadata.",
                    example: "",
                    required: false,
                  },
                  {
                    name: "media",
                    description:
                      "A set of links to 'thumbnail / preview' media files",
                    example: "",
                    required: false,
                  },
                  {
                    name: "amount",
                    type: "string",
                    description:
                      "The number of this item the user owns (used by ERC1155)",
                    example: "1",
                    required: false,
                  },
                  {
                    name: "name",
                    type: "string",
                    description: "The name of the NFT contract",
                    example: "CryptoKitties",
                    required: true,
                  },
                  {
                    name: "symbol",
                    type: "string",
                    description: "The symbol of the NFT contract",
                    example: "RARI",
                    required: true,
                  },
                  {
                    name: "token_hash",
                    type: "string",
                    description: "The token hash",
                    example: "502cee781b0fb40ea02508b21d319ced",
                    required: true,
                  },
                  {
                    name: "last_token_uri_sync",
                    type: "string",
                    description: "When the token_uri was last updated",
                    example: "2021-02-24T00:47:26.647Z",
                    required: true,
                  },
                  {
                    name: "last_metadata_sync",
                    type: "string",
                    description: "When the metadata was last updated",
                    example: "2021-02-24T00:47:26.647Z",
                    required: true,
                  },
                  {
                    name: "possible_spam",
                    type: "boolean",
                    description:
                      "Indicates if a contract is possibly a spam contract",
                    example: "false",
                    required: true,
                  },
                  {
                    name: "verified_collection",
                    type: "boolean",
                    description: "Indicates if a contract is verified",
                    example: "false",
                    required: false,
                  },
                ],
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.nft.getMultipleNFTs({ \n  { chain }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.nft.get_multiple_n_f_ts(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getWalletNFTTransfers: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get NFT transfers by wallet",
        description:
          "Get transfers of NFTs given the wallet and other parameters.",
        sdkTag: "nft",
        tags: ["NFT", "Get Transfers"],
        method: "GET",
        path: "/{address}/nft/transfers",
        pathParams: [
          {
            in: "path",
            name: "address",
            description:
              "The wallet address of the sender or recipient of the transfers",
            required: true,
            schema: {
              type: "string",
              example: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "format",
            description: "The format of the token ID",
            required: false,
            schema: {
              type: "string",
              example: "decimal",
              default: "decimal",
              enum: ["decimal", "hex"],
            },
          },
          {
            in: "query",
            name: "from_block",
            description:
              "The minimum block number from which to get the transfers\n* Provide the param 'from_block' or 'from_date'\n* If 'from_date' and 'from_block' are provided, 'from_block' will be used.\n",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "to_block",
            description: "To get the reserves at this block number",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "from_date",
            description:
              "The date from where to get the transfers (any format that is accepted by momentjs)\n* Provide the param 'from_block' or 'from_date'\n* If 'from_date' and 'from_block' are provided, 'from_block' will be used.\n",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "to_date",
            description:
              "Get transfers up until this date (any format that is accepted by momentjs)\n* Provide the param 'to_block' or 'to_date'\n* If 'to_date' and 'to_block' are provided, 'to_block' will be used.\n",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "limit",
            description: "The desired page size of the result.",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "cursor",
            description:
              "The cursor returned in the previous response (used for getting the next page).",
            schema: {
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns a collection of NFT transfers",
            body: {
              type: "object",
              fields: [
                {
                  name: "page",
                  type: "integer",
                  description: "The current page of the result",
                  example: "2",
                  required: true,
                },
                {
                  name: "page_size",
                  type: "integer",
                  description: "The number of results per page",
                  example: "100",
                  required: true,
                },
                {
                  name: "cursor",
                  type: "string",
                  description: "The cursor to get to the next page",
                  example: "",
                  required: true,
                },
                {
                  name: "result",
                  type: "array",
                  description: "",
                  example: "",
                  required: true,
                },
                {
                  name: "block_exists",
                  type: "boolean",
                  description: "Indicator if the block exists",
                  example: true,
                  required: false,
                },
                {
                  name: "index_complete",
                  type: "boolean",
                  description: "Indicator if the block is fully indexed",
                  example: true,
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.nft.getWalletNFTTransfers({ \n  { chain, format, fromBlock, toBlock, fromDate, toDate, limit, cursor }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.nft.get_wallet_n_f_t_transfers(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getWalletNFTCollections: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get NFT collections by wallet",
        description: "Get NFT collections owned by a given wallet address.",
        sdkTag: "nft",
        tags: ["NFT", "Get Collections"],
        method: "GET",
        path: "/{address}/nft/collections",
        pathParams: [
          {
            in: "path",
            name: "address",
            description:
              "The wallet address of the owner of NFTs in the collections",
            required: true,
            schema: {
              type: "string",
              example: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "limit",
            description: "The desired page size of the result.",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "exclude_spam",
            description: "Should spam NFTs be excluded from the result?",
            required: false,
            schema: {
              type: "boolean",
              default: false,
            },
          },
          {
            in: "query",
            name: "cursor",
            description:
              "The cursor returned in the previous response (used for getting the next page).",
            schema: {
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns the NFT collections owned by a wallet",
            body: {
              type: "object",
              fields: [
                {
                  name: "status",
                  type: "string",
                  description:
                    "The syncing status of the address [SYNCING/SYNCED]",
                  example: "SYNCING",
                  required: false,
                },
                {
                  name: "page",
                  type: "integer",
                  description: "The current page of the result",
                  example: "2",
                  required: false,
                },
                {
                  name: "page_size",
                  type: "integer",
                  description: "The number of results per page",
                  example: "100",
                  required: false,
                },
                {
                  name: "cursor",
                  type: "string",
                  description: "The cursor to get to the next page",
                  example: "",
                  required: false,
                },
                {
                  name: "result",
                  type: "array",
                  description: "",
                  example: "",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.nft.getWalletNFTCollections({ \n  { chain, limit, excludeSpam, cursor }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.nft.get_wallet_n_f_t_collections(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getContractNFTs: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get NFTs by contract",
        description:
          "Get NFTs for a given contract address, including metadata for all NFTs (where available).\n* Results are limited to 100 per page by default\n* Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection.",
        sdkTag: "nft",
        tags: ["NFT", "Get NFTs"],
        method: "GET",
        path: "/nft/{address}",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the NFT contract",
            required: true,
            schema: {
              type: "string",
              example: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "format",
            description: "The format of the token ID",
            required: false,
            schema: {
              type: "string",
              example: "decimal",
              default: "decimal",
              enum: ["decimal", "hex"],
            },
          },
          {
            in: "query",
            name: "limit",
            description: "The desired page size of the result.",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "totalRanges",
            description: "The number of subranges to split the results into",
            required: false,
            schema: {
              type: "integer",
              minimum: 1,
            },
          },
          {
            in: "query",
            name: "range",
            description: "The desired subrange to query",
            required: false,
            schema: {
              type: "integer",
              minimum: 1,
            },
          },
          {
            in: "query",
            name: "cursor",
            description:
              "The cursor returned in the previous response (used for getting the next page).",
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "normalizeMetadata",
            description: "Should normalized metadata be returned?",
            required: false,
            schema: {
              type: "boolean",
              default: false,
            },
          },
          {
            in: "query",
            name: "media_items",
            description: "Should preview media data be returned?",
            required: false,
            schema: {
              type: "boolean",
              default: false,
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns a collection of NFTs",
            body: {
              type: "object",
              fields: [
                {
                  name: "page",
                  type: "integer",
                  description: "The current page of the result",
                  example: "2",
                  required: false,
                },
                {
                  name: "page_size",
                  type: "integer",
                  description: "The number of results per page",
                  example: "100",
                  required: false,
                },
                {
                  name: "cursor",
                  type: "string",
                  description: "The cursor to get to the next page",
                  example: "",
                  required: false,
                },
                {
                  name: "result",
                  type: "array",
                  description: "",
                  example: "",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.nft.getContractNFTs({ \n  { chain, format, limit, totalranges, range, cursor, normalizemetadata, mediaItems }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.nft.get_contract_n_f_ts(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTOwners: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get NFT owners by contract",
        description:
          "Get owners of NFTs for a given contract.\n* Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection.",
        sdkTag: "nft",
        tags: ["NFT", "Get Owners"],
        method: "GET",
        path: "/nft/{address}/owners",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the NFT contract",
            required: true,
            schema: {
              type: "string",
              example: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "format",
            description: "The format of the token ID",
            required: false,
            schema: {
              type: "string",
              example: "decimal",
              default: "decimal",
              enum: ["decimal", "hex"],
            },
          },
          {
            in: "query",
            name: "limit",
            description: "The desired page size of the result.",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "cursor",
            description:
              "The cursor returned in the previous response (used for getting the next page).",
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "normalizeMetadata",
            description: "Should normalized metadata be returned?",
            required: false,
            schema: {
              type: "boolean",
              default: false,
            },
          },
          {
            in: "query",
            name: "media_items",
            description: "Should preview media data be returned?",
            required: false,
            schema: {
              type: "boolean",
              default: false,
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns a collection of NFT owners",
            body: {
              type: "object",
              fields: [
                {
                  name: "status",
                  type: "string",
                  description:
                    "The syncing status of the address [SYNCING/SYNCED]",
                  example: "SYNCING",
                  required: false,
                },
                {
                  name: "page",
                  type: "integer",
                  description: "The current page of the result",
                  example: "2",
                  required: false,
                },
                {
                  name: "page_size",
                  type: "integer",
                  description: "The number of results per page",
                  example: "100",
                  required: false,
                },
                {
                  name: "cursor",
                  type: "string",
                  description: "The cursor to get to the next page",
                  example: "",
                  required: false,
                },
                {
                  name: "result",
                  type: "array",
                  description: "",
                  example: "",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.nft.getNFTOwners({ \n  { chain, format, limit, cursor, normalizemetadata, mediaItems }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.nft.get_n_f_t_owners(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTContractTransfers: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get NFT transfers by contract",
        description:
          "Get transfers of NFTs for a given contract and other parameters.",
        sdkTag: "nft",
        tags: ["NFT", "Get Transfers"],
        method: "GET",
        path: "/nft/{address}/transfers",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the NFT contract",
            required: true,
            schema: {
              type: "string",
              example: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "from_block",
            description:
              "The minimum block number from where to get the transfers\n* Provide the param 'from_block' or 'from_date'\n* If 'from_date' and 'from_block' are provided, 'from_block' will be used.\n",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "to_block",
            description:
              "The maximum block number from where to get the transfers.\n* Provide the param 'to_block' or 'to_date'\n* If 'to_date' and 'to_block' are provided, 'to_block' will be used.\n",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "from_date",
            description:
              "The date from where to get the transfers (any format that is accepted by momentjs)\n* Provide the param 'from_block' or 'from_date'\n* If 'from_date' and 'from_block' are provided, 'from_block' will be used.\n",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "to_date",
            description:
              "Get transfers up until this date (any format that is accepted by momentjs)\n* Provide the param 'to_block' or 'to_date'\n* If 'to_date' and 'to_block' are provided, 'to_block' will be used.\n",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "format",
            description: "The format of the token ID",
            required: false,
            schema: {
              type: "string",
              example: "decimal",
              default: "decimal",
              enum: ["decimal", "hex"],
            },
          },
          {
            in: "query",
            name: "limit",
            description: "The desired page size of the result.",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "cursor",
            description:
              "The cursor returned in the previous response (used for getting the next page).",
            schema: {
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns a collection of NFT transfers",
            body: {
              type: "object",
              fields: [
                {
                  name: "page",
                  type: "integer",
                  description: "The current page of the result",
                  example: "2",
                  required: true,
                },
                {
                  name: "page_size",
                  type: "integer",
                  description: "The number of results per page",
                  example: "100",
                  required: true,
                },
                {
                  name: "cursor",
                  type: "string",
                  description: "The cursor to get to the next page",
                  example: "",
                  required: true,
                },
                {
                  name: "result",
                  type: "array",
                  description: "",
                  example: "",
                  required: true,
                },
                {
                  name: "block_exists",
                  type: "boolean",
                  description: "Indicator if the block exists",
                  example: true,
                  required: false,
                },
                {
                  name: "index_complete",
                  type: "boolean",
                  description: "Indicator if the block is fully indexed",
                  example: true,
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.nft.getNFTContractTransfers({ \n  { chain, fromBlock, toBlock, fromDate, toDate, format, limit, cursor }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.nft.get_n_f_t_contract_transfers(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTTransfersFromToBlock: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get NFT transfers from a block to a block",
        description:
          "Get transfers of NFTs from a block number to a block number.",
        sdkTag: "nft",
        tags: ["NFT", "Get Transfers"],
        method: "GET",
        path: "/nft/transfers",
        pathParams: [],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "from_block",
            description:
              "The minimum block number from which to get the transfers\n* Provide the param 'from_block' or 'from_date'\n* If 'from_date' and 'from_block' are provided, 'from_block' will be used.\n",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "to_block",
            description:
              "The maximum block number from which to get the transfers.\n* Provide the param 'to_block' or 'to_date'\n* If 'to_date' and 'to_block' are provided, 'to_block' will be used.\n",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "from_date",
            description:
              "The start date from which to get the transfers (any format that is accepted by momentjs)\n* Provide the param 'from_block' or 'from_date'\n* If 'from_date' and 'from_block' are provided, 'from_block' will be used.\n",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "to_date",
            description:
              "The end date from which to get the transfers (any format that is accepted by momentjs)\n* Provide the param 'to_block' or 'to_date'\n* If 'to_date' and 'to_block' are provided, 'to_block' will be used.\n",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "format",
            description: "The format of the token ID",
            required: false,
            schema: {
              type: "string",
              example: "decimal",
              default: "decimal",
              enum: ["decimal", "hex"],
            },
          },
          {
            in: "query",
            name: "limit",
            description: "The desired page size of the result.",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "cursor",
            description:
              "The cursor returned in the previous response (for getting the next page)\n",
            schema: {
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns a collection of NFT transfers",
            body: {
              type: "object",
              fields: [
                {
                  name: "page",
                  type: "integer",
                  description: "The current page of the result",
                  example: "2",
                  required: true,
                },
                {
                  name: "page_size",
                  type: "integer",
                  description: "The number of results per page",
                  example: "100",
                  required: true,
                },
                {
                  name: "cursor",
                  type: "string",
                  description: "The cursor to get to the next page",
                  example: "",
                  required: true,
                },
                {
                  name: "result",
                  type: "array",
                  description: "",
                  example: "",
                  required: true,
                },
                {
                  name: "block_exists",
                  type: "boolean",
                  description: "Indicator if the block exists",
                  example: true,
                  required: false,
                },
                {
                  name: "index_complete",
                  type: "boolean",
                  description: "Indicator if the block is fully indexed",
                  example: true,
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.nft.getNFTTransfersFromToBlock({ \n  { chain, fromBlock, toBlock, fromDate, toDate, format, limit, cursor }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.nft.get_n_f_t_transfers_from_to_block(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTTransfersByBlock: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get NFT transfers by block",
        description:
          "Get transfers of NFTs given a block number or block hash.",
        sdkTag: "nft",
        tags: ["NFT", "Get Transfers"],
        method: "GET",
        path: "/block/{block_number_or_hash}/nft/transfers",
        pathParams: [
          {
            in: "path",
            name: "block_number_or_hash",
            description: "The block number or block hash",
            required: true,
            schema: {
              type: "string",
              example: "15846571",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "limit",
            description: "The desired page size of the result.",
            required: false,
            schema: {
              type: "integer",
              minimum: 1,
              default: 100,
            },
          },
          {
            in: "query",
            name: "cursor",
            description:
              "The cursor returned in the previous response (used for getting the next page).",
            schema: {
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns the contents of a block",
            body: {
              type: "object",
              fields: [
                {
                  name: "page",
                  type: "integer",
                  description: "The current page of the result",
                  example: "2",
                  required: true,
                },
                {
                  name: "page_size",
                  type: "integer",
                  description: "The number of results per page",
                  example: "100",
                  required: true,
                },
                {
                  name: "cursor",
                  type: "string",
                  description: "The cursor to get to the next page",
                  example: "",
                  required: true,
                },
                {
                  name: "result",
                  type: "array",
                  description: "",
                  example: "",
                  required: true,
                },
                {
                  name: "block_exists",
                  type: "boolean",
                  description: "Indicator if the block exists",
                  example: true,
                  required: false,
                },
                {
                  name: "index_complete",
                  type: "boolean",
                  description: "Indicator if the block is fully indexed",
                  example: true,
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.nft.getNFTTransfersByBlock({ \n  { chain, limit, cursor }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.nft.get_n_f_t_transfers_by_block(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTTrades: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get NFT trades by marketplace",
        description: "Get trades of NFTs for a given contract and marketplace.",
        sdkTag: "nft",
        tags: ["NFT", "Get Market Data"],
        method: "GET",
        path: "/nft/{address}/trades",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the NFT contract",
            required: true,
            schema: {
              type: "string",
              example: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "from_block",
            description:
              "The minimum block number from which to get the transfers\n* Provide the param 'from_block' or 'from_date'\n* If 'from_date' and 'from_block' are provided, 'from_block' will be used.\n",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "to_block",
            description: "The block number to get the trades from",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "from_date",
            description:
              "The start date from which to get the transfers (any format that is accepted by momentjs)\n* Provide the param 'from_block' or 'from_date'\n* If 'from_date' and 'from_block' are provided, 'from_block' will be used.\n",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "to_date",
            description:
              "The end date from which to get the transfers (any format that is accepted by momentjs)\n* Provide the param 'to_block' or 'to_date'\n* If 'to_date' and 'to_block' are provided, 'to_block' will be used.\n",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "marketplace",
            description:
              "Marketplace from which to get the trades (only OpenSea is supported at the moment)",
            example: "opensea",
            required: false,
            schema: {
              type: "string",
              example: "opensea",
              default: "opensea",
              enum: ["opensea"],
            },
          },
          {
            in: "query",
            name: "cursor",
            description:
              "The cursor returned in the previous response (used for getting the next page).",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "limit",
            description: "The desired page size of the result.",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns the trades",
            body: {
              type: "object",
              fields: [
                {
                  name: "page",
                  type: "integer",
                  description: "The current page of the result",
                  example: "2",
                  required: false,
                },
                {
                  name: "page_size",
                  type: "integer",
                  description: "The number of results per page",
                  example: "100",
                  required: false,
                },
                {
                  name: "cursor",
                  type: "string",
                  description: "The cursor to get to the next page",
                  example: "",
                  required: false,
                },
                {
                  name: "result",
                  type: "array",
                  description: "",
                  example: "",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.nft.getNFTTrades({ \n  { chain, fromBlock, toBlock, fromDate, toDate, marketplace, cursor, limit }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.nft.get_n_f_t_trades(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTContractMetadata: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get NFT collection metadata",
        description:
          "Get the collection / contract level metadata for a given contract (name, symbol, base token URI).\n* Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection\n",
        sdkTag: "nft",
        tags: ["NFT", "Get Collections"],
        method: "GET",
        path: "/nft/{address}/metadata",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the NFT contract",
            required: true,
            schema: {
              type: "string",
              example: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns the metadata for an NFT collection.",
            body: {
              type: "object",
              fields: [
                {
                  name: "token_address",
                  type: "string",
                  description: "The address of the token contract",
                  example:
                    "0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09",
                  required: true,
                },
                {
                  name: "name",
                  type: "string",
                  description: "The name of the token contract",
                  example: "KryptoKitties",
                  required: true,
                },
                {
                  name: "synced_at",
                  type: "string",
                  description:
                    "Timestamp of when the contract was last synced with the node",
                  example: "",
                  required: false,
                },
                {
                  name: "symbol",
                  type: "string",
                  description: "The symbol of the NFT contract",
                  example: "RARI",
                  required: true,
                },
                {
                  name: "contract_type",
                  type: "string",
                  description: "The type of NFT contract",
                  example: "ERC721",
                  required: true,
                },
                {
                  name: "possible_spam",
                  type: "boolean",
                  description:
                    "Indicates if a contract is possibly a spam contract",
                  example: "false",
                  required: true,
                },
                {
                  name: "verified_collection",
                  type: "boolean",
                  description: "Indicates if a contract is verified",
                  example: "false",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.nft.getNFTContractMetadata({ \n  { chain }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.nft.get_n_f_t_contract_metadata(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTMetadata: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get NFT metadata",
        description:
          "Get NFT data, including metadata (where available), for the given NFT token ID and contract address.\n* Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection\n",
        sdkTag: "nft",
        tags: ["NFT", "Get Metadata"],
        method: "GET",
        path: "/nft/{address}/{token_id}",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the NFT contract",
            required: true,
            schema: {
              type: "string",
              example: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
            },
          },
          {
            in: "path",
            name: "token_id",
            description: "The ID of the token",
            required: true,
            schema: {
              type: "string",
              example: "1",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "format",
            description: "The format of the token ID",
            required: false,
            schema: {
              type: "string",
              example: "decimal",
              default: "decimal",
              enum: ["decimal", "hex"],
            },
          },
          {
            in: "query",
            name: "normalizeMetadata",
            description: "Should normalized metadata be returned?",
            required: false,
            schema: {
              type: "boolean",
              default: false,
            },
          },
          {
            in: "query",
            name: "media_items",
            description: "Should preview media data be returned?",
            required: false,
            schema: {
              type: "boolean",
              default: false,
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns the specified NFT.",
            body: {
              type: "object",
              fields: [
                {
                  name: "token_address",
                  type: "string",
                  description: "The address of the NFT contract",
                  example: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
                  required: true,
                },
                {
                  name: "token_id",
                  type: "string",
                  description: "The token ID of the NFT",
                  example: "15",
                  required: true,
                },
                {
                  name: "owner_of",
                  type: "string",
                  description: "The wallet address of the owner of the NFT",
                  example: "0x9c83ff0f1c8924da96cb2fcb7e093f78eb2e316b",
                  required: false,
                },
                {
                  name: "token_hash",
                  type: "string",
                  description: "The token hash",
                  example: "502cee781b0fb40ea02508b21d319ced",
                  required: false,
                },
                {
                  name: "block_number",
                  type: "string",
                  description:
                    "The block number when the amount or owner changed",
                  example: "88256",
                  required: false,
                },
                {
                  name: "block_number_minted",
                  type: "string",
                  description: "The block number when the NFT was minted",
                  example: "88256",
                  required: false,
                },
                {
                  name: "contract_type",
                  type: "string",
                  description: "The type of NFT contract standard",
                  example: "ERC721",
                  required: true,
                },
                {
                  name: "token_uri",
                  type: "string",
                  description: "The URI to the metadata of the token",
                  example: "",
                  required: false,
                },
                {
                  name: "metadata",
                  type: "string",
                  description: "The metadata of the token",
                  example: "",
                  required: false,
                },
                {
                  name: "normalized_metadata",
                  description:
                    "A normalized metadata version of the NFT's metadata.",
                  example: "",
                  required: false,
                },
                {
                  name: "media",
                  description:
                    "A set of links to 'thumbnail / preview' media files",
                  example: "",
                  required: false,
                },
                {
                  name: "minter_address",
                  type: "string",
                  description: "The address that minted the NFT",
                  example: "0x9c83ff0f1c8924da96cb2fcb7e093f78eb2e316b",
                  required: false,
                },
                {
                  name: "last_token_uri_sync",
                  type: "string",
                  description: "When the token_uri was last updated",
                  example: "",
                  required: false,
                },
                {
                  name: "last_metadata_sync",
                  type: "string",
                  description: "When the metadata was last updated",
                  example: "",
                  required: false,
                },
                {
                  name: "amount",
                  type: "string",
                  description:
                    "The quantity of this item that the user owns (used by ERC1155)",
                  example: "1",
                  required: false,
                },
                {
                  name: "name",
                  type: "string",
                  description: "The name of the NFT contract",
                  example: "CryptoKitties",
                  required: true,
                },
                {
                  name: "symbol",
                  type: "string",
                  description: "The symbol of the NFT contract",
                  example: "RARI",
                  required: true,
                },
                {
                  name: "possible_spam",
                  type: "boolean",
                  description:
                    "Indicates if a contract is possibly a spam contract",
                  example: "false",
                  required: true,
                },
                {
                  name: "verified_collection",
                  type: "boolean",
                  description: "Indicates if a contract is verified",
                  example: "false",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.nft.getNFTMetadata({ \n  { chain, format, normalizemetadata, mediaItems }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.nft.get_n_f_t_metadata(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTTransfers: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get NFT transfers by token ID",
        description:
          "Get transfers of an NFT given a contract address and token ID.",
        sdkTag: "nft",
        tags: ["NFT", "Get Transfers"],
        method: "GET",
        path: "/nft/{address}/{token_id}/transfers",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the NFT contract",
            required: true,
            schema: {
              type: "string",
              example: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
            },
          },
          {
            in: "path",
            name: "token_id",
            description: "The ID of the token",
            required: true,
            schema: {
              type: "string",
              example: "1",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "format",
            description: "The format of the token ID",
            required: false,
            schema: {
              type: "string",
              example: "decimal",
              default: "decimal",
              enum: ["decimal", "hex"],
            },
          },
          {
            in: "query",
            name: "limit",
            description: "The desired page size of the result.",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "cursor",
            description:
              "The cursor returned in the previous response (used for getting the next page).",
            schema: {
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns a collection of NFT transfers",
            body: {
              type: "object",
              fields: [
                {
                  name: "page",
                  type: "integer",
                  description: "The current page of the result",
                  example: "2",
                  required: true,
                },
                {
                  name: "page_size",
                  type: "integer",
                  description: "The number of results per page",
                  example: "100",
                  required: true,
                },
                {
                  name: "cursor",
                  type: "string",
                  description: "The cursor to get to the next page",
                  example: "",
                  required: true,
                },
                {
                  name: "result",
                  type: "array",
                  description: "",
                  example: "",
                  required: true,
                },
                {
                  name: "block_exists",
                  type: "boolean",
                  description: "Indicator if the block exists",
                  example: true,
                  required: false,
                },
                {
                  name: "index_complete",
                  type: "boolean",
                  description: "Indicator if the block is fully indexed",
                  example: true,
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.nft.getNFTTransfers({ \n  { chain, format, limit, cursor }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.nft.get_n_f_t_transfers(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTTokenIdOwners: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get NFT owners by token ID",
        description:
          "Get owners of a specific NFT given the contract address and token ID. \n* Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection\n",
        sdkTag: "nft",
        tags: ["NFT", "Get Owners"],
        method: "GET",
        path: "/nft/{address}/{token_id}/owners",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the NFT contract",
            required: true,
            schema: {
              type: "string",
              example: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
            },
          },
          {
            in: "path",
            name: "token_id",
            description: "The ID of the token",
            required: true,
            schema: {
              type: "string",
              example: "1",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "format",
            description: "The format of the token ID",
            required: false,
            schema: {
              type: "string",
              example: "decimal",
              default: "decimal",
              enum: ["decimal", "hex"],
            },
          },
          {
            in: "query",
            name: "limit",
            description: "The desired page size of the result.",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "cursor",
            description:
              "The cursor returned in the previous response (used for getting the next page).",
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "normalizeMetadata",
            description: "Should normalized metadata be returned?",
            required: false,
            schema: {
              type: "boolean",
              default: false,
            },
          },
          {
            in: "query",
            name: "media_items",
            description: "Should preview media data be returned?",
            required: false,
            schema: {
              type: "boolean",
              default: false,
            },
          },
        ],
        responses: [
          {
            status: "200",
            description:
              "Returns a collection of NFTs with their respective owners.",
            body: {
              type: "object",
              fields: [
                {
                  name: "status",
                  type: "string",
                  description:
                    "The syncing status of the address [SYNCING/SYNCED]",
                  example: "SYNCING",
                  required: false,
                },
                {
                  name: "page",
                  type: "integer",
                  description: "The current page of the result",
                  example: "2",
                  required: false,
                },
                {
                  name: "page_size",
                  type: "integer",
                  description: "The number of results per page",
                  example: "100",
                  required: false,
                },
                {
                  name: "cursor",
                  type: "string",
                  description: "The cursor to get to the next page",
                  example: "",
                  required: false,
                },
                {
                  name: "result",
                  type: "array",
                  description: "",
                  example: "",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.nft.getNFTTokenIdOwners({ \n  { chain, format, limit, cursor, normalizemetadata, mediaItems }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.nft.get_n_f_t_token_id_owners(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      syncNFTContract: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Resync NFT Contract",
        description: "Initiates a sync of a previously non synced contract.",
        sdkTag: "nft",
        tags: ["NFT", "Get Collections"],
        method: "PUT",
        path: "/nft/{address}/sync",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the NFT contract",
            required: true,
            schema: {
              type: "string",
              example: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
        ],
        responses: [
          {
            status: "201",
            description: "Contract address was triggered for index.",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "Request Initiated",
                  },
                  name: "message",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.nft.syncNFTContract({ \n  { chain }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.nft.sync_n_f_t_contract(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      reSyncMetadata: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Resync NFT metadata",
        description:
          "Resync the metadata for an NFT\n* The metadata flag will request the NFT's metadata from an already existing token_uri\n* The uri (default) flag will fetch the latest token_uri from the given NFT contract address. In sync mode the metadata will also be fetched\n* The sync mode will make the endpoint synchronous so it will wait for the task to be completed before responding\n* The async mode (default) will make the endpoint asynchronous so we will wait for the task to be completed before responding\n",
        sdkTag: "nft",
        tags: ["NFT", "Get Metadata"],
        method: "GET",
        path: "/nft/{address}/{token_id}/metadata/resync",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the NFT contract",
            required: true,
            schema: {
              type: "string",
              example: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
            },
          },
          {
            in: "path",
            name: "token_id",
            description: "The ID of the token",
            required: true,
            schema: {
              type: "string",
              example: "1",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "flag",
            description: "The type of resync to operate",
            required: false,
            schema: {
              type: "string",
              example: "uri",
              default: "uri",
              enum: ["uri", "metadata"],
            },
          },
          {
            in: "query",
            name: "mode",
            description: "To define the behaviour of the endpoint",
            required: false,
            schema: {
              type: "string",
              example: "sync",
              default: "async",
              enum: ["async", "sync"],
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "(In sync mode) Resync request executed.",
            body: {
              type: "object",
              fields: [
                {
                  name: "status",
                  type: "string",
                  description: "The status of the resync request",
                  example: "",
                  required: true,
                },
              ],
            },
          },
          {
            status: "202",
            description:
              "The resync request was received and will be executed.",
            body: {
              type: "object",
              fields: [
                {
                  name: "status",
                  type: "string",
                  description: "The status of the resync request",
                  example: "",
                  required: true,
                },
              ],
            },
          },
          {
            status: "404",
            description:
              "(In sync mode) Resync request executed and metadata could not be updated.",
            body: {
              type: "object",
              fields: [
                {
                  name: "status",
                  type: "string",
                  description: "The status of the resync request",
                  example: "",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.nft.reSyncMetadata({ \n  { chain, flag, mode }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.nft.re_sync_metadata(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTLowestPrice: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get NFT lowest price",
        description:
          "Get the lowest executed price for an NFT contract for the last x days (only trades paid in ETH).",
        sdkTag: "nft",
        tags: ["NFT", "Get Market Data"],
        method: "GET",
        path: "/nft/{address}/lowestprice",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the NFT contract",
            required: true,
            schema: {
              type: "string",
              example: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "days",
            description:
              "The number of days to look back to find the lowest price\nIf not provided 7 days will be the default\n",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "marketplace",
            description:
              "Marketplace from which to get the trades (only OpenSea is supported at the moment)",
            example: "opensea",
            required: false,
            schema: {
              type: "string",
              example: "opensea",
              default: "opensea",
              enum: ["opensea"],
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns the trade with the lowest price",
            body: {
              type: "object",
              fields: [
                {
                  name: "transaction_hash",
                  type: "string",
                  description: "The transaction hash",
                  example: "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
                  required: true,
                },
                {
                  name: "transaction_index",
                  type: "string",
                  description: "The transaction index",
                  example: "",
                  required: true,
                },
                {
                  name: "token_ids",
                  type: "array",
                  description: "The token ID(s) traded",
                  example: ["15", "54"],
                  required: true,
                },
                {
                  name: "seller_address",
                  type: "string",
                  description: "The address that sold the NFT",
                  example: "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
                  required: true,
                },
                {
                  name: "buyer_address",
                  type: "string",
                  description: "The address that bought the NFT",
                  example: "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
                  required: true,
                },
                {
                  name: "token_address",
                  type: "string",
                  description: "The address of the NFT contract",
                  example: "0x4ad3785ec7eed7589fa86538244a4530f962434f",
                  required: true,
                },
                {
                  name: "marketplace_address",
                  type: "string",
                  description:
                    "The address of the contract that traded the NFT",
                  example: "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
                  required: true,
                },
                {
                  name: "price_token_address",
                  type: "string",
                  description:
                    "The address of the token used to pay for the NFT",
                  example: "0x60e4d786628fea6478f785a6d7e704777c86a7c6",
                  required: false,
                },
                {
                  name: "price",
                  type: "string",
                  description:
                    "The value that was sent in the transaction (ETH/BNB/etc..)",
                  example: "1000000000000000",
                  required: true,
                },
                {
                  name: "block_timestamp",
                  type: "string",
                  description: "The block timestamp",
                  example: "2021-06-04T16:00:15",
                  required: true,
                },
                {
                  name: "block_number",
                  type: "string",
                  description: "The block number of the transaction",
                  example: "13680123",
                  required: true,
                },
                {
                  name: "block_hash",
                  type: "string",
                  description: "The block hash",
                  example:
                    "0x4a7c916ca4a970358b9df90051008f729685ff05e9724a9dddba32630c37cb96",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.nft.getNFTLowestPrice({ \n  { chain, days, marketplace }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.nft.get_n_f_t_lowest_price(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTCollectionStats: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get the nft collection stats",
        description: "Get the stats for a nft collection address.",
        sdkTag: "nft",
        tags: ["NFT", "Get Owners"],
        method: "GET",
        path: "/nft/{address}/stats",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the NFT collection",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns the stats for the nft collection address.",
            body: {
              type: "object",
              fields: [
                {
                  name: "total_tokens",
                  type: "string",
                  description: "The number of tokens in the collection",
                  example: "100",
                  required: true,
                },
                {
                  name: "owners",
                  type: "object",
                  description: "NFT collection owner stats",
                  example: "",
                  required: true,
                },
                {
                  name: "transfers",
                  type: "object",
                  description: "NFT collection transfer stats",
                  example: "",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.nft.getNFTCollectionStats({ \n  { chain }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.nft.get_n_f_t_collection_stats(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTTokenStats: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get the nft token stats",
        description: "Get the stats for a nft token",
        sdkTag: "nft",
        tags: ["NFT", "Get Owners"],
        method: "GET",
        path: "/nft/{address}/{token_id}/stats",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the NFT collection",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            in: "path",
            name: "token_id",
            description: "The token id of the NFT collection",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns the stats for the nft token.",
            body: {
              type: "object",
              fields: [
                {
                  name: "owners",
                  type: "object",
                  description: "NFT token owner stats",
                  example: "",
                  required: true,
                },
                {
                  name: "transfers",
                  type: "object",
                  description: "NFT token transfer stats",
                  example: "",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.nft.getNFTTokenStats({ \n  { chain }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.nft.get_n_f_t_token_stats(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
    token: {
      getTokenPrice: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get ERC20 token price",
        description:
          "Get the token price denominated in the blockchain's native token and USD.",
        sdkTag: "token",
        tags: ["Token", "Get Market Data"],
        method: "GET",
        path: "/erc20/{address}/price",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the token contract",
            required: true,
            schema: {
              type: "string",
              example: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "exchange",
            description: "The factory name or address of the token exchange",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "to_block",
            description:
              "The block number from which the token price should be checked",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "include",
            description: "If the result should contain the 24hr percent change",
            required: false,
            schema: {
              type: "string",
              example: "",
              default: "",
              enum: ["percent_change"],
            },
          },
        ],
        responses: [
          {
            status: "200",
            description:
              "Returns the price denominated in the blockchain's native token and USD for a given token contract address",
            body: {
              type: "object",
              fields: [
                {
                  name: "tokenName",
                  type: "string",
                  description: "The name of the token",
                  example: "Kylin Network",
                  required: false,
                },
                {
                  name: "tokenSymbol",
                  type: "string",
                  description: "The symbol of the token",
                  example: "KYL",
                  required: false,
                },
                {
                  name: "tokenLogo",
                  type: "string",
                  description: "The logo of the token",
                  example:
                    "https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c.png",
                  required: false,
                },
                {
                  name: "tokenDecimals",
                  type: "string",
                  description: "The number of decimals of the token",
                  example: "18",
                  required: false,
                },
                {
                  name: "nativePrice",
                  description: "",
                  example: "",
                  required: false,
                },
                {
                  name: "usdPrice",
                  type: "number",
                  description: "The price in USD for the token",
                  example: 19.722370676,
                  required: true,
                },
                {
                  name: "usdPriceFormatted",
                  type: "string",
                  description:
                    "The price in USD for the token in string format",
                  example: "19.722370676",
                  required: false,
                },
                {
                  name: "24hrPercentChange",
                  type: "string",
                  description: "The 24hr percent change of the token",
                  example: "-0.8842730258590583",
                  required: false,
                },
                {
                  name: "exchangeAddress",
                  type: "string",
                  description:
                    "The address of the exchange used to calculate the price",
                  example: "0x1f98431c8ad98523631ae4a59f267346ea31f984",
                  required: false,
                },
                {
                  name: "exchangeName",
                  type: "string",
                  description:
                    "The name of the exchange used to calculate the price",
                  example: "Uniswap v3",
                  required: false,
                },
                {
                  name: "tokenAddress",
                  type: "string",
                  description: "The address of the token",
                  example: "0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c",
                  required: false,
                },
                {
                  name: "toBlock",
                  type: "string",
                  description: "toBlock",
                  example: "16314545",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.token.getTokenPrice({ \n  { chain, exchange, toBlock, include }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.token.get_token_price(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getMultipleTokenPrices: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get Multiple ERC20 token prices",
        description:
          "Returns an array of token prices denominated in the blockchain's native token and USD for a given token contract address",
        sdkTag: "token",
        tags: ["Token", "Get Market Data"],
        method: "POST",
        path: "/erc20/prices",
        pathParams: [],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "include",
            description: "If the result should contain the 24hr percent change",
            required: false,
            schema: {
              type: "string",
              example: "",
              default: "",
              enum: ["percent_change"],
            },
          },
        ],
        responses: [
          {
            status: "200",
            description:
              "Returns an array of token prices denominated in the blockchain's native token and USD for a given token contract address",
            body: {
              type: "array",
              field: {
                type: "object",
                fields: [
                  {
                    name: "tokenName",
                    type: "string",
                    description: "The name of the token",
                    example: "Kylin Network",
                    required: false,
                  },
                  {
                    name: "tokenSymbol",
                    type: "string",
                    description: "The symbol of the token",
                    example: "KYL",
                    required: false,
                  },
                  {
                    name: "tokenLogo",
                    type: "string",
                    description: "The logo of the token",
                    example:
                      "https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c.png",
                    required: false,
                  },
                  {
                    name: "tokenDecimals",
                    type: "string",
                    description: "The number of decimals of the token",
                    example: "18",
                    required: false,
                  },
                  {
                    name: "nativePrice",
                    description: "",
                    example: "",
                    required: false,
                  },
                  {
                    name: "usdPrice",
                    type: "number",
                    description: "The price in USD for the token",
                    example: 19.722370676,
                    required: true,
                  },
                  {
                    name: "usdPriceFormatted",
                    type: "string",
                    description:
                      "The price in USD for the token in string format",
                    example: "19.722370676",
                    required: false,
                  },
                  {
                    name: "24hrPercentChange",
                    type: "string",
                    description: "The 24hr percent change of the token",
                    example: "-0.8842730258590583",
                    required: false,
                  },
                  {
                    name: "exchangeAddress",
                    type: "string",
                    description:
                      "The address of the exchange used to calculate the price",
                    example: "0x1f98431c8ad98523631ae4a59f267346ea31f984",
                    required: false,
                  },
                  {
                    name: "exchangeName",
                    type: "string",
                    description:
                      "The name of the exchange used to calculate the price",
                    example: "Uniswap v3",
                    required: false,
                  },
                  {
                    name: "tokenAddress",
                    type: "string",
                    description: "The address of the token",
                    example: "0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c",
                    required: false,
                  },
                  {
                    name: "toBlock",
                    type: "string",
                    description: "toBlock",
                    example: "16314545",
                    required: false,
                  },
                ],
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.token.getMultipleTokenPrices({ \n  { chain, include }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.token.get_multiple_token_prices(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getWalletTokenBalances: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get ERC20 token balance by wallet",
        description: "Get token balances for a specific wallet address.",
        sdkTag: "token",
        tags: ["Token", "Get Balance"],
        method: "GET",
        path: "/{address}/erc20",
        pathParams: [
          {
            in: "path",
            name: "address",
            description:
              "The address from which token balances will be checked",
            required: true,
            schema: {
              type: "string",
              example: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "to_block",
            description:
              "The block number up to which the balances will be checked.",
            required: false,
            schema: {
              type: "number",
            },
          },
          {
            in: "query",
            name: "token_addresses",
            description: "The addresses to get balances for (optional)",
            required: false,
            schema: {
              type: "array",
              maxItems: 10,
              items: {
                type: "string",
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns token balances for a specific address",
            body: {
              type: "array",
              field: {
                type: "object",
                fields: [
                  {
                    name: "token_address",
                    type: "string",
                    description: "The address of the token contract",
                    example:
                      "0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09",
                    required: true,
                  },
                  {
                    name: "name",
                    type: "string",
                    description: "The name of the token contract",
                    example: "Kylin Network",
                    required: true,
                  },
                  {
                    name: "symbol",
                    type: "string",
                    description: "The symbol of the NFT contract",
                    example: "KYL",
                    required: true,
                  },
                  {
                    name: "logo",
                    type: "string",
                    description: "The logo of the token",
                    example:
                      "https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c.png",
                    required: false,
                  },
                  {
                    name: "thumbnail",
                    type: "string",
                    description: "The thumbnail of the logo",
                    example:
                      "https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c_thumb.png",
                    required: false,
                  },
                  {
                    name: "decimals",
                    type: "integer",
                    description: "The number of decimals on the token",
                    example: 18,
                    required: true,
                  },
                  {
                    name: "balance",
                    type: "string",
                    description:
                      "Timestamp of when the contract was last synced with the node",
                    example: "123456789",
                    required: true,
                  },
                  {
                    name: "possible_spam",
                    type: "boolean",
                    description:
                      "Indicates if a contract is possibly a spam contract",
                    example: "false",
                    required: true,
                  },
                  {
                    name: "verified_collection",
                    type: "boolean",
                    description: "Indicates if a contract is verified",
                    example: "false",
                    required: false,
                  },
                ],
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.token.getWalletTokenBalances({ \n  { chain, toBlock, tokenAddresses }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.token.get_wallet_token_balances(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getWalletTokenTransfers: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get ERC20 token transactions by wallet",
        description:
          "Get ERC20 token transactions ordered by block number in descending order.",
        sdkTag: "token",
        tags: ["Token", "Get Transactions"],
        method: "GET",
        path: "/{address}/erc20/transfers",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the wallet",
            required: true,
            schema: {
              type: "string",
              example: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "from_block",
            description:
              "The minimum block number from which to get the transactions\n* Provide the param 'from_block' or 'from_date'\n* If 'from_date' and 'from_block' are provided, 'from_block' will be used.\n",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "to_block",
            description:
              "The maximum block number from which to get the transactions.\n* Provide the param 'to_block' or 'to_date'\n* If 'to_date' and 'to_block' are provided, 'to_block' will be used.\n",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "from_date",
            description:
              "The start date from which to get the transactions (any format that is accepted by momentjs)\n* Provide the param 'from_block' or 'from_date'\n* If 'from_date' and 'from_block' are provided, 'from_block' will be used.\n",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "to_date",
            description:
              "Get the transactions up to this date (any format that is accepted by momentjs)\n* Provide the param 'to_block' or 'to_date'\n* If 'to_date' and 'to_block' are provided, 'to_block' will be used.\n",
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "limit",
            description: "The desired page size of the result.",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "cursor",
            description:
              "The cursor returned in the previous response (used for getting the next page).",
            schema: {
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns a collection of token transactions.",
            body: {
              type: "object",
              fields: [
                {
                  name: "page",
                  type: "integer",
                  description: "The current page of the result",
                  example: "2",
                  required: false,
                },
                {
                  name: "page_size",
                  type: "integer",
                  description: "The number of results per page",
                  example: "100",
                  required: false,
                },
                {
                  name: "cursor",
                  type: "string",
                  description: "The cursor to get to the next page",
                  example: "",
                  required: false,
                },
                {
                  name: "result",
                  type: "array",
                  description: "",
                  example: "",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.token.getWalletTokenTransfers({ \n  { chain, fromBlock, toBlock, fromDate, toDate, limit, cursor }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.token.get_wallet_token_transfers(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getTokenMetadata: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get ERC20 token metadata by contract",
        description:
          "Get the metadata for a given token contract address (name, symbol, decimals, logo).",
        sdkTag: "token",
        tags: ["Token", "Get Metadata"],
        method: "GET",
        path: "/erc20/metadata",
        pathParams: [],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "addresses",
            description: "The addresses to get metadata for",
            required: true,
            schema: {
              type: "array",
              maxItems: 10,
              items: {
                type: "string",
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description:
              "Get the metadata for a given ERC20 token contract address (name, symbol, decimals, logo).",
            body: {
              type: "array",
              field: {
                type: "object",
                fields: [
                  {
                    name: "address",
                    type: "string",
                    description: "The address of the token contract",
                    example:
                      "0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09",
                    required: true,
                  },
                  {
                    name: "name",
                    type: "string",
                    description: "The name of the token contract",
                    example: "Kylin Network",
                    required: true,
                  },
                  {
                    name: "symbol",
                    type: "string",
                    description: "The symbol of the NFT contract",
                    example: "KYL",
                    required: true,
                  },
                  {
                    name: "decimals",
                    type: "string",
                    description: "The number of decimals on the token",
                    example: "18",
                    required: true,
                  },
                  {
                    name: "logo",
                    type: "string",
                    description: "The logo of the token",
                    example:
                      "https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c.png",
                    required: false,
                  },
                  {
                    name: "logo_hash",
                    type: "string",
                    description: "The logo hash",
                    example:
                      "ee7aa2cdf100649a3521a082116258e862e6971261a39b5cd4e4354fcccbc54d",
                    required: false,
                  },
                  {
                    name: "thumbnail",
                    type: "string",
                    description: "The thumbnail of the logo",
                    example:
                      "https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c_thumb.png",
                    required: false,
                  },
                  {
                    name: "block_number",
                    type: "string",
                    description: "",
                    example: "",
                    required: false,
                  },
                  {
                    name: "validated",
                    type: "string",
                    description: "",
                    example: "",
                    required: false,
                  },
                  {
                    name: "possible_spam",
                    type: "boolean",
                    description:
                      "Indicates if a contract is possibly a spam contract",
                    example: "false",
                    required: true,
                  },
                  {
                    name: "verified_collection",
                    type: "boolean",
                    description: "Indicates if a contract is verified",
                    example: "false",
                    required: false,
                  },
                ],
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.token.getTokenMetadata({ \n  { chain, addresses }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.token.get_token_metadata(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getTokenMetadataBySymbol: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get ERC20 token metadata by symbols",
        description:
          "Get the metadata for a list of token symbols (name, symbol, decimals, logo).",
        sdkTag: "token",
        tags: ["Token", "Get Metadata"],
        method: "GET",
        path: "/erc20/metadata/symbols",
        pathParams: [],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "symbols",
            description: "The symbols to get metadata for",
            required: true,
            schema: {
              type: "array",
              items: {
                type: "string",
                example: "LINK",
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description:
              "Returns metadata for a given token contract address (name, symbol, decimals, logo).",
            body: {
              type: "array",
              field: {
                type: "object",
                fields: [
                  {
                    name: "address",
                    type: "string",
                    description: "The address of the token contract",
                    example:
                      "0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09",
                    required: true,
                  },
                  {
                    name: "name",
                    type: "string",
                    description: "The name of the token contract",
                    example: "Kylin Network",
                    required: true,
                  },
                  {
                    name: "symbol",
                    type: "string",
                    description: "The symbol of the NFT contract",
                    example: "KYL",
                    required: true,
                  },
                  {
                    name: "decimals",
                    type: "string",
                    description: "The number of decimals on the token",
                    example: "18",
                    required: true,
                  },
                  {
                    name: "logo",
                    type: "string",
                    description: "The logo of the token",
                    example:
                      "https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c.png",
                    required: false,
                  },
                  {
                    name: "logo_hash",
                    type: "string",
                    description: "The logo hash",
                    example:
                      "ee7aa2cdf100649a3521a082116258e862e6971261a39b5cd4e4354fcccbc54d",
                    required: false,
                  },
                  {
                    name: "thumbnail",
                    type: "string",
                    description: "The thumbnail of the logo",
                    example:
                      "https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c_thumb.png",
                    required: false,
                  },
                  {
                    name: "block_number",
                    type: "string",
                    description: "",
                    example: "",
                    required: false,
                  },
                  {
                    name: "validated",
                    type: "string",
                    description: "",
                    example: "",
                    required: false,
                  },
                  {
                    name: "possible_spam",
                    type: "boolean",
                    description:
                      "Indicates if a contract is possibly a spam contract",
                    example: "false",
                    required: true,
                  },
                  {
                    name: "verified_collection",
                    type: "boolean",
                    description: "Indicates if a contract is verified",
                    example: "false",
                    required: false,
                  },
                ],
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.token.getTokenMetadataBySymbol({ \n  { chain, symbols }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.token.get_token_metadata_by_symbol(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getTokenAllowance: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get ERC20 token allowance",
        description:
          "Get the amount which the spender is allowed to withdraw on behalf of the owner.",
        sdkTag: "token",
        tags: ["Token", "Get Balance"],
        method: "GET",
        path: "/erc20/{address}/allowance",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the token contract",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "owner_address",
            description: "The address of the token owner",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "spender_address",
            description: "The address of the token spender",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description:
              "Returns the amount which the spender is allowed to withdraw on behalf of the owner.",
            body: {
              type: "object",
              fields: [
                {
                  name: "allowance",
                  type: "string",
                  description: "The allowance",
                  example: "",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.token.getTokenAllowance({ \n  { chain, ownerAddress, spenderAddress }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.token.get_token_allowance(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getTokenTransfers: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get ERC20 token transactions by contract",
        description:
          "Get ERC20 token transactions from a contract ordered by block number in descending order.",
        sdkTag: "token",
        tags: ["Token", "Get Transactions"],
        method: "GET",
        path: "/erc20/{address}/transfers",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the token contract",
            required: true,
            schema: {
              type: "string",
              example: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "from_block",
            description:
              "The minimum block number from which to get the transfers\n* Provide the param 'from_block' or 'from_date'\n* If 'from_date' and 'from_block' are provided, 'from_block' will be used.\n",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "to_block",
            description:
              "The maximum block number from which to get the transfers.\n* Provide the param 'to_block' or 'to_date'\n* If 'to_date' and 'to_block' are provided, 'to_block' will be used.\n",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "from_date",
            description:
              "The start date from which to get the transfers (any format that is accepted by momentjs)\n* Provide the param 'from_block' or 'from_date'\n* If 'from_date' and 'from_block' are provided, 'from_block' will be used.\n",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "to_date",
            description:
              "Get transfers up until this date (any format that is accepted by momentjs)\n* Provide the param 'to_block' or 'to_date'\n* If 'to_date' and 'to_block' are provided, 'to_block' will be used.\n",
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "limit",
            description: "The desired page size of the result.",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "cursor",
            description:
              "The cursor returned in the previous response (used for getting the next page).",
            schema: {
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns a collection of token contract transactions.",
            body: {
              type: "object",
              fields: [
                {
                  name: "page",
                  type: "integer",
                  description: "The current page of the result",
                  example: "2",
                  required: false,
                },
                {
                  name: "page_size",
                  type: "integer",
                  description: "The number of results per page",
                  example: "100",
                  required: false,
                },
                {
                  name: "cursor",
                  type: "string",
                  description: "The cursor to get to the next page",
                  example: "",
                  required: false,
                },
                {
                  name: "result",
                  type: "array",
                  description: "",
                  example: "",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.token.getTokenTransfers({ \n  { chain, fromBlock, toBlock, fromDate, toDate, limit, cursor }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.token.get_token_transfers(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getTokenStats: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get the erc20 token stats",
        description: "Get the stats for a erc20 token",
        sdkTag: "token",
        tags: ["Token"],
        method: "GET",
        path: "/erc20/{address}/stats",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the erc20 token",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns the stats for the erc20 token.",
            body: {
              type: "object",
              fields: [
                {
                  name: "transfers",
                  type: "object",
                  description: "ERC20 Token transfer stats",
                  example: "",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.token.getTokenStats({ \n  { chain }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.token.get_token_stats(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
    balance: {
      getNativeBalance: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get native balance by wallet",
        description: "Get the native balance for a specific wallet address.",
        sdkTag: "balance",
        tags: ["Balance"],
        method: "GET",
        path: "/{address}/balance",
        pathParams: [
          {
            in: "path",
            name: "address",
            description:
              "The address from which the native balance will be checked",
            required: true,
            schema: {
              type: "string",
              example: "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "to_block",
            description:
              "The block number up to which the balances will be checked.",
            required: false,
            schema: {
              type: "number",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns the native balance for a specific address",
            body: {
              type: "object",
              fields: [
                {
                  name: "balance",
                  type: "string",
                  description: "The balance",
                  example: "1234567890",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.balance.getNativeBalance({ \n  { chain, toBlock }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.balance.get_native_balance(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNativeBalancesForAddresses: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get balance for a set of wallet",
        description: "Get the native balances for a set of specific addresses",
        sdkTag: "balance",
        tags: ["Balance"],
        method: "GET",
        path: "/wallets/balances",
        pathParams: [],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "to_block",
            description:
              "The block number on which the balances should be checked",
            required: false,
            schema: {
              type: "number",
            },
          },
          {
            in: "query",
            name: "wallet_addresses",
            description: "The addresses to get metadata for",
            required: true,
            schema: {
              type: "array",
              maxItems: 25,
              items: {
                type: "string",
                example: "0xE92d1A43df510F82C66382592a047d288f85226f",
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns a collection of balances",
            body: {
              type: "array",
              field: {
                type: "object",
                fields: [
                  {
                    type: "string",
                    field: {
                      type: "string",
                      description: "The chain",
                      example: "eth_mainnet",
                    },
                    name: "chain",
                    description: "The chain",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      description: "The chain id",
                      example: "2",
                    },
                    name: "chain_id",
                    description: "The chain id",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      description: "The total balances for all the walttes",
                      example: "57499206466583095",
                    },
                    name: "total_balance",
                    description: "The total balances for all the walttes",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      description: "The block Number",
                      example: "123456789",
                    },
                    name: "block_number",
                    description: "The block Number",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      description: "The block timestamp",
                      example: "0.057",
                    },
                    name: "block_timestamp",
                    description: "The block timestamp",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      description:
                        "The total balances for all the walttes formatted",
                      example: "123456789",
                    },
                    name: "total_balance_formatted",
                    description:
                      "The total balances for all the walttes formatted",
                    required: true,
                  },
                  {
                    type: "array",
                    field: {
                      type: "object",
                      fields: [
                        {
                          type: "string",
                          field: {
                            type: "string",
                            description: "address",
                            example: "0x123",
                          },
                          name: "address",
                          description: "address",
                          required: true,
                        },
                        {
                          type: "string",
                          field: {
                            type: "string",
                            description: "balance",
                            example: "28499206466583095",
                          },
                          name: "balance",
                          description: "balance",
                          required: true,
                        },
                        {
                          type: "string",
                          field: {
                            type: "string",
                            description: "balance formatted",
                            example: "0.0285",
                          },
                          name: "balance_formatted",
                          description: "balance formatted",
                          required: true,
                        },
                      ],
                    },
                    name: "wallet_balances",
                    required: true,
                  },
                ],
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.balance.getNativeBalancesForAddresses({ \n  { chain, toBlock, walletAddresses }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.balance.get_native_balances_for_addresses(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
    transaction: {
      getWalletTransactions: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get native transactions by wallet",
        description:
          "Get native transactions ordered by block number in descending order.",
        sdkTag: "transaction",
        tags: ["Transaction"],
        method: "GET",
        path: "/{address}",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the wallet",
            required: true,
            schema: {
              type: "string",
              example: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "from_block",
            description:
              "The minimum block number from which to get the transactions\n* Provide the param 'from_block' or 'from_date'\n* If 'from_date' and 'from_block' are provided, 'from_block' will be used.\n",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "to_block",
            description:
              "The maximum block number from which to get the transactions.\n* Provide the param 'to_block' or 'to_date'\n* If 'to_date' and 'to_block' are provided, 'to_block' will be used.\n",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "from_date",
            description:
              "The start date from which to get the transactions (any format that is accepted by momentjs)\n* Provide the param 'from_block' or 'from_date'\n* If 'from_date' and 'from_block' are provided, 'from_block' will be used.\n",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "to_date",
            description:
              "Get the transactions up to this date (any format that is accepted by momentjs)\n* Provide the param 'to_block' or 'to_date'\n* If 'to_date' and 'to_block' are provided, 'to_block' will be used.\n",
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "cursor",
            description:
              "The cursor returned in the previous response (used for getting the next page).",
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "limit",
            description: "The desired page size of the result.",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "include",
            description:
              "If the result should contain the internal transactions.",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "",
              default: "",
              enum: ["internal_transactions"],
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns a collection of native transactions.",
            body: {
              type: "object",
              fields: [
                {
                  name: "cursor",
                  type: "string",
                  description: "The cursor to get to the next page",
                  example: "",
                  required: false,
                },
                {
                  name: "page",
                  type: "integer",
                  description: "The current page of the result",
                  example: "2",
                  required: false,
                },
                {
                  name: "page_size",
                  type: "integer",
                  description: "The number of results per page",
                  example: "100",
                  required: false,
                },
                {
                  name: "result",
                  type: "array",
                  description: "",
                  example: "",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.transaction.getWalletTransactions({ \n  { chain, fromBlock, toBlock, fromDate, toDate, cursor, limit, include }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.transaction.get_wallet_transactions(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getWalletTransactionsVerbose: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get decoded transactions by wallet",
        description:
          "Get native transactions and logs ordered by block number in descending order.",
        sdkTag: "transaction",
        tags: ["Transaction"],
        method: "GET",
        path: "/{address}/verbose",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the wallet",
            required: true,
            schema: {
              type: "string",
              example: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "from_block",
            description:
              "The minimum block number from which to get the transactions\n* Provide the param 'from_block' or 'from_date'\n* If 'from_date' and 'from_block' are provided, 'from_block' will be used.\n",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "to_block",
            description:
              "The maximum block number from which to get the transactions.\n* Provide the param 'to_block' or 'to_date'\n* If 'to_date' and 'to_block' are provided, 'to_block' will be used.\n",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "from_date",
            description:
              "The start date from which to get the transactions (any format that is accepted by momentjs)\n* Provide the param 'from_block' or 'from_date'\n* If 'from_date' and 'from_block' are provided, 'from_block' will be used.\n",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "to_date",
            description:
              "Get the transactions up to this date (any format that is accepted by momentjs)\n* Provide the param 'to_block' or 'to_date'\n* If 'to_date' and 'to_block' are provided, 'to_block' will be used.\n",
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "include",
            description:
              "If the result should contain the internal transactions.",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "",
              default: "",
              enum: ["internal_transactions"],
            },
          },
          {
            in: "query",
            name: "cursor",
            description:
              "The cursor returned in the previous response (used for getting the next page).",
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "limit",
            description: "The desired page size of the result.",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns a collection of native transactions.",
            body: {
              type: "object",
              fields: [
                {
                  name: "cursor",
                  type: "string",
                  description: "The cursor to get to the next page",
                  example: "",
                  required: false,
                },
                {
                  name: "page",
                  type: "integer",
                  description: "The current page of the result",
                  example: "2",
                  required: false,
                },
                {
                  name: "page_size",
                  type: "integer",
                  description: "The number of results per page",
                  example: "100",
                  required: false,
                },
                {
                  name: "result",
                  type: "array",
                  description: "",
                  example: "",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.transaction.getWalletTransactionsVerbose({ \n  { chain, fromBlock, toBlock, fromDate, toDate, include, cursor, limit }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.transaction.get_wallet_transactions_verbose(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getInternalTransactions: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get internal transactions by transaction hash",
        description:
          "Get the contents of a internal transaction by transaction hash.",
        sdkTag: "transaction",
        tags: ["Transaction"],
        method: "GET",
        path: "/transaction/{transaction_hash}/internal-transactions",
        pathParams: [
          {
            in: "path",
            name: "transaction_hash",
            description: "The transaction hash",
            required: true,
            schema: {
              type: "string",
              example:
                "0xdc85cb1b75fd09c2f6d001fea4aba83764193cbd7881a1fa8ccde350a5681109",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Internal Transaction details by transaction hash",
            body: {
              type: "array",
              field: {
                type: "object",
                fields: [
                  {
                    name: "transaction_hash",
                    type: "string",
                    description: "The hash of the transaction",
                    example: "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
                    required: true,
                  },
                  {
                    name: "block_number",
                    type: "string",
                    description: "The block number",
                    example: 12526958,
                    required: true,
                  },
                  {
                    name: "block_hash",
                    type: "string",
                    description: "The block hash",
                    example:
                      "0x0372c302e3c52e8f2e15d155e2c545e6d802e479236564af052759253b20fd86",
                    required: true,
                  },
                  {
                    name: "type",
                    type: "string",
                    description: "Call type",
                    example: "CALL",
                    required: true,
                  },
                  {
                    name: "from",
                    type: "string",
                    description: "The sender",
                    example: "0xd4a3BebD824189481FC45363602b83C9c7e9cbDf",
                    required: true,
                  },
                  {
                    name: "to",
                    type: "string",
                    description: "The recipient",
                    example: "0xa71db868318f0a0bae9411347cd4a6fa23d8d4ef",
                    required: true,
                  },
                  {
                    name: "value",
                    type: "string",
                    description: "The value that was transfered (in wei)",
                    example: "650000000000000000",
                    required: true,
                  },
                  {
                    name: "gas",
                    type: "string",
                    description: "The gas of the transaction",
                    example: "6721975",
                    required: true,
                  },
                  {
                    name: "gas_used",
                    type: "string",
                    description: "The used gas",
                    example: "6721975",
                    required: true,
                  },
                  {
                    name: "input",
                    type: "string",
                    description: "The input",
                    example: "0x",
                    required: true,
                  },
                  {
                    name: "output",
                    type: "string",
                    description: "The output",
                    example: "0x",
                    required: true,
                  },
                ],
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.transaction.getInternalTransactions({ \n  { chain }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.transaction.get_internal_transactions(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getTransaction: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get transaction by hash",
        description:
          "Get the contents of a transaction by the given transaction hash.",
        sdkTag: "transaction",
        tags: ["Transaction"],
        method: "GET",
        path: "/transaction/{transaction_hash}",
        pathParams: [
          {
            in: "path",
            name: "transaction_hash",
            description: "The transaction hash",
            required: true,
            schema: {
              type: "string",
              example:
                "0xdc85cb1b75fd09c2f6d001fea4aba83764193cbd7881a1fa8ccde350a5681109",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "include",
            description:
              "If the result should contain the internal transactions.",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "",
              default: "",
              enum: ["internal_transactions"],
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Transaction details by transaction hash",
            body: {
              type: "object",
              fields: [
                {
                  name: "hash",
                  type: "string",
                  description: "The hash of the transaction",
                  example:
                    "0x1ed85b3757a6d31d01a4d6677fc52fd3911d649a0af21fe5ca3f886b153773ed",
                  required: true,
                },
                {
                  name: "nonce",
                  type: "string",
                  description: "The nonce",
                  example: "1848059",
                  required: true,
                },
                {
                  name: "transaction_index",
                  type: "string",
                  description: "",
                  example: "108",
                  required: true,
                },
                {
                  name: "from_address",
                  type: "string",
                  description: "The from address",
                  example: "0x267be1c1d684f78cb4f6a176c4911b741e4ffdc0",
                  required: true,
                },
                {
                  name: "from_address_label",
                  description: "The label of the from address",
                  example: "Binance 1",
                  required: false,
                },
                {
                  name: "to_address",
                  description: "The to address",
                  example: "0x003dde3494f30d861d063232c6a8c04394b686ff",
                  required: true,
                },
                {
                  name: "to_address_label",
                  description: "The label of the to address",
                  example: "Binance 2",
                  required: false,
                },
                {
                  name: "value",
                  type: "string",
                  description: "The value sent",
                  example: "115580000000000000",
                  required: true,
                },
                {
                  name: "gas",
                  type: "string",
                  description: "",
                  example: "30000",
                  required: false,
                },
                {
                  name: "gas_price",
                  type: "string",
                  description: "The gas price",
                  example: "52500000000",
                  required: true,
                },
                {
                  name: "input",
                  type: "string",
                  description: "",
                  example: "0x",
                  required: true,
                },
                {
                  name: "receipt_cumulative_gas_used",
                  type: "string",
                  description: "",
                  example: "4923073",
                  required: true,
                },
                {
                  name: "receipt_gas_used",
                  type: "string",
                  description: "",
                  example: "21000",
                  required: true,
                },
                {
                  name: "receipt_contract_address",
                  description: "",
                  example: "",
                  required: false,
                },
                {
                  name: "receipt_root",
                  description: "",
                  example: "",
                  required: false,
                },
                {
                  name: "receipt_status",
                  type: "string",
                  description: "",
                  example: "1",
                  required: true,
                },
                {
                  name: "block_timestamp",
                  type: "string",
                  description: "The block timestamp",
                  example: "2021-05-07T11:08:35.000Z",
                  required: true,
                },
                {
                  name: "block_number",
                  type: "string",
                  description: "The block number",
                  example: "12386788",
                  required: true,
                },
                {
                  name: "block_hash",
                  type: "string",
                  description: "The hash of the block",
                  example:
                    "0x9b559aef7ea858608c2e554246fe4a24287e7aeeb976848df2b9a2531f4b9171",
                  required: true,
                },
                {
                  name: "logs",
                  type: "array",
                  description: "The logs of the transaction",
                  example: "",
                  required: false,
                },
                {
                  name: "internal_transactions",
                  type: "array",
                  description: "The internal transactions of the transaction",
                  example: "",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.transaction.getTransaction({ \n  { chain, include }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.transaction.get_transaction(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getTransactionVerbose: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get decoded transaction by hash",
        description:
          "Get the contents of a transaction by the given transaction hash.",
        sdkTag: "transaction",
        tags: ["Transaction"],
        method: "GET",
        path: "/transaction/{transaction_hash}/verbose",
        pathParams: [
          {
            in: "path",
            name: "transaction_hash",
            description: "The transaction hash",
            required: true,
            schema: {
              type: "string",
              example:
                "0xdc85cb1b75fd09c2f6d001fea4aba83764193cbd7881a1fa8ccde350a5681109",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "include",
            description:
              "If the result should contain the internal transactions.",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "",
              default: "",
              enum: ["internal_transactions"],
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Transaction details by transaction hash",
            body: {
              type: "object",
              fields: [
                {
                  name: "hash",
                  type: "string",
                  description: "The hash of the transaction",
                  example:
                    "0x1ed85b3757a6d31d01a4d6677fc52fd3911d649a0af21fe5ca3f886b153773ed",
                  required: true,
                },
                {
                  name: "nonce",
                  type: "string",
                  description: "The nonce",
                  example: "1848059",
                  required: true,
                },
                {
                  name: "transaction_index",
                  type: "string",
                  description: "",
                  example: "108",
                  required: true,
                },
                {
                  name: "from_address",
                  type: "string",
                  description: "The from address",
                  example: "0x267be1c1d684f78cb4f6a176c4911b741e4ffdc0",
                  required: true,
                },
                {
                  name: "from_address_label",
                  description: "The label of the from address",
                  example: "Binance 1",
                  required: false,
                },
                {
                  name: "to_address",
                  type: "string",
                  description: "The to address",
                  example: "0x003dde3494f30d861d063232c6a8c04394b686ff",
                  required: true,
                },
                {
                  name: "to_address_label",
                  description: "The label of the to address",
                  example: "Binance 2",
                  required: false,
                },
                {
                  name: "value",
                  type: "string",
                  description: "The value sent",
                  example: "115580000000000000",
                  required: true,
                },
                {
                  name: "gas",
                  type: "string",
                  description: "",
                  example: "30000",
                  required: false,
                },
                {
                  name: "gas_price",
                  type: "string",
                  description: "The gas price",
                  example: "52500000000",
                  required: true,
                },
                {
                  name: "input",
                  type: "string",
                  description: "",
                  example: "0x",
                  required: true,
                },
                {
                  name: "receipt_cumulative_gas_used",
                  type: "string",
                  description: "",
                  example: "4923073",
                  required: true,
                },
                {
                  name: "receipt_gas_used",
                  type: "string",
                  description: "",
                  example: "21000",
                  required: true,
                },
                {
                  name: "receipt_contract_address",
                  type: "string",
                  description: "",
                  example: "",
                  required: false,
                },
                {
                  name: "receipt_root",
                  type: "string",
                  description: "",
                  example: "",
                  required: false,
                },
                {
                  name: "receipt_status",
                  type: "string",
                  description: "",
                  example: "1",
                  required: true,
                },
                {
                  name: "block_timestamp",
                  type: "string",
                  description: "The block timestamp",
                  example: "2021-05-07T11:08:35.000Z",
                  required: true,
                },
                {
                  name: "block_number",
                  type: "string",
                  description: "The block number",
                  example: "12386788",
                  required: true,
                },
                {
                  name: "block_hash",
                  type: "string",
                  description: "The hash of the block",
                  example:
                    "0x9b559aef7ea858608c2e554246fe4a24287e7aeeb976848df2b9a2531f4b9171",
                  required: true,
                },
                {
                  name: "logs",
                  type: "array",
                  description: "The logs of the transaction",
                  example: "",
                  required: true,
                },
                {
                  name: "decoded_call",
                  type: "object",
                  description: "The decoded data of the transaction",
                  example: "",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.transaction.getTransactionVerbose({ \n  { chain, include }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.transaction.get_transaction_verbose(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
    block: {
      getBlock: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get block by hash",
        description: "Get the contents of a block given the block hash.",
        sdkTag: "block",
        tags: ["Block"],
        method: "GET",
        path: "/block/{block_number_or_hash}",
        pathParams: [
          {
            in: "path",
            name: "block_number_or_hash",
            description: "The block number or block hash",
            required: true,
            schema: {
              type: "string",
              example: "15863321",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "include",
            description:
              "If the result should contain the internal transactions.",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "",
              default: "",
              enum: ["internal_transactions"],
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns the contents of a block",
            body: {
              type: "object",
              fields: [
                {
                  name: "timestamp",
                  type: "string",
                  description: "The block timestamp",
                  example: "2021-05-07T11:08:35.000Z",
                  required: true,
                },
                {
                  name: "number",
                  type: "string",
                  description: "The block number",
                  example: 12386788,
                  required: true,
                },
                {
                  name: "hash",
                  type: "string",
                  description: "The block hash",
                  example:
                    "0x9b559aef7ea858608c2e554246fe4a24287e7aeeb976848df2b9a2531f4b9171",
                  required: true,
                },
                {
                  name: "parent_hash",
                  type: "string",
                  description: "The block hash of the parent block",
                  example:
                    "0x011d1fc45839de975cc55d758943f9f1d204f80a90eb631f3bf064b80d53e045",
                  required: true,
                },
                {
                  name: "nonce",
                  type: "string",
                  description: "The nonce",
                  example: "0xedeb2d8fd2b2bdec",
                  required: true,
                },
                {
                  name: "sha3_uncles",
                  type: "string",
                  description: "",
                  example:
                    "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
                  required: true,
                },
                {
                  name: "logs_bloom",
                  type: "string",
                  description: "",
                  example:
                    "0xdde5fc46c5d8bcbd58207bc9f267bf43298e23791a326ff02661e99790da9996b3e0dd912c0b8202d389d282c56e4d11eb2dec4898a32b6b165f1f4cae6aa0079498eab50293f3b8defbf6af11bb75f0408a563ddfc26a3323d1ff5f9849e95d5f034d88a757ddea032c75c00708c9ff34d2207f997cc7d93fd1fa160a6bfaf62a54e31f9fe67ab95752106ba9d185bfdc9b6dc3e17427f844ee74e5c09b17b83ad6e8fc7360f5c7c3e4e1939e77a6374bee57d1fa6b2322b11ad56ad0398302de9b26d6fbfe414aa416bff141fad9d4af6aea19322e47595e342cd377403f417dfd396ab5f151095a5535f51cbc34a40ce9648927b7d1d72ab9daf253e31daf",
                  required: true,
                },
                {
                  name: "transactions_root",
                  type: "string",
                  description: "",
                  example:
                    "0xe4c7bf3aff7ad07f9e80d57f7189f0252592fee6321c2a9bd9b09b6ce0690d27",
                  required: true,
                },
                {
                  name: "state_root",
                  type: "string",
                  description: "",
                  example:
                    "0x49e3bfe7b618e27fde8fa08884803a8458b502c6534af69873a3cc926a7c724b",
                  required: true,
                },
                {
                  name: "receipts_root",
                  type: "string",
                  description: "",
                  example:
                    "0x7cf43d7e837284f036cf92c56973f5e27bdd253ca46168fa195a6b07fa719f23",
                  required: true,
                },
                {
                  name: "miner",
                  type: "string",
                  description: "The address of the miner",
                  example: "0xea674fdde714fd979de3edf0f56aa9716b898ec8",
                  required: true,
                },
                {
                  name: "difficulty",
                  type: "string",
                  description: "The difficulty of the block",
                  example: "7253857437305950",
                  required: true,
                },
                {
                  name: "total_difficulty",
                  type: "string",
                  description: "The total difficulty",
                  example: "24325637817906576196890",
                  required: true,
                },
                {
                  name: "size",
                  type: "string",
                  description: "The block size",
                  example: "61271",
                  required: true,
                },
                {
                  name: "extra_data",
                  type: "string",
                  description: "",
                  example: "0x65746865726d696e652d6575726f70652d7765737433",
                  required: true,
                },
                {
                  name: "gas_limit",
                  type: "string",
                  description: "The gas limit",
                  example: "14977947",
                  required: true,
                },
                {
                  name: "gas_used",
                  type: "string",
                  description: "The gas used",
                  example: "14964688",
                  required: true,
                },
                {
                  name: "transaction_count",
                  type: "string",
                  description: "The number of transactions in the block",
                  example: "252",
                  required: true,
                },
                {
                  name: "transactions",
                  type: "array",
                  description: "The transactions in the block",
                  example: "",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.block.getBlock({ \n  { chain, include }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.block.get_block(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getDateToBlock: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get block by date",
        description: "Get the closest block given the date.",
        sdkTag: "block",
        tags: ["Block"],
        method: "GET",
        path: "/dateToBlock",
        pathParams: [],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "date",
            description:
              "Unix date in milliseconds or a datestring (any format that is accepted by momentjs)",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description:
              "Returns the block number and corresponding date and timestamp",
            body: {
              type: "object",
              fields: [
                {
                  name: "date",
                  type: "string",
                  description: "The date of the block",
                  example: "2020-01-01T00:00:00+00:00",
                  required: true,
                },
                {
                  name: "block",
                  type: "number",
                  description: "The block number",
                  example: 9193266,
                  required: true,
                },
                {
                  name: "timestamp",
                  type: "number",
                  description: "The timestamp of the block",
                  example: 1577836811,
                  required: true,
                },
                {
                  name: "block_timestamp",
                  type: "string",
                  description: "The timestamp of the block",
                  example: "2019-12-31T23:59:45.000Z",
                  required: false,
                },
                {
                  name: "hash",
                  type: "string",
                  description: "The block hash",
                  example:
                    "0x9b559aef7ea858608c2e554246fe4a24287e7aeeb976848df2b9a2531f4b9171",
                  required: false,
                },
                {
                  name: "parent_hash",
                  type: "string",
                  description: "The block hash of the parent block",
                  example:
                    "0x011d1fc45839de975cc55d758943f9f1d204f80a90eb631f3bf064b80d53e045",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.block.getDateToBlock({ \n  { chain, date }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.block.get_date_to_block(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getBlockStats: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get the block stats",
        description: "Get the stats for a block",
        sdkTag: "block",
        tags: ["Block"],
        method: "GET",
        path: "/block/{block_number_or_hash}/stats",
        pathParams: [
          {
            in: "path",
            name: "block_number_or_hash",
            description: "The block number or hash",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns the stats for the block.",
            body: {
              type: "object",
              fields: [
                {
                  name: "transactions",
                  type: "object",
                  description: "Transaction stats",
                  example: "",
                  required: true,
                },
                {
                  name: "nft_transfers",
                  type: "object",
                  description: "NFT transfer stats",
                  example: "",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.block.getBlockStats({ \n  { chain }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.block.get_block_stats(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
    events: {
      getContractLogs: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get logs by contract",
        description: "Get the logs for a contract.",
        sdkTag: "events",
        tags: ["Events"],
        method: "GET",
        path: "/{address}/logs",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the contract",
            required: true,
            schema: {
              type: "string",
              example: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "block_number",
            description:
              "The block number\n* Provide the param 'block_numer' or ('from_block' and / or 'to_block')\n* If 'block_numer' is provided in combination with 'from_block' and / or 'to_block', 'block_number' will will be used\n",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "from_block",
            description:
              "The minimum block number from which to get the logs\n* Provide the param 'block_numer' or ('from_block' and / or 'to_block')\n* If 'block_numer' is provided in combination with 'from_block' and / or 'to_block', 'block_number' will will be used\n",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "to_block",
            description:
              "The maximum block number from which to get the logs\n* Provide the param 'block_numer' or ('from_block' and / or 'to_block')\n* If 'block_numer' is provided in combination with 'from_block' and / or 'to_block', 'block_number' will will be used\n",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "from_date",
            description:
              "The start date from which to get the logs (any format that is accepted by momentjs)\n* Provide the param 'from_block' or 'from_date'\n* If 'from_date' and 'from_block' are provided, 'from_block' will be used.\n* If 'from_date' and the block params are provided, the block params will be used. Please refer to the blocks params sections (block_number,from_block and to_block) on how to use them\n",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "to_date",
            description:
              "Get the logs up to this date (any format that is accepted by momentjs)\n* Provide the param 'to_block' or 'to_date'\n* If 'to_date' and 'to_block' are provided, 'to_block' will be used.\n* If 'to_date' and the block params are provided, the block params will be used. Please refer to the blocks params sections (block_number,from_block and to_block) on how to use them\n",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "topic0",
            description: "topic0",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "limit",
            description: "The desired page size of the result.",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "cursor",
            description:
              "The cursor returned in the previous response (used for getting the next page).",
            schema: {
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns the logs for an address",
            body: {
              type: "object",
              fields: [
                {
                  name: "page",
                  type: "integer",
                  description: "The current page of the result",
                  example: "1",
                  required: false,
                },
                {
                  name: "page_size",
                  type: "integer",
                  description: "The number of results per page",
                  example: "100",
                  required: false,
                },
                {
                  name: "cursor",
                  type: "string",
                  description: "The cursor to get to the next page",
                  example: "",
                  required: false,
                },
                {
                  name: "result",
                  type: "array",
                  description: "",
                  example: "",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.events.getContractLogs({ \n  { chain, blockNumber, fromBlock, toBlock, fromDate, toDate, topic0, limit, cursor }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.events.get_contract_logs(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getContractEvents: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get events by contract",
        description:
          "Get events for a contract ordered by block number in descending order. [Try it with Swagger](https://deep-index.moralis.io/api-docs-2.1/#/Events/getContractEvents).",
        sdkTag: "events",
        tags: ["Events"],
        method: "POST",
        path: "/{address}/events",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the contract",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "from_block",
            description:
              "The minimum block number from which to get the logs\n* Provide the param 'from_block' or 'from_date'\n* If 'from_date' and 'from_block' are provided, 'from_block' will be used.\n",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "to_block",
            description:
              "The maximum block number from which to get the logs.\n* Provide the param 'to_block' or 'to_date'\n* If 'to_date' and 'to_block' are provided, 'to_block' will be used.\n",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "from_date",
            description:
              "The start date from which to get the logs (any format that is accepted by momentjs)\n* Provide the param 'from_block' or 'from_date'\n* If 'from_date' and 'from_block' are provided, 'from_block' will be used.\n",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "to_date",
            description:
              "Get the logs up to this date (any format that is accepted by momentjs)\n* Provide the param 'to_block' or 'to_date'\n* If 'to_date' and 'to_block' are provided, 'to_block' will be used.\n",
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "topic",
            description: "The topic of the event",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "offset",
            description: "offset",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "limit",
            description: "The desired page size of the result.",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
            },
          },
          {
            in: "query",
            name: "cursor",
            description:
              "The cursor returned in the previous response (used for getting the next page).",
            schema: {
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns a collection of events by topic",
            body: {
              type: "object",
              fields: [
                {
                  type: "object",
                  name: "page",
                  description: "The current page of the result",
                  required: false,
                },
                {
                  type: "object",
                  name: "page_size",
                  description: "The number of results per page",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        name: "transaction_hash",
                        type: "string",
                        description: "The transaction hash",
                        example:
                          "0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09",
                        required: true,
                      },
                      {
                        name: "address",
                        type: "string",
                        description: "The address of the contract",
                        example: "0x18F97EF6B2cbac5CA85b375b7093C4A207340d06",
                        required: true,
                      },
                      {
                        name: "block_timestamp",
                        type: "string",
                        description: "The block timestamp",
                        example: "2021-04-02T10:07:54.000Z",
                        required: true,
                      },
                      {
                        name: "block_number",
                        type: "string",
                        description: "The block number",
                        example: 12526958,
                        required: true,
                      },
                      {
                        name: "block_hash",
                        type: "string",
                        description: "The block hash",
                        example:
                          "0x0372c302e3c52e8f2e15d155e2c545e6d802e479236564af052759253b20fd86",
                        required: true,
                      },
                      {
                        name: "data",
                        type: "object",
                        description: "The content of the event",
                        example: "",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.events.getContractEvents({ \n  { chain, fromBlock, toBlock, fromDate, toDate, topic, offset, limit, cursor }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.events.get_contract_events(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
    utils: {
      runContractFunction: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Run contract function",
        description:
          "Run a given function of a contract ABI and retrieve readonly data. [Try it with Swagger](https://deep-index.moralis.io/api-docs-2.1/#/Utils/runContractFunction).",
        sdkTag: "utils",
        tags: ["Utils"],
        method: "POST",
        path: "/{address}/function",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address of the contract",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "function_name",
            description: "The function name of the contract",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns response of the function executed",
            body: {
              type: "string",
              field: {
                type: "string",
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.utils.runContractFunction({ \n  { chain, functionName }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.utils.run_contract_function(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      web3ApiVersion: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get API version",
        description: "Get the current version of the Moralis Web3 API.",
        sdkTag: "utils",
        tags: ["Utils"],
        method: "GET",
        path: "/web3/version",
        pathParams: [],
        queryParams: [],
        responses: [
          {
            status: "200",
            description: "Get the current version of the Moralis Web3 API.",
            body: {
              type: "object",
              fields: [
                {
                  name: "version",
                  type: "string",
                  description: "The version of the API",
                  example: "1.0.0",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.utils.web3ApiVersion({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.utils.web3_api_version(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      endpointWeights: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get weights of endpoints",
        description: "Get the cost and rate limit for each API endpoint.",
        sdkTag: "utils",
        tags: ["Utils"],
        method: "GET",
        path: "/info/endpointWeights",
        pathParams: [],
        queryParams: [],
        responses: [
          {
            status: "200",
            description: "The cost and rate limit for each API endpoint.",
            body: {
              type: "array",
              field: {
                type: "object",
                fields: [
                  {
                    name: "endpoint",
                    type: "string",
                    description: "endpoint",
                    example: "endpointWeights",
                    required: true,
                  },
                  {
                    name: "path",
                    type: "string",
                    description: "The path to the endpoint",
                    example: "/info/endpointWeights",
                    required: true,
                  },
                  {
                    name: "rateLimitCost",
                    type: "string",
                    description:
                      "The number of hits the request counts towards rate limiting",
                    example: 1,
                    required: true,
                  },
                  {
                    name: "price",
                    type: "string",
                    description:
                      "The number of compute units the request counts towards billing",
                    example: "",
                    required: true,
                  },
                ],
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.utils.endpointWeights({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.utils.endpoint_weights(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      reviewContracts: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Review contracts",
        description: "Review contracts as spam or not spam",
        sdkTag: "utils",
        tags: ["Utils"],
        method: "POST",
        path: "/contracts-review",
        pathParams: [],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns a message acknowledging the report",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "Submission successful",
                  },
                  name: "message",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.utils.reviewContracts({ \n  { chain }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.utils.review_contracts(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
    resolve: {
      resolveAddress: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "ENS lookup by address",
        description: "Reverse resolve a given ETH address to its ENS domain.",
        sdkTag: "resolve",
        tags: ["Resolve Web3 Domain"],
        method: "GET",
        path: "/resolve/{address}/reverse",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address to be resolved",
            required: true,
            schema: {
              type: "string",
              example: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
            },
          },
        ],
        queryParams: [],
        responses: [
          {
            status: "200",
            description: "Returns an ENS",
            body: {
              type: "object",
              fields: [
                {
                  name: "name",
                  type: "string",
                  description: "Resolved ENS address",
                  example: "Vitalik.eth",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.resolve.resolveAddress({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.resolve.resolve_address(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      resolveDomain: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Resolve Unstoppable domain",
        description: "Resolve a specific Unstoppable domain to its address.",
        sdkTag: "resolve",
        tags: ["Resolve Web3 Domain"],
        method: "GET",
        path: "/resolve/{domain}",
        pathParams: [
          {
            in: "path",
            name: "domain",
            description: "The domain to be resolved",
            required: true,
            schema: {
              type: "string",
              example: "brad.crypto",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "currency",
            description: "The currency to query",
            required: false,
            schema: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: ["eth", "0x1"],
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns an address",
            body: {
              type: "object",
              fields: [
                {
                  name: "address",
                  type: "string",
                  description: "Resolved domain address",
                  example: "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
                  required: true,
                },
              ],
            },
          },
          {
            status: "404",
            description: "Returns an address",
            body: {
              type: "object",
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.resolve.resolveDomain({ \n  { currency }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.resolve.resolve_domain(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      resolveAddressToDomain: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Resolve Address to Unstoppable domain",
        description: "Resolve a specific address to its Unstoppable domain",
        sdkTag: "resolve",
        tags: ["Resolve Web3 Domain"],
        method: "GET",
        path: "/resolve/{address}/domain",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "The address to be resolved",
            required: true,
            schema: {
              type: "string",
              example: "0x94ef5300cbc0aa600a821ccbc561b057e456ab23",
            },
          },
        ],
        queryParams: [],
        responses: [
          {
            status: "200",
            description: "Returns an unstoppable domain",
            body: {
              type: "object",
              fields: [
                {
                  name: "name",
                  type: "string",
                  description: "Resolved unstoppable domain address",
                  example: "sandy.nft",
                  required: true,
                },
              ],
            },
          },
          {
            status: "404",
            description: "Returns an unstoppable domain",
            body: {
              type: "object",
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.resolve.resolveAddressToDomain({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.resolve.resolve_address_to_domain(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      resolveENSDomain: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "ENS lookup by domain",
        description: "Resolve a specific ENS domain to its address.",
        sdkTag: "resolve",
        tags: ["Resolve Web3 Domain"],
        method: "GET",
        path: "/resolve/ens/{domain}",
        pathParams: [
          {
            in: "path",
            name: "domain",
            description: "The domain to be resolved",
            required: true,
            schema: {
              type: "string",
              example: "vitalik.eth",
            },
          },
        ],
        queryParams: [],
        responses: [
          {
            status: "200",
            description: "Returns an address",
            body: {
              type: "object",
              fields: [
                {
                  name: "address",
                  type: "string",
                  description: "Resolved domain address",
                  example: "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
                  required: true,
                },
              ],
            },
          },
          {
            status: "404",
            description: "Returns an address",
            body: {
              type: "object",
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.resolve.resolveENSDomain({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.resolve.resolve_e_n_s_domain(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
    defi: {
      getPairReserves: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get DEX token pair reserves",
        description:
          "Get the liquidity reserves for a given pair address. Only Uniswap V2 based exchanges supported at the moment.",
        sdkTag: "defi",
        tags: ["DeFi"],
        method: "GET",
        path: "/{pair_address}/reserves",
        pathParams: [
          {
            in: "path",
            name: "pair_address",
            description: "The liquidity pair address",
            required: true,
            schema: {
              type: "string",
              example: "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "to_block",
            description: "The block number to get the reserves from",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "to_date",
            description:
              "Get the reserves up to this date (any format that is accepted by momentjs)\n* Provide the param 'to_block' or 'to_date'\n* If 'to_date' and 'to_block' are provided, 'to_block' will be used.\n",
            schema: {
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns the pair reserves",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "220969226548536862025877",
                  },
                  name: "reserve0",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "844810441191293211036",
                  },
                  name: "reserve1",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.defi.getPairReserves({ \n  { chain, toBlock, toDate }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.defi.get_pair_reserves(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getPairAddress: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get DEX token pair address",
        description:
          'Fetch the pair data of the provided token0+token1 combination.\nThe token0 and token1 options are interchangable (ie. there is no different outcome in "token0=WETH and token1=USDT" or "token0=USDT and token1=WETH")\n',
        sdkTag: "defi",
        tags: ["DeFi"],
        method: "GET",
        path: "/{token0_address}/{token1_address}/pairAddress",
        pathParams: [
          {
            in: "path",
            name: "token0_address",
            description: "The token0 address",
            required: true,
            schema: {
              type: "string",
              example: "0x2b591e99afe9f32eaa6214f7b7629768c40eeb39",
            },
          },
          {
            in: "path",
            name: "token1_address",
            description: "The token1 address",
            required: true,
            schema: {
              type: "string",
              example: "0xdac17f958d2ee523a2206206994597c13d831ec7",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
          {
            in: "query",
            name: "to_block",
            description: "The block number to get the reserves from",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "to_date",
            description:
              "Get the reserves up to this date (any format that is accepted by momentjs)\n* Provide the param 'to_block' or 'to_date'\n* If 'to_date' and 'to_block' are provided, 'to_block' will be used.\n",
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "exchange",
            description: "The factory name or address of the token exchange",
            required: true,
            schema: {
              type: "string",
              example: "uniswapv2",
              enum: [
                "uniswapv2",
                "uniswapv3",
                "sushiswapv2",
                "pancakeswapv2",
                "pancakeswapv1",
                "quickswap",
              ],
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns the pair address of the two tokens.",
            body: {
              type: "object",
              fields: [
                {
                  type: "object",
                  fields: [
                    {
                      type: "string",
                      field: {
                        type: "string",
                        example: "0x2b591e99afe9f32eaa6214f7b7629768c40eeb39",
                      },
                      name: "address",
                      required: false,
                    },
                    {
                      type: "string",
                      field: {
                        type: "string",
                        example: "HEX",
                      },
                      name: "name",
                      required: false,
                    },
                    {
                      type: "string",
                      field: {
                        type: "string",
                        example: "HEX",
                      },
                      name: "symbol",
                      required: false,
                    },
                    {
                      type: "string",
                      field: {
                        type: "string",
                        example: 9,
                      },
                      name: "decimals",
                      required: false,
                    },
                    {
                      type: "string",
                      field: {
                        type: "string",
                        example:
                          "https://cdn.moralis.io/eth/0x2b591e99afe9f32eaa6214f7b7629768c40eeb39.png",
                      },
                      name: "logo",
                      required: false,
                    },
                    {
                      type: "string",
                      field: {
                        type: "string",
                        example:
                          "b3bd1b5512965d7b6aeee903dcc6d28b116d58c788eb41e9c1690baed878beaa",
                      },
                      name: "logo_hash",
                      required: false,
                    },
                    {
                      type: "string",
                      field: {
                        type: "string",
                        example:
                          "https://cdn.moralis.io/eth/0x2b591e99afe9f32eaa6214f7b7629768c40eeb39_thumb.png",
                      },
                      name: "thumbnail",
                      required: false,
                    },
                    {
                      type: "string",
                      field: {
                        type: "string",
                        example: 14836562,
                      },
                      name: "block_number",
                      required: false,
                    },
                    {
                      type: "object",
                      name: "validated",
                      required: false,
                    },
                    {
                      type: "string",
                      field: {
                        type: "string",
                        example: "2022-01-20T09:39:55.818Z",
                      },
                      name: "created_at",
                      required: false,
                    },
                  ],
                  name: "token0",
                  required: false,
                },
                {
                  type: "object",
                  fields: [
                    {
                      type: "string",
                      field: {
                        type: "string",
                        example: "0xdac17f958d2ee523a2206206994597c13d831ec7",
                      },
                      name: "address",
                      required: false,
                    },
                    {
                      type: "string",
                      field: {
                        type: "string",
                        example: "Tether USD",
                      },
                      name: "name",
                      required: false,
                    },
                    {
                      type: "string",
                      field: {
                        type: "string",
                        example: "USDT",
                      },
                      name: "symbol",
                      required: false,
                    },
                    {
                      type: "string",
                      field: {
                        type: "string",
                        example: 6,
                      },
                      name: "decimals",
                      required: false,
                    },
                    {
                      type: "string",
                      field: {
                        type: "string",
                        example:
                          "https://cdn.moralis.io/eth/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
                      },
                      name: "logo",
                      required: false,
                    },
                    {
                      type: "string",
                      field: {
                        type: "string",
                        example:
                          "ee7aa2cdf100649a3521a082116258e862e6971261a39b5cd4e4354fcccbc54d",
                      },
                      name: "logo_hash",
                      required: false,
                    },
                    {
                      type: "string",
                      field: {
                        type: "string",
                        example:
                          "https://cdn.moralis.io/eth/0xdac17f958d2ee523a2206206994597c13d831ec7_thumb.png",
                      },
                      name: "thumbnail",
                      required: false,
                    },
                    {
                      type: "string",
                      field: {
                        type: "string",
                        example: "4638568",
                      },
                      name: "block_number",
                      required: false,
                    },
                    {
                      type: "object",
                      name: "validated",
                      required: false,
                    },
                    {
                      type: "string",
                      field: {
                        type: "string",
                        example: "2022-01-20T09:39:55.818Z",
                      },
                      name: "created_at",
                      required: false,
                    },
                  ],
                  name: "token1",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "0xbbb9bf440d0f686487925fef3b0a0f9aa67753f6",
                  },
                  name: "pairAddress",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.defi.getPairAddress({ \n  { chain, toBlock, toDate, exchange }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.defi.get_pair_address(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
    ipfs: {
      uploadFolder: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Upload folder to IPFS",
        description:
          "Upload multiple files to IPFS and place them in a folder directory.",
        sdkTag: "ipfs",
        tags: ["IPFS"],
        method: "POST",
        path: "/ipfs/uploadFolder",
        pathParams: [],
        queryParams: [],
        responses: [
          {
            status: "200",
            description: "Returns the path to the uploaded files",
            body: {
              type: "array",
              field: {
                type: "object",
                fields: [
                  {
                    name: "path",
                    type: "string",
                    description: "Path to the file",
                    example:
                      "https://ipfs.moralis.io/QmPQ3YJ3hgfsBzJ1U4MGyV2C1GhDy6MWCENr1qMdMpKVnY/moralis/logo.jpg",
                    required: true,
                  },
                ],
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.ipfs.uploadFolder({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.ipfs.upload_folder(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
    marketData: {
      getTopERC20TokensByMarketCap: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get top ERC20 tokens",
        description: "Get the top ERC20 tokens by market cap",
        sdkTag: "marketData",
        tags: ["Market Data"],
        method: "GET",
        path: "/market-data/erc20s/top-tokens",
        pathParams: [],
        queryParams: [],
        responses: [
          {
            status: "200",
            description: "Returns the top ERC20 tokens by market cap",
            body: {
              type: "array",
              field: {
                type: "object",
                fields: [
                  {
                    name: "rank",
                    type: "integer",
                    description: "The rank",
                    example: 1,
                    required: true,
                  },
                  {
                    name: "token_name",
                    type: "string",
                    description: "The token name",
                    example: "Wrapped Ether",
                    required: true,
                  },
                  {
                    name: "token_symbol",
                    type: "string",
                    description: "The token symbol",
                    example: "WETH",
                    required: true,
                  },
                  {
                    name: "token_logo",
                    type: "string",
                    description: "The token image",
                    example:
                      "https://assets.coingecko.com/coins/images/2518/large/weth.png?1595348880",
                    required: true,
                  },
                  {
                    name: "token_decimals",
                    type: "string",
                    description: "The token decimals",
                    example: "18",
                    required: true,
                  },
                  {
                    name: "contract_address",
                    type: "string",
                    description: "The contract address",
                    example: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                    required: true,
                  },
                  {
                    name: "price_usd",
                    type: "string",
                    description: "The price in USD",
                    example: "0.0285",
                    required: true,
                  },
                  {
                    name: "price_24h_percent_change",
                    type: "string",
                    description: "The price change in the last 24h",
                    example: "0.0285",
                    required: true,
                  },
                  {
                    name: "price_7d_percent_change",
                    type: "string",
                    description: "The price change in the last 7d",
                    example: "0.0285",
                    required: true,
                  },
                  {
                    name: "market_cap_usd",
                    type: "string",
                    description: "The market cap in USD",
                    example: "0.0285",
                    required: true,
                  },
                ],
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.marketData.getTopERC20TokensByMarketCap({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.market_data.get_top_e_r_c20_tokens_by_market_cap(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getTopERC20TokensByPriceMovers: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get top ERC20 tokens",
        description: "Get the top ERC20 tokens by price change",
        sdkTag: "marketData",
        tags: ["Market Data"],
        method: "GET",
        path: "/market-data/erc20s/top-movers",
        pathParams: [],
        queryParams: [],
        responses: [
          {
            status: "200",
            description:
              "Returns an a list of ERC20 tokens with their price change",
            body: {
              type: "object",
              fields: [
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        name: "rank",
                        type: "integer",
                        description: "The rank",
                        example: 1,
                        required: true,
                      },
                      {
                        name: "token_name",
                        type: "string",
                        description: "The token name",
                        example: "Wrapped Ether",
                        required: true,
                      },
                      {
                        name: "token_symbol",
                        type: "string",
                        description: "The token symbol",
                        example: "WETH",
                        required: true,
                      },
                      {
                        name: "token_logo",
                        type: "string",
                        description: "The token image",
                        example:
                          "https://assets.coingecko.com/coins/images/2518/large/weth.png?1595348880",
                        required: true,
                      },
                      {
                        name: "token_decimals",
                        type: "string",
                        description: "The token decimals",
                        example: "18",
                        required: true,
                      },
                      {
                        name: "contract_address",
                        type: "string",
                        description: "The contract address",
                        example: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                        required: true,
                      },
                      {
                        name: "price_usd",
                        type: "string",
                        description: "The price in USD",
                        example: "0.0285",
                        required: true,
                      },
                      {
                        name: "price_24h_percent_change",
                        type: "string",
                        description: "The price change in the last 24h",
                        example: "0.0285",
                        required: true,
                      },
                      {
                        name: "price_7d_percent_change",
                        type: "string",
                        description: "The price change in the last 7d",
                        example: "0.0285",
                        required: true,
                      },
                      {
                        name: "market_cap_usd",
                        type: "string",
                        description: "The market cap in USD",
                        example: "0.0285",
                        required: true,
                      },
                    ],
                  },
                  name: "gainers",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        name: "rank",
                        type: "integer",
                        description: "The rank",
                        example: 1,
                        required: true,
                      },
                      {
                        name: "token_name",
                        type: "string",
                        description: "The token name",
                        example: "Wrapped Ether",
                        required: true,
                      },
                      {
                        name: "token_symbol",
                        type: "string",
                        description: "The token symbol",
                        example: "WETH",
                        required: true,
                      },
                      {
                        name: "token_logo",
                        type: "string",
                        description: "The token image",
                        example:
                          "https://assets.coingecko.com/coins/images/2518/large/weth.png?1595348880",
                        required: true,
                      },
                      {
                        name: "token_decimals",
                        type: "string",
                        description: "The token decimals",
                        example: "18",
                        required: true,
                      },
                      {
                        name: "contract_address",
                        type: "string",
                        description: "The contract address",
                        example: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                        required: true,
                      },
                      {
                        name: "price_usd",
                        type: "string",
                        description: "The price in USD",
                        example: "0.0285",
                        required: true,
                      },
                      {
                        name: "price_24h_percent_change",
                        type: "string",
                        description: "The price change in the last 24h",
                        example: "0.0285",
                        required: true,
                      },
                      {
                        name: "price_7d_percent_change",
                        type: "string",
                        description: "The price change in the last 7d",
                        example: "0.0285",
                        required: true,
                      },
                      {
                        name: "market_cap_usd",
                        type: "string",
                        description: "The market cap in USD",
                        example: "0.0285",
                        required: true,
                      },
                    ],
                  },
                  name: "losers",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.marketData.getTopERC20TokensByPriceMovers({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.market_data.get_top_e_r_c20_tokens_by_price_movers(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getTopNFTCollectionsByMarketCap: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get top NFT collections",
        description: "Get the top NFT collections by market cap",
        sdkTag: "marketData",
        tags: ["Market Data"],
        method: "GET",
        path: "/market-data/nfts/top-collections",
        pathParams: [],
        queryParams: [],
        responses: [
          {
            status: "200",
            description: "Returns the top NFT collections by market cap",
            body: {
              type: "array",
              field: {
                type: "object",
                fields: [
                  {
                    name: "rank",
                    type: "integer",
                    description: "The rank",
                    example: 1,
                    required: true,
                  },
                  {
                    name: "collection_title",
                    type: "string",
                    description: "The collection title",
                    example: "CryptoPunks",
                    required: true,
                  },
                  {
                    name: "collection_image",
                    type: "string",
                    description: "The collection image",
                    example: "",
                    required: true,
                  },
                  {
                    name: "floor_price_usd",
                    type: "string",
                    description: "The floor price in USD",
                    example: "0.0",
                    required: true,
                  },
                  {
                    name: "floor_price_24hr_percent_change",
                    type: "string",
                    description: "The floor price 24hr percent change",
                    example: "0.0",
                    required: true,
                  },
                  {
                    name: "market_cap_usd",
                    type: "string",
                    description: "The market cap in USD",
                    example: "0.0",
                    required: true,
                  },
                  {
                    name: "market_cap_24hr_percent_change",
                    type: "string",
                    description: "The market cap 24hr percent change",
                    example: "0.0",
                    required: true,
                  },
                  {
                    name: "volume_usd",
                    type: "string",
                    description: "The volume in USD",
                    example: "0.0",
                    required: true,
                  },
                  {
                    name: "volume_24hr_percent_change",
                    type: "string",
                    description: "The volume 24hr percent change",
                    example: "0.0",
                    required: true,
                  },
                ],
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.marketData.getTopNFTCollectionsByMarketCap({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.market_data.get_top_n_f_t_collections_by_market_cap(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getHottestNFTCollectionsByTradingVolume: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get hottest NFT collections",
        description: "Get the hottest NFT collections by trading volume",
        sdkTag: "marketData",
        tags: ["Market Data"],
        method: "GET",
        path: "/market-data/nfts/hottest-collections",
        pathParams: [],
        queryParams: [],
        responses: [
          {
            status: "200",
            description:
              "Returns the hottest NFT collections by trading volume",
            body: {
              type: "array",
              field: {
                type: "object",
                fields: [
                  {
                    name: "rank",
                    type: "integer",
                    description: "The rank",
                    example: 1,
                    required: true,
                  },
                  {
                    name: "collection_title",
                    type: "string",
                    description: "The collection title",
                    example: "CryptoPunks",
                    required: true,
                  },
                  {
                    name: "collection_image",
                    type: "string",
                    description: "The collection image",
                    example: "",
                    required: true,
                  },
                  {
                    name: "floor_price_usd",
                    type: "string",
                    description: "The floor price in USD",
                    example: "0.0",
                    required: true,
                  },
                  {
                    name: "floor_price_24hr_percent_change",
                    type: "string",
                    description: "The floor price 24hr percent change",
                    example: "0.0",
                    required: true,
                  },
                  {
                    name: "volume_usd",
                    type: "string",
                    description: "The volume in USD",
                    example: "0.0",
                    required: true,
                  },
                  {
                    name: "volume_24hr_percent_change",
                    type: "string",
                    description: "The volume 24hr percent change",
                    example: "0.0",
                    required: true,
                  },
                  {
                    name: "average_price_usd",
                    type: "string",
                    description: "The average price in USD",
                    example: "0.0",
                    required: false,
                  },
                ],
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.marketData.getHottestNFTCollectionsByTradingVolume({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.market_data.get_hottest_n_f_t_collections_by_trading_volume(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
    wallets: {
      getWalletActiveChains: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get the wallet active chains",
        description: "Get the active chains for a wallet address.",
        sdkTag: "wallets",
        tags: ["Wallets"],
        method: "GET",
        path: "/wallets/{address}/chains",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "Wallet address",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chains",
            description: "The chains to query",
            required: false,
            schema: {
              type: "string",
              field: {
                type: "string",
                example: "eth",
                default: "eth",
                enum: [
                  "eth",
                  "0x1",
                  "goerli",
                  "0x5",
                  "sepolia",
                  "0xaa36a7",
                  "polygon",
                  "0x89",
                  "mumbai",
                  "0x13881",
                  "bsc",
                  "0x38",
                  "bsc testnet",
                  "0x61",
                  "avalanche",
                  "0xa86a",
                  "fantom",
                  "0xfa",
                  "palm",
                  "0x2a15c308d",
                  "cronos",
                  "0x19",
                  "arbitrum",
                  "0xa4b1",
                ],
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns the active chains for the wallet address.",
            body: {
              type: "object",
              fields: [
                {
                  name: "address",
                  type: "string",
                  description: "The address of the wallet",
                  example: "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
                  required: true,
                },
                {
                  name: "active_chains",
                  type: "array",
                  description: "",
                  example: "",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.wallets.getWalletActiveChains({ \n  { chains }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.wallets.get_wallet_active_chains(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getWalletStats: {
        apiHost: "https://deep-index.moralis.io/api/v2.2",
        summary: "Get the wallet stats",
        description: "Get the stats for a wallet address.",
        sdkTag: "wallets",
        tags: ["Wallets"],
        method: "GET",
        path: "/wallets/{address}/stats",
        pathParams: [
          {
            in: "path",
            name: "address",
            description: "Wallet address",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [
          {
            in: "query",
            name: "chain",
            description: "The chain to query",
            required: false,
            type: "string",
            field: {
              type: "string",
              example: "eth",
              default: "eth",
              enum: [
                "eth",
                "0x1",
                "goerli",
                "0x5",
                "sepolia",
                "0xaa36a7",
                "polygon",
                "0x89",
                "mumbai",
                "0x13881",
                "bsc",
                "0x38",
                "bsc testnet",
                "0x61",
                "avalanche",
                "0xa86a",
                "fantom",
                "0xfa",
                "palm",
                "0x2a15c308d",
                "cronos",
                "0x19",
                "arbitrum",
                "0xa4b1",
              ],
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns the stats for the wallet address.",
            body: {
              type: "object",
              fields: [
                {
                  name: "nfts",
                  type: "string",
                  description: "The number of NFTs owned by a wallet",
                  example: "100",
                  required: true,
                },
                {
                  name: "collections",
                  type: "string",
                  description:
                    "The number of unique NFT collections owned by a wallet",
                  example: "10",
                  required: true,
                },
                {
                  name: "transactions",
                  type: "object",
                  description: "Transaction stats",
                  example: "",
                  required: true,
                },
                {
                  name: "nft_transfers",
                  type: "object",
                  description: "NFT transfer stats",
                  example: "",
                  required: true,
                },
                {
                  name: "token_transfers",
                  type: "object",
                  description: "Token transfer stats",
                  example: "",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.EvmApi.wallets.getWalletStats({ \n  { chain }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import evm_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = evm_api.wallets.get_wallet_stats(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
  },
  SolApi: {
    account: {
      balance: {
        apiHost: "https://solana-gateway.moralis.io",
        summary: "Get native balance by wallet",
        description:
          "Gets the native balance owned by a given network and address.",
        sdkTag: "account",
        tags: ["Account"],
        method: "GET",
        path: "/account/{network}/{address}/balance",
        pathParams: [
          {
            name: "network",
            required: true,
            in: "path",
            description: "The network to query",
            schema: {
              default: "mainnet",
              enum: ["mainnet", "devnet"],
              type: "string",
            },
          },
          {
            name: "address",
            required: true,
            in: "path",
            description:
              "The address for which the native balance will be checked",
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                  },
                  name: "solana",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                  },
                  name: "lamports",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "string",
              field: {
                type: "string",
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.SolApi.account.balance({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import sol_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = sol_api.account.balance(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getSPL: {
        apiHost: "https://solana-gateway.moralis.io",
        summary: "Get token balance by wallet",
        description:
          "Gets the token balances owned by a given network and address.",
        sdkTag: "account",
        tags: ["Account"],
        method: "GET",
        path: "/account/{network}/{address}/tokens",
        pathParams: [
          {
            name: "network",
            required: true,
            in: "path",
            description: "The network to query",
            schema: {
              default: "mainnet",
              enum: ["mainnet", "devnet"],
              type: "string",
            },
          },
          {
            name: "address",
            required: true,
            in: "path",
            description: "The address for which token balances will be checked",
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "array",
              field: {
                type: "object",
                fields: [
                  {
                    type: "string",
                    field: {
                      type: "string",
                    },
                    name: "associatedTokenAddress",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                    },
                    name: "mint",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                    },
                    name: "name",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                    },
                    name: "symbol",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                    },
                    name: "amount",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                    },
                    name: "amountRaw",
                    required: true,
                  },
                  {
                    type: "object",
                    name: "decimals",
                    required: true,
                  },
                ],
              },
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "string",
              field: {
                type: "string",
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.SolApi.account.getSPL({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import sol_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = sol_api.account.get_s_p_l(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTs: {
        apiHost: "https://solana-gateway.moralis.io",
        summary: "Get NFTs by wallet",
        description: "Gets NFTs owned by a given network and address.",
        sdkTag: "account",
        tags: ["Account"],
        method: "GET",
        path: "/account/{network}/{address}/nft",
        pathParams: [
          {
            name: "network",
            required: true,
            in: "path",
            description: "The network to query",
            schema: {
              default: "mainnet",
              enum: ["mainnet", "devnet"],
              type: "string",
            },
          },
          {
            name: "address",
            required: true,
            in: "path",
            description: "The address of the contract",
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "array",
              field: {
                type: "object",
                fields: [
                  {
                    type: "string",
                    field: {
                      type: "string",
                    },
                    name: "associatedTokenAddress",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                    },
                    name: "mint",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                    },
                    name: "name",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                    },
                    name: "symbol",
                    required: true,
                  },
                ],
              },
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "string",
              field: {
                type: "string",
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.SolApi.account.getNFTs({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import sol_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = sol_api.account.get_n_f_ts(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getPortfolio: {
        apiHost: "https://solana-gateway.moralis.io",
        summary: "Gets portfolio by wallet",
        description: "Gets the portfolio for a given network and address.",
        sdkTag: "account",
        tags: ["Account"],
        method: "GET",
        path: "/account/{network}/{address}/portfolio",
        pathParams: [
          {
            name: "network",
            required: true,
            in: "path",
            description: "The network to query",
            schema: {
              default: "mainnet",
              enum: ["mainnet", "devnet"],
              type: "string",
            },
          },
          {
            name: "address",
            required: true,
            in: "path",
            description: "The address of the token contract",
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "object",
                  fields: [
                    {
                      type: "string",
                      field: {
                        type: "string",
                      },
                      name: "solana",
                      required: true,
                    },
                    {
                      type: "string",
                      field: {
                        type: "string",
                      },
                      name: "lamports",
                      required: true,
                    },
                  ],
                  name: "nativeBalance",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                        },
                        name: "associatedTokenAddress",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                        },
                        name: "mint",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                        },
                        name: "name",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                        },
                        name: "symbol",
                        required: true,
                      },
                    ],
                  },
                  name: "nfts",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                        },
                        name: "associatedTokenAddress",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                        },
                        name: "mint",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                        },
                        name: "name",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                        },
                        name: "symbol",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                        },
                        name: "amount",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                        },
                        name: "amountRaw",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "decimals",
                        required: true,
                      },
                    ],
                  },
                  name: "tokens",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "string",
              field: {
                type: "string",
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.SolApi.account.getPortfolio({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import sol_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = sol_api.account.get_portfolio(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
    nft: {
      getNFTMetadata: {
        apiHost: "https://solana-gateway.moralis.io",
        summary: "Get NFT metadata",
        description:
          "Get the global NFT metadata for a given network and contract (mint, standard, name, symbol, metaplex).",
        sdkTag: "nft",
        tags: ["NFT"],
        method: "GET",
        path: "/nft/{network}/{address}/metadata",
        pathParams: [
          {
            name: "network",
            required: true,
            in: "path",
            description: "The network to query",
            schema: {
              default: "mainnet",
              enum: ["mainnet", "devnet"],
              type: "string",
            },
          },
          {
            name: "address",
            required: true,
            in: "path",
            description: "The address of the contract",
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                  },
                  name: "mint",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                  },
                  name: "standard",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                  },
                  name: "name",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                  },
                  name: "symbol",
                  required: true,
                },
                {
                  type: "object",
                  fields: [
                    {
                      type: "string",
                      field: {
                        type: "string",
                      },
                      name: "metadataUri",
                      required: true,
                    },
                    {
                      type: "object",
                      name: "masterEdition",
                      required: true,
                    },
                    {
                      type: "object",
                      name: "isMutable",
                      required: true,
                    },
                    {
                      type: "object",
                      name: "primarySaleHappened",
                      required: true,
                    },
                    {
                      type: "object",
                      name: "sellerFeeBasisPoints",
                      required: true,
                    },
                    {
                      type: "string",
                      field: {
                        type: "string",
                      },
                      name: "updateAuthority",
                      required: true,
                    },
                  ],
                  name: "metaplex",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "string",
              field: {
                type: "string",
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.SolApi.nft.getNFTMetadata({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import sol_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = sol_api.nft.get_n_f_t_metadata(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
    token: {
      getTokenPrice: {
        apiHost: "https://solana-gateway.moralis.io",
        summary: "Get token price",
        description:
          "Gets the token price (usd and native) for a given contract address and network.",
        sdkTag: "token",
        tags: ["Token"],
        method: "GET",
        path: "/token/{network}/{address}/price",
        pathParams: [
          {
            name: "network",
            required: true,
            in: "path",
            description: "The network to query",
            schema: {
              default: "mainnet",
              enum: ["mainnet"],
              type: "string",
            },
          },
          {
            name: "address",
            required: true,
            in: "path",
            description: "The address of the token contract",
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "object",
                  fields: [
                    {
                      type: "string",
                      field: {
                        type: "string",
                      },
                      name: "value",
                      required: true,
                    },
                    {
                      type: "object",
                      name: "decimals",
                      required: true,
                    },
                    {
                      type: "string",
                      field: {
                        type: "string",
                      },
                      name: "name",
                      required: true,
                    },
                    {
                      type: "string",
                      field: {
                        type: "string",
                      },
                      name: "symbol",
                      required: true,
                    },
                  ],
                  name: "nativePrice",
                  required: false,
                },
                {
                  type: "object",
                  name: "usdPrice",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                  },
                  name: "exchangeAddress",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                  },
                  name: "exchangeName",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "string",
              field: {
                type: "string",
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.SolApi.token.getTokenPrice({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import sol_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = sol_api.token.get_token_price(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
  },
  AptosApi: {
    nfts: {
      getNFTsByIds: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get NFTs by ids",
        sdkTag: "nfts",
        tags: ["NFT Tokens"],
        method: "GET",
        path: "/nfts",
        pathParams: [],
        queryParams: [
          {
            name: "token_ids",
            required: true,
            in: "query",
            description: "The identifiers of the tokens to get",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: false,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "array",
              field: {
                type: "object",
                fields: [
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example:
                        "6993fb8b5688d392a2d94127b9926519d6327e69f2bcf3dc0c5df2c060aec97d",
                      description: "The identifier of the collection",
                      maxLength: 64,
                      minLength: 64,
                      nullable: false,
                    },
                    name: "collection_data_id_hash",
                    description: "The identifier of the collection",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example: "Topaz Troopers",
                      description: "The name of the collection",
                      maxLength: 128,
                      minLength: 1,
                      nullable: false,
                    },
                    name: "collection_name",
                    description: "The name of the collection",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example:
                        "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                      description:
                        "The address of the creator of the collection",
                      maxLength: 66,
                      minLength: 66,
                      nullable: false,
                    },
                    name: "creator_address",
                    description: "The address of the creator of the collection",
                    required: true,
                  },
                  {
                    type: "object",
                    name: "default_properties",
                    description: "The default properties of the token",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example:
                        "A badge which proves you are an OG #TopazTrooper.",
                      description: "The description of the collection",
                      nullable: false,
                    },
                    name: "description",
                    description: "The description of the collection",
                    required: true,
                  },
                  {
                    type: "object",
                    name: "description_mutable",
                    description: "Whether the description can be changed",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example: "1",
                      description: "largest_property_version",
                      nullable: false,
                    },
                    name: "largest_property_version",
                    description: "largest_property_version",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      nullable: false,
                      example: "2022-09-17T22:03:32.000000Z",
                      description: "The timestamp of the last transaction",
                    },
                    name: "last_transaction_timestamp",
                    description: "The timestamp of the last transaction",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example: "210373856",
                      description: "The version of the last transaction",
                      nullable: false,
                    },
                    name: "last_transaction_version",
                    description: "The version of the last transaction",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example: "18446744073709551615",
                      description:
                        "The maximum number of tokens that can be minted",
                      nullable: false,
                    },
                    name: "maximum",
                    description:
                      "The maximum number of tokens that can be minted",
                    required: true,
                  },
                  {
                    type: "object",
                    name: "maximum_mutable",
                    description:
                      "Whether the maximum number of tokens can be changed",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example:
                        "https://static-cdn.risewallet.io/nft/aptos-monkeys/1572.jpeg",
                      description: "The URI of the image of the token",
                      nullable: false,
                    },
                    name: "metadata_uri",
                    description: "The URI of the image of the token",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example: "Souffl3 Testnet NFT",
                      description: "The name of the token",
                      maxLength: 128,
                      minLength: 1,
                      nullable: false,
                    },
                    name: "name",
                    description: "The name of the token",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example:
                        "0x0b11e89a399fa11c802099024498da9fc6512bd3d2d3068f0e78320bd6243990",
                      description: "The address that last payed for the token",
                      maxLength: 66,
                      minLength: 66,
                      nullable: false,
                    },
                    name: "payee_address",
                    description: "The address that last payed for the token",
                    required: true,
                  },
                  {
                    type: "object",
                    name: "properties_mutable",
                    description:
                      "Whether the properties of the token can be changed",
                    required: true,
                  },
                  {
                    type: "object",
                    name: "royalty_mutable",
                    description:
                      "Whether the royalty of the token can be changed",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example: "100",
                      description: "The denominator for royalty points",
                      nullable: false,
                    },
                    name: "royalty_points_denominator",
                    description: "The denominator for royalty points",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example: "20",
                      description: "The numerator for royalty points",
                      nullable: false,
                    },
                    name: "royalty_points_numerator",
                    description: "The numerator for royalty points",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example: "32976",
                      description: "The number of tokens minted",
                      nullable: false,
                    },
                    name: "supply",
                    description: "The number of tokens minted",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example:
                        "1824178d98256f40046db3db8cf462f1c0a8e0d37304218044f11e69761c88e1",
                      description: "The identifier of the token",
                      maxLength: 64,
                      minLength: 64,
                      nullable: false,
                    },
                    name: "token_data_id_hash",
                    description: "The identifier of the token",
                    required: true,
                  },
                  {
                    type: "object",
                    name: "uri_mutable",
                    description: "Whether the URI of the image can be changed",
                    required: true,
                  },
                ],
              },
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.nfts.getNFTsByIds({ \n  { tokenIds }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.nfts.get_n_f_ts_by_ids(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTsByCollection: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get NFTs by Collection",
        sdkTag: "nfts",
        tags: ["NFT Tokens"],
        method: "GET",
        path: "/nfts/collections/{collection_data_id_hash}/tokens",
        pathParams: [
          {
            name: "collection_data_id_hash",
            required: true,
            in: "path",
            description: "The collection data id hash of the collection",
            schema: {
              nullable: false,
              type: "string",
            },
          },
        ],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of results to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            schema: {
              nullable: true,
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "6993fb8b5688d392a2d94127b9926519d6327e69f2bcf3dc0c5df2c060aec97d",
                          description: "The identifier of the collection",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "collection_data_id_hash",
                        description: "The identifier of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "Topaz Troopers",
                          description: "The name of the collection",
                          maxLength: 128,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "collection_name",
                        description: "The name of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description:
                            "The address of the creator of the collection",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "creator_address",
                        description:
                          "The address of the creator of the collection",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "default_properties",
                        description: "The default properties of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "A badge which proves you are an OG #TopazTrooper.",
                          description: "The description of the collection",
                          nullable: false,
                        },
                        name: "description",
                        description: "The description of the collection",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "description_mutable",
                        description: "Whether the description can be changed",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "1",
                          description: "largest_property_version",
                          nullable: false,
                        },
                        name: "largest_property_version",
                        description: "largest_property_version",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "2022-09-17T22:03:32.000000Z",
                          description: "The timestamp of the last transaction",
                        },
                        name: "last_transaction_timestamp",
                        description: "The timestamp of the last transaction",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "210373856",
                          description: "The version of the last transaction",
                          nullable: false,
                        },
                        name: "last_transaction_version",
                        description: "The version of the last transaction",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "18446744073709551615",
                          description:
                            "The maximum number of tokens that can be minted",
                          nullable: false,
                        },
                        name: "maximum",
                        description:
                          "The maximum number of tokens that can be minted",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "maximum_mutable",
                        description:
                          "Whether the maximum number of tokens can be changed",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "https://static-cdn.risewallet.io/nft/aptos-monkeys/1572.jpeg",
                          description: "The URI of the image of the token",
                          nullable: false,
                        },
                        name: "metadata_uri",
                        description: "The URI of the image of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "Souffl3 Testnet NFT",
                          description: "The name of the token",
                          maxLength: 128,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "name",
                        description: "The name of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x0b11e89a399fa11c802099024498da9fc6512bd3d2d3068f0e78320bd6243990",
                          description:
                            "The address that last payed for the token",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "payee_address",
                        description:
                          "The address that last payed for the token",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "properties_mutable",
                        description:
                          "Whether the properties of the token can be changed",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "royalty_mutable",
                        description:
                          "Whether the royalty of the token can be changed",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "100",
                          description: "The denominator for royalty points",
                          nullable: false,
                        },
                        name: "royalty_points_denominator",
                        description: "The denominator for royalty points",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "20",
                          description: "The numerator for royalty points",
                          nullable: false,
                        },
                        name: "royalty_points_numerator",
                        description: "The numerator for royalty points",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "32976",
                          description: "The number of tokens minted",
                          nullable: false,
                        },
                        name: "supply",
                        description: "The number of tokens minted",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "1824178d98256f40046db3db8cf462f1c0a8e0d37304218044f11e69761c88e1",
                          description: "The identifier of the token",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "token_data_id_hash",
                        description: "The identifier of the token",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "uri_mutable",
                        description:
                          "Whether the URI of the image can be changed",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  description: "The tokens for the given collection",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.nfts.getNFTsByCollection({ \n  { limit, offset, cursor }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.nfts.get_n_f_ts_by_collection(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTsByCreators: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get NFTs by creators",
        sdkTag: "nfts",
        tags: ["NFT Tokens"],
        method: "GET",
        path: "/nfts/creators",
        pathParams: [],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of tokens to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            schema: {
              nullable: true,
              type: "string",
            },
          },
          {
            name: "creator_addresses",
            required: true,
            in: "query",
            description: "The addresses of the creators",
            example: [
              "0x4d09404aecb8aa005d7cd2ffe0bf604d584c866ae40ba05d8cec2b77ff5ba221",
            ],
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: false,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "6993fb8b5688d392a2d94127b9926519d6327e69f2bcf3dc0c5df2c060aec97d",
                          description: "The identifier of the collection",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "collection_data_id_hash",
                        description: "The identifier of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "Topaz Troopers",
                          description: "The name of the collection",
                          maxLength: 128,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "collection_name",
                        description: "The name of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description:
                            "The address of the creator of the collection",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "creator_address",
                        description:
                          "The address of the creator of the collection",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "default_properties",
                        description: "The default properties of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "A badge which proves you are an OG #TopazTrooper.",
                          description: "The description of the collection",
                          nullable: false,
                        },
                        name: "description",
                        description: "The description of the collection",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "description_mutable",
                        description: "Whether the description can be changed",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "1",
                          description: "largest_property_version",
                          nullable: false,
                        },
                        name: "largest_property_version",
                        description: "largest_property_version",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "2022-09-17T22:03:32.000000Z",
                          description: "The timestamp of the last transaction",
                        },
                        name: "last_transaction_timestamp",
                        description: "The timestamp of the last transaction",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "210373856",
                          description: "The version of the last transaction",
                          nullable: false,
                        },
                        name: "last_transaction_version",
                        description: "The version of the last transaction",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "18446744073709551615",
                          description:
                            "The maximum number of tokens that can be minted",
                          nullable: false,
                        },
                        name: "maximum",
                        description:
                          "The maximum number of tokens that can be minted",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "maximum_mutable",
                        description:
                          "Whether the maximum number of tokens can be changed",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "https://static-cdn.risewallet.io/nft/aptos-monkeys/1572.jpeg",
                          description: "The URI of the image of the token",
                          nullable: false,
                        },
                        name: "metadata_uri",
                        description: "The URI of the image of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "Souffl3 Testnet NFT",
                          description: "The name of the token",
                          maxLength: 128,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "name",
                        description: "The name of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x0b11e89a399fa11c802099024498da9fc6512bd3d2d3068f0e78320bd6243990",
                          description:
                            "The address that last payed for the token",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "payee_address",
                        description:
                          "The address that last payed for the token",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "properties_mutable",
                        description:
                          "Whether the properties of the token can be changed",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "royalty_mutable",
                        description:
                          "Whether the royalty of the token can be changed",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "100",
                          description: "The denominator for royalty points",
                          nullable: false,
                        },
                        name: "royalty_points_denominator",
                        description: "The denominator for royalty points",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "20",
                          description: "The numerator for royalty points",
                          nullable: false,
                        },
                        name: "royalty_points_numerator",
                        description: "The numerator for royalty points",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "32976",
                          description: "The number of tokens minted",
                          nullable: false,
                        },
                        name: "supply",
                        description: "The number of tokens minted",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "1824178d98256f40046db3db8cf462f1c0a8e0d37304218044f11e69761c88e1",
                          description: "The identifier of the token",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "token_data_id_hash",
                        description: "The identifier of the token",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "uri_mutable",
                        description:
                          "Whether the URI of the image can be changed",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  description: "The collections for the given creators",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.nfts.getNFTsByCreators({ \n  { limit, offset, cursor, creatorAddresses }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.nfts.get_n_f_ts_by_creators(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTOwnersByTokens: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get NFT Owners by tokens",
        sdkTag: "nfts",
        tags: ["NFT Owners"],
        method: "GET",
        path: "/nfts/owners",
        pathParams: [],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of results to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            schema: {
              nullable: true,
              type: "string",
            },
          },
          {
            name: "token_ids",
            required: true,
            in: "query",
            description: "The identifiers of the tokens to get owners for",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: false,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "2",
                          description:
                            "The number of tokens that belonging to the owner",
                          nullable: false,
                        },
                        name: "amount",
                        description:
                          "The number of tokens that belonging to the owner",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "6993fb8b5688d392a2d94127b9926519d6327e69f2bcf3dc0c5df2c060aec97d",
                          description: "The identifier of the collection",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "collection_data_id_hash",
                        description: "The identifier of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "Topaz Troopers",
                          description: "The name of the collection",
                          maxLength: 128,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "collection_name",
                        description: "The name of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description:
                            "The address of the creator of the collection",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "creator_address",
                        description:
                          "The address of the creator of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "2022-09-17T22:03:32.000000Z",
                          description: "The timestamp of the last transaction",
                        },
                        name: "last_transaction_timestamp",
                        description: "The timestamp of the last transaction",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "210373856",
                          description: "The version of the last transaction",
                          nullable: false,
                        },
                        name: "last_transaction_version",
                        description: "The version of the last transaction",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "Topaz Troopers 123",
                          description: "The name of the token",
                          maxLength: 128,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "name",
                        description: "The name of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address of the owner of the token",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "owner_address",
                        description: "The address of the owner of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "1",
                          description: "The property version of the token",
                          nullable: false,
                        },
                        name: "property_version",
                        description: "The property version of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "0x3::token::TokenStore",
                          description: "The data structure of the token",
                          nullable: false,
                        },
                        name: "table_type",
                        description: "The data structure of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "1824178d98256f40046db3db8cf462f1c0a8e0d37304218044f11e69761c88e1",
                          description: "The identifier of the token",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "token_data_id_hash",
                        description: "The identifier of the token",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "token_properties",
                        description: "The properties of the token",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  description: "The owners for the given tokens",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.nfts.getNFTOwnersByTokens({ \n  { limit, offset, cursor, tokenIds }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.nfts.get_n_f_t_owners_by_tokens(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTOwnersByCollection: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get NFT Owners by Collection",
        sdkTag: "nfts",
        tags: ["NFT Owners"],
        method: "GET",
        path: "/nfts/collections/{collection_data_id_hash}/owners",
        pathParams: [
          {
            name: "collection_data_id_hash",
            required: true,
            in: "path",
            description: "The id of the token",
            schema: {
              nullable: false,
              type: "string",
            },
          },
        ],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of results to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            schema: {
              nullable: true,
              type: "string",
            },
          },
          {
            name: "wallet_blacklist",
            required: false,
            in: "query",
            description: "The addresses of the wallets to blacklist",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          {
            name: "wallet_whitelist",
            required: false,
            in: "query",
            description: "The addresses of the wallets to whitelist",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "2",
                          description:
                            "The number of tokens that belonging to the owner",
                          nullable: false,
                        },
                        name: "amount",
                        description:
                          "The number of tokens that belonging to the owner",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "6993fb8b5688d392a2d94127b9926519d6327e69f2bcf3dc0c5df2c060aec97d",
                          description: "The identifier of the collection",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "collection_data_id_hash",
                        description: "The identifier of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "Topaz Troopers",
                          description: "The name of the collection",
                          maxLength: 128,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "collection_name",
                        description: "The name of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description:
                            "The address of the creator of the collection",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "creator_address",
                        description:
                          "The address of the creator of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "2022-09-17T22:03:32.000000Z",
                          description: "The timestamp of the last transaction",
                        },
                        name: "last_transaction_timestamp",
                        description: "The timestamp of the last transaction",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "210373856",
                          description: "The version of the last transaction",
                          nullable: false,
                        },
                        name: "last_transaction_version",
                        description: "The version of the last transaction",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "Topaz Troopers 123",
                          description: "The name of the token",
                          maxLength: 128,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "name",
                        description: "The name of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address of the owner of the token",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "owner_address",
                        description: "The address of the owner of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "1",
                          description: "The property version of the token",
                          nullable: false,
                        },
                        name: "property_version",
                        description: "The property version of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "0x3::token::TokenStore",
                          description: "The data structure of the token",
                          nullable: false,
                        },
                        name: "table_type",
                        description: "The data structure of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "1824178d98256f40046db3db8cf462f1c0a8e0d37304218044f11e69761c88e1",
                          description: "The identifier of the token",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "token_data_id_hash",
                        description: "The identifier of the token",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "token_properties",
                        description: "The properties of the token",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  description: "The owners for the given collection",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.nfts.getNFTOwnersByCollection({ \n  { limit, offset, cursor, walletBlacklist, walletWhitelist }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.nfts.get_n_f_t_owners_by_collection(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTOwnersOfCollection: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get NFT Owners of Collection",
        sdkTag: "nfts",
        tags: ["NFT Owners"],
        method: "GET",
        path: "/nfts/collections/{collection_data_id_hash}/owners/list",
        pathParams: [
          {
            name: "collection_data_id_hash",
            required: true,
            in: "path",
            description: "The id of the token",
            schema: {
              nullable: false,
              type: "string",
            },
          },
        ],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of results to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            schema: {
              nullable: true,
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "result",
                  description: "The owner addresses for the given collection",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.nfts.getNFTOwnersOfCollection({ \n  { limit, offset, cursor }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.nfts.get_n_f_t_owners_of_collection(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTTransfersByIds: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get NFT Transfers by Token ids",
        sdkTag: "nfts",
        tags: ["NFT Transfers"],
        method: "GET",
        path: "/nfts/transfers",
        pathParams: [],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of tokens to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            schema: {
              nullable: true,
              type: "string",
            },
          },
          {
            name: "wallet_blacklist",
            required: false,
            in: "query",
            description: "The addresses of the wallets to blacklist",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          {
            name: "wallet_whitelist",
            required: false,
            in: "query",
            description: "The addresses of the wallets to whitelist",
            example: [
              "0x4d09404aecb8aa005d7cd2ffe0bf604d584c866ae40ba05d8cec2b77ff5ba221",
            ],
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          {
            name: "token_ids",
            required: true,
            in: "query",
            example: [
              "1824178d98256f40046db3db8cf462f1c0a8e0d37304218044f11e69761c88e1",
            ],
            description: "The identifiers of the tokens to get",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: false,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example: "2",
                          description: "The number of tokens transferred",
                        },
                        name: "coin_amount",
                        description: "The number of tokens transferred",
                        required: false,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example: null,
                          description: "The type of tokens transferred",
                        },
                        name: "coin_type",
                        description: "The type of tokens transferred",
                        required: false,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "6993fb8b5688d392a2d94127b9926519d6327e69f2bcf3dc0c5df2c060aec97d",
                          description: "The identifier of the collection",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "collection_data_id_hash",
                        description: "The identifier of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "Topaz Troopers",
                          description: "The name of the collection",
                          maxLength: 128,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "collection_name",
                        description: "The name of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description:
                            "The address of the creator of the collection",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "creator_address",
                        description:
                          "The address of the creator of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0xa748de66f1eea7d32399b59027ab0b3786295313e2c3a1608b5d51e759aee6dd",
                          description: "The account address of the transfer",
                          nullable: false,
                        },
                        name: "event_account_address",
                        description: "The account address of the transfer",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "2",
                          description: "The creation number of the event",
                          nullable: false,
                        },
                        name: "event_creation_number",
                        description: "The creation number of the event",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "2",
                          description: "The sequence number of the event",
                          nullable: false,
                        },
                        name: "event_sequence_number",
                        description: "The sequence number of the event",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address sending the transfer",
                          maxLength: 66,
                          minLength: 66,
                        },
                        name: "from_address",
                        description: "The address sending the transfer",
                        required: false,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "Topaz Troopers 123",
                          description: "The name of the token",
                          maxLength: 128,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "name",
                        description: "The name of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "1",
                          description: "The property version of the token",
                          nullable: false,
                        },
                        name: "property_version",
                        description: "The property version of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address recieving the transfer",
                          maxLength: 66,
                          minLength: 66,
                        },
                        name: "to_address",
                        description: "The address recieving the transfer",
                        required: false,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "2",
                          description: "The number of tokens transferred",
                          nullable: false,
                        },
                        name: "token_amount",
                        description: "The number of tokens transferred",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "1824178d98256f40046db3db8cf462f1c0a8e0d37304218044f11e69761c88e1",
                          description: "The identifier of the token",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "token_data_id_hash",
                        description: "The identifier of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "2022-09-17T22:03:32.000000Z",
                          description: "The timestamp of the transfer",
                        },
                        name: "transaction_timestamp",
                        description: "The timestamp of the transfer",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "210373856",
                          description:
                            "The version of the transaction that the transfer is a part of",
                          nullable: false,
                        },
                        name: "transaction_version",
                        description:
                          "The version of the transaction that the transfer is a part of",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "0x3::token::DepositEvent",
                          description: "The type of transfer",
                          nullable: false,
                        },
                        name: "transfer_type",
                        description: "The type of transfer",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  description: "The collections for the given creators",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.nfts.getNFTTransfersByIds({ \n  { limit, offset, cursor, walletBlacklist, walletWhitelist, tokenIds }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.nfts.get_n_f_t_transfers_by_ids(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTTransfersByCollection: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get NFT Transfers by Collection",
        sdkTag: "nfts",
        tags: ["NFT Transfers"],
        method: "GET",
        path: "/nfts/transfers/collections/{collection_data_id_hash}",
        pathParams: [
          {
            name: "collection_data_id_hash",
            required: true,
            in: "path",
            description: "The collection data id hash of the token",
            schema: {
              minLength: 64,
              maxLength: 64,
              nullable: false,
              type: "string",
            },
          },
        ],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of results to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            schema: {
              nullable: true,
              type: "string",
            },
          },
          {
            name: "wallet_whitelist",
            required: false,
            in: "query",
            description: "The addresses of the wallets to whitelist",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          {
            name: "wallet_blacklist",
            required: false,
            in: "query",
            description: "The addresses of the wallets to blacklist",
            example: [
              "0x4d09404aecb8aa005d7cd2ffe0bf604d584c866ae40ba05d8cec2b77ff5ba221",
            ],
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example: "2",
                          description: "The number of tokens transferred",
                        },
                        name: "coin_amount",
                        description: "The number of tokens transferred",
                        required: false,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example: null,
                          description: "The type of tokens transferred",
                        },
                        name: "coin_type",
                        description: "The type of tokens transferred",
                        required: false,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "6993fb8b5688d392a2d94127b9926519d6327e69f2bcf3dc0c5df2c060aec97d",
                          description: "The identifier of the collection",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "collection_data_id_hash",
                        description: "The identifier of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "Topaz Troopers",
                          description: "The name of the collection",
                          maxLength: 128,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "collection_name",
                        description: "The name of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description:
                            "The address of the creator of the collection",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "creator_address",
                        description:
                          "The address of the creator of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0xa748de66f1eea7d32399b59027ab0b3786295313e2c3a1608b5d51e759aee6dd",
                          description: "The account address of the transfer",
                          nullable: false,
                        },
                        name: "event_account_address",
                        description: "The account address of the transfer",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "2",
                          description: "The creation number of the event",
                          nullable: false,
                        },
                        name: "event_creation_number",
                        description: "The creation number of the event",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "2",
                          description: "The sequence number of the event",
                          nullable: false,
                        },
                        name: "event_sequence_number",
                        description: "The sequence number of the event",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address sending the transfer",
                          maxLength: 66,
                          minLength: 66,
                        },
                        name: "from_address",
                        description: "The address sending the transfer",
                        required: false,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "Topaz Troopers 123",
                          description: "The name of the token",
                          maxLength: 128,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "name",
                        description: "The name of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "1",
                          description: "The property version of the token",
                          nullable: false,
                        },
                        name: "property_version",
                        description: "The property version of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address recieving the transfer",
                          maxLength: 66,
                          minLength: 66,
                        },
                        name: "to_address",
                        description: "The address recieving the transfer",
                        required: false,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "2",
                          description: "The number of tokens transferred",
                          nullable: false,
                        },
                        name: "token_amount",
                        description: "The number of tokens transferred",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "1824178d98256f40046db3db8cf462f1c0a8e0d37304218044f11e69761c88e1",
                          description: "The identifier of the token",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "token_data_id_hash",
                        description: "The identifier of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "2022-09-17T22:03:32.000000Z",
                          description: "The timestamp of the transfer",
                        },
                        name: "transaction_timestamp",
                        description: "The timestamp of the transfer",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "210373856",
                          description:
                            "The version of the transaction that the transfer is a part of",
                          nullable: false,
                        },
                        name: "transaction_version",
                        description:
                          "The version of the transaction that the transfer is a part of",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "0x3::token::DepositEvent",
                          description: "The type of transfer",
                          nullable: false,
                        },
                        name: "transfer_type",
                        description: "The type of transfer",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  description: "The collections for the given creators",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.nfts.getNFTTransfersByCollection({ \n  { limit, offset, cursor, walletWhitelist, walletBlacklist }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.nfts.get_n_f_t_transfers_by_collection(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTTransfersByCreators: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get NFT Transfers by creators",
        sdkTag: "nfts",
        tags: ["NFT Transfers"],
        method: "GET",
        path: "/nfts/transfers/creators",
        pathParams: [],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of results to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            schema: {
              nullable: true,
              type: "string",
            },
          },
          {
            name: "creator_addresses",
            required: true,
            in: "query",
            description: "The addresses of the creators",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: false,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          {
            name: "collection_blacklist",
            required: false,
            in: "query",
            description: "The ids of the collections to whitelist",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          {
            name: "collection_whitelist",
            required: false,
            in: "query",
            description: "The ids of the collections to whitelist",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example: "2",
                          description: "The number of tokens transferred",
                        },
                        name: "coin_amount",
                        description: "The number of tokens transferred",
                        required: false,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example: null,
                          description: "The type of tokens transferred",
                        },
                        name: "coin_type",
                        description: "The type of tokens transferred",
                        required: false,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "6993fb8b5688d392a2d94127b9926519d6327e69f2bcf3dc0c5df2c060aec97d",
                          description: "The identifier of the collection",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "collection_data_id_hash",
                        description: "The identifier of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "Topaz Troopers",
                          description: "The name of the collection",
                          maxLength: 128,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "collection_name",
                        description: "The name of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description:
                            "The address of the creator of the collection",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "creator_address",
                        description:
                          "The address of the creator of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0xa748de66f1eea7d32399b59027ab0b3786295313e2c3a1608b5d51e759aee6dd",
                          description: "The account address of the transfer",
                          nullable: false,
                        },
                        name: "event_account_address",
                        description: "The account address of the transfer",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "2",
                          description: "The creation number of the event",
                          nullable: false,
                        },
                        name: "event_creation_number",
                        description: "The creation number of the event",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "2",
                          description: "The sequence number of the event",
                          nullable: false,
                        },
                        name: "event_sequence_number",
                        description: "The sequence number of the event",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address sending the transfer",
                          maxLength: 66,
                          minLength: 66,
                        },
                        name: "from_address",
                        description: "The address sending the transfer",
                        required: false,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "Topaz Troopers 123",
                          description: "The name of the token",
                          maxLength: 128,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "name",
                        description: "The name of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "1",
                          description: "The property version of the token",
                          nullable: false,
                        },
                        name: "property_version",
                        description: "The property version of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address recieving the transfer",
                          maxLength: 66,
                          minLength: 66,
                        },
                        name: "to_address",
                        description: "The address recieving the transfer",
                        required: false,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "2",
                          description: "The number of tokens transferred",
                          nullable: false,
                        },
                        name: "token_amount",
                        description: "The number of tokens transferred",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "1824178d98256f40046db3db8cf462f1c0a8e0d37304218044f11e69761c88e1",
                          description: "The identifier of the token",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "token_data_id_hash",
                        description: "The identifier of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "2022-09-17T22:03:32.000000Z",
                          description: "The timestamp of the transfer",
                        },
                        name: "transaction_timestamp",
                        description: "The timestamp of the transfer",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "210373856",
                          description:
                            "The version of the transaction that the transfer is a part of",
                          nullable: false,
                        },
                        name: "transaction_version",
                        description:
                          "The version of the transaction that the transfer is a part of",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "0x3::token::DepositEvent",
                          description: "The type of transfer",
                          nullable: false,
                        },
                        name: "transfer_type",
                        description: "The type of transfer",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  description: "The collections for the given creators",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.nfts.getNFTTransfersByCreators({ \n  { limit, offset, cursor, creatorAddresses, collectionBlacklist, collectionWhitelist }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.nfts.get_n_f_t_transfers_by_creators(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTTransfersByWallets: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get NFT Transfers by wallets",
        sdkTag: "nfts",
        tags: ["NFT Transfers"],
        method: "GET",
        path: "/nfts/transfers/wallets",
        pathParams: [],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of tokens to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            schema: {
              nullable: true,
              type: "string",
            },
          },
          {
            name: "wallet_addresses",
            required: true,
            in: "query",
            description: "The addresses of the wallets to get transfers for",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: false,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          {
            name: "collection_blacklist",
            required: false,
            in: "query",
            description: "The ids of the collections to whitelist",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          {
            name: "collection_whitelist",
            required: false,
            in: "query",
            description: "The ids of the collections to whitelist",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example: "2",
                          description: "The number of tokens transferred",
                        },
                        name: "coin_amount",
                        description: "The number of tokens transferred",
                        required: false,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example: null,
                          description: "The type of tokens transferred",
                        },
                        name: "coin_type",
                        description: "The type of tokens transferred",
                        required: false,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "6993fb8b5688d392a2d94127b9926519d6327e69f2bcf3dc0c5df2c060aec97d",
                          description: "The identifier of the collection",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "collection_data_id_hash",
                        description: "The identifier of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "Topaz Troopers",
                          description: "The name of the collection",
                          maxLength: 128,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "collection_name",
                        description: "The name of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description:
                            "The address of the creator of the collection",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "creator_address",
                        description:
                          "The address of the creator of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0xa748de66f1eea7d32399b59027ab0b3786295313e2c3a1608b5d51e759aee6dd",
                          description: "The account address of the transfer",
                          nullable: false,
                        },
                        name: "event_account_address",
                        description: "The account address of the transfer",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "2",
                          description: "The creation number of the event",
                          nullable: false,
                        },
                        name: "event_creation_number",
                        description: "The creation number of the event",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "2",
                          description: "The sequence number of the event",
                          nullable: false,
                        },
                        name: "event_sequence_number",
                        description: "The sequence number of the event",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address sending the transfer",
                          maxLength: 66,
                          minLength: 66,
                        },
                        name: "from_address",
                        description: "The address sending the transfer",
                        required: false,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "Topaz Troopers 123",
                          description: "The name of the token",
                          maxLength: 128,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "name",
                        description: "The name of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "1",
                          description: "The property version of the token",
                          nullable: false,
                        },
                        name: "property_version",
                        description: "The property version of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address recieving the transfer",
                          maxLength: 66,
                          minLength: 66,
                        },
                        name: "to_address",
                        description: "The address recieving the transfer",
                        required: false,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "2",
                          description: "The number of tokens transferred",
                          nullable: false,
                        },
                        name: "token_amount",
                        description: "The number of tokens transferred",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "1824178d98256f40046db3db8cf462f1c0a8e0d37304218044f11e69761c88e1",
                          description: "The identifier of the token",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "token_data_id_hash",
                        description: "The identifier of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "2022-09-17T22:03:32.000000Z",
                          description: "The timestamp of the transfer",
                        },
                        name: "transaction_timestamp",
                        description: "The timestamp of the transfer",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "210373856",
                          description:
                            "The version of the transaction that the transfer is a part of",
                          nullable: false,
                        },
                        name: "transaction_version",
                        description:
                          "The version of the transaction that the transfer is a part of",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "0x3::token::DepositEvent",
                          description: "The type of transfer",
                          nullable: false,
                        },
                        name: "transfer_type",
                        description: "The type of transfer",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  description: "The collections for the given creators",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.nfts.getNFTTransfersByWallets({ \n  { limit, offset, cursor, walletAddresses, collectionBlacklist, collectionWhitelist }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.nfts.get_n_f_t_transfers_by_wallets(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
    collections: {
      getNFTCollections: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get NFT Collections",
        sdkTag: "collections",
        tags: ["NFT Collections"],
        method: "GET",
        path: "/collections",
        pathParams: [],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of results to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            example:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
            schema: {
              nullable: true,
              default: "",
              type: "string",
            },
          },
          {
            name: "fromName",
            required: false,
            in: "query",
            description:
              "The name of the collection to start from (inclusive and case sensitive)",
            schema: {
              minLength: 0,
              maxLength: 128,
              nullable: false,
              type: "string",
            },
          },
          {
            name: "toName",
            required: false,
            in: "query",
            description:
              "The name of the collection to end at (inclusive and case sensitive)",
            schema: {
              minLength: 0,
              maxLength: 128,
              nullable: false,
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "6993fb8b5688d392a2d94127b9926519d6327e69f2bcf3dc0c5df2c060aec97d",
                          description: "The identifier of the collection",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "collection_data_id_hash",
                        description: "The identifier of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "Topaz Troopers",
                          description: "The name of the collection",
                          maxLength: 128,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "collection_name",
                        description: "The name of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description:
                            "The address of the creator of the collection",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "creator_address",
                        description:
                          "The address of the creator of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "A badge which proves you are an OG #TopazTrooper.",
                          description: "The description of the collection",
                          nullable: false,
                        },
                        name: "description",
                        description: "The description of the collection",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "description_mutable",
                        description: "Whether the description can be changed",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "2022-09-17T22:03:32.000000Z",
                          description: "The timestamp of the last transaction",
                        },
                        name: "last_transaction_timestamp",
                        description: "The timestamp of the last transaction",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "210373856",
                          description: "The version of the last transaction",
                          nullable: false,
                        },
                        name: "last_transaction_version",
                        description: "The version of the last transaction",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "18446744073709551615",
                          description:
                            "The maximum number of tokens that can be minted",
                          nullable: false,
                        },
                        name: "maximum",
                        description:
                          "The maximum number of tokens that can be minted",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "maximum_mutable",
                        description:
                          "Whether the maximum number of tokens can be changed",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "https://static-cdn.risewallet.io/nft/aptos-monkeys/1572.jpeg",
                          description: "The URI of the image of the collection",
                          nullable: false,
                        },
                        name: "metadata_uri",
                        description: "The URI of the image of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "32976",
                          description: "The number of tokens minted",
                          nullable: false,
                        },
                        name: "supply",
                        description: "The number of tokens minted",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example:
                            "0x293d59ded27fc85fef070b026834d2be7e7ced76c3c32ecbcd4f44b461518c30",
                          description:
                            "The address of the table that stores the tokens",
                        },
                        name: "table_handle",
                        description:
                          "The address of the table that stores the tokens",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "uri_mutable",
                        description:
                          "Whether the URI of the image can be changed",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  description: "The collections for the given creator",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.collections.getNFTCollections({ \n  { limit, offset, cursor, fromname, toname }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.collections.get_n_f_t_collections(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTCollectionsByIds: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get NFT Collections by ids",
        sdkTag: "collections",
        tags: ["NFT Collections"],
        method: "GET",
        path: "/collections/ids",
        pathParams: [],
        queryParams: [
          {
            name: "ids",
            required: true,
            in: "query",
            example: [
              "6993fb8b5688d392a2d94127b9926519d6327e69f2bcf3dc0c5df2c060aec97d",
            ],
            description: "The identifiers of the collections to get",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: false,
              default: [],
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "array",
              field: {
                type: "object",
                fields: [
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example:
                        "6993fb8b5688d392a2d94127b9926519d6327e69f2bcf3dc0c5df2c060aec97d",
                      description: "The identifier of the collection",
                      maxLength: 64,
                      minLength: 64,
                      nullable: false,
                    },
                    name: "collection_data_id_hash",
                    description: "The identifier of the collection",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example: "Topaz Troopers",
                      description: "The name of the collection",
                      maxLength: 128,
                      minLength: 1,
                      nullable: false,
                    },
                    name: "collection_name",
                    description: "The name of the collection",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example:
                        "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                      description:
                        "The address of the creator of the collection",
                      maxLength: 66,
                      minLength: 66,
                      nullable: false,
                    },
                    name: "creator_address",
                    description: "The address of the creator of the collection",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example:
                        "A badge which proves you are an OG #TopazTrooper.",
                      description: "The description of the collection",
                      nullable: false,
                    },
                    name: "description",
                    description: "The description of the collection",
                    required: true,
                  },
                  {
                    type: "object",
                    name: "description_mutable",
                    description: "Whether the description can be changed",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      nullable: false,
                      example: "2022-09-17T22:03:32.000000Z",
                      description: "The timestamp of the last transaction",
                    },
                    name: "last_transaction_timestamp",
                    description: "The timestamp of the last transaction",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example: "210373856",
                      description: "The version of the last transaction",
                      nullable: false,
                    },
                    name: "last_transaction_version",
                    description: "The version of the last transaction",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example: "18446744073709551615",
                      description:
                        "The maximum number of tokens that can be minted",
                      nullable: false,
                    },
                    name: "maximum",
                    description:
                      "The maximum number of tokens that can be minted",
                    required: true,
                  },
                  {
                    type: "object",
                    name: "maximum_mutable",
                    description:
                      "Whether the maximum number of tokens can be changed",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example:
                        "https://static-cdn.risewallet.io/nft/aptos-monkeys/1572.jpeg",
                      description: "The URI of the image of the collection",
                      nullable: false,
                    },
                    name: "metadata_uri",
                    description: "The URI of the image of the collection",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example: "32976",
                      description: "The number of tokens minted",
                      nullable: false,
                    },
                    name: "supply",
                    description: "The number of tokens minted",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      nullable: false,
                      example:
                        "0x293d59ded27fc85fef070b026834d2be7e7ced76c3c32ecbcd4f44b461518c30",
                      description:
                        "The address of the table that stores the tokens",
                    },
                    name: "table_handle",
                    description:
                      "The address of the table that stores the tokens",
                    required: true,
                  },
                  {
                    type: "object",
                    name: "uri_mutable",
                    description: "Whether the URI of the image can be changed",
                    required: true,
                  },
                ],
              },
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.collections.getNFTCollectionsByIds({ \n  { ids }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.collections.get_n_f_t_collections_by_ids(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTCollectionsByCreator: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get NFT Collections by creator",
        sdkTag: "collections",
        tags: ["NFT Collections"],
        method: "GET",
        path: "/collections/creators",
        pathParams: [],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of results to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            example:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
            schema: {
              nullable: true,
              default: "",
              type: "string",
            },
          },
          {
            name: "creator_address",
            required: true,
            in: "query",
            description: "The address of the creator",
            example:
              "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
            schema: {
              nullable: true,
              default: "",
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "6993fb8b5688d392a2d94127b9926519d6327e69f2bcf3dc0c5df2c060aec97d",
                          description: "The identifier of the collection",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "collection_data_id_hash",
                        description: "The identifier of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "Topaz Troopers",
                          description: "The name of the collection",
                          maxLength: 128,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "collection_name",
                        description: "The name of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description:
                            "The address of the creator of the collection",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "creator_address",
                        description:
                          "The address of the creator of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "A badge which proves you are an OG #TopazTrooper.",
                          description: "The description of the collection",
                          nullable: false,
                        },
                        name: "description",
                        description: "The description of the collection",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "description_mutable",
                        description: "Whether the description can be changed",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "2022-09-17T22:03:32.000000Z",
                          description: "The timestamp of the last transaction",
                        },
                        name: "last_transaction_timestamp",
                        description: "The timestamp of the last transaction",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "210373856",
                          description: "The version of the last transaction",
                          nullable: false,
                        },
                        name: "last_transaction_version",
                        description: "The version of the last transaction",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "18446744073709551615",
                          description:
                            "The maximum number of tokens that can be minted",
                          nullable: false,
                        },
                        name: "maximum",
                        description:
                          "The maximum number of tokens that can be minted",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "maximum_mutable",
                        description:
                          "Whether the maximum number of tokens can be changed",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "https://static-cdn.risewallet.io/nft/aptos-monkeys/1572.jpeg",
                          description: "The URI of the image of the collection",
                          nullable: false,
                        },
                        name: "metadata_uri",
                        description: "The URI of the image of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "32976",
                          description: "The number of tokens minted",
                          nullable: false,
                        },
                        name: "supply",
                        description: "The number of tokens minted",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example:
                            "0x293d59ded27fc85fef070b026834d2be7e7ced76c3c32ecbcd4f44b461518c30",
                          description:
                            "The address of the table that stores the tokens",
                        },
                        name: "table_handle",
                        description:
                          "The address of the table that stores the tokens",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "uri_mutable",
                        description:
                          "Whether the URI of the image can be changed",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  description: "The collections for the given creator",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.collections.getNFTCollectionsByCreator({ \n  { limit, offset, cursor, creatorAddress }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.collections.get_n_f_t_collections_by_creator(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
    coins: {
      getCoinInfoByCoinTypeHashes: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get Coin Metadata by Coin Type Hashes",
        sdkTag: "coins",
        tags: ["Coin Metadata"],
        method: "GET",
        path: "/coins",
        pathParams: [],
        queryParams: [
          {
            name: "coin_type_hashes",
            required: true,
            in: "query",
            description: "The coin type hashes to fetch info about",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: false,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "array",
              field: {
                type: "object",
                fields: [
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example:
                        "T0xa911c7236486be921f6cc9227b09afe4a4ad14d291ba1bb8a9b7c4d628759de::gegg::GEGG",
                      description:
                        "The definition of the coin structure (identifier)",
                      maxLength: 5000,
                      minLength: 1,
                      nullable: false,
                    },
                    name: "coin_type",
                    description:
                      "The definition of the coin structure (identifier)",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example:
                        "6993fb8b5688d392a2d94127b9926519d6327e69f2bcf3dc0c5df2c060aec97d",
                      description:
                        "The hash of the coin_type (identifier) and a known fixed length",
                      maxLength: 64,
                      minLength: 64,
                      nullable: false,
                    },
                    name: "coin_type_hash",
                    description:
                      "The hash of the coin_type (identifier) and a known fixed length",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example:
                        "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                      description: "The address of the creator of the coin",
                      maxLength: 66,
                      minLength: 66,
                      nullable: false,
                    },
                    name: "creator_address",
                    description: "The address of the creator of the coin",
                    required: true,
                  },
                  {
                    type: "object",
                    name: "decimals",
                    description: "The number of decimals of the coin",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example: "GEGG Coin",
                      description: "The name of the Coin",
                      maxLength: 32,
                      minLength: 1,
                      nullable: false,
                    },
                    name: "name",
                    description: "The name of the Coin",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      nullable: false,
                      example: "0x3::token::TokenStore",
                      description: "The data structure of the token",
                    },
                    name: "supply_aggregator_table_handle",
                    description: "The data structure of the token",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      nullable: false,
                      example: "0x3::token::TokenStore",
                      description: "The data structure of the token",
                    },
                    name: "supply_aggregator_table_key",
                    description: "The data structure of the token",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example: "GEGG",
                      description: "The symbol of the coin",
                      maxLength: 10,
                      minLength: 1,
                      nullable: false,
                    },
                    name: "symbol",
                    description: "The symbol of the coin",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      nullable: false,
                      example: "2022-09-17T22:03:32.000000Z",
                      description:
                        "The timestamp of the transaction of when the coin was created",
                    },
                    name: "transaction_created_timestamp",
                    description:
                      "The timestamp of the transaction of when the coin was created",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example: "210373856",
                      description:
                        "The version of the transaction where the coin was created",
                      nullable: false,
                    },
                    name: "transaction_version_created",
                    description:
                      "The version of the transaction where the coin was created",
                    required: true,
                  },
                ],
              },
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.coins.getCoinInfoByCoinTypeHashes({ \n  { coinTypeHashes }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.coins.get_coin_info_by_coin_type_hashes(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getLatestCoins: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get latest deployed coins",
        sdkTag: "coins",
        tags: ["Coin Metadata"],
        method: "GET",
        path: "/coins/latest",
        pathParams: [],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of results to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            schema: {
              nullable: true,
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "T0xa911c7236486be921f6cc9227b09afe4a4ad14d291ba1bb8a9b7c4d628759de::gegg::GEGG",
                          description:
                            "The definition of the coin structure (identifier)",
                          maxLength: 5000,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "coin_type",
                        description:
                          "The definition of the coin structure (identifier)",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "6993fb8b5688d392a2d94127b9926519d6327e69f2bcf3dc0c5df2c060aec97d",
                          description:
                            "The hash of the coin_type (identifier) and a known fixed length",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "coin_type_hash",
                        description:
                          "The hash of the coin_type (identifier) and a known fixed length",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address of the creator of the coin",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "creator_address",
                        description: "The address of the creator of the coin",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "decimals",
                        description: "The number of decimals of the coin",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "GEGG Coin",
                          description: "The name of the Coin",
                          maxLength: 32,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "name",
                        description: "The name of the Coin",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "0x3::token::TokenStore",
                          description: "The data structure of the token",
                        },
                        name: "supply_aggregator_table_handle",
                        description: "The data structure of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "0x3::token::TokenStore",
                          description: "The data structure of the token",
                        },
                        name: "supply_aggregator_table_key",
                        description: "The data structure of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "GEGG",
                          description: "The symbol of the coin",
                          maxLength: 10,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "symbol",
                        description: "The symbol of the coin",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "2022-09-17T22:03:32.000000Z",
                          description:
                            "The timestamp of the transaction of when the coin was created",
                        },
                        name: "transaction_created_timestamp",
                        description:
                          "The timestamp of the transaction of when the coin was created",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "210373856",
                          description:
                            "The version of the transaction where the coin was created",
                          nullable: false,
                        },
                        name: "transaction_version_created",
                        description:
                          "The version of the transaction where the coin was created",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  description: "The coins matching the query",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.coins.getLatestCoins({ \n  { limit, offset, cursor }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.coins.get_latest_coins(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getCoinsByNameRange: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get Coin Metadata by name range",
        sdkTag: "coins",
        tags: ["Coin Metadata"],
        method: "GET",
        path: "/coins/names",
        pathParams: [],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of results to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            schema: {
              nullable: true,
              type: "string",
            },
          },
          {
            name: "from_name",
            required: false,
            in: "query",
            description:
              "The name of the coin to start from (inclusive and case sensitive)",
            schema: {
              minLength: 0,
              maxLength: 32,
              nullable: false,
              type: "string",
            },
          },
          {
            name: "to_name",
            required: false,
            in: "query",
            description:
              "The name of the coin to end at (inclusive and case sensitive)",
            schema: {
              minLength: 0,
              maxLength: 32,
              nullable: false,
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "T0xa911c7236486be921f6cc9227b09afe4a4ad14d291ba1bb8a9b7c4d628759de::gegg::GEGG",
                          description:
                            "The definition of the coin structure (identifier)",
                          maxLength: 5000,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "coin_type",
                        description:
                          "The definition of the coin structure (identifier)",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "6993fb8b5688d392a2d94127b9926519d6327e69f2bcf3dc0c5df2c060aec97d",
                          description:
                            "The hash of the coin_type (identifier) and a known fixed length",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "coin_type_hash",
                        description:
                          "The hash of the coin_type (identifier) and a known fixed length",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address of the creator of the coin",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "creator_address",
                        description: "The address of the creator of the coin",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "decimals",
                        description: "The number of decimals of the coin",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "GEGG Coin",
                          description: "The name of the Coin",
                          maxLength: 32,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "name",
                        description: "The name of the Coin",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "0x3::token::TokenStore",
                          description: "The data structure of the token",
                        },
                        name: "supply_aggregator_table_handle",
                        description: "The data structure of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "0x3::token::TokenStore",
                          description: "The data structure of the token",
                        },
                        name: "supply_aggregator_table_key",
                        description: "The data structure of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "GEGG",
                          description: "The symbol of the coin",
                          maxLength: 10,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "symbol",
                        description: "The symbol of the coin",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "2022-09-17T22:03:32.000000Z",
                          description:
                            "The timestamp of the transaction of when the coin was created",
                        },
                        name: "transaction_created_timestamp",
                        description:
                          "The timestamp of the transaction of when the coin was created",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "210373856",
                          description:
                            "The version of the transaction where the coin was created",
                          nullable: false,
                        },
                        name: "transaction_version_created",
                        description:
                          "The version of the transaction where the coin was created",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  description: "The coins matching the query",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.coins.getCoinsByNameRange({ \n  { limit, offset, cursor, fromName, toName }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.coins.get_coins_by_name_range(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getCoinsBySymbolRange: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get Coin Metadata by symbol range",
        sdkTag: "coins",
        tags: ["Coin Metadata"],
        method: "GET",
        path: "/coins/symbols",
        pathParams: [],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of results to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            schema: {
              nullable: true,
              type: "string",
            },
          },
          {
            name: "from_symbol",
            required: false,
            in: "query",
            description:
              "The name of the coin to start from (inclusive and case sensitive)",
            schema: {
              minLength: 0,
              maxLength: 10,
              nullable: false,
              type: "string",
            },
          },
          {
            name: "to_symbol",
            required: false,
            in: "query",
            description:
              "The name of the coin to end at (inclusive and case sensitive)",
            schema: {
              minLength: 0,
              maxLength: 10,
              nullable: false,
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "T0xa911c7236486be921f6cc9227b09afe4a4ad14d291ba1bb8a9b7c4d628759de::gegg::GEGG",
                          description:
                            "The definition of the coin structure (identifier)",
                          maxLength: 5000,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "coin_type",
                        description:
                          "The definition of the coin structure (identifier)",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "6993fb8b5688d392a2d94127b9926519d6327e69f2bcf3dc0c5df2c060aec97d",
                          description:
                            "The hash of the coin_type (identifier) and a known fixed length",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "coin_type_hash",
                        description:
                          "The hash of the coin_type (identifier) and a known fixed length",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address of the creator of the coin",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "creator_address",
                        description: "The address of the creator of the coin",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "decimals",
                        description: "The number of decimals of the coin",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "GEGG Coin",
                          description: "The name of the Coin",
                          maxLength: 32,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "name",
                        description: "The name of the Coin",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "0x3::token::TokenStore",
                          description: "The data structure of the token",
                        },
                        name: "supply_aggregator_table_handle",
                        description: "The data structure of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "0x3::token::TokenStore",
                          description: "The data structure of the token",
                        },
                        name: "supply_aggregator_table_key",
                        description: "The data structure of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "GEGG",
                          description: "The symbol of the coin",
                          maxLength: 10,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "symbol",
                        description: "The symbol of the coin",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "2022-09-17T22:03:32.000000Z",
                          description:
                            "The timestamp of the transaction of when the coin was created",
                        },
                        name: "transaction_created_timestamp",
                        description:
                          "The timestamp of the transaction of when the coin was created",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "210373856",
                          description:
                            "The version of the transaction where the coin was created",
                          nullable: false,
                        },
                        name: "transaction_version_created",
                        description:
                          "The version of the transaction where the coin was created",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  description: "The coins matching the query",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.coins.getCoinsBySymbolRange({ \n  { limit, offset, cursor, fromSymbol, toSymbol }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.coins.get_coins_by_symbol_range(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getCoinsByCreators: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get Coin Metadata by creator addresses",
        sdkTag: "coins",
        tags: ["Coin Metadata"],
        method: "GET",
        path: "/coins/creators",
        pathParams: [],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of results to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            schema: {
              nullable: true,
              default: "",
              type: "string",
            },
          },
          {
            name: "creator_addresses",
            required: true,
            in: "query",
            description: "The addresses of the creators",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: false,
              default: [],
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "T0xa911c7236486be921f6cc9227b09afe4a4ad14d291ba1bb8a9b7c4d628759de::gegg::GEGG",
                          description:
                            "The definition of the coin structure (identifier)",
                          maxLength: 5000,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "coin_type",
                        description:
                          "The definition of the coin structure (identifier)",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "6993fb8b5688d392a2d94127b9926519d6327e69f2bcf3dc0c5df2c060aec97d",
                          description:
                            "The hash of the coin_type (identifier) and a known fixed length",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "coin_type_hash",
                        description:
                          "The hash of the coin_type (identifier) and a known fixed length",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address of the creator of the coin",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "creator_address",
                        description: "The address of the creator of the coin",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "decimals",
                        description: "The number of decimals of the coin",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "GEGG Coin",
                          description: "The name of the Coin",
                          maxLength: 32,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "name",
                        description: "The name of the Coin",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "0x3::token::TokenStore",
                          description: "The data structure of the token",
                        },
                        name: "supply_aggregator_table_handle",
                        description: "The data structure of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "0x3::token::TokenStore",
                          description: "The data structure of the token",
                        },
                        name: "supply_aggregator_table_key",
                        description: "The data structure of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "GEGG",
                          description: "The symbol of the coin",
                          maxLength: 10,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "symbol",
                        description: "The symbol of the coin",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "2022-09-17T22:03:32.000000Z",
                          description:
                            "The timestamp of the transaction of when the coin was created",
                        },
                        name: "transaction_created_timestamp",
                        description:
                          "The timestamp of the transaction of when the coin was created",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "210373856",
                          description:
                            "The version of the transaction where the coin was created",
                          nullable: false,
                        },
                        name: "transaction_version_created",
                        description:
                          "The version of the transaction where the coin was created",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  description: "The coins created by the given creators",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.coins.getCoinsByCreators({ \n  { limit, offset, cursor, creatorAddresses }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.coins.get_coins_by_creators(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getCoinTransfersByOwnerAddresses: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get Coin Transfers by wallet addresses",
        sdkTag: "coins",
        tags: ["Coin Transfers"],
        method: "GET",
        path: "/coins/transfers/wallets",
        pathParams: [],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of results to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            schema: {
              nullable: true,
              type: "string",
            },
          },
          {
            name: "owner_addresses",
            required: true,
            in: "query",
            description: "The addresses of the owners to get tokens for",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: false,
              default: [],
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          {
            name: "from_date",
            required: false,
            in: "query",
            description: "The date from which to fetch coin transfers",
            schema: {
              minLength: 1,
              maxLength: 30,
              nullable: false,
              type: "string",
            },
          },
          {
            name: "to_date",
            required: false,
            in: "query",
            description: "The date to which to fetch coin transfers",
            schema: {
              minLength: 1,
              maxLength: 30,
              nullable: false,
              type: "string",
            },
          },
          {
            name: "coin_type_blacklist",
            required: false,
            in: "query",
            description: "The coin types of the coins to whitelist",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              default: [],
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          {
            name: "coin_type_whitelist",
            required: false,
            in: "query",
            description: "The coin types of the coins to whitelist",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "0x1::coin::WithdrawEvent",
                          description: "The definition of the coin activity",
                          maxLength: 200,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "activity_type",
                        description: "The definition of the coin activity",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "324933484",
                          description: "The amount being transfered",
                          maxLength: 200,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "amount",
                        description: "The amount being transfered",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "49661526",
                          description:
                            "The blockheight that the transfer was included in",
                          maxLength: 200,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "block_height",
                        description:
                          "The blockheight that the transfer was included in",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "T0xa911c7236486be921f6cc9227b09afe4a4ad14d291ba1bb8a9b7c4d628759de::gegg::GEGG",
                          description:
                            "The definition of the coin structure (identifier)",
                          maxLength: 5000,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "coin_type",
                        description:
                          "The definition of the coin structure (identifier)",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example:
                            "0x563e8382514ccdcc0c0a83469c9262d22d0b052316c1bd67286ba42bb11d0815::AtodexSwapPoolV1::swap_exact_coi",
                          description:
                            "The function that was called to transfer the coin",
                          maxLength: 100,
                          minLength: 1,
                        },
                        name: "entry_function_id_str",
                        description:
                          "The function that was called to transfer the coin",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address of the event account",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "event_account_address",
                        description: "The address of the event account",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "9",
                          description: "The event creation number",
                          maxLength: 66,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "event_creation_number",
                        description: "The event creation number",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "59",
                          description: "The sequence number of the event",
                          maxLength: 66,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "event_sequence_number",
                        description: "The sequence number of the event",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "is_gas_fee",
                        description: "If the transfer was a gas fee or not",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "is_transaction_success",
                        description: "If the transfer was successful or not",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address of the owner of the coin",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "owner_address",
                        description: "The address of the owner of the coin",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "2022-09-17T22:03:32.000000Z",
                          description:
                            "The timestamp of the transaction of when the coin was transfered",
                        },
                        name: "transaction_timestamp",
                        description:
                          "The timestamp of the transaction of when the coin was transfered",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "210373856",
                          description:
                            "The version of the transaction where the coin was transfered",
                          nullable: false,
                        },
                        name: "transaction_version",
                        description:
                          "The version of the transaction where the coin was transfered",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  description:
                    "The coins transfers for the provided owner addresses",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.coins.getCoinTransfersByOwnerAddresses({ \n  { limit, offset, cursor, ownerAddresses, fromDate, toDate, coinTypeBlacklist, coinTypeWhitelist }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.coins.get_coin_transfers_by_owner_addresses(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getCoinTransfersByBlockHeights: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get Coin Transfers by block heights",
        sdkTag: "coins",
        tags: ["Coin Transfers"],
        method: "GET",
        path: "/coins/transfers/blocks",
        pathParams: [],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of results to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            example:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
            schema: {
              nullable: true,
              default: "",
              type: "string",
            },
          },
          {
            name: "block_heights",
            required: true,
            in: "query",
            example:
              "0x9858bac330f9ba8baab7ebd5c55aa69362016a5ccb3a4c3f8e5e53faf0f3ef::hero::Hero",
            description: "The coin types to fetch info about",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: false,
              default: [],
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "0x1::coin::WithdrawEvent",
                          description: "The definition of the coin activity",
                          maxLength: 200,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "activity_type",
                        description: "The definition of the coin activity",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "324933484",
                          description: "The amount being transfered",
                          maxLength: 200,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "amount",
                        description: "The amount being transfered",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "49661526",
                          description:
                            "The blockheight that the transfer was included in",
                          maxLength: 200,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "block_height",
                        description:
                          "The blockheight that the transfer was included in",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "T0xa911c7236486be921f6cc9227b09afe4a4ad14d291ba1bb8a9b7c4d628759de::gegg::GEGG",
                          description:
                            "The definition of the coin structure (identifier)",
                          maxLength: 5000,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "coin_type",
                        description:
                          "The definition of the coin structure (identifier)",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example:
                            "0x563e8382514ccdcc0c0a83469c9262d22d0b052316c1bd67286ba42bb11d0815::AtodexSwapPoolV1::swap_exact_coi",
                          description:
                            "The function that was called to transfer the coin",
                          maxLength: 100,
                          minLength: 1,
                        },
                        name: "entry_function_id_str",
                        description:
                          "The function that was called to transfer the coin",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address of the event account",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "event_account_address",
                        description: "The address of the event account",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "9",
                          description: "The event creation number",
                          maxLength: 66,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "event_creation_number",
                        description: "The event creation number",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "59",
                          description: "The sequence number of the event",
                          maxLength: 66,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "event_sequence_number",
                        description: "The sequence number of the event",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "is_gas_fee",
                        description: "If the transfer was a gas fee or not",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "is_transaction_success",
                        description: "If the transfer was successful or not",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address of the owner of the coin",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "owner_address",
                        description: "The address of the owner of the coin",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "2022-09-17T22:03:32.000000Z",
                          description:
                            "The timestamp of the transaction of when the coin was transfered",
                        },
                        name: "transaction_timestamp",
                        description:
                          "The timestamp of the transaction of when the coin was transfered",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "210373856",
                          description:
                            "The version of the transaction where the coin was transfered",
                          nullable: false,
                        },
                        name: "transaction_version",
                        description:
                          "The version of the transaction where the coin was transfered",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  description:
                    "The coins transfers for the provided block heights",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.coins.getCoinTransfersByBlockHeights({ \n  { limit, offset, cursor, blockHeights }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.coins.get_coin_transfers_by_block_heights(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getCoinTransfersByCoinType: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get Coin Transfers by Coin Type",
        sdkTag: "coins",
        tags: ["Coin Transfers"],
        method: "GET",
        path: "/coins/transfers/{coin_type}",
        pathParams: [
          {
            name: "coin_type",
            required: true,
            in: "path",
            example:
              "0x9858bac330f9ba8baab7ebd5c55aa69362016a5ccb3a4c3f8e5e53faf0f3ef::hero::Hero",
            description: "The coin type to fetch info about",
            schema: {
              minLength: 1,
              maxLength: 5000,
              nullable: false,
              default: "",
              type: "string",
            },
          },
        ],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of results to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            example:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
            schema: {
              nullable: true,
              default: "",
              type: "string",
            },
          },
          {
            name: "from_date",
            required: false,
            in: "query",
            example: "2021-07-01",
            description: "The date from which to fetch coin transfers",
            schema: {
              minLength: 1,
              maxLength: 30,
              nullable: false,
              default: "",
              type: "string",
            },
          },
          {
            name: "to_date",
            required: false,
            in: "query",
            example: "2021-08-01",
            description: "The date to which to fetch coin transfers",
            schema: {
              minLength: 1,
              maxLength: 30,
              nullable: false,
              default: "",
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "0x1::coin::WithdrawEvent",
                          description: "The definition of the coin activity",
                          maxLength: 200,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "activity_type",
                        description: "The definition of the coin activity",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "324933484",
                          description: "The amount being transfered",
                          maxLength: 200,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "amount",
                        description: "The amount being transfered",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "49661526",
                          description:
                            "The blockheight that the transfer was included in",
                          maxLength: 200,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "block_height",
                        description:
                          "The blockheight that the transfer was included in",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "T0xa911c7236486be921f6cc9227b09afe4a4ad14d291ba1bb8a9b7c4d628759de::gegg::GEGG",
                          description:
                            "The definition of the coin structure (identifier)",
                          maxLength: 5000,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "coin_type",
                        description:
                          "The definition of the coin structure (identifier)",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example:
                            "0x563e8382514ccdcc0c0a83469c9262d22d0b052316c1bd67286ba42bb11d0815::AtodexSwapPoolV1::swap_exact_coi",
                          description:
                            "The function that was called to transfer the coin",
                          maxLength: 100,
                          minLength: 1,
                        },
                        name: "entry_function_id_str",
                        description:
                          "The function that was called to transfer the coin",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address of the event account",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "event_account_address",
                        description: "The address of the event account",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "9",
                          description: "The event creation number",
                          maxLength: 66,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "event_creation_number",
                        description: "The event creation number",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "59",
                          description: "The sequence number of the event",
                          maxLength: 66,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "event_sequence_number",
                        description: "The sequence number of the event",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "is_gas_fee",
                        description: "If the transfer was a gas fee or not",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "is_transaction_success",
                        description: "If the transfer was successful or not",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address of the owner of the coin",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "owner_address",
                        description: "The address of the owner of the coin",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "2022-09-17T22:03:32.000000Z",
                          description:
                            "The timestamp of the transaction of when the coin was transfered",
                        },
                        name: "transaction_timestamp",
                        description:
                          "The timestamp of the transaction of when the coin was transfered",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "210373856",
                          description:
                            "The version of the transaction where the coin was transfered",
                          nullable: false,
                        },
                        name: "transaction_version",
                        description:
                          "The version of the transaction where the coin was transfered",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  description: "The coins transfers for the provided coin type",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.coins.getCoinTransfersByCoinType({ \n  { limit, offset, cursor, fromDate, toDate }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.coins.get_coin_transfers_by_coin_type(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getTopHoldersByCoin: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get top Holders of Coin",
        sdkTag: "coins",
        tags: ["Coin Balances"],
        method: "GET",
        path: "/coins/owners/{coin_type_hash}/top-holders",
        pathParams: [
          {
            name: "coin_type_hash",
            required: true,
            in: "path",
            example:
              "2259ad43589d05db480120c8b0050ab04995c1021f0935a18b484eba66b6762e",
            description: "The coin type hash to fetch info about",
            schema: {
              minLength: 1,
              maxLength: 5000,
              nullable: false,
              default: "",
              type: "string",
            },
          },
        ],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of results to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            example:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
            schema: {
              nullable: true,
              default: "",
              type: "string",
            },
          },
          {
            name: "min_amount",
            required: false,
            in: "query",
            description:
              "The minimum amount of coins required for a wallet to be included in the results",
            schema: {
              minimum: 1,
              maximum: 1.7976931348623157e308,
              nullable: true,
              type: "number",
            },
          },
          {
            name: "min_version",
            required: false,
            in: "query",
            description:
              "The minimum version on when the balance was last updated",
            schema: {
              minimum: 1,
              maximum: 1.7976931348623157e308,
              nullable: true,
              type: "number",
            },
          },
          {
            name: "wallet_blacklist",
            required: false,
            in: "query",
            description: "The addresses of the wallets to blacklist",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          {
            name: "wallet_whitelist",
            required: false,
            in: "query",
            description: "The addresses of the wallets to whitelist",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "324933484",
                          description: "The amount being transfered",
                          maxLength: 200,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "amount",
                        description: "The amount being transfered",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "T0xa911c7236486be921f6cc9227b09afe4a4ad14d291ba1bb8a9b7c4d628759de::gegg::GEGG",
                          description:
                            "The definition of the coin structure (identifier)",
                          maxLength: 5000,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "coin_type",
                        description:
                          "The definition of the coin structure (identifier)",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "6993fb8b5688d392a2d94127b9926519d6327e69f2bcf3dc0c5df2c060aec97d",
                          description:
                            "The hash of the coin_type (identifier) and a known fixed length",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "coin_type_hash",
                        description:
                          "The hash of the coin_type (identifier) and a known fixed length",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "2022-09-17T22:03:32.000000Z",
                          description:
                            "The timestamp of the last update to the balance",
                        },
                        name: "last_transaction_timestamp",
                        description:
                          "The timestamp of the last update to the balance",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "210373856",
                          description:
                            "The version of the transaction where the balance was last s",
                          nullable: false,
                        },
                        name: "last_transaction_version",
                        description:
                          "The version of the transaction where the balance was last s",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address of the owner of the coin",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "owner_address",
                        description: "The address of the owner of the coin",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  description: "The top holders of the given coin",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.coins.getTopHoldersByCoin({ \n  { limit, offset, cursor, minAmount, minVersion, walletBlacklist, walletWhitelist }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.coins.get_top_holders_by_coin(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
    wallets: {
      getCoinBalancesByWallets: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get Coin Balances by wallet addresses",
        sdkTag: "wallets",
        tags: ["Wallets"],
        method: "GET",
        path: "/wallets/coins",
        pathParams: [],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of results to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            schema: {
              nullable: true,
              type: "string",
            },
          },
          {
            name: "owner_addresses",
            required: true,
            in: "query",
            description: "The addresses of the owners to get coin balances for",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: false,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          {
            name: "coin_type_hash_blacklist",
            required: false,
            in: "query",
            description: "The coin type hashes of the coins to whitelist",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          {
            name: "coin_type_hash_whitelist",
            required: false,
            in: "query",
            description: "The coin type hashes of the coins to whitelist",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "324933484",
                          description: "The amount being transfered",
                          maxLength: 200,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "amount",
                        description: "The amount being transfered",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "T0xa911c7236486be921f6cc9227b09afe4a4ad14d291ba1bb8a9b7c4d628759de::gegg::GEGG",
                          description:
                            "The definition of the coin structure (identifier)",
                          maxLength: 5000,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "coin_type",
                        description:
                          "The definition of the coin structure (identifier)",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "6993fb8b5688d392a2d94127b9926519d6327e69f2bcf3dc0c5df2c060aec97d",
                          description:
                            "The hash of the coin_type (identifier) and a known fixed length",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "coin_type_hash",
                        description:
                          "The hash of the coin_type (identifier) and a known fixed length",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "2022-09-17T22:03:32.000000Z",
                          description:
                            "The timestamp of the last update to the balance",
                        },
                        name: "last_transaction_timestamp",
                        description:
                          "The timestamp of the last update to the balance",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "210373856",
                          description:
                            "The version of the transaction where the balance was last s",
                          nullable: false,
                        },
                        name: "last_transaction_version",
                        description:
                          "The version of the transaction where the balance was last s",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address of the owner of the coin",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "owner_address",
                        description: "The address of the owner of the coin",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  description: "The coins balances for the provided wallets",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.wallets.getCoinBalancesByWallets({ \n  { limit, offset, cursor, ownerAddresses, coinTypeHashBlacklist, coinTypeHashWhitelist }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.wallets.get_coin_balances_by_wallets(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getHistoricalCoinBalancesByWallets: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get Historical Coin Balances by wallet addresses",
        sdkTag: "wallets",
        tags: ["Wallets"],
        method: "GET",
        path: "/wallets/coins/history",
        pathParams: [],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of results to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            schema: {
              nullable: true,
              type: "string",
            },
          },
          {
            name: "owner_addresses",
            required: true,
            in: "query",
            description:
              "The addresses of the owner addresses to get historical balances for",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: false,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          {
            name: "coin_type_hash_blacklist",
            required: false,
            in: "query",
            description: "The coin type hash of the coins to whitelist",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          {
            name: "coin_type_hash_whitelist",
            required: false,
            in: "query",
            description: "The coin type hash of the coins to whitelist",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "324933484",
                          description: "The amount being transfered",
                          maxLength: 200,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "amount",
                        description: "The amount being transfered",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "T0xa911c7236486be921f6cc9227b09afe4a4ad14d291ba1bb8a9b7c4d628759de::gegg::GEGG",
                          description:
                            "The definition of the coin structure (identifier)",
                          maxLength: 5000,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "coin_type",
                        description:
                          "The definition of the coin structure (identifier)",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "6993fb8b5688d392a2d94127b9926519d6327e69f2bcf3dc0c5df2c060aec97d",
                          description:
                            "The hash of the coin_type (identifier) and a known fixed length",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "coin_type_hash",
                        description:
                          "The hash of the coin_type (identifier) and a known fixed length",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "2022-09-17T22:03:32.000000Z",
                          description: "The timestamp of the updated balance",
                        },
                        name: "transaction_timestamp",
                        description: "The timestamp of the updated balance",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "210373856",
                          description:
                            "The version of the transaction where the balacne was updated",
                          nullable: false,
                        },
                        name: "transaction_version",
                        description:
                          "The version of the transaction where the balacne was updated",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address of the owner of the coin",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "owner_address",
                        description: "The address of the owner of the coin",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  description: "The coins balances for the provided wallets",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.wallets.getHistoricalCoinBalancesByWallets({ \n  { limit, offset, cursor, ownerAddresses, coinTypeHashBlacklist, coinTypeHashWhitelist }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.wallets.get_historical_coin_balances_by_wallets(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getCoinTransfersByWalletAddresses: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get Coin Transfers by wallet addresses",
        sdkTag: "wallets",
        tags: ["Wallets"],
        method: "GET",
        path: "/wallets/coins/transfers",
        pathParams: [],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of results to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            schema: {
              nullable: true,
              type: "string",
            },
          },
          {
            name: "owner_addresses",
            required: true,
            in: "query",
            description: "The addresses of the owners to get tokens for",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: false,
              default: [],
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          {
            name: "from_date",
            required: false,
            in: "query",
            description: "The date from which to fetch coin transfers",
            schema: {
              minLength: 1,
              maxLength: 30,
              nullable: false,
              type: "string",
            },
          },
          {
            name: "to_date",
            required: false,
            in: "query",
            description: "The date to which to fetch coin transfers",
            schema: {
              minLength: 1,
              maxLength: 30,
              nullable: false,
              type: "string",
            },
          },
          {
            name: "coin_type_blacklist",
            required: false,
            in: "query",
            description: "The coin types of the coins to whitelist",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              default: [],
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          {
            name: "coin_type_whitelist",
            required: false,
            in: "query",
            description: "The coin types of the coins to whitelist",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "0x1::coin::WithdrawEvent",
                          description: "The definition of the coin activity",
                          maxLength: 200,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "activity_type",
                        description: "The definition of the coin activity",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "324933484",
                          description: "The amount being transfered",
                          maxLength: 200,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "amount",
                        description: "The amount being transfered",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "49661526",
                          description:
                            "The blockheight that the transfer was included in",
                          maxLength: 200,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "block_height",
                        description:
                          "The blockheight that the transfer was included in",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "T0xa911c7236486be921f6cc9227b09afe4a4ad14d291ba1bb8a9b7c4d628759de::gegg::GEGG",
                          description:
                            "The definition of the coin structure (identifier)",
                          maxLength: 5000,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "coin_type",
                        description:
                          "The definition of the coin structure (identifier)",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example:
                            "0x563e8382514ccdcc0c0a83469c9262d22d0b052316c1bd67286ba42bb11d0815::AtodexSwapPoolV1::swap_exact_coi",
                          description:
                            "The function that was called to transfer the coin",
                          maxLength: 100,
                          minLength: 1,
                        },
                        name: "entry_function_id_str",
                        description:
                          "The function that was called to transfer the coin",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address of the event account",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "event_account_address",
                        description: "The address of the event account",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "9",
                          description: "The event creation number",
                          maxLength: 66,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "event_creation_number",
                        description: "The event creation number",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "59",
                          description: "The sequence number of the event",
                          maxLength: 66,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "event_sequence_number",
                        description: "The sequence number of the event",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "is_gas_fee",
                        description: "If the transfer was a gas fee or not",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "is_transaction_success",
                        description: "If the transfer was successful or not",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address of the owner of the coin",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "owner_address",
                        description: "The address of the owner of the coin",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "2022-09-17T22:03:32.000000Z",
                          description:
                            "The timestamp of the transaction of when the coin was transfered",
                        },
                        name: "transaction_timestamp",
                        description:
                          "The timestamp of the transaction of when the coin was transfered",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "210373856",
                          description:
                            "The version of the transaction where the coin was transfered",
                          nullable: false,
                        },
                        name: "transaction_version",
                        description:
                          "The version of the transaction where the coin was transfered",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  description:
                    "The coins transfers for the provided owner addresses",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.wallets.getCoinTransfersByWalletAddresses({ \n  { limit, offset, cursor, ownerAddresses, fromDate, toDate, coinTypeBlacklist, coinTypeWhitelist }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.wallets.get_coin_transfers_by_wallet_addresses(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getNFTByOwners: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get NFTs by wallet addresses",
        sdkTag: "wallets",
        tags: ["Wallets"],
        method: "GET",
        path: "/wallets/nfts",
        pathParams: [],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of results to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            schema: {
              nullable: true,
              type: "string",
            },
          },
          {
            name: "owner_addresses",
            required: true,
            in: "query",
            description: "The addresses of the owners to get tokens for",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: false,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          {
            name: "collection_blacklist",
            required: false,
            in: "query",
            description:
              "The collection data id hashes of the collections to whitelist",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          {
            name: "collection_whitelist",
            required: false,
            in: "query",
            description:
              "The collection data id hashes of the collections to whitelist",
            example: [
              "0x4d09404aecb8aa005d7cd2ffe0bf604d584c866ae40ba05d8cec2b77ff5ba221",
            ],
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "2",
                          description:
                            "The number of tokens that belonging to the owner",
                          nullable: false,
                        },
                        name: "amount",
                        description:
                          "The number of tokens that belonging to the owner",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "6993fb8b5688d392a2d94127b9926519d6327e69f2bcf3dc0c5df2c060aec97d",
                          description: "The identifier of the collection",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "collection_data_id_hash",
                        description: "The identifier of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "Topaz Troopers",
                          description: "The name of the collection",
                          maxLength: 128,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "collection_name",
                        description: "The name of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description:
                            "The address of the creator of the collection",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "creator_address",
                        description:
                          "The address of the creator of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "2022-09-17T22:03:32.000000Z",
                          description: "The timestamp of the last transaction",
                        },
                        name: "last_transaction_timestamp",
                        description: "The timestamp of the last transaction",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "210373856",
                          description: "The version of the last transaction",
                          nullable: false,
                        },
                        name: "last_transaction_version",
                        description: "The version of the last transaction",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "Topaz Troopers 123",
                          description: "The name of the token",
                          maxLength: 128,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "name",
                        description: "The name of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address of the owner of the token",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "owner_address",
                        description: "The address of the owner of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "1",
                          description: "The property version of the token",
                          nullable: false,
                        },
                        name: "property_version",
                        description: "The property version of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "0x3::token::TokenStore",
                          description: "The data structure of the token",
                          nullable: false,
                        },
                        name: "table_type",
                        description: "The data structure of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "1824178d98256f40046db3db8cf462f1c0a8e0d37304218044f11e69761c88e1",
                          description: "The identifier of the token",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "token_data_id_hash",
                        description: "The identifier of the token",
                        required: true,
                      },
                      {
                        type: "object",
                        name: "token_properties",
                        description: "The properties of the token",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  description: "The tokens for the given owners",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.wallets.getNFTByOwners({ \n  { limit, offset, cursor, ownerAddresses, collectionBlacklist, collectionWhitelist }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.wallets.get_n_f_t_by_owners(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getWalletsNFTTransfers: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get NFT Transfers by wallets",
        sdkTag: "wallets",
        tags: ["Wallets"],
        method: "GET",
        path: "/wallets/nfts/transfers",
        pathParams: [],
        queryParams: [
          {
            name: "limit",
            required: true,
            in: "query",
            example: 10,
            description: "The number of tokens to return",
            schema: {
              minimum: 1,
              maximum: 100,
              nullable: false,
              default: 10,
              type: "number",
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            example: 0,
            description: "The number of results to skip",
            schema: {
              minimum: 0,
              maximum: 100,
              nullable: false,
              default: 0,
              type: "number",
            },
          },
          {
            name: "cursor",
            required: false,
            in: "query",
            description: "The cursor to use for getting the next page",
            schema: {
              nullable: true,
              type: "string",
            },
          },
          {
            name: "wallet_addresses",
            required: true,
            in: "query",
            description: "The addresses of the wallets to get transfers for",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: false,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          {
            name: "collection_blacklist",
            required: false,
            in: "query",
            description: "The ids of the collections to whitelist",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          {
            name: "collection_whitelist",
            required: false,
            in: "query",
            description: "The ids of the collections to whitelist",
            schema: {
              minItems: 1,
              maxItems: 25,
              nullable: true,
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhkODUwOTQyZWY4ODExZjJhODY2NjkyYTYyMzAxMWJkZTUyYTQ2MmMxIiwiY2hhaW4iOiJldGgiLCJkaXNhYmxlVG90YWwiOiJ0cnVlIiwiYXBpS2V5SWQiOjM2NTg5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE0NjgxNTM3IiwicGFnZSI6MSwidG90YWwiOjAsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY3MTk3ODQwNH0.XM9IN3wRJgWzSvQCy-K4Asgs_j8p9xTM1pY7UnHEhs4",
                    description:
                      "The cursor to use for the next page of results. (Cursor is null on last page)",
                  },
                  name: "cursor",
                  description:
                    "The cursor to use for the next page of results. (Cursor is null on last page)",
                  required: true,
                },
                {
                  type: "object",
                  name: "hasNextPage",
                  description: "Indicates if there is a next page of results",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                    fields: [
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example: "2",
                          description: "The number of tokens transferred",
                        },
                        name: "coin_amount",
                        description: "The number of tokens transferred",
                        required: false,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example: null,
                          description: "The type of tokens transferred",
                        },
                        name: "coin_type",
                        description: "The type of tokens transferred",
                        required: false,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "6993fb8b5688d392a2d94127b9926519d6327e69f2bcf3dc0c5df2c060aec97d",
                          description: "The identifier of the collection",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "collection_data_id_hash",
                        description: "The identifier of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "Topaz Troopers",
                          description: "The name of the collection",
                          maxLength: 128,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "collection_name",
                        description: "The name of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description:
                            "The address of the creator of the collection",
                          maxLength: 66,
                          minLength: 66,
                          nullable: false,
                        },
                        name: "creator_address",
                        description:
                          "The address of the creator of the collection",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "0xa748de66f1eea7d32399b59027ab0b3786295313e2c3a1608b5d51e759aee6dd",
                          description: "The account address of the transfer",
                          nullable: false,
                        },
                        name: "event_account_address",
                        description: "The account address of the transfer",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "2",
                          description: "The creation number of the event",
                          nullable: false,
                        },
                        name: "event_creation_number",
                        description: "The creation number of the event",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "2",
                          description: "The sequence number of the event",
                          nullable: false,
                        },
                        name: "event_sequence_number",
                        description: "The sequence number of the event",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address sending the transfer",
                          maxLength: 66,
                          minLength: 66,
                        },
                        name: "from_address",
                        description: "The address sending the transfer",
                        required: false,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "Topaz Troopers 123",
                          description: "The name of the token",
                          maxLength: 128,
                          minLength: 1,
                          nullable: false,
                        },
                        name: "name",
                        description: "The name of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "1",
                          description: "The property version of the token",
                          nullable: false,
                        },
                        name: "property_version",
                        description: "The property version of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: true,
                          example:
                            "0x9125e4054d884fdc7296b66e12c0d63a7baa0d88c77e8e784987c0a967c670ac",
                          description: "The address recieving the transfer",
                          maxLength: 66,
                          minLength: 66,
                        },
                        name: "to_address",
                        description: "The address recieving the transfer",
                        required: false,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "2",
                          description: "The number of tokens transferred",
                          nullable: false,
                        },
                        name: "token_amount",
                        description: "The number of tokens transferred",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example:
                            "1824178d98256f40046db3db8cf462f1c0a8e0d37304218044f11e69761c88e1",
                          description: "The identifier of the token",
                          maxLength: 64,
                          minLength: 64,
                          nullable: false,
                        },
                        name: "token_data_id_hash",
                        description: "The identifier of the token",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          nullable: false,
                          example: "2022-09-17T22:03:32.000000Z",
                          description: "The timestamp of the transfer",
                        },
                        name: "transaction_timestamp",
                        description: "The timestamp of the transfer",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "210373856",
                          description:
                            "The version of the transaction that the transfer is a part of",
                          nullable: false,
                        },
                        name: "transaction_version",
                        description:
                          "The version of the transaction that the transfer is a part of",
                        required: true,
                      },
                      {
                        type: "string",
                        field: {
                          type: "string",
                          example: "0x3::token::DepositEvent",
                          description: "The type of transfer",
                          nullable: false,
                        },
                        name: "transfer_type",
                        description: "The type of transfer",
                        required: true,
                      },
                    ],
                  },
                  name: "result",
                  description: "The collections for the given creators",
                  required: true,
                },
              ],
            },
          },
          {
            status: "400",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description: "The status code",
                    example: "400",
                    minLength: 3,
                    maxLength: 3,
                    nullable: false,
                  },
                  name: "statusCode",
                  description: "The status code",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "message",
                  description: "List of things to correct",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    nullable: true,
                    example: "Bad Request",
                    description: "Type of error",
                  },
                  name: "error",
                  description: "Type of error",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.wallets.getWalletsNFTTransfers({ \n  { limit, offset, cursor, walletAddresses, collectionBlacklist, collectionWhitelist }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.wallets.get_wallets_n_f_t_transfers(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
    accounts: {
      getAccount: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get account",
        sdkTag: "accounts",
        tags: ["Accounts"],
        method: "GET",
        path: "/accounts/{address}",
        pathParams: [
          {
            name: "address",
            required: true,
            in: "path",
            example:
              "0x88fbd33f54e1126269769780feb24480428179f552e2313fbe571b72e62a1ca1",
            description: "Address of account with or without a 0x prefix",
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [
          {
            name: "ledger_version",
            required: false,
            in: "query",
            example: "32425224034",
            description:
              "Ledger version to get state of account.\nIf not provided, it will be the latest version",
            schema: {
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "32425224034",
                    description:
                      "A string containing a 64-bit unsigned integer.\nWe represent u64 values as a string to ensure compatibility with languages such as JavaScript that do not parse u64s in JSON natively.",
                  },
                  name: "sequence_number",
                  description:
                    "A string containing a 64-bit unsigned integer.\nWe represent u64 values as a string to ensure compatibility with languages such as JavaScript that do not parse u64s in JSON natively.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example:
                      "0x88fbd33f54e1126269769780feb24480428179f552e2313fbe571b72e62a1ca1",
                    description:
                      "All bytes (Vec) data is represented as hex-encoded string prefixed with 0x and fulfilled with two hex digits per byte.\nUnlike the Address type, HexEncodedBytes will not trim any zeros.",
                  },
                  name: "authentication_key",
                  description:
                    "All bytes (Vec) data is represented as hex-encoded string prefixed with 0x and fulfilled with two hex digits per byte.\nUnlike the Address type, HexEncodedBytes will not trim any zeros.",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.accounts.getAccount({ \n  { ledgerVersion }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.accounts.get_account(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getAccountResources: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get account resources",
        sdkTag: "accounts",
        tags: ["Accounts"],
        method: "GET",
        path: "/accounts/{address}/resources",
        pathParams: [
          {
            name: "address",
            required: true,
            in: "path",
            description: "Address of account with or without a 0x prefix",
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [
          {
            name: "ledger_version",
            required: false,
            in: "query",
            example: "32425224034",
            description:
              "Ledger version to get state of account.\nIf not provided, it will be the latest version",
            schema: {
              type: "string",
            },
          },
          {
            name: "limit",
            required: false,
            in: "query",
            example: 100,
            description:
              "Max number of account resources to retrieve.\nIf not provided, defaults to default page size.",
            schema: {
              minimum: 1,
              maximum: 5000,
              nullable: true,
              default: 100,
              type: "number",
            },
          },
          {
            name: "start",
            required: false,
            in: "query",
            example:
              "0000000000000000000000000000000000000000000000000000000000000000012f0000000000000000000000000000000000000000000000000000000000000000010d7374616b696e675f70726f7879",
            description:
              "Cursor specifying where to start for pagination\nThis cursor cannot be derived manually client-side. Instead, you must call this endpoint once without this query parameter specified, and then use the cursor returned in the X-Aptos-Cursor header in the response.",
            schema: {
              nullable: true,
              default: "",
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "array",
              field: {
                type: "object",
                fields: [
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example:
                        "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>",
                      description:
                        "String representation of a MoveStructTag (on-chain Move struct type). This exists so you can specify MoveStructTags as path / query parameters",
                    },
                    name: "type",
                    description:
                      "String representation of a MoveStructTag (on-chain Move struct type). This exists so you can specify MoveStructTags as path / query parameters",
                    required: true,
                  },
                  {
                    type: "object",
                    name: "data",
                    description:
                      "This is a JSON representation of some data within an account resource. More specifically, it is a map of strings to arbitrary JSON values / objects, where the keys are top level fields within the given resource.",
                    required: true,
                  },
                ],
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.accounts.getAccountResources({ \n  { ledgerVersion, limit, start }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.accounts.get_account_resources(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getAccountModules: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get account modules",
        sdkTag: "accounts",
        tags: ["Accounts"],
        method: "GET",
        path: "/accounts/{address}/modules",
        pathParams: [
          {
            name: "address",
            required: true,
            in: "path",
            description: "Address of account with or without a 0x prefix",
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [
          {
            name: "ledger_version",
            required: false,
            in: "query",
            example: "32425224034",
            description:
              "Ledger version to get state of account.\nIf not provided, it will be the latest version",
            schema: {
              type: "string",
            },
          },
          {
            name: "limit",
            required: false,
            in: "query",
            example: 100,
            description:
              "Max number of account resources to retrieve.\nIf not provided, defaults to default page size.",
            schema: {
              minimum: 1,
              maximum: 5000,
              nullable: true,
              default: 100,
              type: "number",
            },
          },
          {
            name: "start",
            required: false,
            in: "query",
            example:
              "0000000000000000000000000000000000000000000000000000000000000000012f0000000000000000000000000000000000000000000000000000000000000000010d7374616b696e675f70726f7879",
            description:
              "Cursor specifying where to start for pagination\nThis cursor cannot be derived manually client-side. Instead, you must call this endpoint once without this query parameter specified, and then use the cursor returned in the X-Aptos-Cursor header in the response.",
            schema: {
              nullable: true,
              default: "",
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "array",
              field: {
                type: "object",
                fields: [
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example:
                        "All bytes (Vec) data is represented as hex-encoded string prefixed with 0x and fulfilled with two hex digits per byte.",
                      description:
                        "0x88fbd33f54e1126269769780feb24480428179f552e2313fbe571b72e62a1ca1",
                    },
                    name: "bytecode",
                    description:
                      "0x88fbd33f54e1126269769780feb24480428179f552e2313fbe571b72e62a1ca1",
                    required: true,
                  },
                  {
                    type: "object",
                    name: "abi",
                    description: "A Move module",
                    required: true,
                  },
                ],
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.accounts.getAccountModules({ \n  { ledgerVersion, limit, start }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.accounts.get_account_modules(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getAccountResource: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get account resource",
        sdkTag: "accounts",
        tags: ["Accounts"],
        method: "GET",
        path: "/accounts/{address}/resource/{resource_type}",
        pathParams: [
          {
            name: "address",
            required: true,
            in: "path",
            description: "Address of account with or without a 0x prefix",
            schema: {
              type: "string",
            },
          },
          {
            name: "resource_type",
            required: true,
            in: "path",
            description:
              "Name of struct to retrieve e.g. 0x1::account::Account",
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [
          {
            name: "ledger_version",
            required: false,
            in: "query",
            example: "32425224034",
            description:
              "Ledger version to get state of account.\nIf not provided, it will be the latest version",
            schema: {
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>",
                    description:
                      "String representation of a MoveStructTag (on-chain Move struct type). This exists so you can specify MoveStructTags as path / query parameters",
                  },
                  name: "type",
                  description:
                    "String representation of a MoveStructTag (on-chain Move struct type). This exists so you can specify MoveStructTags as path / query parameters",
                  required: true,
                },
                {
                  type: "object",
                  name: "data",
                  description:
                    "This is a JSON representation of some data within an account resource. More specifically, it is a map of strings to arbitrary JSON values / objects, where the keys are top level fields within the given resource.",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.accounts.getAccountResource({ \n  { ledgerVersion }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.accounts.get_account_resource(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getAccountModule: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get account module",
        sdkTag: "accounts",
        tags: ["Accounts"],
        method: "GET",
        path: "/accounts/{address}/resource/{module_name}",
        pathParams: [
          {
            name: "address",
            required: true,
            in: "path",
            description: "Address of account with or without a 0x prefix",
            schema: {
              type: "string",
            },
          },
          {
            name: "module_name",
            required: true,
            in: "path",
            description: "Name of module to retrieve",
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [
          {
            name: "ledger_version",
            required: false,
            in: "query",
            example: "32425224034",
            description:
              "Ledger version to get state of account.\nIf not provided, it will be the latest version",
            schema: {
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    example:
                      "All bytes (Vec) data is represented as hex-encoded string prefixed with 0x and fulfilled with two hex digits per byte.",
                    description:
                      "0x88fbd33f54e1126269769780feb24480428179f552e2313fbe571b72e62a1ca1",
                  },
                  name: "bytecode",
                  description:
                    "0x88fbd33f54e1126269769780feb24480428179f552e2313fbe571b72e62a1ca1",
                  required: true,
                },
                {
                  type: "object",
                  name: "abi",
                  description: "A Move module",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.accounts.getAccountModule({ \n  { ledgerVersion }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.accounts.get_account_module(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getEventsByCreationNumber: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get events by creation number",
        sdkTag: "accounts",
        tags: ["Events"],
        method: "GET",
        path: "/accounts/{address}/events/{creation_number}",
        pathParams: [
          {
            name: "address",
            required: true,
            in: "path",
            description: "Address of account with or without a 0x prefix",
            schema: {
              type: "string",
            },
          },
          {
            name: "creation_number",
            required: true,
            in: "path",
            description:
              "Creation number corresponding to the event stream originating from the given account.",
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [
          {
            name: "limit",
            required: false,
            in: "query",
            example: 100,
            description:
              "Max number of account resources to retrieve.\nIf not provided, defaults to default page size.",
            schema: {
              minimum: 1,
              maximum: 5000,
              nullable: true,
              default: 100,
              type: "number",
            },
          },
          {
            name: "start",
            required: false,
            in: "query",
            description:
              "Starting sequence number of events.\nIf unspecified, by default will retrieve the most recent events",
            schema: {
              nullable: true,
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "array",
              field: {
                type: "object",
                fields: [
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example: "32425224034",
                      description:
                        "A string containing a 64-bit unsigned integer.\nWe represent u64 values as a string to ensure compatibility with languages such as JavaScript that do not parse u64s in JSON natively.",
                    },
                    name: "version",
                    description:
                      "A string containing a 64-bit unsigned integer.\nWe represent u64 values as a string to ensure compatibility with languages such as JavaScript that do not parse u64s in JSON natively.",
                    required: true,
                  },
                  {
                    type: "object",
                    name: "guid",
                    description: "",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example: "32425224034",
                      description:
                        "A string containing a 64-bit unsigned integer.\nWe represent u64 values as a string to ensure compatibility with languages such as JavaScript that do not parse u64s in JSON natively.",
                    },
                    name: "sequence_number",
                    description:
                      "A string containing a 64-bit unsigned integer.\nWe represent u64 values as a string to ensure compatibility with languages such as JavaScript that do not parse u64s in JSON natively.",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example:
                        "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>",
                      description:
                        "String representation of an on-chain Move type tag that is exposed in transaction payload.",
                    },
                    name: "type",
                    description:
                      "String representation of an on-chain Move type tag that is exposed in transaction payload.",
                    required: true,
                  },
                  {
                    type: "object",
                    name: "data",
                    description: "The JSON representation of the event",
                    required: true,
                  },
                ],
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.accounts.getEventsByCreationNumber({ \n  { limit, start }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.accounts.get_events_by_creation_number(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getEventsByEventHandle: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get events by event handle",
        sdkTag: "accounts",
        tags: ["Events"],
        method: "GET",
        path: "/accounts/{address}/events/{event_handle}/{field_name}",
        pathParams: [
          {
            name: "address",
            required: true,
            in: "path",
            description:
              "Hex-encoded 32 byte Aptos account, with or without a 0x prefix, for which events are queried. This refers to the account that events were emitted to, not the account hosting the move module that emits that event type.",
            schema: {
              type: "string",
            },
          },
          {
            name: "event_handle",
            required: true,
            in: "path",
            description: "Name of struct to lookup event handle.",
            schema: {
              type: "string",
            },
          },
          {
            name: "field_name",
            required: true,
            in: "path",
            description: "Name of field to lookup event handle.",
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [
          {
            name: "limit",
            required: false,
            in: "query",
            example: 100,
            description:
              "Max number of account resources to retrieve.\nIf not provided, defaults to default page size.",
            schema: {
              minimum: 1,
              maximum: 5000,
              nullable: true,
              default: 100,
              type: "number",
            },
          },
          {
            name: "start",
            required: false,
            in: "query",
            description:
              "Starting sequence number of events.\nIf unspecified, by default will retrieve the most recent events",
            schema: {
              nullable: true,
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "array",
              field: {
                type: "object",
                fields: [
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example: "32425224034",
                      description:
                        "A string containing a 64-bit unsigned integer.\nWe represent u64 values as a string to ensure compatibility with languages such as JavaScript that do not parse u64s in JSON natively.",
                    },
                    name: "version",
                    description:
                      "A string containing a 64-bit unsigned integer.\nWe represent u64 values as a string to ensure compatibility with languages such as JavaScript that do not parse u64s in JSON natively.",
                    required: true,
                  },
                  {
                    type: "object",
                    name: "guid",
                    description: "",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example: "32425224034",
                      description:
                        "A string containing a 64-bit unsigned integer.\nWe represent u64 values as a string to ensure compatibility with languages such as JavaScript that do not parse u64s in JSON natively.",
                    },
                    name: "sequence_number",
                    description:
                      "A string containing a 64-bit unsigned integer.\nWe represent u64 values as a string to ensure compatibility with languages such as JavaScript that do not parse u64s in JSON natively.",
                    required: true,
                  },
                  {
                    type: "string",
                    field: {
                      type: "string",
                      example:
                        "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>",
                      description:
                        "String representation of an on-chain Move type tag that is exposed in transaction payload.",
                    },
                    name: "type",
                    description:
                      "String representation of an on-chain Move type tag that is exposed in transaction payload.",
                    required: true,
                  },
                  {
                    type: "object",
                    name: "data",
                    description: "The JSON representation of the event",
                    required: true,
                  },
                ],
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.accounts.getEventsByEventHandle({ \n  { limit, start }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.accounts.get_events_by_event_handle(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
    transactions: {
      getTransactions: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get transactions",
        sdkTag: "transactions",
        tags: ["Transactions"],
        method: "GET",
        path: "/transactions",
        pathParams: [],
        queryParams: [
          {
            name: "limit",
            required: false,
            in: "query",
            example: 100,
            description:
              "Max number of transactions to retrieve.\nIf not provided, defaults to default page size",
            schema: {
              minimum: 1,
              maximum: 5000,
              nullable: true,
              default: 100,
              type: "number",
            },
          },
          {
            name: "start",
            required: false,
            in: "query",
            description:
              "Account sequence number to start list of transactions.\nIf not provided, defaults to showing the latest transactions",
            schema: {
              nullable: true,
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "array",
              field: {
                type: "object",
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.transactions.getTransactions({ \n  { limit, start }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.transactions.get_transactions(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      submitTransaction: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Submit transaction",
        sdkTag: "transactions",
        tags: ["Transactions"],
        method: "POST",
        path: "/transactions",
        pathParams: [],
        queryParams: [],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    example:
                      "0x88fbd33f54e1126269769780feb24480428179f552e2313fbe571b72e62a1ca1",
                    description: "",
                  },
                  name: "hash",
                  description: "",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example:
                      "0x88fbd33f54e1126269769780feb24480428179f552e2313fbe571b72e62a1ca1",
                    description: "A hex encoded 32 byte Aptos account address.",
                  },
                  name: "sender",
                  description: "A hex encoded 32 byte Aptos account address.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "32425224034",
                    description:
                      "A string containing a 64-bit unsigned integer.",
                  },
                  name: "sequence_number",
                  description: "A string containing a 64-bit unsigned integer.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "32425224034",
                    description:
                      "A string containing a 64-bit unsigned integer.",
                  },
                  name: "max_gas_amount",
                  description: "A string containing a 64-bit unsigned integer.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "32425224034",
                    description:
                      "A string containing a 64-bit unsigned integer.",
                  },
                  name: "gas_unit_price",
                  description: "A string containing a 64-bit unsigned integer.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "32425224034",
                    description:
                      "A string containing a 64-bit unsigned integer.",
                  },
                  name: "expiration_timestamp_secs",
                  description: "A string containing a 64-bit unsigned integer.",
                  required: true,
                },
                {
                  type: "object",
                  name: "payload",
                  required: true,
                },
                {
                  type: "object",
                  name: "signature",
                  required: true,
                },
              ],
            },
          },
          {
            status: "201",
            description: "",
            body: {
              type: "object",
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.transactions.submitTransaction({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.transactions.submit_transaction(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getTransactionByHash: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get transaction by hash",
        sdkTag: "transactions",
        tags: ["Transactions"],
        method: "GET",
        path: "/transactions/by_hash/{txn_hash}",
        pathParams: [
          {
            name: "txn_hash",
            required: true,
            in: "path",
            example:
              "0x1f9f5ea7eff6602d39817e2cb5b481deef7510215a0781992872593662414db5",
            description: "Hash of transaction to retrieve",
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.transactions.getTransactionByHash({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.transactions.get_transaction_by_hash(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getTransactionByVersion: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get transaction by version",
        sdkTag: "transactions",
        tags: ["Transactions"],
        method: "GET",
        path: "/transactions/by_version/{txn_version}",
        pathParams: [
          {
            name: "txn_version",
            required: true,
            in: "path",
            example: "32425224034",
            description: "Version of transaction to retrieve",
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.transactions.getTransactionByVersion({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.transactions.get_transaction_by_version(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getAccountTransactions: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get account transactions",
        sdkTag: "transactions",
        tags: ["Transactions"],
        method: "GET",
        path: "/accounts/{address}/transactions",
        pathParams: [
          {
            name: "address",
            required: true,
            in: "path",
            example:
              "0x88fbd33f54e1126269769780feb24480428179f552e2313fbe571b72e62a1ca1",
            description: "Address of account with or without a 0x prefix",
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [
          {
            name: "limit",
            required: false,
            in: "query",
            example: 100,
            description:
              "Max number of transactions to retrieve.\nIf not provided, defaults to default page size",
            schema: {
              minimum: 1,
              maximum: 5000,
              nullable: true,
              default: 100,
              type: "number",
            },
          },
          {
            name: "start",
            required: false,
            in: "query",
            description:
              "Account sequence number to start list of transactions.\nIf not provided, defaults to showing the latest transactions",
            schema: {
              nullable: true,
              type: "string",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "array",
              field: {
                type: "object",
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.transactions.getAccountTransactions({ \n  { limit, start }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.transactions.get_account_transactions(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      submitBatchTransactions: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Submit batch transactions",
        sdkTag: "transactions",
        tags: ["Transactions"],
        method: "POST",
        path: "/transactions/batch",
        pathParams: [],
        queryParams: [],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "transaction_failures",
                  description: "Summary of the failed transactions",
                  required: true,
                },
              ],
            },
          },
          {
            status: "201",
            description: "",
            body: {
              type: "object",
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.transactions.submitBatchTransactions({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.transactions.submit_batch_transactions(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      simulateTransaction: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Simulate transaction",
        sdkTag: "transactions",
        tags: ["Transactions"],
        method: "POST",
        path: "/transactions/simulate",
        pathParams: [],
        queryParams: [],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
            },
          },
          {
            status: "201",
            description: "",
            body: {
              type: "array",
              field: {
                type: "object",
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.transactions.simulateTransaction({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.transactions.simulate_transaction(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      encodeSubmission: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Encode submission",
        sdkTag: "transactions",
        tags: ["Transactions"],
        method: "POST",
        path: "/transactions/encode_submission",
        pathParams: [],
        queryParams: [],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "string",
              field: {
                type: "string",
                example:
                  "0x88fbd33f54e1126269769780feb24480428179f552e2313fbe571b72e62a1ca1 ",
              },
            },
          },
          {
            status: "201",
            description: "",
            body: {
              type: "string",
              field: {
                type: "string",
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.transactions.encodeSubmission({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.transactions.encode_submission(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      estimateGasPrice: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Estimate gas price",
        sdkTag: "transactions",
        tags: ["Transactions"],
        method: "GET",
        path: "/transactions/estimate_gas_price",
        pathParams: [],
        queryParams: [],
        responses: [
          {
            status: "200",
            description: "",
            body: {
              type: "object",
              fields: [
                {
                  type: "object",
                  name: "deprioritized_gas_estimate",
                  description:
                    "The deprioritized estimate for the gas unit price",
                  required: true,
                },
                {
                  type: "object",
                  name: "gas_estimate",
                  description: "The current estimate for the gas unit price",
                  required: true,
                },
                {
                  type: "object",
                  name: "prioritized_gas_estimate",
                  description:
                    "The prioritized estimate for the gas unit price",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.transactions.estimateGasPrice({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.transactions.estimate_gas_price(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
    blocks: {
      getBlockByHeight: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get block by height",
        sdkTag: "blocks",
        tags: ["Blocks"],
        method: "GET",
        path: "/blocks/{block_height}",
        pathParams: [
          {
            name: "block_height",
            required: true,
            in: "path",
            description: "Block height to lookup. Starts at 0",
            example: 0,
            schema: {
              type: "number",
            },
          },
        ],
        queryParams: [
          {
            name: "with_transactions",
            required: false,
            in: "query",
            example: false,
            description:
              "If set to true, include all transactions in the block",
            schema: {
              type: "boolean",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns block by height",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "32425224034",
                    description:
                      "A string containing a 64-bit unsigned integer.",
                  },
                  name: "block_height",
                  description: "A string containing a 64-bit unsigned integer.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "32425224034",
                    description: "",
                  },
                  name: "block_hash",
                  description: "",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "32425224034",
                    description:
                      "A string containing a 64-bit unsigned integer.",
                  },
                  name: "block_timestamp",
                  description: "A string containing a 64-bit unsigned integer.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "32425224034",
                    description:
                      "A string containing a 64-bit unsigned integer.",
                  },
                  name: "first_version",
                  description: "A string containing a 64-bit unsigned integer.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "32425224034",
                    description:
                      "A string containing a 64-bit unsigned integer.",
                  },
                  name: "last_version",
                  description: "A string containing a 64-bit unsigned integer.",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                  },
                  name: "transactions",
                  description: "List of transactions",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.blocks.getBlockByHeight({ \n  { withTransactions }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.blocks.get_block_by_height(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      getBlockByVersion: {
        apiHost: "https://mainnet-aptos-api.moralis.io",
        summary: "Get block by version",
        sdkTag: "blocks",
        tags: ["Blocks"],
        method: "GET",
        path: "/blocks/by_version/{version}",
        pathParams: [
          {
            name: "version",
            required: true,
            in: "path",
            description: "Ledger version to lookup block information for.",
            example: 0,
            schema: {
              type: "number",
            },
          },
        ],
        queryParams: [
          {
            name: "with_transactions",
            required: false,
            in: "query",
            example: false,
            description:
              "If set to true, include all transactions in the block",
            schema: {
              type: "boolean",
            },
          },
        ],
        responses: [
          {
            status: "200",
            description: "Returns block by version",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "32425224034",
                    description:
                      "A string containing a 64-bit unsigned integer.",
                  },
                  name: "block_height",
                  description: "A string containing a 64-bit unsigned integer.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "32425224034",
                    description: "",
                  },
                  name: "block_hash",
                  description: "",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "32425224034",
                    description:
                      "A string containing a 64-bit unsigned integer.",
                  },
                  name: "block_timestamp",
                  description: "A string containing a 64-bit unsigned integer.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "32425224034",
                    description:
                      "A string containing a 64-bit unsigned integer.",
                  },
                  name: "first_version",
                  description: "A string containing a 64-bit unsigned integer.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "32425224034",
                    description:
                      "A string containing a 64-bit unsigned integer.",
                  },
                  name: "last_version",
                  description: "A string containing a 64-bit unsigned integer.",
                  required: true,
                },
                {
                  type: "array",
                  field: {
                    type: "object",
                  },
                  name: "transactions",
                  description: "List of transactions",
                  required: false,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.AptosApi.blocks.getBlockByVersion({ \n  { withTransactions }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import aptos_api\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = aptos_api.blocks.get_block_by_version(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
  },
  Auth: {
    challenge: {
      requestChallengeEvm: {
        apiHost: "https://authapi.moralis.io",
        summary: "Request EVM challenge",
        sdkTag: "challenge",
        tags: ["Challenge"],
        method: "POST",
        path: "/challenge/request/evm",
        pathParams: [],
        queryParams: [],
        responses: [
          {
            status: "201",
            description:
              "The back channel challenge containing the id to store on the api and the message to be signed by the user",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    maxLength: 64,
                    minLength: 8,
                    description:
                      "17-characters Alphanumeric string Secret Challenge ID used to identify this particular request. Is should be used at the backend of the calling service to identify the completed request.",
                    example: "fRyt67D3eRss3RrXa",
                    pattern: "^[a-zA-Z0-9]{8,64}$",
                  },
                  name: "id",
                  description:
                    "17-characters Alphanumeric string Secret Challenge ID used to identify this particular request. Is should be used at the backend of the calling service to identify the completed request.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    description:
                      "Unique identifier with a length of 66 characters",
                    example:
                      "0xbfbcfab169c67072ff418133124480fea02175f1402aaa497daa4fd09026b0e1",
                  },
                  name: "profileId",
                  description:
                    "Unique identifier with a length of 66 characters",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    description:
                      "Message that needs to be signed by the end user",
                    example:
                      "defi.finance wants you to sign in with your Ethereum account:\n0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B\n\nPlease confirm\n\nURI: https://defi.finance/\nVersion: 1\nChain ID: 1\nNonce: DbU1DCTmdzR4lg3wi\nIssued At: 2022-06-12T12:15:31.290Z\nExpiration Time: 2020-01-01T00:00:00.000Z\nNot Before: 2020-01-01T00:00:00.000Z\nResources:\n- https://docs.moralis.io/",
                  },
                  name: "message",
                  description:
                    "Message that needs to be signed by the end user",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.Auth.challenge.requestChallengeEvm({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import auth\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = auth.challenge.request_challenge_evm(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      verifyChallengeEvm: {
        apiHost: "https://authapi.moralis.io",
        summary: "Verify EVM challenge",
        sdkTag: "challenge",
        tags: ["Challenge"],
        method: "POST",
        path: "/challenge/verify/evm",
        pathParams: [],
        queryParams: [],
        responses: [
          {
            status: "201",
            description:
              "The token to be used to call the third party API from the client",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    maxLength: 64,
                    minLength: 8,
                    description:
                      "17-characters Alphanumeric string Secret Challenge ID used to identify this particular request. Is should be used at the backend of the calling service to identify the completed request.",
                    example: "fRyt67D3eRss3RrX",
                    pattern: "^[a-zA-Z0-9]{8,64}$",
                  },
                  name: "id",
                  description:
                    "17-characters Alphanumeric string Secret Challenge ID used to identify this particular request. Is should be used at the backend of the calling service to identify the completed request.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    description:
                      "RFC 4501 dns authority that is requesting the signing.",
                    example: "defi.finance",
                    format: "hostname",
                  },
                  name: "domain",
                  description:
                    "RFC 4501 dns authority that is requesting the signing.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    description:
                      "Human-readable ASCII assertion that the user will sign, and it must not contain `\n`.",
                    example: "Please confirm",
                  },
                  name: "statement",
                  description:
                    "Human-readable ASCII assertion that the user will sign, and it must not contain `\n`.",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    format: "uri",
                    example: "https://defi.finance/",
                    description:
                      "RFC 3986 URI referring to the resource that is the subject of the signing (as in the __subject__ of a claim).",
                  },
                  name: "uri",
                  description:
                    "RFC 3986 URI referring to the resource that is the subject of the signing (as in the __subject__ of a claim).",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    format: "date-time",
                    example: "2020-01-01T00:00:00.000Z",
                    description:
                      "ISO 8601 datetime string that, if present, indicates when the signed authentication message is no longer valid.",
                  },
                  name: "expirationTime",
                  description:
                    "ISO 8601 datetime string that, if present, indicates when the signed authentication message is no longer valid.",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    format: "date-time",
                    example: "2020-01-01T00:00:00.000Z",
                    description:
                      "ISO 8601 datetime string that, if present, indicates when the signed authentication message will become valid.",
                  },
                  name: "notBefore",
                  description:
                    "ISO 8601 datetime string that, if present, indicates when the signed authentication message will become valid.",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "resources",
                  description:
                    "List of information or references to information the user wishes to have resolved as part of authentication by the relying party. They are expressed as RFC 3986 URIs separated by `\n- `.",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "1.0",
                    description:
                      "EIP-155 Chain ID to which the session is bound, and the network where Contract Accounts must be resolved.",
                  },
                  name: "version",
                  description:
                    "EIP-155 Chain ID to which the session is bound, and the network where Contract Accounts must be resolved.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example:
                      "0x1234567890abcdef0123456789abcdef1234567890abcdef",
                  },
                  name: "nonce",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    description:
                      "Unique identifier with a length of 66 characters",
                    example:
                      "0xbfbcfab169c67072ff418133124480fea02175f1402aaa497daa4fd09026b0e1",
                  },
                  name: "profileId",
                  description:
                    "Unique identifier with a length of 66 characters",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    enum: [
                      "1",
                      "5",
                      "25",
                      "56",
                      "97",
                      "137",
                      "250",
                      "338",
                      "1337",
                      "43113",
                      "43114",
                      "80001",
                      "11155111",
                    ],
                    example: 1,
                    description:
                      "EIP-155 Chain ID to which the session is bound, and the network where Contract Accounts must be resolved.",
                  },
                  name: "chainId",
                  description:
                    "EIP-155 Chain ID to which the session is bound, and the network where Contract Accounts must be resolved.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B",
                    description:
                      "Ethereum address performing the signing conformant to capitalization encoded checksum specified in EIP-55 where applicable.",
                  },
                  name: "address",
                  description:
                    "Ethereum address performing the signing conformant to capitalization encoded checksum specified in EIP-55 where applicable.",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.Auth.challenge.verifyChallengeEvm({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import auth\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = auth.challenge.verify_challenge_evm(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      requestChallengeSolana: {
        apiHost: "https://authapi.moralis.io",
        summary: "Request Solana challenge",
        sdkTag: "challenge",
        tags: ["Challenge"],
        method: "POST",
        path: "/challenge/request/solana",
        pathParams: [],
        queryParams: [],
        responses: [
          {
            status: "201",
            description:
              "The back channel challenge containing the id to store on the api and the message to be signed by the user",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    maxLength: 64,
                    minLength: 8,
                    description:
                      "17-characters Alphanumeric string Secret Challenge ID used to identify this particular request. Is should be used at the backend of the calling service to identify the completed request.",
                    example: "fRyt67D3eRss3RrXa",
                    pattern: "^[a-zA-Z0-9]{8,64}$",
                  },
                  name: "id",
                  description:
                    "17-characters Alphanumeric string Secret Challenge ID used to identify this particular request. Is should be used at the backend of the calling service to identify the completed request.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    description:
                      "Unique identifier with a length of 66 characters",
                    example:
                      "0xbfbcfab169c67072ff418133124480fea02175f1402aaa497daa4fd09026b0e1",
                  },
                  name: "profileId",
                  description:
                    "Unique identifier with a length of 66 characters",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    description:
                      "Message that needs to be signed by the end user",
                    example:
                      "defi.finance wants you to sign in with your Solana account:\n26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo\n\nI am a third party API\n\nURI: http://defi.finance\nVersion: 1\nNetwork: mainnet\nNonce: PYxxb9msdjVXsMQ9x\nIssued At: 2022-08-25T11:02:34.097Z\nExpiration Time: 2022-08-25T11:12:38.243Z\nResources:\n- https://docs.moralis.io/",
                  },
                  name: "message",
                  description:
                    "Message that needs to be signed by the end user",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.Auth.challenge.requestChallengeSolana({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import auth\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = auth.challenge.request_challenge_solana(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      verifyChallengeSolana: {
        apiHost: "https://authapi.moralis.io",
        summary: "Verify Solana challenge",
        sdkTag: "challenge",
        tags: ["Challenge"],
        method: "POST",
        path: "/challenge/verify/solana",
        pathParams: [],
        queryParams: [],
        responses: [
          {
            status: "201",
            description:
              "The token to be used to call the third party API from the client",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    maxLength: 64,
                    minLength: 8,
                    description:
                      "17-characters Alphanumeric string Secret Challenge ID used to identify this particular request. Is should be used at the backend of the calling service to identify the completed request.",
                    example: "fRyt67D3eRss3RrX",
                    pattern: "^[a-zA-Z0-9]{8,64}$",
                  },
                  name: "id",
                  description:
                    "17-characters Alphanumeric string Secret Challenge ID used to identify this particular request. Is should be used at the backend of the calling service to identify the completed request.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    description:
                      "RFC 4501 dns authority that is requesting the signing.",
                    example: "defi.finance",
                    format: "hostname",
                  },
                  name: "domain",
                  description:
                    "RFC 4501 dns authority that is requesting the signing.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    description:
                      "Human-readable ASCII assertion that the user will sign, and it must not contain `\n`.",
                    example: "Please confirm",
                  },
                  name: "statement",
                  description:
                    "Human-readable ASCII assertion that the user will sign, and it must not contain `\n`.",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    format: "uri",
                    example: "https://defi.finance/",
                    description:
                      "RFC 3986 URI referring to the resource that is the subject of the signing (as in the __subject__ of a claim).",
                  },
                  name: "uri",
                  description:
                    "RFC 3986 URI referring to the resource that is the subject of the signing (as in the __subject__ of a claim).",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    format: "date-time",
                    example: "2020-01-01T00:00:00.000Z",
                    description:
                      "ISO 8601 datetime string that, if present, indicates when the signed authentication message is no longer valid.",
                  },
                  name: "expirationTime",
                  description:
                    "ISO 8601 datetime string that, if present, indicates when the signed authentication message is no longer valid.",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    format: "date-time",
                    example: "2020-01-01T00:00:00.000Z",
                    description:
                      "ISO 8601 datetime string that, if present, indicates when the signed authentication message will become valid.",
                  },
                  name: "notBefore",
                  description:
                    "ISO 8601 datetime string that, if present, indicates when the signed authentication message will become valid.",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "resources",
                  description:
                    "List of information or references to information the user wishes to have resolved as part of authentication by the relying party. They are expressed as RFC 3986 URIs separated by `\n- `.",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "1.0",
                    description:
                      "EIP-155 Chain ID to which the session is bound, and the network where Contract Accounts must be resolved.",
                  },
                  name: "version",
                  description:
                    "EIP-155 Chain ID to which the session is bound, and the network where Contract Accounts must be resolved.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example:
                      "0x1234567890abcdef0123456789abcdef1234567890abcdef",
                  },
                  name: "nonce",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    description:
                      "Unique identifier with a length of 66 characters",
                    example:
                      "0xbfbcfab169c67072ff418133124480fea02175f1402aaa497daa4fd09026b0e1",
                  },
                  name: "profileId",
                  description:
                    "Unique identifier with a length of 66 characters",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    enum: ["mainnet", "testnet", "devnet"],
                    example: "mainnet",
                    description:
                      "The network where Contract Accounts must be resolved.",
                  },
                  name: "network",
                  description:
                    "The network where Contract Accounts must be resolved.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo",
                    description:
                      "Solana address with a length of 32 - 44 characters that is used to perform the signing",
                  },
                  name: "address",
                  description:
                    "Solana address with a length of 32 - 44 characters that is used to perform the signing",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.Auth.challenge.verifyChallengeSolana({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import auth\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = auth.challenge.verify_challenge_solana(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      requestChallengeAptos: {
        apiHost: "https://authapi.moralis.io",
        summary: "Request Aptos challenge",
        sdkTag: "challenge",
        tags: ["Challenge"],
        method: "POST",
        path: "/challenge/request/aptos",
        pathParams: [],
        queryParams: [],
        responses: [
          {
            status: "201",
            description:
              "The back channel challenge containing the id to store on the api and the message to be signed by the user",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    maxLength: 64,
                    minLength: 8,
                    description:
                      "17-characters Alphanumeric string Secret Challenge ID used to identify this particular request. Is should be used at the backend of the calling service to identify the completed request.",
                    example: "fRyt67D3eRss3RrXa",
                    pattern: "^[a-zA-Z0-9]{8,64}$",
                  },
                  name: "id",
                  description:
                    "17-characters Alphanumeric string Secret Challenge ID used to identify this particular request. Is should be used at the backend of the calling service to identify the completed request.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    description:
                      "Unique identifier with a length of 66 characters",
                    example:
                      "0xbfbcfab169c67072ff418133124480fea02175f1402aaa497daa4fd09026b0e1",
                  },
                  name: "profileId",
                  description:
                    "Unique identifier with a length of 66 characters",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    description:
                      "Message that needs to be signed by the end user",
                    example:
                      "defi.finance wants you to sign in with your Aptos account:\n0xfb2853744bb8afd58d9386d1856afd8e08de135019961dfa3a10d8c9bf83b99d\n\nPlease confirm\n\nURI: https://defi.finance/\nVersion: 1\nChain ID: 1\nNonce: DbU1DCTmdzR4lg3wi\nIssued At: 2022-06-12T12:15:31.290Z\nExpiration Time: 2020-01-01T00:00:00.000Z\nNot Before: 2020-01-01T00:00:00.000Z\nResources:\n- https://docs.moralis.io/",
                  },
                  name: "message",
                  description:
                    "Message that needs to be signed by the end user",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.Auth.challenge.requestChallengeAptos({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import auth\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = auth.challenge.request_challenge_aptos(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      verifyChallengeAptos: {
        apiHost: "https://authapi.moralis.io",
        summary: "Verify Aptos challenge",
        sdkTag: "challenge",
        tags: ["Challenge"],
        method: "POST",
        path: "/challenge/verify/aptos",
        pathParams: [],
        queryParams: [],
        responses: [
          {
            status: "201",
            description:
              "The token to be used to call the third party API from the client",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    maxLength: 64,
                    minLength: 8,
                    description:
                      "17-characters Alphanumeric string Secret Challenge ID used to identify this particular request. Is should be used at the backend of the calling service to identify the completed request.",
                    example: "fRyt67D3eRss3RrX",
                    pattern: "^[a-zA-Z0-9]{8,64}$",
                  },
                  name: "id",
                  description:
                    "17-characters Alphanumeric string Secret Challenge ID used to identify this particular request. Is should be used at the backend of the calling service to identify the completed request.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    description:
                      "RFC 4501 dns authority that is requesting the signing.",
                    example: "defi.finance",
                    format: "hostname",
                  },
                  name: "domain",
                  description:
                    "RFC 4501 dns authority that is requesting the signing.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    description:
                      "Human-readable ASCII assertion that the user will sign, and it must not contain `\n`.",
                    example: "Please confirm",
                  },
                  name: "statement",
                  description:
                    "Human-readable ASCII assertion that the user will sign, and it must not contain `\n`.",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    format: "uri",
                    example: "https://defi.finance/",
                    description:
                      "RFC 3986 URI referring to the resource that is the subject of the signing (as in the __subject__ of a claim).",
                  },
                  name: "uri",
                  description:
                    "RFC 3986 URI referring to the resource that is the subject of the signing (as in the __subject__ of a claim).",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    format: "date-time",
                    example: "2020-01-01T00:00:00.000Z",
                    description:
                      "ISO 8601 datetime string that, if present, indicates when the signed authentication message is no longer valid.",
                  },
                  name: "expirationTime",
                  description:
                    "ISO 8601 datetime string that, if present, indicates when the signed authentication message is no longer valid.",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    format: "date-time",
                    example: "2020-01-01T00:00:00.000Z",
                    description:
                      "ISO 8601 datetime string that, if present, indicates when the signed authentication message will become valid.",
                  },
                  name: "notBefore",
                  description:
                    "ISO 8601 datetime string that, if present, indicates when the signed authentication message will become valid.",
                  required: false,
                },
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "resources",
                  description:
                    "List of information or references to information the user wishes to have resolved as part of authentication by the relying party. They are expressed as RFC 3986 URIs separated by `\n- `.",
                  required: false,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example: "1.0",
                    description:
                      "EIP-155 Chain ID to which the session is bound, and the network where Contract Accounts must be resolved.",
                  },
                  name: "version",
                  description:
                    "EIP-155 Chain ID to which the session is bound, and the network where Contract Accounts must be resolved.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example:
                      "0x1234567890abcdef0123456789abcdef1234567890abcdef",
                  },
                  name: "nonce",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    description:
                      "Unique identifier with a length of 66 characters",
                    example:
                      "0xbfbcfab169c67072ff418133124480fea02175f1402aaa497daa4fd09026b0e1",
                  },
                  name: "profileId",
                  description:
                    "Unique identifier with a length of 66 characters",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    enum: ["mainnet", "testnet"],
                    example: "mainnet",
                    description:
                      "The network where Contract Accounts must be resolved.",
                  },
                  name: "network",
                  description:
                    "The network where Contract Accounts must be resolved.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example:
                      "0xfb2853744bb8afd58d9386d1856afd8e08de135019961dfa3a10d8c9bf83b99d",
                    description:
                      "Aptos address performing the signing conformant.",
                  },
                  name: "address",
                  description:
                    "Aptos address performing the signing conformant.",
                  required: true,
                },
                {
                  type: "string",
                  field: {
                    type: "string",
                    example:
                      "0xfb2853744bb8afd58d9386d1856afd8e08de135019961dfa3a10d8c9bf83b99d",
                    description:
                      "Aptos public key performing the signing conformant.",
                  },
                  name: "publicKey",
                  description:
                    "Aptos public key performing the signing conformant.",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.Auth.challenge.verifyChallengeAptos({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import auth\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = auth.challenge.verify_challenge_aptos(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
    profile: {
      getAddresses: {
        apiHost: "https://authapi.moralis.io",
        summary: "Get addresses that are bound to the specific profileId",
        sdkTag: "profile",
        tags: ["Profile"],
        method: "GET",
        path: "/profile/{profileId}/addresses",
        pathParams: [
          {
            name: "profileId",
            required: true,
            in: "path",
            description: "Unique identifier with a length of 66 characters",
            example:
              "0xbfbcfab169c67072ff418133124480fea02175f1402aaa497daa4fd09026b0e1",
            schema: {
              type: "string",
            },
          },
        ],
        queryParams: [],
        responses: [
          {
            status: "201",
            description:
              "The addresses that are bound to the speicifc profileId",
            body: {
              type: "array",
              field: {
                type: "string",
                field: {
                  type: "string",
                },
              },
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.Auth.profile.getAddresses({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import auth\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = auth.profile.get_addresses(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
    bind: {
      requestBind: {
        apiHost: "https://authapi.moralis.io",
        summary: "Request bind between profile of two addresses",
        description:
          "Request for message to bind profile that is belong to the two addresses<br>\n        All profiles under the addresses will be bound and new profile will be generated.",
        sdkTag: "bind",
        tags: ["Bind"],
        method: "POST",
        path: "/bind/request",
        pathParams: [],
        queryParams: [],
        responses: [
          {
            status: "201",
            description:
              "The messages that is required to be signed by each of the address",
            body: {
              type: "object",
              fields: [
                {
                  type: "array",
                  field: {
                    type: "string",
                    field: {
                      type: "string",
                    },
                  },
                  name: "messages",
                  description:
                    "Message that needs to be signed by the end user",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.Auth.bind.requestBind({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import auth\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = auth.bind.request_bind(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      verifyRequestBind: {
        apiHost: "https://authapi.moralis.io",
        summary: "Verify bind request",
        sdkTag: "bind",
        tags: ["Bind"],
        method: "POST",
        path: "/bind/request/verify",
        pathParams: [],
        queryParams: [],
        responses: [
          {
            status: "201",
            description:
              "The profileId that all the addresses have been bind into.",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description:
                      "Unique identifier with a length of 66 characters",
                    example:
                      "0xbfbcfab169c67072ff418133124480fea02175f1402aaa497daa4fd09026b0e1",
                  },
                  name: "profileId",
                  description:
                    "Unique identifier with a length of 66 characters",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.Auth.bind.verifyRequestBind({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import auth\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = auth.bind.verify_request_bind(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      removeBind: {
        apiHost: "https://authapi.moralis.io",
        summary: "Request to remove bind of an address from a profile",
        sdkTag: "bind",
        tags: ["Bind"],
        method: "POST",
        path: "/bind/remove",
        pathParams: [],
        queryParams: [],
        responses: [
          {
            status: "201",
            description:
              "The messages that is required to be signed by each of the address",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description:
                      "Message that needs to be signed by the end user",
                    example:
                      "Please sign this message to unbind:\nAddress: 0x6ed338bcB610640e81465FCfb9894DDfA354Cc91\nfrom\nProfile Id:\n- 0x0b2bbac1251651c0cbbdbbb29fed5a03adc8b05a2a9eb10a02aaa489b9c1f8ff\nNonce: 5pXWu7aGkY2J7II0X",
                  },
                  name: "message",
                  description:
                    "Message that needs to be signed by the end user",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.Auth.bind.removeBind({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import auth\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = auth.bind.remove_bind(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
      verifyRemoveBind: {
        apiHost: "https://authapi.moralis.io",
        summary: "Verify remove bind request",
        sdkTag: "bind",
        tags: ["Bind"],
        method: "POST",
        path: "/bind/remove/verify",
        pathParams: [],
        queryParams: [],
        responses: [
          {
            status: "201",
            description:
              "The new profileId that is being generated for this address.",
            body: {
              type: "object",
              fields: [
                {
                  type: "string",
                  field: {
                    type: "string",
                    description:
                      "Unique identifier with a length of 66 characters",
                    example:
                      "0xbfbcfab169c67072ff418133124480fea02175f1402aaa497daa4fd09026b0e1",
                  },
                  name: "profileId",
                  description:
                    "Unique identifier with a length of 66 characters",
                  required: true,
                },
              ],
            },
          },
        ],
        codeSamples: [
          {
            language: "node",
            code: "import Moralis from 'moralis';\ntry {\nawait Moralis.start({\n    apiKey: \"YOUR_API_KEY\"\n    });\nconst response = await Moralis.Auth.bind.verifyRemoveBind({ \n  {  }\n});    \nconsole.log(response.raw);\n} catch (e) {\n    console.error(e);\n}",
            name: "Moralis NodeJS SDK",
          },
          {
            language: "python",
            code: 'from moralis import auth\napi_key = "YOUR_API_KEY"\nparams = {\n    # params key values goes here\n}\nresult = auth.bind.verify_remove_bind(\n    params=params,\n    api_key=api_key,\n    )\nprint(result)',
            name: "Moralis Python SDK",
          },
        ],
      },
    },
  },
};
