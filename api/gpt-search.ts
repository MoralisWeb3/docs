import { OpenAIStream } from "../utils/openAIStream";

export const config = {
  runtime: "edge",
};

const handler = async (req: Request): Promise<Response> => {
  try {
    console.log("Initial call");

    if (!process.env.OPENAI_KEY) {
      throw new Error("Missing env var from OpenAI");
    }

    const { messages } = (await req.json()) as {
      messages?: Array<{ role: string; content: string }>;
    };

    if (!messages || messages.length === 0) {
      return new Response("No messages in the request", { status: 400 });
    }

    // Convert messages array to a string format suitable for GPT-3
    // const conversationHistory = messages
    //   .map((message) => `${message.role}: ${message.content}`)
    //   .join("\n");

    // console.log({ messages });
    const completionOptions = {
      model: "gpt-3.5-turbo",
      messages: messages,
      // max_tokens: 2048,
      // temperature: 0,
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
