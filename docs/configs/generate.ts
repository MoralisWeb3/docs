const fetch = require("node-fetch");

const generateConfigs = async () => {
  try {
    const res = await fetch(
      "https://swagger.moralis.io/balance/v2.1/swagger.json"
    );
    const data = await res?.json();

    console.log(data);
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  configs: generateConfigs(),
};
