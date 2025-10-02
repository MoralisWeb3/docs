import OpenAI from "openai";
import { OpenAIStream } from "../../utils/openAIStream";

export const config = {
    path: "/api/gpt-search"
};

export default async (req: Request): Promise<Response> => {
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

        const completionOptions: OpenAI.Chat.Completions.ChatCompletionCreateParamsStreaming = {
            model: "gpt-3.5-turbo",
            messages: messages,
            stream: true,
        };

        const stream = await OpenAIStream(completionOptions);
        return new Response(stream);
    } catch (err: any) {
        console.error("Error in gpt-search:", err.message);

        if (err.message === "Missing env var from OpenAI") {
            return new Response(err.message, { status: 500 });
        } else if (err.message === "No messages in the request") {
            return new Response(err.message, { status: 400 });
        } else {
            return new Response("An unexpected error occurred.", { status: 500 });
        }
    }
};
