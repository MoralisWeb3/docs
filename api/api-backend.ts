import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";
import qs from "qs";
const currentDate = new Date();
const utcDay = currentDate.getUTCDate();
const utcMonth = currentDate.getUTCMonth() + 1;
// const utcHour = currentDate.getUTCHours();
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

        // Add query parameters if they exist
        if (query && Object.keys(query).length > 0) {
            slackPayload.blocks.push({
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `*Query Parameters:*\n\`\`\`\n${JSON.stringify(query, null, 2)}\n\`\`\``,
                },
            });
        }

        // Add request body if it exists
        if (body && Object.keys(body).length > 0) {
            slackPayload.blocks.push({
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `*Request Body:*\n\`\`\`\n${JSON.stringify(body, null, 2)}\n\`\`\``,
                },
            });
        }

        // Add error response
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

export default async function (req: VercelRequest, res: VercelResponse) {
    // Capture the original docs page URL before any processing
    const originalDocsUrl = req.body?.headers?.referer || req.body?.headers?.origin || "Unknown";

    try {
        const { hostUrl, path, method, headers, body, query } = req.body;

        // Check if the client IP is in the restricted list
        const forwardedIps =
            (req.headers["x-forwarded-for"] as string) || req.connection.remoteAddress;
        const clientIp = forwardedIps ? forwardedIps.split(",")[0].trim() : "unknown"; // Takes the first IP and trims any extra whitespace

        if (restrictedIPs.includes(clientIp)) {
            return res.status(200).json([]);
        }

        // Special handling for Cortex API
        const isCortexAPI = hostUrl?.includes("cortex-api.moralis.io");

        let response;

        if (isCortexAPI) {
            // Cortex API uses a simple X-API-Key header
            // Use user's key if provided, otherwise use env key
            const userApiKey = headers?.["X-API-Key"];
            const apiKey = userApiKey || MORALIS_API_KEY;

            // Simple headers for Cortex API - exactly like the curl command
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
            // Original handling for other APIs
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
            res.status(response.status).send(result);
        } else {
            const error = await response.text();
            console.log({ "API Error": error });

            // Send Slack notification for API errors
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

            res.status(response.status).send(error);
        }
    } catch (error) {
        console.log({ "Function Error": error });

        // Send Slack notification for function errors
        await sendSlackNotification(
            req.body?.method || "Unknown Method",
            req.body?.query || {},
            req.body?.body || {},
            JSON.stringify(error),
            500,
            req.body?.hostUrl || "Unknown Host",
            req.body?.path || "Unknown Path",
            originalDocsUrl
        );

        res.status(500).send(error);
    }
}
