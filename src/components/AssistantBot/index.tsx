// src/components/ChatGPTBot/index.tsx

import React, { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@site/src/components/ui/dialog";
import EmailInputDialog from "../ui/EmailInputDialog";
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
  const { answer, generateAnswer, loading, reset, error } = useAssistantBot();
  const [messages, setMessages] = useState<Message[]>([]);
  const [threadId, setThreadId] = useState(null);
  const [status, setStatus] = useState("");
  const [botError, SetBotError] = useState("");

  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (error) {
      SetBotError(error);
    }
  }, [error]);

  // Function to set data with an expiration time
  function setWithExpiry(key, value, ttl) {
    const now = new Date();
    // 'item' is an object which contains the original value as well as the expiration time
    const item = {
      value: value,
      expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
  }

  // Function to get data with checking the expiration time
  function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key);
    // If the item doesn't exist, return null
    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    // Compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
      // If the item is expired, delete the item from storage and return null
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  }

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
        console.log(response.json());
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      localStorage.setItem("thread_id", data.id); // Save thread ID to local storage
      setWithExpiry("chatExpired", "valid", 24 * 60 * 60 * 1000); // Set the expiry to 24 hours
      setStatus("");
      setThreadId(data.id); // Save thread ID to state
    } catch (error) {
      console.error("Failed to fetch thread ID:", error);
    }
  }
  async function deleteThreadId() {
    const storedThreadId = localStorage.getItem("thread_id");
    try {
      setStatus("Resetting...");
      if (storedThreadId) {
        const response = await fetch(
          `/api/moralis-assistant-thread-delete?thread_id=${storedThreadId}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          setStatus("Failed to reset. Please reload the page.");
          handleReset();
          // throw new Error("Network response was not ok");
        }
      }
      await fetchThreadId();
    } catch (error) {
      console.error("Failed to fetch thread ID:", error);
    }
  }

  useEffect(() => {
    const chatExpired = getWithExpiry("chatExpired");
    if (chatExpired) {
      // Check if the thread_id is already saved in local storage
      const storedThreadId = localStorage.getItem("thread_id");
      if (!storedThreadId) {
        fetchThreadId(); // Fetch and save thread ID if not already saved
      } else {
        setThreadId(storedThreadId); // Use the saved thread ID
      }
    } else {
      deleteThreadId();
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
    if (threadId && open) {
      fetchMessages();
    }
  }, [threadId, open]);

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

  const [isEmailDialogOpen, setEmailDialogOpen] = useState(false);

  const openEmailDialog = () => {
    if (!localStorage.getItem("userEmail")) {
      setEmailDialogOpen(true);
    }
  };

  useEffect(() => {
    openEmailDialog();
  }, []);

  const closeEmailDialog = () => {
    setEmailDialogOpen(false);
    if (!localStorage.getItem("userEmail")) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      openEmailDialog();
    }
  }, [open]);

  return (
    <>
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
              <h2 className="text-2xl font-semibold text-white">
                Chat with AI
              </h2>
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
                {error && (
                  <div className="flex items-start w-5/6">
                    <Avatar className="flex-shrink-0">
                      <AvatarImage
                        src={ChatGPTLogo}
                        alt="ChatGPT"
                        className="w-8 h-8"
                      />
                    </Avatar>
                    <div className="ml-4 bg-slate-300 dark:bg-slate-600 p-2 rounded-lg">
                      <p className="text-sm dark:text-orange-400 mb-0">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          Error occured in answering. Please refresh the page or
                          contact customer support.
                        </ReactMarkdown>
                      </p>
                    </div>
                  </div>
                )}
                {messages && (
                  <div ref={messagesEndRef} onLoad={scrollToBottom} />
                )}
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
                      Moralis AI is experimental can give wrong or outdated
                      data.
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
      <EmailInputDialog
        isOpen={open && isEmailDialogOpen}
        onClose={closeEmailDialog}
      />
    </>
  );
}
