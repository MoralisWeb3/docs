import { IntercomApiArticles } from "./helpers/generatedIntercomApiArticles";

export const getMoralisApiArticlesList = () => {
  const articlesList = IntercomApiArticles.map((a) => {
    return {
      title: a.title,
      id: a.id,
    };
  });

  return articlesList;
};

export const getMoralisApiArticlesListSchema = {
  name: "get_moralis_api_articles_list",
  description:
    "Fetches a list of moralis API articles with their titles and IDs. Can be used for a quickreference on what API articles are available.",
  parameters: { type: "object", properties: {} },
  returns: {
    type: "array",
    items: {
      type: "object",
      properties: {
        title: {
          type: "string",
          description: "Title of the article",
        },
        id: {
          type: "string",
          description: "Unique identifier for the article",
        },
      },
      required: ["title", "id"],
    },
  },
};
