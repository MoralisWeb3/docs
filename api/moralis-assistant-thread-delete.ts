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
    res.setHeader("Access-Control-Allow-Methods", "DELETE,OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "authorization, x-client-info, apikey, content-type"
    );
    return res.status(200).end();
  }

  if (req.method !== "DELETE") {
    // Allow only DELETE requests
    res.setHeader("Allow", "DELETE");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { thread_id } = req.query;

  if (!thread_id) {
    return res.status(400).json({ error: "Thread ID is required" });
  }

  try {
    const threadResponse = await openai.beta.threads.del(thread_id);
    res.status(200).json(threadResponse);
  } catch (error) {
    console.error("Error in deleting the thread:", error);
    res.status(500).json({
      error: error.message,
      ...(error.data && { data: error.data }),
    });
  }
};
