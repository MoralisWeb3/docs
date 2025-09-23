import configData from "../../configs/api-reference/configs.json";

// Build a mapping from path to {apiCategory, endpointName}
const pathToEndpoint: Record<string, { apiCategory: string; endpointName: string }> = {};

// Iterate through the config to build the mapping
Object.entries(configData).forEach(([apiCategory, endpoints]) => {
    if (typeof endpoints === "object" && endpoints !== null) {
        Object.entries(endpoints).forEach(([endpointName, endpointConfig]: [string, any]) => {
            if (endpointConfig.path) {
                pathToEndpoint[endpointConfig.path] = { apiCategory, endpointName };
            }
        });
    }
});

/**
 * Get the API category and endpoint name from the path
 */
export const getEndpointMetadata = (
    path: string
): { apiCategory?: string; endpointName?: string } => {
    const metadata = pathToEndpoint[path];
    if (metadata) {
        return metadata;
    }

    // If exact match not found, try to match with URL parameters
    // e.g., /token/:network/exchange/:exchange/new matches /token/mainnet/exchange/:exchange/new
    for (const [configPath, meta] of Object.entries(pathToEndpoint)) {
        // Simple pattern matching - replace :param with [^/]+
        const pattern = configPath.replace(/:[^/]+/g, "[^/]+");
        const regex = new RegExp(`^${pattern}$`);
        if (regex.test(path)) {
            return meta;
        }
    }

    return {};
};
