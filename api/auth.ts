import { VercelRequest, VercelResponse } from "@vercel/node";
import jwt from "jsonwebtoken";

const auth = async (request: VercelRequest, response: VercelResponse) => {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method Not Allowed" });
  }

  const { token } = request.body || {};

  jwt.verify(token, process.env.SSO_SECRET, (error, decoded) => {
    if (error || !decoded.apiKey) {
      return response.status(400).json({ error: "Request Failed" });
    }

    response.status(200).json({ token: decoded.apiKey });
  });
};

export default auth;
