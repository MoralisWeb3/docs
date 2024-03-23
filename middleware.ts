import { ipAddress, next } from "@vercel/edge";

const KV_REST_API_URL = process.env.REDIS_REST_API_URL;
const KV_REST_API_TOKEN = process.env.REDIS_REST_API_TOKEN;

if (!KV_REST_API_URL || !KV_REST_API_TOKEN) {
  throw new Error("Missing ENV variables for Redis connection");
}

export const config = {
  matcher: "/api/api-vercel",
};

const RATE_LIMIT = 10; // The maximum number of requests allowed
const WINDOW_SIZE = 10; // The window size in seconds

export default async function middleware(request: Request) {
  const ip = ipAddress(request) || "127.0.0.1";
  const currentWindow = Math.floor(Date.now() / 1000 / 30);
  const windowKey = `rate-limit:${ip}:${currentWindow}`;
  console.time("ratelimit-check");

  const pipelineResponse = await fetch(`${KV_REST_API_URL}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${KV_REST_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      ["INCR", windowKey],
      ["EXPIRE", windowKey, WINDOW_SIZE],
    ]),
  });

  if (!pipelineResponse.ok) {
    const errorText = await pipelineResponse.text();
    console.error("Error with pipeline command:", errorText);
    return new Response("Internal Server Error", { status: 500 });
  }

  const pipelineResult = await pipelineResponse.json();

  const count = pipelineResult[0].result;
  console.log({ count, ip });
  if (count > RATE_LIMIT) {
    console.timeEnd("ratelimit-check");
    return new Response("Rate limit exceeded", { status: 429 });
  }
  console.timeEnd("ratelimit-check");

  return next();
}
