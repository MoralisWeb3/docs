const fetch = require("node-fetch");
const fs = require("fs");
const swaggerPaths = require("./swagger/paths.json");
const {
  isGenerateSchemaOn,
  isGenerateReferenceOn,
} = require("./generate.config.json");
const camelToSnakeCase = require("../../utils/camelToSnakeCase.mts");

const apiReferenceConfigFile = "./docs/configs/api-reference/configs-test.json";

let swaggerSchemas;
let swaggerOAS = {};

/**
 * @name translateSchemaReference
 * @description This function translate a schema in OAS to its JSON format
 */
const translateSchemaReference = (schemaRef) => {
  const schemaName = schemaRef.replace("#/components/schemas/", "");
  const schemaJSON = swaggerSchemas[schemaName];

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
          return {
            name,
            type: "json",
            description,
            example,
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
  for (let param of parameters) {
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

const formatBodyParameters = (requestBody) => {
  if (requestBody) {
    const { required, description, content } = requestBody;
    const {
      type,
      items,
      $ref: schemaRef,
    } = content?.["application/json"]?.schema;

    return {
      required,
      description,
      ...(schemaRef
        ? translateSchemaReference(schemaRef)
        : {
            type: type === "object" ? "json" : type,
            ...(items && { field: translateSchemaReference(items?.$ref) }),
          }),
    };
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
  for (let path in swaggerJSON.paths) {
    for (let method in swaggerJSON.paths?.[path]) {
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
 * @name generateConfigs
 * @description
 * Generate JSON config for API Reference & write it to JSON file.
 * This already works well for:
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
      for (let key in swaggerPaths) {
        if (["token"].includes(key)) {
          const swaggerRes = await fetch(swaggerPaths[key].swaggerPath);
          const swaggerJSON = await swaggerRes?.json();
          let swaggerContent;

          // Store Swagger Schema for global usage
          swaggerSchemas = swaggerJSON.components.schemas;

          const apiHost = swaggerJSON.servers?.[0]?.url;

          // If statement is temporary, for testing only
          swaggerContent = formatSwaggerJSON(swaggerJSON, apiHost);
          swaggerOAS[key] = swaggerContent;
        }
      }

      // Write API reference Config
      await fs.writeFile(
        apiReferenceConfigFile,
        JSON.stringify(swaggerOAS),
        "utf8",
        () => {}
      );
    }

    if (isGenerateReferenceOn) {
      for (let key in swaggerOAS) {
        if (["token"].includes(key)) {
          for (let index in Object.keys(swaggerOAS[key])) {
            const functionName = Object.keys(swaggerOAS[key])[index];
            const snakeCaseFunctionName = camelToSnakeCase(functionName);

            // Write MDX Files for API Reference pages
            await fs.writeFile(
              `${swaggerPaths[key].filePath}/${snakeCaseFunctionName}.mdx`,
              `---
sidebar_position: ${index}
sidebar_label: ${swaggerOAS[key][functionName]?.summary}
slug: /${swaggerPaths[key].category}/reference/${functionName.toLowerCase()}
---

import ApiReference from "@site/src/components/ApiReference";
import config from "${swaggerPaths[key].importPath}";

# ${swaggerOAS[key][functionName]?.summary}

<ApiReference {...config.${key}.${functionName}} />`,
              { flag: "w" },
              (err) => {
                if (err) {
                  return console.log(err);
                }
                console.log("The file was saved!");
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
