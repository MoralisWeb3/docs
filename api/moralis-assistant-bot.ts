// import { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

const assistantId = process.env.ASSISTANT_ID;
if (!assistantId) throw new Error("ASSISTANT_ID is missing in env");
const openAiKey = process.env.OPENAI_KEY;

const openai = new OpenAI({
  apiKey: openAiKey,
});

export const config = {
  runtime: "edge",
};

type PostRequestBody = {
  thread_id: string;
  message_content: string;
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: {
        Allow: "POST",
        "Content-Type": "application/json",
      },
    });
  }
  const requestBody: PostRequestBody = await req.json();

  try {
    const { thread_id, message_content } = requestBody;

    // Create a new message on the existing thread
    const messageResponse = await openai.beta.threads.messages.create(
      thread_id,
      {
        role: "user",
        content: message_content,
      }
    );
    // Initiate a run with the model
    const runResponse = await openai.beta.threads.runs.create(thread_id, {
      assistant_id: assistantId, // Replace with your assistant's ID
    });

    // Poll for the status of the run until it is 'completed'
    let runStatus = runResponse.status;
    let runLoopStatus: OpenAI.Beta.Threads.Runs.Run = runResponse;
    while (runStatus !== "completed" && runStatus !== "failed") {
      await new Promise((resolve) => setTimeout(resolve, 500)); // 500 ms delay between polls

      const updatedRunResponse = await openai.beta.threads.runs.retrieve(
        thread_id,
        runLoopStatus.id
      );
      runLoopStatus = updatedRunResponse;
      runStatus = runLoopStatus.status;
      // console.log({ runStatus });
    }

    const runStepList = await openai.beta.threads.runs.steps.list(
      runLoopStatus.thread_id,
      runLoopStatus.id
    );

    const messageId =
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      runStepList.data[0].step_details.message_creation.message_id;
    if (runStatus === "completed") {
      return new Response(JSON.stringify({ success: true, messageId }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      throw new Error("Run failed or was not completed in the expected time.");
    }
  } catch (error) {
    console.error("Error in create-message-and-run:", error);
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

export default handler;
