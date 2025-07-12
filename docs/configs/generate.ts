const fetch = require("node-fetch");
const fs = require("fs");
const swaggerPaths = require("./swagger/paths.json");
const {
  isGenerateSchemaOn,
  isGenerateReferenceOn,
} = require("./generate.config.json");
const camelToSnakeCase = require("../../utils/camelToSnakeCase.mts");

const apiReferenceConfigFile = "./docs/configs/api-reference/configs.json";

// Command line arguments for selective updates
const args = process.argv.slice(2);
const specificApiKeys = args.filter(arg => arg.startsWith('--api=')).map(arg => arg.split('=')[1]);
const forceFullReplace = args.includes('--force-replace');

let swaggerSchemas;
const swaggerOAS = {};

/**
 * @name translateSchemaReference
 * @description This function translate a schema in OAS to its JSON format
 */
const translateSchemaReference = (schemaRef) => {
  if (typeof schemaRef !== 'string') {
  console.error('schemaRef must be a string');
  return {};
}
  const schemaName = schemaRef.replace("#/components/schemas/", "");
  const schemaJSON = swaggerSchemas[schemaName];


  if (!schemaJSON) {
    console.error(`Schema ${schemaName} not found.`);
    return {};
  }

  const { type, example, enum: schemaEnum, properties } = schemaJSON ?? {};
  if (type && !properties) {
    return {
      type: type === "integer" ? "number" : type,
      example,
      enum: schemaEnum,
    };
  } else if (properties) {
    return {
      type: "object",
      fields: Object.keys(properties).map((name) => {
        const { type, description, example, items, $ref } = properties[name];
        /**
         * AbiInput and AbiOutput schema reference itself which will create
         * recursive loop. Therefore, this is a special condition to stop them.
         */
        if (
          (schemaName === "AbiInput" || schemaName === "AbiOutput") &&
          name === "components"
        ) {
          return {
            name,
            type: "json",
          };
        } else if ($ref) {
          return {
            name,
            type,
            description,
            ...swaggerSchemas[$ref.replace("#/components/schemas/", "")],
          };
        } else if (type === "array") {
          return {
            name,
            type,
            description,
            example,
            ...(items && items?.$ref
              ? // If there are more arrays within the child, do recursion
                translateSchemaReference(items?.$ref)
              : { field: items }),
          };
        } else if (type === "object" && !items) {
          const nestedProperties = properties[name].properties;
          let fields = [];

          if (nestedProperties && typeof nestedProperties === "object") {
            fields = Object.keys(nestedProperties).map((key) => {
              return {
                name: key,
                ...nestedProperties[key],
              };
            });
          }

          return {
            name,
            type: "object",
            description,
            example,
            fields,
          };
        } else {
          return {
            name,
            type: type === "integer" ? "number" : type,
            description,
            example,
          };
        }
      }),
    };
  } else {
    return {};
  }
};

const extractSwaggerValueByMethod = (swaggerJSON, path, method) => {
  return {
    ...swaggerJSON.paths?.[path]?.[method],
  };
};

const formatParameters = (parameters) => {
  const queryParams = [];
  const pathParams = [];
  for (const param of parameters) {
    const { name, description, required, schema } = param ?? {};
    const { example, type, $ref, items } = schema ?? {};
    const paramsObject = {
      name,
      description,
      required,
      example,
      ...(type
        ? {
            type: type === "integer" ? "number" : type,
            ...(items &&
              (items?.$ref
                ? {
                    fields: translateSchemaReference(items?.$ref),
                  }
                : { field: items })),
          }
        : translateSchemaReference($ref)),
    };
    switch (param.in) {
      case "query":
        queryParams.push(paramsObject);
        break;
      case "path":
      default:
        pathParams.push(paramsObject);
        break;
    }
  }
  return { pathParams, queryParams };
};

/**
 * @name generateDefaultExample
 * @description Generate a default example value based on field type and name
 * @param field - The field object containing type, name, and description
 * @returns Default example value
 */
const generateDefaultExample = (field) => {
  const { type, name, description } = field;
  
  switch (type) {
    case "string":
      if (name?.toLowerCase().includes("url") || name?.toLowerCase().includes("webhook")) {
        return "string";
      }
      if (name?.toLowerCase().includes("email")) {
        return "string";
      }
      if (name?.toLowerCase().includes("address")) {
        return "string";
      }
      if (name?.toLowerCase().includes("id")) {
        return "string";
      }
      return "string";
    
    case "number":
    case "integer":
      return 0;
    
    case "boolean":
      return false;
    
    case "array":
      return [];
    
    case "object":
      return {};
    
    default:
      return "string";
  }
};

