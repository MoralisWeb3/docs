import OpenAI from "openai";
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

        type chatCompletionMessages = {
            role: "function" | "system" | "user" | "assistant";
            name?: string;
            content: string;
        };

        const { messages } = (await req.json()) as {
            messages?: Array<chatCompletionMessages>;
        };
        console.log({ messages });

        if (!messages || messages.length === 0) {
            return new Response("No messages in the request", { status: 400 });
        }

        // Convert messages array to a string format suitable for GPT-3
        // const conversationHistory = messages
        //   .map((message) => `${message.role}: ${message.content}`)
        //   .join("\n");
        // console.log({ messages });
        const completionOptions: OpenAI.Chat.Completions.ChatCompletionCreateParamsStreaming = {
            model: "gpt-3.5-turbo",
            messages: messages,
            // max_tokens: 2048,
            // temperature: 0,
            stream: true,
        };

        const stream = await OpenAIStream(completionOptions);
        return new Response(stream);
    } catch (err) {
        console.error("Error in gpt-search:", err.message);

        if (err.message === "Missing env var from OpenAI") {
            // Configuration errors return a 500 Internal Server Error status
            return new Response(err.message, { status: 500 });
        } else if (err.message === "No messages in the request") {
            // User-caused errors return a 400 Bad Request status
            return new Response(err.message, { status: 400 });
        } else {
            // Unknown errors also return a 500 status
            return new Response("An unexpected error occurred.", { status: 500 });
        }
    }
};

export default handler;
