import { createClient } from "@supabase/supabase-js";
import { oneLine, stripIndent } from "common-tags";
import { CreateCompletionRequest } from "openai";
import cosSimilarity from "cos-similarity";
import { OpenAIStream } from "../utils/openAIStream";
import model from "@dqbd/tiktoken/encoders/cl100k_base.json";
import { Tiktoken } from "@dqbd/tiktoken/lite/init";

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

export const config = {
  runtime: "edge",
};

const handler = async (req: Request): Promise<Response> => {
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

    const requestData = (await req.json()) as {
      query?: string;
    };

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

    console.log("Test 0");

    // await init((imports) => WebAssembly.instantiate(wasm, imports));

    const encoding = new Tiktoken(
      model.bpe_ranks,
      model.special_tokens,
      model.pat_str
    );

    let tokenCount = 0;
    let contextText = "";

    for (let i = 0; i < (data ?? [])?.length; i++) {
      const pageSection = data?.[i] ?? {};
      const content = pageSection.content;
      const encoded = encoding.encode(content);
      encoding.free();
      tokenCount += encoded.length;

      if (tokenCount >= 1500) {
        break;
      }

      contextText += `${content.trim()}\n---\n`;
    }

    console.log("Test 1");

    const prompt = stripIndent`
      ${oneLine`
        You are a very enthusiastic Moralis representative who loves
        to help people! Given the following sections from the Supabase
        documentation, answer the question using only that information,
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

    console.log("Test 2");

    const completionOptions: CreateCompletionRequest = {
      model: "text-davinci-003",
      prompt,
      max_tokens: 512,
      temperature: 0,
      stream: true,
    };

    // Proxy the streamed SSE response from OpenAI
    const stream = await OpenAIStream(completionOptions);
    return new Response(stream);
  } catch (err: unknown) {
    if (err instanceof UserError) {
      console.error(err);
    } else if (err instanceof ApplicationError) {
      // Print out application errors with their additional data
      console.error(`${err.message}: ${JSON.stringify(err.data)}`);
    } else {
      // Print out unexpected errors as is to help with debugging
      console.error(err);
    }

    // TODO: include more response info in debug environments
    return new Response(
      JSON.stringify({
        error: "There was an error processing your request",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

export default handler;
