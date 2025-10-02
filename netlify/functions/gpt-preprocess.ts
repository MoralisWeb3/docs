import OpenAI from "openai";
import {
    getAnswerFromDocs,
    getAnswerFromDocsSchema,
    getArticlesByIds,
    getArticlesByIdsSchema,
    getArticlesList,
    getArticlesListSchema,
    getMoralisApiEndpointsList,
    getMoralisApiEndpointsListSchema,
    getMoralisApiEndpointsData,
    getMoralisApiEndpointsDataSchema,
    getMoralisApiArticlesList,
    getMoralisApiArticlesListSchema,
    getMoralisApiArticlesByIds,
    getMoralisApiArticlesDataSchema,
} from "../../utils/ai_bot_functions";

const openAiKey = process.env.OPENAI_KEY;

const openai = new OpenAI({
    apiKey: openAiKey,
});

export class ApplicationError extends Error {
    constructor(message: string, public data: Record<string, any> = {}) {
        super(message);
    }
}

export class UserError extends ApplicationError {}

export const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const availableFunctions: any = {
    get_moralis_articles_list: getArticlesList,
    get_moralis_articles_by_id: getArticlesByIds,
    get_moralis_api_endpoints_list: getMoralisApiEndpointsList,
    get_moralis_api_endpoints_data: getMoralisApiEndpointsData,
    get_moralis_api_articles_list: getMoralisApiArticlesList,
    get_moralis_api_articles_by_id: getMoralisApiArticlesByIds,
};

const functionSchemas = [
    getArticlesListSchema,
    getArticlesByIdsSchema,
    getMoralisApiEndpointsListSchema,
    getMoralisApiEndpointsDataSchema,
    getMoralisApiArticlesListSchema,
    getMoralisApiArticlesDataSchema,
];

export const config = {
    path: "/api/gpt-preprocess"
};

export default async (req: Request): Promise<Response> => {
    console.log("Pre processing");
    try {
        if (req.method === "OPTIONS") {
            return new Response("ok", { headers: corsHeaders });
        }

        const requestData = await req.json();

        if (!requestData) {
            throw new UserError("Missing request data");
        }

        const { messages } = requestData;

        if (!messages) {
            throw new UserError("Missing query in request data");
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: messages,
            functions: functionSchemas,
            function_call: "auto",
        });

        const responseMessage = response.choices[0].message;
        console.log({ response });
        console.log({
            choices: response.choices[0],
            mnessage: response.choices[0].message,
        });

        if (responseMessage.function_call) {
            console.log({ responseMessage });
            const functionName = responseMessage.function_call.name;
            const functionToCall = availableFunctions[functionName];
            const functionArgs = JSON.parse(responseMessage.function_call.arguments);

            if (functionToCall) {
                console.log(functionArgs);
                const functionResponse = functionToCall(functionArgs);
                return new Response(JSON.stringify({
                    prompt: functionResponse,
                    functionName: functionName,
                    usage: response.usage,
                }), {
                    status: 200,
                    headers: { "Content-Type": "application/json" }
                });
            } else {
                return new Response(JSON.stringify({ prompt: "Sorry, I don't know how to help with that." }), {
                    status: 200,
                    headers: { "Content-Type": "application/json" }
                });
            }
        } else if (response.choices[0]) {
            return new Response(JSON.stringify({
                prompt: response.choices[0].message,
                functionName: "assistant",
                usage: response.usage,
            }), {
                status: 200,
                headers: { "Content-Type": "application/json" }
            });
        } else {
            return new Response(JSON.stringify({ prompt: "Sorry, I don't know how to help with that." }), {
                status: 200,
                headers: { "Content-Type": "application/json" }
            });
        }
    } catch (err: any) {
        console.error("Error in gpt-preprocess:", err.message);

        if (err instanceof UserError) {
            return new Response(JSON.stringify({ error: err.message, data: err.data }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        } else if (err instanceof ApplicationError) {
            return new Response(JSON.stringify({ error: err.message, data: err.data }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        } else {
            return new Response(JSON.stringify({ error: "An unexpected error occurred." }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }
    }
};
