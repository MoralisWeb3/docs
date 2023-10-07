// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const fs = require("fs");

function transformOpenApiToSimpleJson(openApiSchema) {
  const simpleSchema = {};
  const apiHost = openApiSchema.servers[0].url;
  // Loop through each path in the OpenAPI schema
  for (const [path, methods] of Object.entries(openApiSchema.paths)) {
    for (const [method, details] of Object.entries(methods)) {
      const key = details.operationId;

      let tempQueryparam =
        details.parameters?.filter((param) => param.in === "query") || [];
      tempQueryparam = tempQueryparam.map((item) => {
        if (item.schema && "$ref" in item.schema) {
          let data;
          Object.entries(details.responses).map(([status, response]) => {
            const schema = item.schema;
            const processedSchema = transformSchemaToField(
              schema,
              openApiSchema.components.schemas
            );
            item = { ...item, ...processedSchema };
            data = item;
          });
          delete data.schema;
          return data;
        }
        if (item.schema.items && "$ref" in item.schema.items) {
          let data;
          Object.entries(details.responses).map(([status, response]) => {
            const schema = item.schema.items;
            const processedSchema = transformSchemaToField(
              schema,
              openApiSchema.components.schemas
            );
            item.schema = processedSchema;
            data = item;
          });
          delete data.schema.items;
          return data;
        }
        return item;
      });
      simpleSchema[key] = {
        apiHost,
        summary: details.summary,
        description: details.description,
        sdkTag: details["x-tag-sdk"],
        tags: details.tags,
        method: method.toUpperCase(),
        path,
        pathParams:
          details.parameters?.filter((param) => param.in === "path") || [],
        queryParams: tempQueryparam,
        responses: Object.entries(details.responses).map(
          ([status, response]) => {
            const schema = (response as any).content["application/json"].schema;
            const body = transformSchemaToField(
              schema,
              openApiSchema.components.schemas
            );
            return {
              status,
              description: (response as any).description,
              body,
            };
          }
        ),
      };
    }
  }
  return simpleSchema;
}

function transformSchema(field) {
  // Extract properties and required fields from the schema
  const { properties, required = [] } = field;

  // Transform properties into the desired format
  if (properties) {
    const fields = Object.entries(properties).map(([name, prop]) => {
      return {
        name: name,
        type: (prop as any).type,
        description: (prop as any).description || "",
        example: (prop as any).example || "",
        required: required.includes(name),
      };
    });

    return fields;
  }
  //   return {};
}

function transformSchemaToField(schema, globalSchemas) {
  if (schema.$ref) {
    // Handle references to global schemas
    const refName = schema.$ref.split("/").pop();
    schema = globalSchemas[refName];
  }

  if (schema.type === "object" && schema.properties) {
    const fields = Object.entries(schema.properties).map(([name, property]) => {
      const field = transformSchemaToField(property, globalSchemas);
      field.name = name;
      field.description = (property as any).description;
      field.required = schema.required?.includes(name) || false;
      return field;
    });
    return { type: "object", fields };
  } else if (schema.type === "array" && schema.items) {
    const field = transformSchemaToField(schema.items, globalSchemas);
    return { type: "array", field };
  } else if (schema.type === "string") {
    return { type: "string", field: schema };
  } else if (schema.type === "array") {
    console.log("here");
    return { type: "string", field: schema };
  } else {
    return { type: "object", fields: transformSchema(schema) };
  }
}

// Define your API URLs
const apiUrls = {
  EvmApi: "https://deep-index.moralis.io/api-docs-2.2/v2.2/swagger.json",
  SolApi: "https://solana-gateway.moralis.io/api-json",
  AptosApi: "https://mainnet-aptos-api.moralis.io/swagger-json",
  Auth: "https://authapi.moralis.io/api-docs-json",
};

