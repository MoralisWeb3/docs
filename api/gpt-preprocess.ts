import fetch from "node-fetch";
import { createClient } from "@supabase/supabase-js";
import { oneLine, stripIndent } from "common-tags";
import cosSimilarity from "cos-similarity";
import GPT3Tokenizer from "../utils/gpt3Tokenizer";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const openAiKey = process.env.OPENAI_KEY;
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export class ApplicationError extends Error {
  constructor(message: string, public data: Record<string, any> = {}) {
    super(message);
  }
}

export class UserError extends ApplicationError {}

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  try {
    // Handle CORS
    if (req.method === "OPTIONS") {
      return new Response("ok", { headers: corsHeaders });
    }

    if (!openAiKey) {
      throw new ApplicationError("Missing environment variable OPENAI_KEY");
    }

    if (!supabaseUrl) {
      throw new ApplicationError("Missing environment variable SUPABASE_URL");
    }

    if (!supabaseServiceKey) {
      throw new ApplicationError(
        "Missing environment variable SUPABASE_SERVICE_ROLE_KEY"
      );
    }

    const requestData = req?.body;

    if (!requestData) {
      throw new UserError("Missing request data");
    }

    const { query } = requestData;

    if (!query) {
      throw new UserError("Missing query in request data");
    }

    const sanitizedQuery = (query as any)?.trim();

    const supabaseClient = createClient(supabaseUrl, supabaseServiceKey);

    // Moderate the content to comply with OpenAI T&C
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

    const [results] = (await moderationResponse.json()).results;

    if (results.flagged) {
      throw new UserError("Flagged content", {
        flagged: true,
        categories: results.categories,
      });
    }

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

    const { data = [], error: matchError } = await supabaseClient
      .from("page_section")
      .select();
    (data ?? []).sort((a, b) => {
      const aDotProduct = cosSimilarity(a?.embedding, embedding);
      const bDotProduct = cosSimilarity(b?.embedding, embedding);
      return bDotProduct - aDotProduct;
    });

    if (matchError) {
      throw new ApplicationError("Failed to match page sections", matchError);
    }

    const tokenizer = new GPT3Tokenizer({ type: "gpt3" });
    let tokenCount = 0;
    let contextText = "";

    for (let i = 0; i < (data ?? [])?.length; i++) {
      const pageSection = data?.[i] ?? {};
      const content = pageSection.content;
      const encoded = tokenizer.encode(content);
      tokenCount += encoded.text.length;

      if (tokenCount >= 1500) {
        break;
      }

      contextText += `${content.trim()}\n---\n`;
    }

    const prompt = stripIndent`
      ${oneLine`
        You are a very enthusiastic Moralis representative who loves
        to help people! Given the following sections from the Moralis
        documentation (https://docs.moralis.io), answer the question using only that information,
        outputted in markdown format. If you are unsure and the answer
        is not explicitly written in the documentation, say
        "Sorry, I don't know how to help with that."
      `}

      Context sections:
      ${contextText}

      Question: """
      ${sanitizedQuery}
      """

      Answer as markdown (including related code snippets if available):
    `;
    
    // Add prompt, sanitizedQuery, unsanitizedQuery to supabase DB
    console.log(prompt);

    res.status(200).json({ prompt });
  } catch (err: unknown) {
    console.error(err, res);
    res.status(500).json({ error: err });
  }
};
