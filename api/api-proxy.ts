import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";
import qs from "qs";

// Replace PRIVATE_API_KEY with your private API key.
const { MORALIS_API_KEY, SUPER_SECRET_KEY } = process.env;

export default async function (req: VercelRequest, res: VercelResponse) {
  try {
    // Check if request is from a browser
    console.log({
      us: req.headers["user-agent"],
      meth: req.method,
      head: req.body.headers["x-moralis-source"],
    });
    if (
      req.headers["user-agent"]?.match(/Mozilla|Chrome|Safari|Edge|Opera/i) &&
      req.method === "POST" &&
      req.body.headers["x-moralis-source"] === "Moralis API docs"
    ) {
      const { hostUrl, path, method, headers, body, query } = req.body;

      // Preserve all headers but replace API key, token and referer with the private one and customized referer.
      const newHeaders = {
        ...headers,
        "X-API-Key": MORALIS_API_KEY,
        Authorization: `Bearer ${MORALIS_API_KEY}`,
        referer: SUPER_SECRET_KEY,
      };

      // Use node-fetch to send the request forward to the API
      const response = await fetch(
        [
          hostUrl,
          path,
          qs.stringify(query || {}, { addQueryPrefix: true }),
        ].join(""),
        {
          method,
          headers: newHeaders,
          body: JSON.stringify(body),
        }
      );

      // Pass the response back to the client
      if (response.ok) {
        const result = await response.json();
        res.status(response.status).send(result);
      } else {
        const error = await response.text();
        res.status(response.status).send(error);
      }
    } else {
      // If the request is not from a browser, deny access
      res.status(401).send({ message: "Invalid Key" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
