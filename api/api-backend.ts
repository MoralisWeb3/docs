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
    if (
      headers["X-API-Key"] !== key
      // &&
      // headers["X-API-Key"] !== key0 &&
      // headers["X-API-Key"] !== key2
    ) {
      console.log(`Request from Spammer: ${clientIp}`);
      console.log({ hostUrl, path, method, headers, body, query });
      return res.status(200).json({
        status: "SYNCED",
        page: 1,
        page_size: 100,
        cursor: null,
        result: [],
      });
    }
    console.log({ hostUrl, path, method, headers, body, query });
    if (restrictedIPs.includes(clientIp)) {
      // Return the dummy response immediately if the IP matches
      console.log(`Request from banned IP: ${clientIp}`);
      console.log(
        [
          hostUrl,
          path,
          qs.stringify(query || {}, { addQueryPrefix: true }),
        ].join("")
      );
      return res.status(200).json(
        []
        //   {
        //   status: "SYNCED",
        //   page: 1,
        //   page_size: 100,
        //   cursor: null,
        //   result: [
        //     {
        //       amount: "1",
        //       token_id: "5021",
        //       token_address: "0xfff54e6fe44fd47c8814c4b1d62c924c54364ad3",
        //       contract_type: "ERC721",
        //       owner_of: "0xff3879b8a363aed92a6eaba8f61f1a96a9ec3c1e",
        //       last_metadata_sync: "2024-05-05T07:14:07.611Z",
        //       last_token_uri_sync: "2024-05-05T07:13:57.595Z",
        //       metadata: null,
        //       block_number: "14647390",
        //       block_number_minted: "14647390",
        //       name: "Youtopia",
        //       symbol: "Youtopia",
        //       token_hash: "d4719eaf84eabcf443065b0a463f5886",
        //       token_uri: "http://api.youtopia-official.xyz/ipfs/5021",
        //       minter_address: "0x13f11fd2c7c7be94674651386370d02b7aac9653",
        //       verified_collection: false,
        //       possible_spam: true,
        //       collection_logo:
        //         "https://i.seadn.io/gae/e3uNxyaqT0FfnhcF9SuMqCZd3pdF36wgcnpRJ0VDjLOP71g_LwrFRgLweNNCMvsMqR5ZZ4dh5Wble12PBzvncmpLbtmdVdjr5zMy8w?w=500&auto=format",
        //       collection_banner_image:
        //         "https://i.seadn.io/gae/n9j18OhplkvqP5SOtuYDwpUVkJSwF6WkIV6vZMWjcm0D5qCpbd12cAaVlfZS8-3gjxjYsnjL_tIlVIsjXz28KejPB3D19Jc_MZ9Z?w=500&auto=format",
        //     },
        //   ],
        // }
      );
    }

    const newHeaders = {
      ...headers,
      "X-API-Key": MORALIS_API_KEY,
      Authorization: `Bearer ${MORALIS_API_KEY}`,
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
