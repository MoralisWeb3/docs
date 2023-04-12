import type { VercelRequest, VercelResponse } from "@vercel/node";

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  // Store it in a database

  res.status(201).json({ message: "Success!" });
};
