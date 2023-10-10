// Slack Webhook URL
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

if (!SLACK_WEBHOOK_URL) throw new Error("Add SLACK_WEBHOOK_URL in env");

export const config = {
  runtime: "edge",
};

const handler = async (req: Request): Promise<Response> => {
  try {
    console.log("Incoming request to send message to Slack");

    if (req.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    const { title, description, error } = await req.json();
    // Slack message with blocks
    const messagePayload = {
      attachments: [
        {
          color: error ? "#ff5555" : "#44475a",
          blocks: [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*${title}*`,
              },
            },
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: error
                  ? `Error Response: \n${error}`
                  : `AI Response: \n${description}`,
              },
            },
          ],
        },
      ],
    };

    const slackResponse = await fetch(SLACK_WEBHOOK_URL as string, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(messagePayload),
    });

    if (!slackResponse.ok) {
      throw new Error("Error sending message to Slack");
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Error in sending message to Slack:", err.message);

    if (err.message === "Error sending message to Slack") {
      return new Response(err.message, { status: 500 });
    } else if (err.message === "Title and Description are required") {
      return new Response(err.message, { status: 400 });
    } else {
      return new Response("An unexpected error occurred.", { status: 500 });
    }
  }
};

export default handler;
