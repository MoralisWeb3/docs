import type { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  try {
    const YourApplicationId = process.env.APPLICATION_ID;
    const YourAPIKey = process.env.ALGOLIA_API_KEY;
    const res = await fetch(
      `https://insights.algolia.io/1/events?x-algolia-application-id=${YourApplicationId}&x-algolia-api-key=${YourAPIKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          events: [
            {
              eventType: "click",
              eventName: "Product Clicked",
              index: "gold-iota",
              userToken: "user-123456",
              timestamp: 1681812223581,
              objectIDs: ["9780545139700", "9780439784542"],
              queryID: "43b15df305339e827f0ac0bdc5ebcaa7",
              positions: [7, 6],
            },
            {
              eventType: "view",
              eventName: "Viewed Product Detail Page",
              index: "gold-iota",
              userToken: "user-123456",
              timestamp: 1681812223581,
              objectIDs: ["9780545139700", "9780439784542"],
            },
            {
              eventType: "conversion",
              eventName: "Purchased Product",
              index: "gold-iota",
              userToken: "user-123456",
              timestamp: 1681812223581,
              objectIDs: ["9780545139700", "9780439784542"],
              queryID: "43b15df305339e827f0ac0bdc5ebcaa7",
            },
          ],
        }),
      }
    );

    res.status(200).send({ message: "Success" });
  } catch (e) {
    res.status(500).send({ error: e });
  }
};
