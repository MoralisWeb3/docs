import { ApiSchema } from "./helpers/generatedApiSchema";

export function getMoralisApiEndpointsData({ apiGroupName, endpointNames }) {
  const endpointsData = {};

  // Get the specified API group
  const apiGroup = ApiSchema[apiGroupName];

  if (!apiGroup) {
    throw new Error(`API group '${apiGroupName}' not found.`);
  }

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

  return endpointsData;
}

export const getMoralisApiEndpointsDataSchema = {
  name: "get_moralis_api_endpoints_data",
  description:
    "Retrieve API schema data for specified API endpoint within a specific API group. Can be used to get more details on the API endpoint when we have the endpoint names from get_moralis_api_endpoints_list function.",
  parameters: {
    type: "object",
    properties: {
      apiGroupName: {
        type: "string",
        enum: ["EvmApi", "SolApi", "AptosApi", "Auth"],
        description:
          "The API group name from which to fetch data. API group name can be fetched from the get_moralis_api_endpoints_list function resposne which will be on of EvmApi, SolApi, AptosApi, Auth. If unsure of the API group we can default to EvmApi and endpointNames under EvmApi",
      },
      endpointNames: {
        type: "array",
        items: {
          type: "string",
        },
        description:
          "An array of strings, where each string is the name of an API endpoint for which data should be retrieved.",
      },
    },
    required: ["apiGroupName", "endpointNames"],
  },
  returns: {
    type: "object",
    description:
      "An object containing data for the specified API endpoints within the given API group. Each key is an endpoint name, and the associated value is an object containing data for that endpoint.",
  },
};
