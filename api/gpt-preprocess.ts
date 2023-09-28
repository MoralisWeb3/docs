import { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";
import {
  getAnswerFromDocs,
  getAnswerFromDocsSchema,
} from "./functions/getAnswerFromDocs";

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
  what_is_moralis: getAnswerFromDocs,
};

const functionSchemas = [getAnswerFromDocsSchema];

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  try {
    // Handle CORS
    if (req.method === "OPTIONS") {
      return new Response("ok", { headers: corsHeaders });
    }

    const requestData = req?.body;

    if (!requestData) {
      throw new UserError("Missing request data");
    }

    const { query } = requestData;

    if (!query) {
      throw new UserError("Missing query in request data");
    }

    const sanitizedQuery = (query as any)?.trim();

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: sanitizedQuery,
        },
      ],
      functions: functionSchemas, // Use the functionSchemas array here
      function_call: "auto",
    });

    const responseMessage = response.choices[0].message;
    // console.log({ responseMessage });

    if (responseMessage.function_call) {
      const functionName = responseMessage.function_call.name;
      const functionToCall = availableFunctions[functionName];
      const functionArgs = JSON.parse(responseMessage.function_call.arguments);

      if (functionToCall) {
        const functionResponse = functionToCall(
          functionArgs.context,
          functionArgs.query
        );
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
