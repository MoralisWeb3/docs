import { ipAddress, next } from "@vercel/edge";
import Redis from "ioredis";

const REDIS_URL = process.env.KV_REST_API_URL;
if (!REDIS_URL) throw new Error("Missing ENV variable");
const redis = new Redis(REDIS_URL, {
  tls: {},
});

export const config = {
  matcher: "/api/api-vercel",
};

const RATE_LIMIT = 2;
const WINDOW_SIZE = 10;

export default async function middleware(request: Request) {
  const ip = ipAddress(request) || "127.0.0.1";

  try {
    console.time("ratelimit-check");
    const currentWindow = Math.floor(Date.now() / 1000 / WINDOW_SIZE);
    const windowKey = `${ip}-${currentWindow}`;

    const pipeline = redis
      .multi()
      .incr(windowKey) // Increment the count for the IP in the current window
      .expire(windowKey, WINDOW_SIZE); // Set expiration for the window key

    const requestCount = await pipeline.exec();

    if (!requestCount) {
      throw new Error("Redis exec returned null");
    }

    // Assuming the structure [error, response][] where response is of the shape [null, number]
    const count = requestCount[0][1] as number;
    console.log(count);
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
