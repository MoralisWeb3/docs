import OpenAI from "openai";
import type { Context } from "@netlify/functions";

const openAiKey = process.env.OPENAI_KEY;

const openai = new OpenAI({
    apiKey: openAiKey,
});

export const config = {
    path: "/api/moralis-assistant-thread-delete"
};

export default async (req: Request, context: Context): Promise<Response> => {
    if (req.method === "OPTIONS") {
        return new Response(null, {
            status: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "DELETE,OPTIONS",
                "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
            }
        });
    }

    if (req.method !== "DELETE") {
        return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
            status: 405,
            headers: {
                Allow: "DELETE",
                "Content-Type": "application/json",
            }
        });
    }

    const url = new URL(req.url);
    const thread_id = url.searchParams.get("thread_id");

    if (!thread_id) {
        return new Response(JSON.stringify({ error: "Thread ID is required" }), {
            status: 400,
            headers: {
                "Content-Type": "application/json",
            }
        });
    }

    try {
        const threadResponse = await openai.beta.threads.del(thread_id);
        return new Response(JSON.stringify(threadResponse), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            }
        });
    } catch (error: any) {
        console.error("Error in deleting the thread:", error);
        return new Response(JSON.stringify({
            error: error.message,
            ...(error.data && { data: error.data }),
        }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            }
        });
    }
};
