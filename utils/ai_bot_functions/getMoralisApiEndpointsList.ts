import { ApiSchema } from "./helpers/generatedApiSchema";

export function getAllApiEndpointsList() {
  const allApiData = {};

  // Iterate through each API group (EvmApi, SolApi, etc.)
  for (const [apiGroupName, apiGroup] of Object.entries(ApiSchema)) {
    allApiData[apiGroupName] = {};

    // Iterate through each endpoint category (nft, token, etc.)
    for (const [endpointCategoryName, endpointCategory] of Object.entries(
      apiGroup
    )) {
      allApiData[apiGroupName][endpointCategoryName] = [];

      // Iterate through each endpoint
      for (const [endpointName, endpointData] of Object.entries(
        endpointCategory
      )) {
        allApiData[apiGroupName][endpointCategoryName].push({
          endpointName,
          description:
            (endpointData as any).description || (endpointData as any).summary,
        });
      }
    }
  }
  return allApiData;
}

export const getAllApiEndpointsListSchema = {
  name: "get_moralis_api_endpoints_list",
  description:
    "Can be used to get all the available Moralis API endpoints. Useful in answering questions related to API endpoints, getting blockchain data. This function should be followed by get_moralis_api_endpoints_data to get the complete details of the endpoint.",
  parameters: { type: "object", properties: {} },
  returns: {
    type: "object",
    description:
      "An object containing all available API endpoint data, organized first by API group (chain group) and then by endpoint category. Each API group contains multiple endpoint categories, and each endpoint category contains an array of available endpoints, each represented by an object with 'endpointName' and 'description' properties.",
    properties: {
      apiGroup: {
        type: "object",
        description:
          "An object representing an API group, which contains one or more endpoint categories.",
        additionalProperties: {
          type: "object",
          description:
            "An object representing an endpoint category within an API group, which contains an array of available endpoints.",
          properties: {
            endpointCategory: {
              type: "array",
              description:
                "An array of objects, each representing an available API endpoint within the category.",
              items: {
                type: "object",
                properties: {
                  endpointName: {
                    type: "string",
                    description: "The name of the API endpoint.",
                  },
                  description: {
                    type: "string",
                    description:
                      "A brief summary or description of the API endpoint.",
                  },
                },
                required: ["endpointName", "description"],
              },
            },
          },
        },
      },
    },
  },
};
