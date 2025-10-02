import { redirects } from "../../api/data/redirects";
import type { Context } from "@netlify/functions";

function getProtocol() {
    const isProd = process.env.CONTEXT === "production";
    if (isProd) return "https://";
    return "http://";
}

export default async (req: Request, context: Context) => {
    try {
        const url = new URL(req.url);
        const pathname = url.pathname;

        const foundRedirect = redirects.find((redirect) => redirect.source === pathname);

        if (foundRedirect) {
            // If req.url found redirect to destination
            // Default to permanent redirect (308) if not specified
            const isPermanent = foundRedirect.permanent ?? true;
            const status = isPermanent ? 308 : 307;

            return new Response(null, {
                status,
                headers: {
                    "location": foundRedirect.destination,
                    "Cache-Control": "s-maxage=600"
                }
            });
        } else {
            // If req.url not found show 404 page
            // Get the 404.html file
            const siteUrl = process.env.URL || process.env.DEPLOY_URL || `${getProtocol()}${req.headers.get("host")}`;
            const response = await fetch(`${siteUrl}/404.html`);

            const body = await response.text();

            return new Response(body, {
                status: 404,
                headers: {
                    "Cache-Control": "s-maxage=600",
                    "Content-Type": "text/html"
                }
            });
        }
    } catch (err: any) {
        console.error("Error in 404 handler:", err.message);
        return new Response("Internal Server Error", { status: 500 });
    }
};
