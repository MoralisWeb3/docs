import { IntercomSaaSPricingArticles } from "./helpers/generatedIntercomArticles";

export const getMoralisSaaSPricingArticlesDataById = ({ ids }) => {
    return IntercomSaaSPricingArticles.filter((article) => ids.includes(article.id)).map(
        ({ url, ...rest }) => rest
    ); // Exclude the `url` property
};

export const getMoralisSaaSPricingArticlesDataSchema = {
    name: "get_moralis_saas_pricing_articles_data_by_id",
    description:
        "Identify the article id from the available data and use it to fetch the pricing article data without including the article URL",
    parameters: {
        type: "object",
        properties: {
            ids: {
                type: "array",
                items: {
                    type: "string",
                },
                description: "Array of article IDs for which articles should be fetched",
            },
        },
        required: ["ids"],
    },
    returns: {
        type: "array",
        items: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    description: "Unique identifier for the article",
                },
                title: {
                    type: "string",
                    description: "Title of the article",
                },
                description: {
                    type: "string",
                    description: "Short description of the article",
                },
                // Removed the `url` property here
                body: {
                    type: "string",
                    description: "Detailed content of the article",
                },
            },
            // Removed `url` from the required array
            required: ["id", "title", "description", "body"],
        },
    },
};
