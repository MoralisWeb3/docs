import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";
import qs from "qs";
import { Path } from "path-parser";

const exec = async (request: VercelRequest, response: VercelResponse) => {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method Not Allowed" });
  }

  const { method, path, auth, bodyParam, queryParams, pathParams } = request.body || {};

  try {
    const fetchRes = await fetch(
      [
        process.env.API_HOST,
        new Path(path).build(pathParams),
        qs.stringify(queryParams || {}, { addQueryPrefix: true })
      ].join(""),
      {
        method,
        headers: { 'X-API-Key': `${auth}` },
        body: JSON.stringify(bodyParam)
      }
    );
    
    const fetchBody = await fetchRes.json();

    response.status(200).json({ status: fetchRes.status, body: fetchBody });
  } catch {
    response.status(400).json({ error: "Request Failed" });
  }
};

export default exec;
