import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/supabase";

const supabase = createClient<Database>(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  const { choice, message } = req.body;
  const { referer } = req.headers;
  const ip = req.headers["x-real-ip"] || "undefined";

  if (!choice || !referer) {
    res.status(400).json({ message: "Bad request" });
    return;
  }

  if (choice !== "yes" && choice !== "no") {
    res.status(400).json({ message: "Bad request" });
    return;
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
    res.status(500).json({ message: error.message });
    return;
  }

  if (data) {
    res.status(201).json({ message: "Created feedback entry" });
    return;
  }
};
