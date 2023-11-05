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
  const [userTags, setUserTags] = useState<Array<string>>();
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
    setDone(false);
    setUserQuery(query);
    setLoading(true);
    setAnswer("");
    setError(null);

    type Message = {
      role: "system" | "user" | "assistant";
      content: string;
    };

    const localMessages: Message[] = [
      {
        role: "system",
        content:
          "You are a helpful Moralis AI assistant who answers questions after reading data from moralis articles or moralis API endpoints data. \
You only use the data from the functions you have been provided with to avoid outdated resposnes. This is a strict requirement. Most importanly dont ever mention about depriciated service like Moralis serverUrl, appId. The latest way is to use apiKey.  \
If you did not find the required answer you convey that to the user and ask them to contact hello@moralis.io.",
      },
      {
        role: "user",
        content: query,
      },
    ];

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

  const reset = () => {
    setAnswer("");
  };

  useEffect(() => {
    if (done) {
      sendToSlack({
        title: userQuery,
        description: answer,
        tags: userTags,
      });
    }
  }, [done, userQuery, answer, userTags]);

  return { answer, generateAnswer, loading, error, reset };
};

export default useChatGPTBot;
