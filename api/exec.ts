import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";
import qs from "qs";
import { Path } from "path-parser";
const rateLimit = require("lambda-rate-limiter")({
  interval: 60 * 1000 // Our rate-limit interval, one minute
}).check;

const exec = async (request: VercelRequest, response: VercelResponse) => {
  try {
    // 10 stands for the maximum amount of requests allowed during the defined interval
    // rateLimit now returns a promise, let's await for it!
    await rateLimit(10, request.headers["x-real-ip"]);
  } catch (error) {
    return { statusCode: 429 }; // Still returning a basic 429, but we could do anything~
  }
  
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method Not Allowed" });
  }

  const { method, path, auth, bodyParam, queryParams, pathParams, apiHost } =
    request.body || {};

  try {
    const fetchRes = await fetch(
      [
        apiHost,
        new Path(path).build(pathParams),
        qs.stringify(queryParams || {}, { addQueryPrefix: true }),
      ].join(""),
      {
        method,
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "X-API-Key": `${
            auth?.length > 0 ? auth : process.env.MORALIS_API_KEY
          }`,
          "Authorization": `Bearer ${
            auth?.length > 0 ? auth : process.env.MORALIS_API_KEY
          }`,
          "x-moralis-source": `api reference`,
          referer: "moralis.io",
        },
        body: JSON.stringify(bodyParam),
      }
    );

    const fetchBody = await fetchRes.json();

    response.status(200).json({ status: fetchRes.status, body: fetchBody });
  } catch (error) {
    response.status(400).json({ error });
  }
};

export default exec;
