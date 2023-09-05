import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";
import qs from "qs";

const { MORALIS_API_KEY, SUPER_SECRET_KEY } = process.env;

export default async function (req: VercelRequest, res: VercelResponse) {
  try {
    const { hostUrl, path, method, headers, body, query } = req.body;

    const newHeaders = {
      ...headers,
      "X-API-Key": MORALIS_API_KEY,
      Authorization: `Bearer ${MORALIS_API_KEY}`,
      referer: SUPER_SECRET_KEY,
    };

    const response = await fetch(
      [hostUrl, path, qs.stringify(query || {}, { addQueryPrefix: true })].join(
        ""
      ),
      {
        method,
        headers: newHeaders,
        body: JSON.stringify(body),
      }
    );

    if (response.ok) {
      const result = await response.json();

      res.status(response.status).send(result);
    } else {
      const error = await response.text();
      console.log({"API Error": error})

      res.status(response.status).send(error);
    }
  } catch (error) {
    console.log({"Function Error": error})
    res.status(500).send(error);
  }
}
