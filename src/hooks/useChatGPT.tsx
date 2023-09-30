import { set } from "lodash";
import { useState } from "react";

// Create JSDoc for useChatGPT hook
/**
 * @title useChatGPT
 * @description useChatGPT hook
 *
 * @returns {answer, generateAnswer}
 */
const useChatGPT = () => {
  const [answer, setAnswer] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const preprocessQuery = async (messages: any[]) => {
    const response = await fetch("/api/gpt-preprocess", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to preprocess the query.");
    }

    return await response.json();
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
    try {
      setAnswer("");
      setLoading(true);
      setError(null);

      type messages = {
        role: "function" | "system" | "user" | "assistant";
        name?: string;
        content: string;
      };

      const localMessages: messages[] = [
        {
          role: "system",
          content:
            "You are a helpful Moralis AI assistant who reads data from moralis articles. \
You only use the data from the functions you have been provided with",
        },
      ];

      const userMessage = {
        role: "user",
        content: "Moralis question: " + query,
      } as const;
      localMessages.push(userMessage);

      let { prompt, functionName } = await preprocessQuery(localMessages);

      while (functionName === "get_moralis_articles_list") {
        const assistantMessage: messages = {
          role: "function",
          name: functionName,
          content: JSON.stringify(prompt),
        };
        localMessages.push(assistantMessage);

        const newResponse = await preprocessQuery(localMessages);
        prompt = newResponse.prompt;
        functionName = newResponse.functionName;
        const newMessage: messages = {
          role: "function",
          name: functionName,
          content: prompt,
        };
        localMessages.push(newMessage);
      }

      // Remove the response of get_moralis_articles_list from the localMessages array
      const indexToRemove = localMessages.findIndex(
        (message) => message.name === "get_moralis_articles_list"
      );
      if (indexToRemove !== -1) {
        localMessages.splice(indexToRemove, 1);
      }
      console.log("here");
      const answer = await fetch("/api/gpt-search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: localMessages,
        }),
      });
      console.log({ answer });
      if (!answer.ok) {
        throw new Error("Failed to get an answer from GPT.");
      }

      const data = answer.body;
      if (!data) {
        throw new Error("No data received from GPT.");
      }

      const reader = data.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        setAnswer((prev) => prev + chunkValue);
      }
    } catch (e) {
      console.error(e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { answer, generateAnswer, loading, error };
};

export default useChatGPT;
