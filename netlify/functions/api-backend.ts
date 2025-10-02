import type { Context } from "@netlify/functions";
import qs from "qs";

const currentDate = new Date();
const utcDay = currentDate.getUTCDate();
const utcMonth = currentDate.getUTCMonth() + 1;
const sumUtcDateMonth = utcDay + utcMonth;

const key = `test${sumUtcDateMonth}`;

const { MORALIS_API_KEY, SUPER_SECRET_KEY, SLACK_WEBHOOK_URL } = process.env;

async function sendSlackNotification(
    method: string,
    query: any,
    body: any,
    error: string,
    statusCode: number,
    hostUrl: string,
    path: string,
    docsUrl?: string
) {
    try {
        const timestamp = new Date().toISOString().replace("T", " ").substring(0, 19) + " UTC";
        const fullUrl = [hostUrl, path, qs.stringify(query || {}, { addQueryPrefix: true })].join(
            ""
        );

        const slackPayload = {
            text: "🚨 @iulian User tried the API in docs and it failed",
            blocks: [
                {
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: `*🚨User tried the API in docs and it failed*\n\nts: ${timestamp}`,
                    },
                },
                {
                    type: "section",
                    fields: [
                        {
                            type: "mrkdwn",
                            text: `*Method:*\n${method}`,
                        },
                        {
                            type: "mrkdwn",
                            text: `*Status Code:*\n${statusCode}`,
                        },
                        {
                            type: "mrkdwn",
                            text: `*API URL:*\n\`${fullUrl}\``,
                        },
                        {
                            type: "mrkdwn",
                            text: `*Docs Page:*\n${docsUrl || "Unknown"}`,
                        },
                    ],
                },
            ],
        };

        if (query && Object.keys(query).length > 0) {
            slackPayload.blocks.push({
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `*Query Parameters:*\n\`\`\`\n${JSON.stringify(query, null, 2)}\n\`\`\``,
                },
            });
        }

        if (body && Object.keys(body).length > 0) {
            slackPayload.blocks.push({
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `*Request Body:*\n\`\`\`\n${JSON.stringify(body, null, 2)}\n\`\`\``,
                },
            });
        }

        slackPayload.blocks.push({
            type: "section",
            text: {
                type: "mrkdwn",
                text: `*Error Response:*\n\`\`\`\n${error}\n\`\`\``,
            },
        });

        if (!SLACK_WEBHOOK_URL) {
            console.error("SLACK_WEBHOOK_URL is not defined");
            return;
        }

        await fetch(SLACK_WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(slackPayload),
        });
    } catch (slackError) {
        console.error("Failed to send Slack notification:", slackError);
    }
}

const restrictedIPs = ["171.248.175.163"];

export const config = {
    path: "/api/api-backend"
};

export default async (req: Request, context: Context): Promise<Response> => {
    try {
        const requestBody = await req.json();
        const { hostUrl, path, method, headers, body, query } = requestBody;

        const originalDocsUrl = requestBody?.headers?.referer || requestBody?.headers?.origin || "Unknown";

        // Check if the client IP is in the restricted list
        const clientIp = context.ip || "unknown";

        if (restrictedIPs.includes(clientIp)) {
            return new Response(JSON.stringify([]), {
                status: 200,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Special handling for Cortex API
        const isCortexAPI = hostUrl?.includes("cortex-api.moralis.io");

        let response;

        if (isCortexAPI) {
            const userApiKey = headers?.["X-API-Key"];
            const apiKey = userApiKey || MORALIS_API_KEY;

            const cortexHeaders = {
                accept: "application/json",
                "content-type": "application/json",
                "X-API-Key": apiKey,
            };

            response = await fetch(
                [hostUrl, path, qs.stringify(query || {}, { addQueryPrefix: true })].join(""),
                {
                    method,
                    headers: cortexHeaders,
                    body: JSON.stringify(body),
                }
            );
        } else {
            let newHeaders = {
                ...headers,
                referer: SUPER_SECRET_KEY,
            };

            const authHeaderKey = hostUrl.includes("wdim.moralis.io")
                ? "Authorization"
                : "X-API-Key";
            const authHeaderValue = hostUrl.includes("wdim.moralis.io")
                ? `Bearer ${MORALIS_API_KEY}`
                : MORALIS_API_KEY;

            newHeaders[authHeaderKey] = authHeaderValue;

            response = await fetch(
                [hostUrl, path, qs.stringify(query || {}, { addQueryPrefix: true })].join(""),
                {
                    method,
                    headers: newHeaders,
                    body: JSON.stringify(body),
                }
            );
        }

        if (response.ok) {
            const result = await response.json();
            return new Response(JSON.stringify(result), {
                status: response.status,
                headers: { "Content-Type": "application/json" }
            });
        } else {
            const error = await response.text();
            console.log({ "API Error": error });

            await sendSlackNotification(
                method,
                query,
                body,
                error,
                response.status,
                hostUrl,
                path,
                originalDocsUrl
            );

            return new Response(error, { status: response.status });
        }
    } catch (error: any) {
        console.log({ "Function Error": error });

        const requestBody = await req.json().catch(() => ({}));

        await sendSlackNotification(
            requestBody?.method || "Unknown Method",
            requestBody?.query || {},
            requestBody?.body || {},
            JSON.stringify(error),
            500,
            requestBody?.hostUrl || "Unknown Host",
            requestBody?.path || "Unknown Path",
            requestBody?.headers?.referer || "Unknown"
        );

        return new Response(JSON.stringify(error), { status: 500 });
    }
};
