const { config } = require("dotenv");
const fetch = require("node-fetch");

// inject environment variables
config();

async function reindex() {
  try {
    const BASE64_BASIC_AUTH = `Basic ${Buffer.from(
      `${process.env.CRAWLER_USER_ID}:${process.env.CRAWLER_API_KEY}`
    ).toString("base64")}`;
    fetch(
      `https://crawler.algolia.com/api/1/crawlers/${process.env.CRAWLER_ID}/reindex`,
      {
        method: "POST",
        headers: {
          Authorization: BASE64_BASIC_AUTH,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (e) {
    console.error(e);
  }
}

reindex();
