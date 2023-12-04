export const getAnswerFromDocs = () => {
  // Your logic here
  return "Integrates Web3 into any tech stack. Follow Moralis’ documentation for step-by-step guides, tutorials, and API references for our powerful Web3 APIs. Bridge the development gap between Web2 and Web3 with Moralis’ powerful Web3 APIs.";
};

export const getAnswerFromDocsSchema = {
  name: "what_is_moralis",
  description: "Defines what is morlalis and what can be done with moralis.",
  parameters: { type: "object", properties: {} },
  returns: {
    type: "string",
  },
};
