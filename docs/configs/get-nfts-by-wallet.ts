import { ApiReferenceProps } from "@site/src/components/ApiReference";

const config: ApiReferenceProps = {
  description: "Get NFTs owned by a given address.",
  method: "GET",
  path: "/:address/nft",
  pathParams: [
    {
      type: "string",
      name: "address",
      required: true,
      example: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
      description:
        "The address of the wallet",
    },
  ],
  queryParams: [
    {
      type: "string",
      name: "chain",
      required: false,
      description:
        "The chain to query",
      enum: ["eth","0x1","goerli","0x5","sepolia","0xaa36a7","polygon","0x89","mumbai","0x13881","bsc","0x38","bsc","0x61","avalanche","0xa86a","avalanche","0xa869","fantom","0xfa","palm","0x2a15c308d","cronos","0x19","cronos","0x152"],
    },
    {
      type: "string",
      name: "format",
      required: false,
      description:
        "The format of the token ID",
      enum: ["decimal","hex"],
    },
    {
      type: "number",
      name: "limit",
      required: false,
      description:
        "The desired page size of the result.",
    },
    {
      type: "array",
      name: "token_addresses",
      required: false,
      description:
        "The addresses to get balances for (optional)",
      field: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "address",
            required: false,
            description: "The address",
          },
        ]
      },
    },
    {
      type: "string",
      name: "cursor",
      required: false,
      description:
        "The cursor returned in the previous response (used for getting the next page)",
    },
    {
      type: "boolean",
      name: "normalizeMetadata",
      required: false,
      description:
        "Should normalized metadata be returned?",
    },
  ],
  responses: [
    {
      status: 200,
      description: "OK",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "status",
            description: "The syncing status of the address [SYNCING/SYNCED]",
            example: "SYNCED",
          },
          {
            type: "number",
            name: "total",
            description: "The total number of matches for this query",
            example: 1,
          },
          {
            type: "number",
            name: "page",
            description: "The current page of the result",
            example: 1,
          },
        ],
      },
    },
    {
      status: 400,
      description: "Bad Request",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "message",
            description: "Error message",
            example: "address is not a valid hex address",
          }
        ],
      },
    },
  ],
};

export default config;
