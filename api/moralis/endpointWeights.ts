import { VercelRequest, VercelResponse } from "@vercel/node";
import Moralis from "moralis";

const endpointWeights = async (_: VercelRequest, response: VercelResponse) => {
  try {
    await Moralis.start({
      apiKey: process.env.MORALIS_API_KEY,
      // ...and any other configuration
    });

    const res = await Moralis.EvmApi.utils.endpointWeights();
    return response.status(200).json(res.raw);
  } catch (error) {
    return response.status(405).json({ error });
  }
};

export default endpointWeights;
