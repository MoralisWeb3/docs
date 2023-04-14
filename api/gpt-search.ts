import type { NextRequest } from "next/server";
import { CreateCompletionRequest } from "openai";
import { OpenAIStream } from "../utils/openAIStream";

export const config = {
  runtime: "edge",
};

const handler = async (req: NextRequest): Promise<Response> => {
  try {
    const { prompt } = (await req.json()) as {
      prompt?: string;
    };

    const completionOptions: CreateCompletionRequest = {
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
