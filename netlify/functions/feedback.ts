import { createClient } from "@supabase/supabase-js";
import type { Context } from "@netlify/functions";
import { Database } from "../../types/supabase";

const supabase = createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async (req: Request, context: Context) => {
    try {
        if (req.method !== "POST") {
            return new Response("Method Not Allowed", { status: 405 });
        }

        const { choice, message } = await req.json();
        const referer = req.headers.get("referer");
        const ip = req.headers.get("x-nf-client-connection-ip") || req.headers.get("x-forwarded-for") || "undefined";

        if (!choice || !referer) {
            return new Response(JSON.stringify({ message: "Bad request" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        if (choice !== "yes" && choice !== "no") {
            return new Response(JSON.stringify({ message: "Bad request" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        const { data, error } = await supabase.from("feedback").insert([
            {
                choice,
                message,
                page: referer.toString(),
                ip: ip.toString(),
                score: choice === "yes" ? 1 : -1,
            },
        ]);

        if (error) {
            return new Response(JSON.stringify({ message: error.message }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }

        return new Response(JSON.stringify({ message: "Created feedback entry" }), {
            status: 201,
            headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        return new Response(JSON.stringify({ message: "Internal server error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};
