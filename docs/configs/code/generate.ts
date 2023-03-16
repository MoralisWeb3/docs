const fs = require("fs");
const apiReference = require("../api-reference/configs.json");
const camelToSnakeCase = require("../../../utils/camelToSnakeCase.mts");

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

  const response = await Moralis.EvmApi.${group}.${fctn}({});

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
                queryParams.length > 0 || pathParams.length > 0
                  ? `\nparams = {}\n`
                  : ""
              }
result = evm_api.${group}.${camelToSnakeCase(fctn).replaceAll("-", "_")}(
  api_key=api_key,${bodyParam ? "\n  body=body," : ""}${
                queryParams.length > 0 || pathParams.length > 0
                  ? `\n  params=params,`
                  : ""
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
        Object.keys(apiReference[group]).map((fctn) => {
          const { pathParams, queryParams, bodyParam } =
            apiReference[group][fctn] ?? {};

          const solGroup = () => {
            switch (fctn) {
              case "balance":
              case "getSPL":
              case "getNFTs":
              case "getPortfolio":
                return "account";
              case "getNFTMetadata":
                return "nft";
              case "getTokenPrice":
              default:
                return "token";
            }
          };

          apiReference[group][fctn].codeSamples = [
            {
              language: "node",
              code: `import Moralis from 'moralis';

try {
  await Moralis.start({
    apiKey: "YOUR_API_KEY"
  });

  const response = Moralis.SolApi.${solGroup()}.${fctn}({});

  console.log(response.raw);
} catch (e) {
  console.error(e);
}`,
              name: "Moralis NodeJS SDK",
            },
            {
              language: "python",
              code: `from moralis import sol_api

api_key = "YOUR_API_KEY"
${bodyParam ? `\nbody = []\n` : ""}${
                queryParams.length > 0 || pathParams.length > 0
                  ? `\nparams = {}\n`
                  : ""
              }
result = sol_api.${solGroup()}.${camelToSnakeCase(fctn).replaceAll("-", "_")}(
  api_key=api_key,${bodyParam ? "\n  body=body," : ""}${
                queryParams.length > 0 || pathParams.length > 0
                  ? `\n  params=params,`
                  : ""
              }
)

print(result)`,
              name: "Moralis Python SDK",
            },
          ];
        });
        break;
      case "aptos-web3":
        // Web3 Data API – Aptos
        /**
         * Currently Aptos APIs have not been integrated with the SDKs
         */
        break;
      case "streams":
        // Streams API
        Object.keys(apiReference[group]).map((fctn) => {
          if (!fctn.includes("aptosStreams")) {
            const { pathParams, queryParams, bodyParam } =
              apiReference[group][fctn] ?? {};
            const nodeStreamsFctn = () => {
              switch (fctn) {
                case "ReplayHistory":
                  return "retry";
                case "GetSettings":
                  return "readSettings";
                case "GetStatsByStreamId":
                  return "getStatsById";
                case "GetStreams":
                  return "getAll";
                case "CreateStreams":
                  return "add";
                case "GetStream":
                  return "getById";
                case "UpdateStream":
                  return "update";
                case "UpdateStreamStatus":
                  return "updateStatus";
                case "DeleteStream":
                  return "delete";
                case "DeleteAddressFromStream":
                  return "deleteAddress";
                case "AddAddressToStream":
                  return "addAddress";
                case "GetAddresses":
                  return "getAddresses";
                default:
                  return fctn.charAt(0).toLowerCase() + fctn.slice(1);
              }
            };
            const pythonStreamsGroup = () => {
              switch (fctn) {
                case "AddAddressToStream":
                case "CreateStream":
                case "DeleteAddressFromStream":
                case "DeleteStream":
                case "GetAddresses":
                case "GetStream":
                case "GetStreams":
                case "UpdateStream":
                case "UpdateStreamStatus":
                  return "evm_streams";
                case "GetHistory":
                case "ReplayHistory":
                  return "history";
                case "GetSettings":
                case "SetSettings":
                  return "project";
                case "GetStats":
                case "GetStatsByStreamId":
                default:
                  return "stats";
              }
            };
            apiReference[group][fctn].codeSamples = [
              {
                language: "node",
                code: `import Moralis from 'moralis';

try {
  await Moralis.start({
    apiKey: "YOUR_API_KEY"
  });

  const response = Moralis.Streams.${nodeStreamsFctn()}({});

  console.log(response.raw);
} catch (e) {
  console.error(e);
}`,
                name: "Moralis NodeJS SDK",
              },
              {
                language: "python",
                code: `from moralis import streams

api_key = "YOUR_API_KEY"
${bodyParam ? `\nbody = []\n` : ""}${
                  queryParams.length > 0 || pathParams.length > 0
                    ? `\nparams = {}\n`
                    : ""
                }
result = streams.${pythonStreamsGroup()}.${camelToSnakeCase(fctn).replaceAll(
                  "-",
                  "_"
                )}(
  api_key=api_key,${bodyParam ? "\n  body=body," : ""}${
                  queryParams.length > 0 || pathParams.length > 0
                    ? `\n  params=params,`
                    : ""
                }
)

print(result)`,
                name: "Moralis Python SDK",
              },
            ];
          }
        });
        break;
      case "auth":
        // Auth API
        Object.keys(apiReference[group]).map((fctn) => {
          if (
            [
              "requestChallengeEvm",
              "verifyChallengeEvm",
              "requestChallengeSolana",
              "verifyChallengeSolana",
            ].includes(fctn)
          ) {
            const { pathParams, queryParams, bodyParam } =
              apiReference[group][fctn] ?? {};
            // Function name for Moralis NodeJS SDK syntax
            const nodeAuthFctn = () => {
              switch (fctn) {
                case "requestChallengeEvm":
                case "requestChallengeSolana":
                  return "requestMessage";
                case "verifyChallengeEvm":
                case "verifyChallengeSolana":
                default:
                  return "verify";
              }
            };
            apiReference[group][fctn].codeSamples = [
              {
                language: "node",
                code: `import Moralis from 'moralis';
try {
  await Moralis.start({
    apiKey: "YOUR_API_KEY"
  });
  
  const response = Moralis.Auth.${nodeAuthFctn()}({});
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
                  queryParams.length > 0 || pathParams.length > 0
                    ? `\nparams = {}\n`
                    : ""
                }
result = auth.challenge.${camelToSnakeCase(fctn).replaceAll("-", "_")}(
  api_key=api_key,${bodyParam ? "\n  body=body," : ""}${
                  queryParams.length > 0 || pathParams.length > 0
                    ? `\n  params=params,`
                    : ""
                }
)
print(result)`,
                name: "Moralis Python SDK",
              },
            ];
          }
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
