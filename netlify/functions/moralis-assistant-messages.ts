import OpenAI from "openai";

const assistantId = process.env.ASSISTANT_ID;
if (!assistantId) throw new Error("ASSISTANT_ID is missing in env");
const openAiKey = process.env.OPENAI_KEY;

const openai = new OpenAI({
    apiKey: openAiKey,
});

export const config = {
    path: "/api/moralis-assistant-messages"
};

export default async (req: Request): Promise<Response> => {
    if (req.method !== "GET") {
        return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
            status: 405,
            headers: {
                Allow: "GET",
                "Content-Type": "application/json",
            },
        });
    }

    const url = new URL(req.url);
    const thread_id = url.searchParams.get("thread_id");

    if (!thread_id) {
        return new Response(JSON.stringify({ error: "Thread ID is required" }), {
            status: 400,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
    try {
        const messagesResponse = await openai.beta.threads.messages.list(thread_id);

        const messages = messagesResponse.data
            .sort((a, b) => {
                return a.created_at - b.created_at;
            })
            .map((i) => {
                return {
                    role: i.role,
                    content: i.content[0]["text"]["value"],
                };
            });
        return new Response(JSON.stringify(messages), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error: any) {
        console.error("Error in get-thread-messages:", error);
        return new Response(
            JSON.stringify({
                error: error.message,
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
};
