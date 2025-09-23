// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const fs = require("fs");
const cheerio = require("cheerio");
const dotenv = require("dotenv");

dotenv.config();
const IntercomApiKey = process.env.INTERCOM_API_KEY;

if (!IntercomApiKey) throw "Add INTERCOM_API_KEY in .env";

const INTERCOM_API_VERSION = "2.10";
const AUTHORIZATION_HEADER = `Bearer ${IntercomApiKey}`;

const ACCEPTABLE_PARENT_IDS = [12941, 12951, 12946, 5662, 120120, 5654];

async function fetchAllData(url) {
    let results = [];
    while (url) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Intercom-Version": INTERCOM_API_VERSION,
                Authorization: AUTHORIZATION_HEADER,
            },
        });

        const data = await response.json();
        results = results.concat(data.data);

        url = data.pages && data.pages.next;
    }

    return results;
}

async function fetchArticles() {
    const allArticles = await fetchAllData(`https://api.eu.intercom.io/articles`);

    const filteredArticles = allArticles.filter(
        (article) =>
            ACCEPTABLE_PARENT_IDS.includes(article.parent_id) ||
            (article.parent_ids &&
                article.parent_ids.some((id) => ACCEPTABLE_PARENT_IDS.includes(id)))
    );

    return filteredArticles;
}

async function cleanArticleData(data) {
    // Load the HTML content into Cheerio
    const $ = cheerio.load(data);

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

    // For each iframe tag, replace it with a text representation
    $("iframe").each(function () {
        const video = $(this);
        const src = video.attr("src");
        video.replaceWith(`![Video](${src})`);
    });

    // Extract the cleaned content
    return $.text();
}

async function aggregateData() {
    const articles = await fetchArticles();
    console.log(`Total articles fetched: ${articles.length}`);

    // Extracting and transforming the articles data
    const processedArticles = await Promise.all(
        articles.map(async (art) => {
            const cleanedBody = await cleanArticleData(art.body);
            return {
                id: art.id,
                title: art.title,
                description: art.description,
                url: art.url,
                body: cleanedBody,
            };
        })
    );

    return processedArticles;
}

aggregateData()
    .then((data) => {
        fs.writeFileSync(
            "utils/ai_bot_functions/helpers/generatedIntercomApiArticles.ts",
            `export const IntercomApiArticles = 
${JSON.stringify(data, null, 2)}
      `
        );
        console.log("Data saved to generatedIntercomApiArticles.ts");
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

export {};
