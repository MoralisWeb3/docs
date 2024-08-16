import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";
import qs from "qs";
const currentDate = new Date();
const utcDay = currentDate.getUTCDate();
const utcMonth = currentDate.getUTCMonth() + 1;
// const utcHour = currentDate.getUTCHours();
const sumUtcDateMonth = utcDay + utcMonth;

const key = `test${sumUtcDateMonth}`;

const { MORALIS_API_KEY, SUPER_SECRET_KEY } = process.env;

const restrictedIPs = ["171.248.175.163"];

export default async function (req: VercelRequest, res: VercelResponse) {
  try {
    const { hostUrl, path, method, headers, body, query } = req.body;

    // Check if the client IP is in the restricted list
    const forwardedIps =
      (req.headers["x-forwarded-for"] as string) ||
      req.connection.remoteAddress;
    const clientIp = forwardedIps.split(",")[0].trim(); // Takes the first IP and trims any extra whitespace
    // console.log({ utcDay, utcMonth, key });
    // if (
    //   headers["X-API-Key"] !== key ||
    //   // &&
    //   // headers["X-API-Key"] !== key0 &&
    //   // headers["X-API-Key"] !== key2
    //   headers["referer"] !== "moralis io"
    // ) {
    //   console.log(`Request from Spammer: ${clientIp}`);
    //   console.log({ hostUrl, path, method, headers, body, query });
    //   return res.status(200).json({});
    // }
    // console.log({ hostUrl, path, method, headers, body, query });
    if (restrictedIPs.includes(clientIp)) {
      // Return the dummy response immediately if the IP matches
      // console.log(`Request from banned IP: ${clientIp}`);
      // console.log(
      //   [
      //     hostUrl,
      //     path,
      //     qs.stringify(query || {}, { addQueryPrefix: true }),
      //   ].join("")
      // );
      return res.status(200).json([]);
    }

    const authHeaderKey = hostUrl.includes("wdim.moralis.io")
      ? "Authorization"
      : "X-API-Key";
    const authHeaderValue = hostUrl.includes("wdim.moralis.io")
      ? `Bearer ${MORALIS_API_KEY}`
      : MORALIS_API_KEY;

    const newHeaders = {
      ...headers,
      [authHeaderKey]: authHeaderValue,
      referer: SUPER_SECRET_KEY,
    };

    // console.log({ newHeaders });

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
      console.log({ "API Error": error });

      res.status(response.status).send(error);
    }
  } catch (error) {
    console.log({ "Function Error": error });
    res.status(500).send(error);
  }
}
