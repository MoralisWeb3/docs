const { config } = require("dotenv");

// inject environment variables
config();

async function reindex() {
  try {
    console.log(process.env);
    const BASE64_BASIC_AUTH = `Basic ${Buffer.from(
      `${process.env.CRAWLER_USER_ID}:${process.env.CRAWLER_API_KEY}`
    ).toString("base64")}`;
    const res = await fetch(
      `https://crawler.algolia.com/api/1/crawlers/${process.env.CRAWLER_ID}/reindex`,
      {
        method: "POST",
        headers: {
          Authorization: BASE64_BASIC_AUTH,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res.json());
  } catch (e) {
    const { errors } = e ?? {};
    console.error(errors);
  }
}

reindex();
