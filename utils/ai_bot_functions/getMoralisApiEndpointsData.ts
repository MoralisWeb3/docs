import { ApiSchema } from "./helpers/generatedApiSchema";

export function getMoralisApiEndpointsData({ endpointNames }) {
  const endpointsData = {};

  // Iterate through each API group (EvmApi, SolApi, etc.)
  for (const [apiGroupName, apiGroup] of Object.entries(ApiSchema)) {
    // Iterate through each endpoint category (nft, token, etc.)
    for (const [endpointCategoryName, endpointCategory] of Object.entries(
      apiGroup
    )) {
      // Iterate through each endpoint
      for (const [endpointName, endpointData] of Object.entries(
        endpointCategory
      )) {
        // If endpointName is in endpointNames, add it to the endpointsData object
        if (endpointNames.includes(endpointName)) {
          endpointsData[endpointName] = endpointData;
        }
      }
    }
  }

  return endpointsData;
}

export const getMoralisApiEndpointsDataSchema = {
  name: "get_moralis_api_endpoints_data",
  description:
    "Retrieve API schema data for specified API endpoint. Can be used to get more details on the API endpoint when we have the endpoint names from get_moralis_api_endpoints_list function.",
  parameters: {
    type: "object",
    properties: {
      endpointNames: {
        type: "array",
        items: {
          type: "string",
        },
        description:
          "An array of strings, where each string is the name of an API endpoint for which data should be retrieved.",
      },
    },
    required: ["endpointNames"],
  },
  returns: {
    type: "object",
    description:
      "An object containing data for the specified API endpoints. Each key is an endpoint name, and the associated value is an object containing data for that endpoint.",
  },
};
