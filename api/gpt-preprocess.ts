import { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";
import {
  getAnswerFromDocs,
  getAnswerFromDocsSchema,
  getArticlesByIds,
  getArticlesByIdsSchema,
  getArticlesList,
  getArticlesListSchema,
} from "../utils/ai_bot_functions";

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
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const availableFunctions = {
  // what_is_moralis: getAnswerFromDocs,
  get_moralis_articles_list: getArticlesList,
  get_moralis_articles_by_id: getArticlesByIds,
};

const functionSchemas = [
  // getAnswerFromDocsSchema,
  getArticlesListSchema,
  getArticlesByIdsSchema,
];

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  console.log("Pre processing");
  try {
    // Handle CORS
    if (req.method === "OPTIONS") {
      return new Response("ok", { headers: corsHeaders });
    }

    const requestData = req?.body;

    if (!requestData) {
      throw new UserError("Missing request data");
    }

    const { messages } = requestData;

    if (!messages) {
      throw new UserError("Missing query in request data");
    }

    // const sanitizedQuery = (messages as any)?.trim();

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      functions: functionSchemas, // Use the functionSchemas array here
      function_call: "auto",
    });

    const responseMessage = response.choices[0].message;
    // console.log({ responseMessage });
    console.log({ response });

    if (responseMessage.function_call) {
      console.log({ responseMessage });
      const functionName = responseMessage.function_call.name;
      const functionToCall = availableFunctions[functionName];
      const functionArgs = JSON.parse(responseMessage.function_call.arguments);

      if (functionToCall) {
        console.log(functionArgs);
        const functionResponse = functionToCall(functionArgs);
        res
          .status(200)
          .json({ prompt: functionResponse, functionName: functionName });
      } else {
        res
          .status(200)
          .json({ prompt: "Sorry, I don't know how to help with that." });
      }
    } else {
      res
        .status(200)
        .json({ prompt: "Sorry, I don't know how to help with that." });
    }
  } catch (err) {
    console.error("Error in gpt-preprocess:", err.message);

    if (err instanceof UserError) {
      // User-caused errors return a 400 Bad Request status
      res.status(400).json({ error: err.message, data: err.data });
    } else if (err instanceof ApplicationError) {
      // General application errors return a 500 Internal Server Error status
      res.status(500).json({ error: err.message, data: err.data });
    } else {
      // Unknown errors also return a 500 status
      res.status(500).json({ error: "An unexpected error occurred." });
    }
  }
};
