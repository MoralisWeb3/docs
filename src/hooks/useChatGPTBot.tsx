import { useState, useEffect } from "react";

/**
 * @title useChatGPT
 * @description useChatGPT hook
 *
 * @returns {answer, generateAnswer}
 */
const useChatGPTBot = () => {
  const [answer, setAnswer] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [userQuery, setUserQuery] = useState<string>("");
  const [userTags, setUserTags] = useState<Array<string>>([""]);
  const [done, setDone] = useState<boolean>(false);

  const sendToSlack = async ({
    title,
    description,
    tags,
    error,
  }: {
    title: string;
    description: string;
    tags: Array<string>;
    error?: string;
  }) => {
    try {
      const slackResponse = await fetch("/api/postMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          tags,
          error,
        }),
      });

      if (!slackResponse.ok) {
        throw new Error("Error sending message to Slack");
      }
    } catch (err) {
      console.error("Error in sending message to Slack:", err.message);
    }
  };

  type Message = {
    role: "system" | "user" | "assistant";
    content: string;
  };

  const chatHistoryKey = "chatHistory";

  const reset = () => {
    setAnswer("");
    localStorage.removeItem(chatHistoryKey); // Clear chat history from local storage
  };

  /**
   * @title generateAnswer
   * @description generateAnswer function
   * @param {string} query
   * @returns {answer, generateAnswer}
   * @example
   * const { answer, generateAnswer } = useChatGPT();
   * generateAnswer("Hello");
   * console.log(answer);
   * // => "Hello"
   */
  const generateAnswer = async (query: string) => {
    // const helpWith = localStorage.getItem("helpWith");
    // const issueRelatedTo = localStorage.getItem("issueRelatedTo");
    // const apiGroup = localStorage.getItem("apiGroup");
    // setUserTags([helpWith, issueRelatedTo, apiGroup]);
    // console.log({ helpWith, issueRelatedTo });
    const storedMessagesString = localStorage.getItem(chatHistoryKey);
    const storedMessages: Message[] = storedMessagesString
      ? JSON.parse(storedMessagesString)
      : [];

    const localMessages: Message[] = [
      {
        role: "system",
        content:
          "You are a helpful Moralis AI assistant who answers questions after reading data from moralis articles or moralis API endpoints data. \
Before answering any questions always changes the available related articles to get more updated data. This is a strict requirement.\
If the question is related to Moralis account then look into articles list and articles data for more information. If the question is related to Moralis API or anything technial then first look into API articles and get more information accordingly.\
When answering dont mention that you are referring the data from somewhere. Answer it like you know about it.\
Dont mention about something that user did not ask.\
Most importanly dont ever mention about depriciated service like Moralis serverUrl, appId. The latest way is to use apiKey. Dont mention to user anything about the internal functions used. \
If you did not find the required answer you convey that to the user and ask them to contact hello@moralis.io.",
      },
      // {
      //   role: "user",
      //   content: query,
      // },
    ];

    const userMessage: Message = {
      role: "user",
      content:
        "Can you answer " +
        query +
        ". check the articles list and read the article data to get the correct and updated details. If you find an article data only provide relevant data from the article after reading it carefully.",
    };
    storedMessages.push(userMessage); // Add the user's message to the history
    storedMessages.length > 4
      ? localMessages.push(...[storedMessages[0], ...storedMessages.slice(-3)])
      : localMessages.push(...storedMessages); // Add the user's message to the history

    console.log({ localMessages });
    setDone(false);
    setUserQuery(query);
    setLoading(true);
    setAnswer("");
    setError(null);

    try {
      const gptResponse = await fetch("/api/gpt-moralis-bot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: localMessages,
        }),
      });

      if (!gptResponse.ok) {
        throw new Error("Failed to get a response from the Moralis bot.");
      }

      const reader = gptResponse.body.getReader();
      const decoder = new TextDecoder();

      let fullResponse = "";

      // eslint-disable-next-line no-constant-condition
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          // Once done, decode any remaining text that was streamed
          fullResponse += decoder.decode();
          break;
        }
        // Stream option should not be set here since we are manually concatenating
        const textChunk = decoder.decode(value);
        fullResponse += textChunk;
        setAnswer((prev) => prev + textChunk);
      }

      // After the loop, push the combined full response as a single message
      localMessages.push({
        role: "assistant",
        content: fullResponse,
      });
      console.log({ localMessages });
      setDone(true);
    } catch (e) {
      console.error(e);
      setError(e.message);
      await sendToSlack({
        title: query,
        description: "",
        tags: userTags,
        error: e.message,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (done) {
      sendToSlack({
        title: userQuery,
        description: answer,
        tags: userTags,
      });
    }
  }, [done]);

  return { answer, generateAnswer, loading, error, reset };
};

export default useChatGPTBot;