/**
 * @name addMissingExamples
 * @description Recursively add example values to fields that don't have them
 * @param fields - Array of field objects
 * @returns Fields with examples added
 */
const addMissingExamples = (fields) => {
  if (!Array.isArray(fields)) return fields;
  
  return fields.map(field => {
    const updatedField = { ...field };
    
    // Add example if missing
    if (updatedField.example === undefined) {
      updatedField.example = generateDefaultExample(field);
    }
    
    // Recursively process nested fields
    if (updatedField.fields && Array.isArray(updatedField.fields)) {
      updatedField.fields = addMissingExamples(updatedField.fields);
    }
    
    return updatedField;
  });
};

const formatBodyParameters = (requestBody) => {
  if (requestBody) {
    const { required, description, content } = requestBody;
    const {
      type,
      items,
      $ref: schemaRef,
    } = content?.["application/json"]?.schema;

    const bodyParam = {
      required,
      description,
      ...(schemaRef
        ? translateSchemaReference(schemaRef)
        : {
            type: type === "object" ? "json" : type,
            ...(items && { field: translateSchemaReference(items?.$ref) }),
          }),
    };

    // Add missing examples to all fields
    if (bodyParam.fields) {
      bodyParam.fields = addMissingExamples(bodyParam.fields);
    }

    return bodyParam;
  }

  return;
};

const formatResponses = (responses) => {
  const formattedResponses = Object.keys(responses).map((status) => {
    const { description, content } = responses[status];
    const schemaRef = content?.["application/json"]?.schema?.$ref;
    return {
      status,
      description,
      ...(schemaRef
        ? {
            body: translateSchemaReference(schemaRef),
          }
        : {}),
    };
  });
  return formattedResponses;
};

/**
 * @name formatPath
 * @description Format given swagger path to modified path, replacing / with :
 * @example
 * const formattedPath = formatPath(path);
 *
 * @param path path that is going to be modified
 * @returns returning formatted path for API reference
 */
const formatPath = (path) => {
  const pathArray = path.split("/");
  const formattedPathArray = pathArray
    .slice(1, pathArray.length)
    .map((p) => p.replace(/[{]/g, ":").replace(/[}]/g, ""));
  return `/${formattedPathArray.join("/")}`;
};

/**
 * @name formatSwaggerJSON
 * @description This function formats standard swagger OAS JSON to
 * custom format for API reference docs
 *
 * @example
 * const res = formatSwaggerJSON(swaggerJSON);
 *
 * @param swaggerJSON standard swagger OAS JSON
 * @returns formatted swagger OAS JSON for API Reference
 */
const formatSwaggerJSON = (swaggerJSON, apiHost) => {
  const swaggerContent = {};
  for (const path in swaggerJSON.paths) {
    for (const method in swaggerJSON.paths?.[path]) {
      // Extract all important fields from Swagger
      const swaggerValue = extractSwaggerValueByMethod(
        swaggerJSON,
        path,
        method
      );
      const {
        operationId,
        description,
        summary,
        parameters = [],
        requestBody,
        responses = [],
      } = swaggerValue;
      const codeSamples = swaggerValue?.["x-readme"]?.["code-samples"];

      // Formatting Parameters & Responses
      const { pathParams = [], queryParams = [] } =
        formatParameters(parameters);
      const formattedBodyParams = formatBodyParameters(requestBody);
      const formattedResponses = formatResponses(responses);
      const formattedPath = formatPath(path);

      swaggerContent[operationId] = {
        apiHost,
        summary,
        description,
        method: method.toUpperCase(),
        path: formattedPath,
        pathParams,
        queryParams,
        bodyParam: formattedBodyParams,
        responses: formattedResponses,
        codeSamples,
      };
    }
  }
  return swaggerContent;
};

/**
 * @name loadExistingConfigs
 * @description Load existing configs.json file if it exists
 * @returns Existing config object or empty object
 */
const loadExistingConfigs = () => {
  try {
    if (fs.existsSync(apiReferenceConfigFile)) {
      const fileContent = fs.readFileSync(apiReferenceConfigFile, 'utf8');
      return JSON.parse(fileContent);
    }
  } catch (error) {
    console.warn('Could not load existing configs.json, starting fresh:', error.message);
  }
  return {};
};

