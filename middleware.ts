import { ipAddress, next } from "@vercel/edge";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";

const ratelimit = new Ratelimit({
  redis: kv,
  // 10 requests from the same IP in 10 seconds
  limiter: Ratelimit.slidingWindow(10, "10 s"),
});

export const config = {
  matcher: "/api/api-vercel",
};

export default async function middleware(request: Request) {
  // Limiting only the specific API path
  const ip = ipAddress(request) || "127.0.0.1";

  const { success } = await ratelimit.limit(ip);

  // If rate limit is exceeded, respond with a custom error or status code
  if (!success) {
    return new Response("Rate limit exceeded", { status: 429 });
  }

  return next();
}
