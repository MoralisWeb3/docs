export const getAnswerFromDocs = (context: string, query: string) => {
  // Your logic here
  return "Integrate Web3 into any tech stack. Follow Moralis’ documentation for step-by-step guides, tutorials, and API references for our powerful Web3 APIs. Bridge the development gap between Web2 and Web3 with Moralis’ powerful Web3 APIs.";
};

export const getAnswerFromDocsSchema = {
  name: "get_answer_from_docs",
  description: "Get an answer based on the provided documentation context",
  parameters: {
    type: "object",
    properties: {
      context: {
        type: "string",
        description: "The documentation context",
      },
      query: {
        type: "string",
        description: "The user's question",
      },
    },
    required: ["context", "query"],
  },
};
