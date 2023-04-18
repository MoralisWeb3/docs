import type { VercelRequest, VercelResponse } from "@vercel/node";
import aa from "search-insights";

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  try {
    aa("init", {
      appId: process.env.APPLICATION_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
    });

    aa("clickedObjectIDsAfterSearch", {
      userToken: "anonymous-user",
      eventName: "Clicked Search Result",
      index: "gold-iota",
      queryID: "queryID",
      objectIDs: ["objectID-1"],
      positions: [2],
    });

    res.status(200).send({ message: "Success" });
  } catch (e) {
    res.status(500).send({ error: e });
  }
};
