import { CreateCompletionRequest } from "openai";
import { OpenAIStream } from "../utils/openAIStream";

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

    const requestData = (await req.json()) as {
      prompt?: string;
    };

    if (!requestData) {
      throw new UserError("Missing request data");
    }

    const { prompt } = requestData;

    if (!prompt) {
      throw new UserError("Missing prompt in request data");
    }

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
