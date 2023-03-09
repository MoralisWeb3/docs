const fs = require("fs");
const apiReference = require("./api-reference/configs.json");
const camelToSnakeCase = require("../../utils/camelToSnakeCase.mts");

const generateCode = async () => {
  Object.keys(apiReference).map((group) => {
    switch (group) {
      case "nft":
      case "token":
      case "balance":
      case "transaction":
      case "events":
      case "block":
      case "utils":
      case "resolve":
      case "defi":
      case "ipfs":
        // Web3 Data API – EVM
        Object.keys(apiReference[group]).map((fctn) => {
          const { pathParams, queryParams, bodyParam } =
            apiReference[group][fctn] ?? {};
          apiReference[group][fctn].codeSamples = [
            {
              language: "node",
              code: `import Moralis from 'moralis';

try {
  await Moralis.start({
    apiKey: "YOUR_API_KEY"
  });

  const response = Moralis.EvmApi.${group}.${fctn}({});

  console.log(response.raw);
} catch (e) {
  console.error(e);
}`,
              name: "Moralis NodeJS SDK",
            },
            {
              language: "python",
              code: `from moralis import evm_api

api_key = "YOUR_API_KEY"
${bodyParam ? `\nbody = []\n` : ""}${
                queryParams || pathParams ? `\nparams = {}\n` : ""
              }
result = evm_api.${group}.${camelToSnakeCase(fctn).replaceAll("-", "_")}(
  api_key=api_key,${bodyParam ? "\n  body=body," : ""}${
                queryParams || pathParams ? `\n  params=params,` : ""
              }
)

print(result)`,
              name: "Moralis Python SDK",
            },
          ];
        });
        break;
      case "solana":
        // Web3 Data API – Solana
        break;
      case "aptos-web3":
        // Web3 Data API – Aptos
        break;
      case "streams":
        // Streams API
        break;
      case "auth":
        // Auth API
        Object.keys(apiReference[group]).map((fctn) => {
          const { pathParams, queryParams, bodyParam } =
            apiReference[group][fctn] ?? {};
          apiReference[group][fctn].codeSamples = [
            {
              language: "node",
              code: `import Moralis from 'moralis';

try {
  await Moralis.start({
    apiKey: "YOUR_API_KEY"
  });

  const response = Moralis.Auth.${fctn}({});

  console.log(response.raw);
} catch (e) {
  console.error(e);
}`,
              name: "Moralis NodeJS SDK",
            },
            {
              language: "python",
              code: `from moralis import auth

api_key = "YOUR_API_KEY"
${bodyParam ? `\nbody = []\n` : ""}${
                queryParams || pathParams ? `\nparams = {}\n` : ""
              }
result = auth.challenge.${camelToSnakeCase(fctn).replaceAll("-", "_")}(
  api_key=api_key,${bodyParam ? "\n  body=body," : ""}${
                queryParams || pathParams ? `\n  params=params,` : ""
              }
)

print(result)`,
              name: "Moralis Python SDK",
            },
          ];
        });
        break;
    }
  });

  // Write code samples to config.json
  await fs.writeFile(
    "./docs/configs/api-reference/configs.json",
    JSON.stringify(apiReference),
    { flag: "w" },
    (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    }
  );
};

generateCode();
