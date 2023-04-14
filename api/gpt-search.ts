import type { NextRequest } from "next/server";
import { CreateCompletionRequest } from "openai";
import { OpenAIStream } from "../utils/openAIStream";

export const config = {
  runtime: "edge",
};

const handler = async (req: NextRequest): Promise<Response> => {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("Missing env var from OpenAI");
    }

    const { prompt } = (await req.json()) as {
      prompt?: string;
    };

    console.log("Prompt", prompt);

    if (!prompt) {
      return new Response("No prompt in the request", { status: 400 });
    }

    const completionOptions: CreateCompletionRequest = {
      model: "text-davinci-003",
      prompt,
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 200,
      stream: true,
      n: 1,
    };

    const stream = await OpenAIStream(completionOptions);
    return new Response(stream);
  } catch (err) {
    return new Response(
      JSON.stringify({
        err,
      })
    );
  }
};

export default handler;
