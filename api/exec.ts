import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";
import qs from "qs";
import { Path } from "path-parser";
import { Analytics } from "@segment/analytics-node";

const analytics = new Analytics({
  writeKey: process.env.SEGMENT_API_KEY ?? "",
});

const exec = async (request: VercelRequest, response: VercelResponse) => {
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
          Authorization: `Bearer ${
            auth?.length > 0 ? auth : process.env.MORALIS_API_KEY
          }`,
          referer: "moralis.io",
        },
        body: JSON.stringify(bodyParam),
      }
    );

    const fetchBody = await fetchRes.json();

    analytics.track({
      anonymousId: "48d213bb-95c3-4f8d-af97-86b2b404dcfe",
      event: "API Calls",
      properties: {
        method,
        path,
      },
    });

    response.status(200).json({ status: fetchRes.status, body: fetchBody });
  } catch (error) {
    response.status(400).json({ error });
  }
};

export default exec;
