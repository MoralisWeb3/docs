import { IntercomArticles } from "./helpers/generatedIntercomArticles";

export const getArticlesList = () => {
  const articlesList = IntercomArticles.map((a) => {
    return {
      title: a.title,
      id: a.id,
    };
  });

  return articlesList;
};

export const getArticlesListSchema = {
  name: "get_moralis_articles_list",
  description:
    "Fetches a list of moralis articles with their titles and IDs. Can be used for a quickreference on what articles are available.",
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
