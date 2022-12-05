const fetch = require("node-fetch");

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

let swaggerOAS = {};

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
  for (let swaggerURI in swaggerJSON.paths) {
    const { operationId } =
      swaggerJSON.paths?.[swaggerURI]?.get ??
      swaggerJSON.paths?.[swaggerURI]?.post ??
      swaggerJSON.paths?.[swaggerURI]?.put ??
      swaggerJSON.paths?.[swaggerURI]?.delete;
    swaggerContent[operationId] = {
      description: swaggerJSON.paths?.[swaggerURI]?.get?.description,
      method: "GET",
      path: swaggerURI,
      queryParams: swaggerJSON.paths?.[swaggerURI]?.get?.parameters,
      responses: swaggerJSON.paths?.[swaggerURI]?.get?.responses,
    };
    console.log(swaggerJSON.paths?.[swaggerURI]?.get?.responses);
  }
  return swaggerContent;
};

/**
 * @name generateConfigs
 * @description Generate JSON config for API Reference
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
      if (key === "balance") {
        swaggerContent = formatSwaggerJSON(swaggerJSON);
      }
      swaggerOAS[key] = swaggerContent;
    }

    console.log(swaggerOAS["balance"]);
    return swaggerOAS;
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  configs: generateConfigs,
};
