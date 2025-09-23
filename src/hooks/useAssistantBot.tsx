import OpenAI from "openai";
import { useState, useEffect } from "react";

/**
 * @title useAssistantBot
 * @description useAssistantBot hook
 *
 * @returns {answer, generateAnswer}
 */
const useAssistantBot = () => {
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
    async function createMessageAndRun(threadId, messageContent) {
        const response = await fetch("/api/moralis-assistant-bot", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                thread_id: threadId,
                message_content: messageContent,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Network response was not ok");
        }

        return response.json();
    }

    async function getMessage(threadId, messageId) {
        const response = await fetch(
            `/api/moralis-assistant-message?thread_id=${threadId}&message_id=${messageId}`
        );
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Network response was not ok");
        }
        const data = await response.json();
        return data;
    }

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
        const threadId = localStorage.getItem("thread_id");
        const emailId = localStorage.getItem("userEmail");
        setUserTags([emailId, threadId]);
        setDone(false);
        setUserQuery(query);
        setLoading(true);
        setAnswer("");
        setError(null);

        try {
            const { success, messageId } = await createMessageAndRun(threadId, query);
            if (success) {
                const message = (await getMessage(
                    threadId,
                    messageId
                )) as OpenAI.Beta.Threads.Messages.ThreadMessage;

                // console.log(message);
                // console.log({ content: message.content[0]["text"]["value"] });
                setAnswer(message.content[0]["text"]["value"]);
                setDone(true);
            } else {
                setError("Something went wrong. Try again");
            }
        } catch (e) {
            // console.error(e);
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

export default useAssistantBot;