function groupBySdkTag(processedData) {
  const groupedData = {};

  // Iterate through each key-value pair in the processed data
  for (const [key, value] of Object.entries(processedData)) {
    // Extract the sdkTag from the value
    const { sdkTag } = value as Record<any, any>;

    // If sdkTag is undefined or null, skip the current iteration
    if (!sdkTag) continue;

    // Initialize the sdkTag key in the grouped data if it doesn't exist
    if (!groupedData[sdkTag]) {
      groupedData[sdkTag] = {};
    }

    // Add the current key-value pair to the grouped data under the sdkTag key
    groupedData[sdkTag][key] = value;
  }

  return groupedData;
}

function generateCodeSamples(apiPath, params) {
  const jsParams = params ? `{ ${params.join(", ")} }` : "{}";
  const pyParams = params.map((param) => {
    return camelCase(param);
  });
  // ? `\n  ${params.map((p) => `${p}=${p},`).join("\n  ")}`
  // : "";
  const jsFunctionPath = apiPath
    .split(".")
    .map((s, i) => {
      if (i === 0) {
        return s;
      } else {
        return s.charAt(0).toLowerCase() + s.slice(1);
      }
    })
    .join(".");
  const pyFunctionPath = camelCase(apiPath);
  // .split(".")
  // .map((s) => s.toLowerCase().replace(/([A-Z])/g, "_$1"))
  // .join(".");

  return [
    {
      language: "node",
      code: `import Moralis from 'moralis';
try {
await Moralis.start({
    apiKey: "YOUR_API_KEY"
    });
const response = await Moralis.${jsFunctionPath}({ 
    //params key values goes here 
});    
console.log(response.raw);
} catch (e) {
    console.error(e);
}`,
      name: "Moralis NodeJS SDK",
    },
    {
      language: "python",
      code: `from moralis import ${pyFunctionPath.split(".")[0]}
api_key = "YOUR_API_KEY"
params = {
    # params key values goes here
}
result = ${pyFunctionPath}(
    params=params,
    api_key=api_key,
    )
print(result)`,
      name: "Moralis Python SDK",
    },
  ];
}

type schema = Record<"string", Record<"string", Record<"string", any>>>;

function addCodeSamplesToProcessedData(processedData: schema) {
  // Iterate through each API and its endpoints
  for (const [apiGroup, apiGroupData] of Object.entries(processedData)) {
    for (const [apiName, endpoints] of Object.entries(apiGroupData)) {
      for (const [endpointName, endpointData] of Object.entries(endpoints)) {
        // Extracting parameters and converting them to the case format
        const params =
          endpointData.queryParams?.map((param) => param.name) || [];

        // Generate code samples for the current endpoint

        const codeSamples = generateCodeSamples(
          `${apiGroup}.${apiName}.${endpointName}`,
          params
        );

        // Add code samples to the processed data
        endpointData.codeSamples = codeSamples;
      }
    }
  }
}

function camelCase(str) {
  str.replace("NFT", "Nft");
  return (
    str[0].toLowerCase() +
    str
      .slice(1, str.length)
      .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
  );
}

// Fetch and process API data
async function fetchAndProcessApiData(apiUrls) {
  const processedData = {};

  for (const [apiName, apiUrl] of Object.entries(apiUrls)) {
    try {
      const response = await fetch(apiUrl as URL);
      const apiSchema = await response.json();
      const transformedData = transformOpenApiToSimpleJson(apiSchema);
      const groupedData = groupBySdkTag(transformedData);

      processedData[apiName] = groupedData;

      // Adding code samples to the grouped data
      addCodeSamplesToProcessedData(processedData as schema);
    } catch (error) {
      console.error(`Failed to process ${apiName}:`, error);
    }
  }

  fs.writeFileSync(
    "utils/ai_bot_functions/helpers/generatedApiSchema.ts",
    `export const ApiSchema = ${JSON.stringify(processedData, null, 2)}`,
    "utf8"
  );
}

fetchAndProcessApiData(apiUrls);
