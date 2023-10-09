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

  const removeDuplicateMessages = (messages) => {
    const seen = new Set();
    return messages.filter((message) => {
      const duplicateCheck = `${message.name}-${message.content}`;
      if (!seen.has(duplicateCheck)) {
        seen.add(duplicateCheck);
        return true;
      }
      return false;
    });
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
    const helpWith = localStorage.getItem("helpWith");
    const issueRelatedTo = localStorage.getItem("issueRelatedTo");
    const apiGroup = localStorage.getItem("apiGroup");

    console.log({ helpWith, issueRelatedTo });

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
            "You are a helpful Moralis AI assistant who answers questions after reading data from moralis articles or moralis API endpoints data. \
You only use the data from the functions you have been provided with to avoid outdated resposnes. This is a strict requirement. \
If you did not find the required answer you convey that to the user and ask them to contact hello@moralis.io.",
        },
      ];

      const userMessage = {
        role: "user",
        content:
          `Moralis question: Can you check the ${
            issueRelatedTo === "API"
              ? `Moralis API ${apiGroup} endpoints and API articles`
              : "Moralis articles"
          } for the ${
            helpWith + " " + issueRelatedTo
          } question to get the closest answer for ` +
          query +
          `. ${
            issueRelatedTo === "API"
              ? `Check for available ${apiGroup} endpoints list, API articles list and then get the endpoint or article data. If possible try proving a code example as per the question.`
              : "."
          }`,
      } as const;
      localMessages.push(userMessage);

      let { prompt, functionName, usage } = await preprocessQuery(
        localMessages
      );
      console.log({ usage });

      while (
        functionName === "get_moralis_articles_list" ||
        functionName === "get_moralis_api_endpoints_list" ||
        functionName === "get_moralis_api_articles_list"
      ) {
        const assistantMessage: messages = {
          role: "function",
          name: functionName,
          content: JSON.stringify(prompt),
        };
        localMessages.push(assistantMessage);

        // Create a copy of localMessages and remove duplicates from the copy
        console.log("local messages lenght: ", localMessages.length);
        const uniqueLocalMessages = removeDuplicateMessages([...localMessages]);
        console.log("unique messages lenght: ", uniqueLocalMessages.length);
        console.log(uniqueLocalMessages);

        // const index_of_article = uniqueLocalMessages.indexOf(
        //   uniqueLocalMessages.find((i) => {
        //     return i.name === "get_moralis_articles_list";
        //   })
        // );
        // const index_of_api = uniqueLocalMessages.indexOf(
        //   uniqueLocalMessages.find((i) => {
        //     return i.name === "get_moralis_api_endpoints_list";
        //   })
        // );

        // if (index_of_article !== -1 && index_of_api !== -1) {
        //   uniqueLocalMessages.splice(
        //     Math.min(index_of_article, index_of_api),
        //     1
        //   );
        // }

        // Use the copy (uniqueLocalMessages) as a parameter
        const newResponse = await preprocessQuery(uniqueLocalMessages);
        prompt = newResponse.prompt;
        functionName = newResponse.functionName;
        usage = newResponse.usage;
        console.log({ usage });
        const newMessage: messages = {
          role: "function",
          name: functionName,
          content: JSON.stringify(prompt),
        };
        localMessages.push(newMessage);
      }
      // Remove the response of get_moralis_articles_list and get_moralis_api_endpoints_list from the localMessages array
      if (functionName !== "assistant") {
        const filteredMessages = localMessages.filter(
          (message) =>
            message.name !== "get_moralis_articles_list" &&
            message.name !== "get_moralis_api_endpoints_list" &&
            message.name !== "get_moralis_api_articles_list"
        );

        const answer = await fetch("/api/gpt-search", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: filteredMessages,
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
      } else {
        console.log("here");
        console.log({ prompt });
        setAnswer(prompt.content);
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
