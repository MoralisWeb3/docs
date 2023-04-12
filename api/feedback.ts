import type { VercelRequest, VercelResponse } from "@vercel/node";

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  // Store it in a database
  const { choice } = req.body;

  console.log(req.headers.referer);

  console.log(req.url);

  console.log(choice);

  res.status(201).json({ message: "Success!" });
};
