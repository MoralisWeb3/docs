import cheerio from "cheerio";

const IntercomApiKey = process.env.INTERCOM_API_KEY;

if (!IntercomApiKey) throw "Add INTERCOM_API_KEY in .env";

export async function fetchIntercomArticle(articleUrl: string) {
    // Extract the article ID from the URL using regex
    const match = articleUrl.match(/articles\/(\d+)/);
    if (!match) {
        throw new Error("Invalid article URL");
    }
    const id = match[1];

    // Fetch the article data from Intercom's API
    const resp = await fetch(`https://api.eu.intercom.io/articles/${id}`, {
        method: "GET",
        headers: {
            "Intercom-Version": "2.10",
            Authorization: `Bearer ${IntercomApiKey}`,
        },
    });

    if (!resp.ok) {
        throw new Error(`API response error with status: ${resp.status}`);
    }

    // Parse the JSON response
    const data = await resp.json();

    // Load the HTML content into Cheerio
    const $ = cheerio.load(data.body);

    // For each anchor tag, replace it with its text followed by the URL in parentheses
    $("a").each(function () {
        const link = $(this);
        const href = link.attr("href");
        const text = link.text();
        link.replaceWith(`${text} (${href})`);
    });

    // For each image tag, replace it with a text representation
    $("img").each(function () {
        const img = $(this);
        const src = img.attr("src");
        img.replaceWith(`[Image: ${src}]`);
    });

    // Extract the cleaned content
    const cleanedBody = $.text();

    // Return the desired data
    return {
        body: cleanedBody,
        url: data.url,
    };
}
