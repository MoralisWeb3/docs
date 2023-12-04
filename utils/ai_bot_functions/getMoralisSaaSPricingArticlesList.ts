import { IntercomSaaSPricingArticles } from "./helpers/generatedIntercomArticles";

export const getMoralisSaaSPricingArticlesList = () => {
  const articlesList = IntercomSaaSPricingArticles.map((a) => {
    return {
      title: a.title,
      id: a.id,
    };
  });

  return articlesList;
};

export const getMoralisSaaSPricingArticlesSchema = {
  name: "get_moralis_saas_pricing_articles_list",
  description:
    "Fetches a list of moralis pricing articles with their titles and IDs. Can be used for a quick reference on the available pricing and plan limits related articles.",
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
