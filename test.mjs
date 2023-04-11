import fetch from "node-fetch";
import { config } from "dotenv";

config();

const openAiKey = process.env.OPENAI_KEY;

const runApp = async () => {
  const sanitizedQuery = "How to use Moralis with React?";
  const embeddingResponse = await fetch(
    "https://api.openai.com/v1/embeddings",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openAiKey}`,
      },
      method: "POST",
      body: JSON.stringify({
        model: "text-embedding-ada-002",
        input: sanitizedQuery.replaceAll("\n", " "),
      }),
    }
  );
  const [{ embedding }] = (await embeddingResponse.json()).data;
  console.log(embedding);
};

runApp();
