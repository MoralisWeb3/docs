import * as overridesConfig from "../../configs/overrides.json";

/**
 * Get parameter override value from the overrides configuration
 * Priority order:
 * 1. Specific endpoint override
 * 2. Global override for the parameter name
 * 3. Return undefined (no override)
 */
export const getParamOverride = (
  endpoint: string | undefined,
  paramName: string | undefined,
  paramLocation?: "queryParams" | "pathParams" | "bodyParam",
  apiCategory?: string
): any => {
  // Special case: for bodyParam, if paramName is not provided, return the entire body
  if (paramLocation === "bodyParam" && !paramName) {
    return getBodyParamOverride(endpoint, apiCategory);
  }

  if (!paramName) return undefined;

  // If endpoint is provided (it will be the endpoint name now, not a URL)
  if (endpoint) {
    // Try to find specific endpoint override
    const overrides = overridesConfig.overrides;

    // First, try to find in the specific API category if provided
    if (apiCategory && overrides[apiCategory]?.endpoints) {
      const endpointConfig = overrides[apiCategory].endpoints[endpoint];
      if (endpointConfig) {
        // Check for parameter in the correct location
        if (paramLocation && endpointConfig[paramLocation]) {
          const paramOverride = endpointConfig[paramLocation][paramName];
          if (paramOverride !== undefined) {
            return paramOverride;
          }
        }

        // Also check without location specification (for backward compatibility)
        if (endpointConfig[paramName] !== undefined) {
          return endpointConfig[paramName];
        }
      }
    }

    // If not found in specific category, search through all API categories (fallback)
    for (const apiKey of Object.keys(overrides)) {
      if (apiKey === "example" || apiKey === "comment" || apiKey === apiCategory) continue;

      const apiOverrides = overrides[apiKey];

      // Check if this API has endpoints
      if (apiOverrides.endpoints) {
        // Look for endpoint that matches the name
        for (const [endpointName, endpointConfig] of Object.entries(apiOverrides.endpoints)) {
          // Simple direct match by endpoint name
          if (endpointName === endpoint) {
            // Check for parameter in the correct location
            if (paramLocation && endpointConfig[paramLocation]) {
              const paramOverride = endpointConfig[paramLocation][paramName];
              if (paramOverride !== undefined) {
                return paramOverride;
              }
            }

            // Also check without location specification (for backward compatibility)
            if (endpointConfig[paramName] !== undefined) {
              return endpointConfig[paramName];
            }
          }
        }
      }

    }
  }

  // Check global overrides
  const globalOverride = overridesConfig.globalOverrides[paramName];
  if (globalOverride !== undefined) {
    return globalOverride;
  }

  return undefined;
};

/**
 * Get all overrides for a specific endpoint
 */
export const getEndpointOverrides = (
  endpoint: string | undefined
): Record<string, any> => {
  if (!endpoint) return {};

  const overrides = overridesConfig.overrides;
  const result: Record<string, any> = {};

  // Search through all API categories
  for (const apiKey of Object.keys(overrides)) {
    if (apiKey === "example" || apiKey === "comment") continue;

    const apiOverrides = overrides[apiKey];

    // Check if this API has endpoints
    if (apiOverrides.endpoints) {
      for (const [endpointName, endpointConfig] of Object.entries(apiOverrides.endpoints)) {
        if (endpoint.includes(endpointName) || endpoint === endpointName) {
          // Merge all parameter overrides
          for (const location of ["queryParams", "pathParams", "bodyParam"]) {
            if (endpointConfig[location]) {
              Object.assign(result, endpointConfig[location]);
            }
          }

          // Also get direct parameter overrides
          for (const [key, value] of Object.entries(endpointConfig)) {
            if (!["queryParams", "pathParams", "bodyParam", "comment"].includes(key)) {
              result[key] = value;
            }
          }

          return result;
        }
      }
    }

    // Check legacy structure
    for (const [endpointName, endpointConfig] of Object.entries(apiOverrides)) {
      if (endpointName === "endpoints" || endpointName === "comment") continue;

      if (endpoint.includes(endpointName) || endpoint === endpointName) {
        for (const location of ["queryParams", "pathParams", "bodyParam"]) {
          if (endpointConfig[location]) {
            Object.assign(result, endpointConfig[location]);
          }
        }

        for (const [key, value] of Object.entries(endpointConfig)) {
          if (!["queryParams", "pathParams", "bodyParam", "comment"].includes(key)) {
            result[key] = value;
          }
        }

        return result;
      }
    }
  }

  return result;
};

/**
 * Check if a parameter has an override defined
 */
export const hasParamOverride = (
  endpoint: string | undefined,
  paramName: string | undefined
): boolean => {
  return getParamOverride(endpoint, paramName) !== undefined;
};

/**
 * Get the complete body parameter override for an endpoint
 */
const getBodyParamOverride = (endpoint: string | undefined, apiCategory?: string): any => {
  if (!endpoint) return undefined;

  const overrides = overridesConfig.overrides;

  // First, try the specific API category if provided
  if (apiCategory && overrides[apiCategory]?.endpoints?.[endpoint]?.bodyParam) {
    return overrides[apiCategory].endpoints[endpoint].bodyParam;
  }

  // Search through all API categories
  for (const apiKey of Object.keys(overrides)) {
    if (apiKey === "example" || apiKey === "comment") continue;

    const apiOverrides = overrides[apiKey];

    if (apiOverrides.endpoints) {
      for (const [endpointName, endpointConfig] of Object.entries(apiOverrides.endpoints)) {
        if (endpointName === endpoint) {
          // Return the entire bodyParam object if it exists
          const config = endpointConfig as any;
          if (config.bodyParam) {
            return config.bodyParam;
          }
        }
      }
    }
  }

  return undefined;
};