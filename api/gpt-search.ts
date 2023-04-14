import type { NextRequest } from "next/server";
import { OpenAIStream } from "../utils/openAIStream";

export const config = {
  runtime: "edge",
};

const handler = async (req: NextRequest): Promise<Response> => {
  try {
    console.log("Initial call");

    if (!process.env.OPENAI_KEY) {
      throw new Error("Missing env var from OpenAI");
    }

    const { prompt } = (await req.json()) as {
      prompt?: string;
    };

    if (!prompt) {
      return new Response("No prompt in the request", { status: 400 });
    }

    const completionOptions = {
      model: "text-davinci-003",
      prompt,
      max_tokens: 512,
      temperature: 0,
      stream: true,
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
