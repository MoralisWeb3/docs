import { ApiSchema } from "./helpers/generatedApiSchema";

export function getMoralisApiEndpointsList({ apiGroupName }) {
    if (!ApiSchema[apiGroupName]) {
        throw new Error("Invalid API Group Name");
    }
    const apiData = {};
    const apiGroup = ApiSchema[apiGroupName];
    apiData[apiGroupName] = {};

    // Iterate through each endpoint category (nft, token, etc.)
    for (const [endpointCategoryName, endpointCategory] of Object.entries(apiGroup)) {
        apiData[apiGroupName][endpointCategoryName] = [];

        // Iterate through each endpoint
        for (const [endpointName, endpointData] of Object.entries(endpointCategory)) {
            apiData[apiGroupName][endpointCategoryName].push({
                endpointName,
                description: endpointData.description || endpointData.summary,
            });
        }
    }
    return apiData;
}

export const getMoralisApiEndpointsListSchema = {
    name: "get_moralis_api_endpoints_list",
    description:
        "Retrieve a list of available Moralis API endpoints for a specified API group. Useful for acquiring insights regarding API endpoints and obtaining blockchain data. For comprehensive details of the endpoint, use in conjunction with get_moralis_api_endpoints_data.",
    parameters: {
        type: "object",
        properties: {
            apiGroupName: {
                type: "string",
                enum: ["EvmApi", "SolApi", "AptosApi", "Auth", "Streams"],
                description:
                    "Name of the API group for which the endpoint data should be retrieved. The function returns data related to this specific API group. Valid values are 'EvmApi', 'SolApi', 'AptosApi', 'Auth', and 'Streams'.",
            },
        },
        required: ["apiGroupName"],
    },
    returns: {
        type: "object",
        description:
            "An object containing available API endpoint data, organized by endpoint category within the specified API group. Each endpoint category contains an array of available endpoints, each represented by an object with 'endpointName' and 'description' properties.",
        properties: {
            endpointCategory: {
                type: "object",
                description:
                    "An object representing an endpoint category within the specified API group, containing an array of available endpoints.",
                additionalProperties: {
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
                                description: "A brief summary or description of the API endpoint.",
                            },
                        },
                        required: ["endpointName", "description"],
                    },
                },
            },
        },
    },
};
