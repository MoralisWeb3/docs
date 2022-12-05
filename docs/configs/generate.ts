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

const generateConfigs = async () => {
  try {
    for (let key in swaggerPaths) {
      const swaggerRes = await fetch(swaggerPaths[key]);
      const swaggerJSON = await swaggerRes?.json();
      swaggerOAS[key] = swaggerJSON.paths;
    }

    console.log(swaggerOAS);
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  configs: generateConfigs(),
};
