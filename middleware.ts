import { ipAddress, next } from "@vercel/edge";

const KV_REST_API_URL = process.env.REDIS_REST_API_URL;
const KV_REST_API_TOKEN = process.env.REDIS_REST_API_TOKEN;

if (!KV_REST_API_URL || !KV_REST_API_TOKEN) {
  throw new Error("Missing ENV variables for Redis connection");
}

const RATE_LIMIT = 2; // The maximum number of requests allowed
const WINDOW_SIZE = 10; // The window size in seconds

async function incrementKey(key) {
  const response = await fetch(`${KV_REST_API_URL}/incr`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${KV_REST_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ key }),
  });

  if (!response.ok) {
    throw new Error("Failed to increment key");
  }

  const result = await response.json();
  return result.result;
}

async function setKeyExpiration(key, seconds) {
  const response = await fetch(`${KV_REST_API_URL}/expire`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${KV_REST_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ key, seconds }),
  });

  if (!response.ok) {
    throw new Error("Failed to set key expiration");
  }
}

export const config = {
  matcher: "/api/api-vercel",
};

export default async function middleware(request: Request) {
  const ip = ipAddress(request) || "127.0.0.1";

  try {
    console.time("ratelimit-check");
    const currentWindow = Math.floor(Date.now() / 1000 / WINDOW_SIZE);
    const windowKey = `rate-limit:${ip}:${currentWindow}`;

    const count = await incrementKey(windowKey);

    // Set the expiration of the key if this is the first request in the current window
    if (count === 1) {
      await setKeyExpiration(windowKey, WINDOW_SIZE);
    }
    console.log({ count });
    console.timeEnd("ratelimit-check");
    if (count > RATE_LIMIT) {
      return new Response("Rate limit exceeded", { status: 429 });
    }

    return next();
  } catch (error) {
    console.error("Error in rate limiting:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
