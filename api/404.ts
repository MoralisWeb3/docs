import fetch from "node-fetch";
import { redirects } from "./data/redirects";

module.exports = async (req, res) => {
  const foundRedirect = redirects.find(
    (redirect) => redirect.source === req.url
  );

  if (foundRedirect) {
    // If req.url found redirect to destionation
    if (foundRedirect.permanent) {
      res.statusCode = 308;
    } else {
      res.statusCode = 307;
    }
    res.setHeader("location", foundRedirect.destination);
    // Caching headers
    res.setHeader("Cache-control", "s-maxage=600");
    return res.end();
  } else {
    // If req.url not found show 404 page
    // Get the 404.html file
    const response = await fetch(
      "https://" + process.env.VERCEL_URL + "/404.html"
    );
    const body = await response.text();
    res.statusCode = 404;
    return res.end(body);
  }
};
