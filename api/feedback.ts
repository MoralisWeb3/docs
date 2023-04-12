import type { VercelRequest, VercelResponse } from "@vercel/node";

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  // Store it in a database
  const { choice } = req.body;
  const { page } = req.headers;
  const ip = req.headers["x-real-ip"] || "undefined";

  console.log(choice, page, ip);

  res.status(201).json({ message: "Success!" });
};
