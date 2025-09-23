import { IntercomArticles } from "./helpers/generatedIntercomArticles";

export const getArticlesByIds = ({ ids }) => {
    console.log(ids);
    return IntercomArticles.filter((article) => ids.includes(article.id));
};

export const getArticlesByIdsSchema = {
    name: "get_moralis_articles_by_id",
    description:
        "Identify the article id from the available data and use it to fetch the article data",
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
                url: {
                    type: "string",
                    description: "URL link to the article",
                },
                body: {
                    type: "string",
                    description: "Detailed content of the article",
                },
            },
            required: ["id", "title", "description", "url", "body"],
        },
    },
};
