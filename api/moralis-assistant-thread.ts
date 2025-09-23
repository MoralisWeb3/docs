import OpenAI from "openai";
// const OpenAI = require("openai");
const openAiKey = process.env.OPENAI_KEY;

const openai = new OpenAI({
    apiKey: openAiKey,
});

module.exports = async (req, res) => {
    if (req.method === "OPTIONS") {
        // Handle CORS pre-flight request
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
        res.setHeader(
            "Access-Control-Allow-Headers",
            "authorization, x-client-info, apikey, content-type"
        );
        return res.status(200).end();
    }

    if (req.method !== "GET") {
        // Allow only GET requests
        res.setHeader("Allow", "GET");
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        const threadResponse = await openai.beta.threads.create();
        res.status(200).json(threadResponse);
    } catch (error) {
        console.error("Error in creating a thread:", error);
        const statusCode = 500;
        res.status(statusCode).json({
            error: error.message,
            ...(error.data && { data: error.data }),
        });
    }
};
