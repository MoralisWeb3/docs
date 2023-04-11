import { createClient } from "@supabase/supabase-js";
import { oneLine, stripIndent } from "common-tags";
import GPT3Tokenizer from "gpt3-tokenizer";
import { Configuration, OpenAIApi, CreateCompletionRequest } from "openai";
import cosSimilarity from "cos-similarity";
import { OpenAIStream } from "../utils/openAIStream";

const openAiKey = process.env.OPENAI_KEY;
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const GPT3NodeTokenizer = (GPT3Tokenizer as any).default;

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

    console.log("Test1", sanitizedQuery);

    const supabaseClient = createClient(supabaseUrl, supabaseServiceKey);

    const configuration = new Configuration({ apiKey: openAiKey });
    const openai = new OpenAIApi(configuration);

    // Moderate the content to comply with OpenAI T&C
    const moderationResponse = await openai.createModeration({
      input: sanitizedQuery,
    });

    const [results] = moderationResponse.data.results;

    console.log("Test2", results);
    if (results.flagged) {
      throw new UserError("Flagged content", {
        flagged: true,
        categories: results.categories,
      });
    }

    const embeddingResponse = await openai.createEmbedding({
      model: "text-embedding-ada-002",
      input: sanitizedQuery.replaceAll("\n", " "),
    });

    if (embeddingResponse.status !== 200) {
      throw new ApplicationError(
        "Failed to create embedding for question",
        embeddingResponse
      );
    }

    const [{ embedding }] = embeddingResponse.data.data;

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

    const tokenizer = new GPT3NodeTokenizer({ type: "gpt3" });
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
