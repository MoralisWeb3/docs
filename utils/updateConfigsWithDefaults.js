const fs = require("fs");
const path = require("path");

// Read defaults
const defaultsPath = path.join(__dirname, "../configs/defaults.json");
const defaults = JSON.parse(fs.readFileSync(defaultsPath, "utf8"));

// Read configs
const configsPath = path.join(__dirname, "../configs/api-reference/configs.json");
const configs = JSON.parse(fs.readFileSync(configsPath, "utf8"));

// Mapping of old hardcoded values to new default keys
const valueReplacements = {
    // EVM addresses
    "0xdadB0d80178819F2319190D340ce9A924f783711": defaults.evmWallet,
    "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE": defaults.evmToken,
    "0xe11Ae46AA5200984d59FF54F3b2c7Ff6AC6EF749": defaults.evmPair,
    "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d": defaults.evmNft,
    // Chain values
    "0x1": defaults.evmChain,
    // Solana values
    A7FMMgue4aZmPLLoutVtbC7gJcyqkHybUieiaDg9aaVE: defaults.solWallet,
    "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN": defaults.solToken,
    "9d9mb8kooFfaD3SctgZtkxQypkshx6ezhbKio89ixyy2": defaults.solPair,
    f25cd97f956c603b9a1fd405ae8b6a438c07dbe39f53ab48162ddd08429da6d9: defaults.solNft,
    mainnet: defaults.solChain,
    pumpfun: defaults.solExchange,
};

// Function to recursively replace values in an object
function replaceValues(obj) {
    if (typeof obj === "string") {
        return valueReplacements[obj] || obj;
    } else if (Array.isArray(obj)) {
        return obj.map(replaceValues);
    } else if (obj && typeof obj === "object") {
        const newObj = {};
        for (const [key, value] of Object.entries(obj)) {
            newObj[key] = replaceValues(value);
        }
        return newObj;
    }
    return obj;
}

// Update configs
const updatedConfigs = replaceValues(configs);

// Write back to file
fs.writeFileSync(configsPath, JSON.stringify(updatedConfigs, null, 4));

console.log("✅ Updated configs.json with default values from defaults.json");
console.log("Updated the following values:");
Object.entries(valueReplacements).forEach(([old, newVal]) => {
    console.log(`  ${old} → ${newVal}`);
});
