const fetch = require("node-fetch");
const fs = require("fs");

const swaggerPaths = {
  nft: "https://swagger.moralis.io/nft/v2.1/swagger.json",
  token: "https://swagger.moralis.io/token/v2.1/swagger.json",
  balance: "https://swagger.moralis.io/balance/v2.1/swagger.json",
  transaction: "https://swagger.moralis.io/transaction/v2.1/swagger.json",
  events: "https://swagger.moralis.io/events/v2.1/swagger.json",
  block: "https://swagger.moralis.io/block/v2.1/swagger.json",
  utils: "https://swagger.moralis.io/utils/v2.1/swagger.json",
  resolve: "https://swagger.moralis.io/resolve/v2.1/swagger.json",
  defi: "https://swagger.moralis.io/defi/v2.1/swagger.json",
  ipfs: "https://swagger.moralis.io/ipfs/v2.1/swagger.json",
  auth: "https://swagger.moralis.io/auth/v2/swagger.json",
  streams: "https://swagger.moralis.io/streams/v2/swagger.json",
  solana: "https://swagger.moralis.io/solana/v2/swagger.json",
};

let swaggerSchemas;
let swaggerOAS = {};

/**
 * @name translateSchemaReference
 * @description This function translate a schema in OAS to its JSON format
 */
const translateSchemaReference = (schemaRef) => {
  const schemaName = schemaRef.replace("#/components/schemas/", "");
  const schemaJSON = swaggerSchemas[schemaName];
  console.log(schemaJSON);

  const { type, example, enum: schemaEnum } = schemaJSON;
  if (type) {
    return { type, example, enum: schemaEnum };
  } else {
    return { field: schemaRef };
  }
};

const extractSwaggerValueByMethod = (swaggerJSON, path) => {
  const method = Object.keys(swaggerJSON.paths?.[path])[0];
  return {
    ...swaggerJSON.paths?.[path]?.[method],
    method: method.toUpperCase(),
  };
};

const formatParameters = (parameters) => {
  const queryParams = [];
  const pathParams = [];
  for (let param of parameters) {
    const { name, description, required, schema } = param ?? {};
    const { example, type, $ref } = schema ?? {};
    switch (param.in) {
      case "query":
        queryParams.push({
          name,
          description,
          required,
          example,
          ...(type ? { type } : translateSchemaReference($ref)),
        });
        break;
      case "path":
      default:
        pathParams.push({
          name,
          description,
          required,
          example,
          ...(type ? { type } : translateSchemaReference($ref)),
        });
        break;
    }
  }
  return { pathParams, queryParams };
};

const formatResponses = (responses) => {};

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
const formatSwaggerJSON = (swaggerJSON) => {
  const swaggerContent = {};
  for (let path in swaggerJSON.paths) {
    const { operationId, description, method, parameters, responses } =
      extractSwaggerValueByMethod(swaggerJSON, path);
    const { pathParams, queryParams } = formatParameters(parameters);
    swaggerContent[operationId] = {
      description,
      method,
      path,
      pathParams,
      queryParams,
      responses,
    };
    console.log(swaggerJSON.paths?.[path]?.get?.responses?.["200"].content);
  }
  return swaggerContent;
};

/**
 * @name generateConfigs
 * @description Generate JSON config for API Reference & write it to JSON file
 *
 * @example
 * const configs = await generateConfigs();
 *
 * @returns Generated JSON config
 */
const generateConfigs = async () => {
  try {
    for (let key in swaggerPaths) {
      const swaggerRes = await fetch(swaggerPaths[key]);
      const swaggerJSON = await swaggerRes?.json();
      let swaggerContent;

      // Store Swagger Schema for global usage
      swaggerSchemas = swaggerJSON.components.schemas;

      // If statement is temporary, for testing only
      if (key === "balance") {
        swaggerContent = formatSwaggerJSON(swaggerJSON);
      }
      swaggerOAS[key] = swaggerContent;
    }

    // Write API reference Config to api-reference-configs.json
    await fs.writeFile(
      "./docs/configs/api-reference-configs.json",
      JSON.stringify(swaggerOAS),
      "utf8",
      () => {}
    );

    console.log(swaggerOAS["balance"]);
    return swaggerOAS;
  } catch (e) {
    console.error(e);
  }
};

generateConfigs();
