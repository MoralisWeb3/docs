// src/components/ChatGPTBot/index.tsx

import React, { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@site/src/components/ui/dialog";
import ChatGPTLogo from "@site/static/img/chatgpt.webp";
import useAssistantBot from "@site/src/hooks/useAssistantBot";
import { Avatar, AvatarImage } from "@site/src/components/ui/avatar";
import { ScrollArea } from "@site/src/components/ui/scroll-area";
import { Microscope, Bot, RotateCcw } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@site/src/components/ui/alert";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const chatHistoryKey = "chatHistory";

export default function AssistantBot() {
  const [query, setQuery] = useState("");
  const { answer, generateAnswer, loading, reset } = useAssistantBot();
  const [messages, setMessages] = useState<Message[]>([]);
  const [threadId, setThreadId] = useState(null);
  const [status, setStatus] = useState("");

  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (messages.length > 0 && messagesEndRef.current) scrollToBottom();
  }, [messages]);
  function cleanMessage(message) {
    // This regex matches the pattern with an opening bracket, any characters, and a closing bracket
    // It uses \u3010 and \u3011 which are the unicode points for &#8203;``【oaicite:2】``&#8203; respectively
    const pattern = /\u3010.*?\u3011/g;
    return message.replace(pattern, "");
  }

  async function fetchThreadId() {
    try {
      setStatus("Setting up new conversation...");
      const response = await fetch("/api/moralis-assistant-thread");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      localStorage.setItem("thread_id", data.id); // Save thread ID to local storage
      setStatus("");
      setThreadId(data.id); // Save thread ID to state
    } catch (error) {
      console.error("Failed to fetch thread ID:", error);
    }
  }
  async function deleteThreadId() {
    try {
      setStatus("Resetting...");
      const response = await fetch(
        `/api/moralis-assistant-thread-delete?thread_id=${threadId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        setStatus("Failed to reset. Please reload the page.");
        throw new Error("Network response was not ok");
      }
      await fetchThreadId();
    } catch (error) {
      console.error("Failed to fetch thread ID:", error);
    }
  }
  useEffect(() => {
    // Check if the thread_id is already saved in local storage
    const storedThreadId = localStorage.getItem("thread_id");
    if (!storedThreadId) {
      fetchThreadId(); // Fetch and save thread ID if not already saved
    } else {
      setThreadId(storedThreadId); // Use the saved thread ID
    }
  }, []);

  useEffect(() => {
    if (answer && !loading) {
      // setMessages((currentMessages) => {
      //   const isLastMessageBot =
      //     currentMessages.length > 0 &&
      //     currentMessages[currentMessages.length - 1].role === "assistant";
      //   // Check if the last bot message already has the same text
      //   const isDuplicate =
      //     isLastMessageBot &&
      //     currentMessages[currentMessages.length - 1].content === answer;
      //   if (isLastMessageBot && loading && !isDuplicate) {
      //     // Update the last message if it's not a duplicate
      //     return currentMessages
      //       .slice(0, -1)
      //       .concat([{ content: answer, role: "assistant" }]);
      //   } else if (!isLastMessageBot && !isDuplicate) {
      //     // Add a new message if the last message isn't from the bot and it's not a duplicate
      //     return [...currentMessages, { content: answer, role: "assistant" }];
      //   }
      //   // If it's a duplicate, return the current messages without any change
      //   localStorage.setItem(chatHistoryKey, JSON.stringify(messages));
      //   return currentMessages;
      // });
      setMessages((messages) => [
        ...messages,
        {
          role: "assistant",
          content: answer,
        },
      ]);
    }
  }, [answer, loading]);

  // Load chat history from local storage
  // useEffect(() => {
  //   const storedMessages = localStorage.getItem(chatHistoryKey);
  //   if (storedMessages) {
  //     setMessages(JSON.parse(storedMessages));
  //   } else {
  //     // If no chat history, start with a welcome message
  //     const welcomeMessage: Message = {
  //       role: "assistant",
  //       content: "Hi, I am a Moralis AI bot. How can I help you?",
  //     };
  //     setMessages([welcomeMessage]);
  //   }
  // }, []);

  async function fetchMessages() {
    console.log("fetching messages..");
    setStatus("Fetching messages...");
    const welcomeMessage: Message = {
      role: "assistant",
      content: "Hi, I am a Moralis AI bot. How can I help you?",
    };
    try {
      const response = await fetch(
        `/api/moralis-assistant-messages?thread_id=${threadId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = (await response.json()) as Message[];
      // console.log({ data });
      setMessages(data);
      setMessages([welcomeMessage, ...data]);
      setStatus("");
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  }
  useEffect(() => {
    if (threadId) {
      fetchMessages();
    }
  }, [threadId]);

  // Save chat history to local storage
  useEffect(() => {
    localStorage.setItem(chatHistoryKey, JSON.stringify(messages));
  }, [messages]);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleReset = () => {
    reset();
    // localStorage.removeItem(chatHistoryKey); // Clear the chat history in local storage
    setQuery("");
    setMessages([]);
    deleteThreadId();
  };

  const handleUserSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage: Message = {
      role: "user",
      content: query,
    };
    setMessages([...messages, userMessage]);
    generateAnswer(query);
    setQuery("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Avatar>
          <AvatarImage src={ChatGPTLogo} alt="ChatGPT" />
        </Avatar>
      </DialogTrigger>
      <DialogContent
        aria-label="Chat with AI"
        className="fixed inset-x-0 top-10 bottom-10 mx-auto flex justify-center items-center p-4"
        style={{ minWidth: "60vw" }} // Set the inline style for large screens
      >
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg flex flex-col w-full max-w-5xl h-full my-8">
          <div className="p-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">Chat with AI</h2>
            <button
              onClick={handleReset}
              className="text-white inline-flex items-center"
            >
              <RotateCcw size={20} className="mr-2 text-white" />
              Reset
            </button>
          </div>
          <ScrollArea className="flex-grow overflow-y-auto">
            <div className="flex flex-col p-4 space-y-2">
              {/* Reduced space between messages */}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "assistant"
                      ? "justify-start"
                      : "justify-end"
                  }`}
                >
                  {message.role === "assistant" ? (
                    <div className="flex items-start w-5/6">
                      <Avatar className="flex-shrink-0">
                        <AvatarImage
                          src={ChatGPTLogo}
                          alt="ChatGPT"
                          className="w-8 h-8"
                        />
                      </Avatar>
                      <div className="ml-4 bg-slate-300 dark:bg-slate-600 p-2 rounded-lg">
                        <p className="text-sm dark:text-white mb-0">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {cleanMessage(message.content)}
                          </ReactMarkdown>
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-blue-500 p-2 rounded-lg max-w-4/6">
                      <p className="text-white mb-0">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {cleanMessage(message.content)}
                        </ReactMarkdown>
                      </p>
                    </div>
                  )}
                </div>
              ))}
              {loading && (
                <div className="flex items-start w-5/6">
                  <Avatar className="flex-shrink-0">
                    <AvatarImage
                      src={ChatGPTLogo}
                      alt="ChatGPT"
                      className="w-8 h-8"
                    />
                  </Avatar>
                  <div className="ml-4 bg-slate-300 dark:bg-slate-600 p-2 rounded-lg">
                    <p className="text-sm dark:text-white mb-0">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        Loading...
                      </ReactMarkdown>
                    </p>
                  </div>
                </div>
              )}
              {status && (
                <div className="flex justify-center">
                  <div>{status}</div>
                </div>
              )}
              {messages && <div ref={messagesEndRef} onLoad={scrollToBottom} />}
            </div>
          </ScrollArea>
          <div className="p-4 flex-none">
            <form onSubmit={handleUserSubmit} className="flex items-center">
              <input
                type="text"
                className="w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Type your question here..."
                value={query}
                onChange={handleTextChange}
                required
                style={{ minHeight: "50px" }}
              />
              <button
                type="submit"
                className="ml-4 bg-blue-500 text-white py-2 px-4 rounded text-lg"
              >
                Send
              </button>
            </form>
          </div>
          <div className="p-4 flex-none">
            <Alert className="flex items-center justify-between">
              <div className="flex items-center">
                <Microscope className="h-6 w-6 text-yellow-500" />
                &emsp;
                <div>
                  <AlertTitle className="text-sm font-semibold">
                    Moralis AI is experimental.
                  </AlertTitle>
                  <AlertDescription className="text-xs">
                    Verify outputs or contact support if unsure.
                  </AlertDescription>
                </div>
              </div>
              <button
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  setOpen(false);
                  document
                    .getElementsByClassName("intercom-launcher")[0]
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    .click();
                }}
              >
                Contact
              </button>
            </Alert>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