/**
 * @name generateConfigs
 * @description
 * Generate JSON config for API Reference & write it to JSON file.
 * 
 * NEW FEATURES:
 * - Incremental updates: Only updates specified API groups, preserves existing data
 * - Selective processing: Use --api=<api-key> to update specific APIs only
 * - Force replace: Use --force-replace to completely rebuild the file
 * 
 * USAGE EXAMPLES:
 * node docs/configs/generate.ts                    // Update all APIs incrementally
 * node docs/configs/generate.ts --api=evm-docs     // Update only EVM API
 * node docs/configs/generate.ts --api=streams      // Update only Streams API
 * node docs/configs/generate.ts --api=evm-docs --api=solana  // Update multiple specific APIs
 * node docs/configs/generate.ts --force-replace    // Complete rebuild (old behavior)
 * 
 * This works well for:
 * - NFT API
 * - Token API
 * - Balance API
 * - Transaction API
 * - Block API
 * - Events API
 * - Utils API
 * - Resolve API
 * - DeFi API
 * - IPFS API
 * - Streams API
 * - Auth API
 * - Solana API
 *
 * @example
 * const configs = await generateConfigs();
 *
 * @returns Generated JSON config
 */
const generateConfigs = async () => {
  try {
    if (isGenerateSchemaOn) {
      // Load existing configs to preserve existing data (unless force replace is specified)
      const existingConfigs = forceFullReplace ? {} : loadExistingConfigs();
      
      // Determine which APIs to process
      const apisToProcess = specificApiKeys.length > 0 
        ? specificApiKeys.filter(key => swaggerPaths[key])
        : Object.keys(swaggerPaths);
      
      if (specificApiKeys.length > 0) {
        console.log(`Processing specific APIs: ${apisToProcess.join(', ')}`);
      } else {
        console.log(`Processing all APIs: ${apisToProcess.join(', ')}`);
      }
      
      for (const key of apisToProcess) {
        console.log(`Fetching and processing API: ${key}`);
        try {
          const swaggerRes = await fetch(swaggerPaths[key].swaggerPath);
          const swaggerJSON = await swaggerRes?.json();
          
          if (!swaggerJSON || !swaggerJSON.paths) {
            console.error(`Invalid swagger JSON for API: ${key}`);
            continue;
          }

          // Store Swagger Schema for global usage
          swaggerSchemas = swaggerJSON.components.schemas;

          const apiHost = swaggerJSON.servers?.[0]?.url;
          const swaggerContent = formatSwaggerJSON(swaggerJSON, apiHost);
          
          // Compare with existing to show what changed
          const existingMethodCount = existingConfigs[key] ? Object.keys(existingConfigs[key]).length : 0;
          const newMethodCount = Object.keys(swaggerContent).length;
          
          // Update only the specific API group, preserving others
          existingConfigs[key] = swaggerContent;
          
          console.log(`Updated API: ${key}`);
          console.log(`  - Previous methods: ${existingMethodCount}`);
          console.log(`  - New methods: ${newMethodCount}`);
          console.log(`  - Change: ${newMethodCount > existingMethodCount ? '+' : ''}${newMethodCount - existingMethodCount}`);
          
        } catch (error) {
          console.error(`Failed to process API: ${key}`, error.message);
        }
      }

      // Write the combined result with pretty formatting
      await fs.writeFile(
        apiReferenceConfigFile,
        JSON.stringify(existingConfigs, null, 2),
        "utf8",
        () => {
          const mode = forceFullReplace ? 'full replacement' : 'incremental update';
          const apiCount = apisToProcess.length;
          console.log(`Successfully completed ${mode} for ${apiCount} API(s) in configs.json`);
        }
      );
    }

    if (isGenerateReferenceOn) {
      // Load the final configs to use for reference generation
      const finalConfigs = loadExistingConfigs();
      
      for (const key in finalConfigs) {
        // Only generate for APIs that are in our swagger paths
        if (swaggerPaths[key]) {
          console.log(`Generating MDX files for API: ${key}`);
          
          for (const index in Object.keys(finalConfigs[key])) {
            const functionName = Object.keys(finalConfigs[key])[index];
            const snakeCaseFunctionName = camelToSnakeCase(functionName);

            // Write MDX Files for API Reference pages
            await fs.writeFile(
              `${swaggerPaths[key].filePath}/${snakeCaseFunctionName}.mdx`,
              `---
sidebar_position: ${index}
sidebar_label: ${finalConfigs[key][functionName]?.summary}
slug: /${swaggerPaths[key].category}/reference/${functionName.toLowerCase()}
---

import ApiReference from "@site/src/components/ApiReference";
import config from "${swaggerPaths[key].importPath}";

# ${finalConfigs[key][functionName]?.summary}

<ApiReference {...config.${key}.${functionName}} />`,
              { flag: "w" },
              (err) => {
                if (err) {
                  return console.log(err);
                }
                console.log(`Generated MDX file for ${functionName}`);
              }
            );
          }
        }
      }
    }
  } catch (e) {
    console.error(e);
  }
};

generateConfigs();
