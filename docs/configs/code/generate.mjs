import fs from "fs";
import apiReference from "../api-reference/configs.json" with { type: "json" };

const generateCode = async () => {
  Object.keys(apiReference).map((group) => {
    // Remove codeSamples from all API groups and endpoints
    Object.keys(apiReference[group]).map((fctn) => {
      // Skip Aptos streams endpoints if they exist
      if (!fctn.includes("aptosStreams")) {
        delete apiReference[group][fctn].codeSamples;
      }
    });
  });

  // Write code samples to config.json
  try {
    await fs.promises.writeFile(
      "./docs/configs/api-reference/configs.json",
      JSON.stringify(apiReference),
      { flag: "w" }
    );
    console.log("The file was saved!");
  } catch (err) {
    console.log(err);
  }
};

generateCode();
