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
  responses: [
    {
      status: 200,
      description: "OK",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "message",
            description: "A message describing the error that occurred.",
            example: "Error Message",
          },
          {
            type: "string",
            name: "type",
            description: "The type of error that occurred.",
            enum: ["invalid_request_error"],
            example: "invalid_request_error",
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
            description: "address is not a valid hex address",
            example: "Error Message",
          }
        ],
      },
    },
  ],
};

export default config;
