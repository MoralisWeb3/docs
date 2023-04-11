import fetch from "node-fetch";
import { config } from "dotenv";

config();

const openAiKey = process.env.OPENAI_KEY;

const runApp = async () => {
  const sanitizedQuery = "How to use Moralis with React?";
  const moderationResponse = await fetch(
    "https://api.openai.com/v1/moderations",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openAiKey}`,
      },
      method: "POST",
      body: JSON.stringify({ input: sanitizedQuery }),
    }
  );
  console.log((await moderationResponse.json()).results);
};

runApp();
