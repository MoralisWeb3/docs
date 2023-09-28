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

      const localMessages = [
        {
          role: "system",
          content:
            "You are a helpful assistant. \
You only use the data from the functions you have been provided with.\
The end user is a beginner programmer so always try to keep it simple and always use short sentence and bullet points where required.",
        },
      ]; // Use a local variable instead of state

      const userMessage = { role: "user", content: query };
      localMessages.push(userMessage);
      const response = await fetch("/api/gpt-preprocess", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
        }),
      });

      if (!response.ok) {
        console.error(response.statusText);
      }

      const { prompt, functionName } = await response.json();

      const assistantMessage = {
        role: "function",
        name: functionName,
        content: prompt,
      };
      localMessages.push(assistantMessage);
      const answer = await fetch("/api/gpt-search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: localMessages,
        }),
      });

      const data = answer.body;
      if (!data) {
        return;
      }

      setLoading(false);

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
      setLoading(false);
    }
  };

  return { answer, generateAnswer, loading };
};

export default useChatGPT;
