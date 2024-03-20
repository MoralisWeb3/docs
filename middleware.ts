import { ipAddress, next } from "@vercel/edge";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";

const ratelimit = new Ratelimit({
  redis: kv,
  // 5 requests from the same IP in 10 seconds
  limiter: Ratelimit.slidingWindow(10, "10 s"),
});

// Define which routes you want to rate limit
export const config = {
  matcher: "/",
};

export default async function middleware(request: Request) {
  // You could alternatively limit based on user ID or similar
  const ip = ipAddress(request) || "127.0.0.1";
  console.log(ip);
  const { success, pending, limit, reset, remaining } = await ratelimit.limit(
    ip
  );

  return success
    ? next()
    : Response.redirect(new URL("/notFound", request.url));
}
