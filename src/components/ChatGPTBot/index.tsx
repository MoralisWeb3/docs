// src/components/ChatGPTBot/index.tsx

import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@site/src/components/ui/dialog";
import ChatGPTLogo from "@site/static/img/chatgpt.webp";
import useChatGPTBot from "@site/src/hooks/useChatGPTBot";
import { Avatar, AvatarImage } from "@site/src/components/ui/avatar";
import { ScrollArea } from "@site/src/components/ui/scroll-area";
import { Microscope, Bot, RotateCcw } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@site/src/components/ui/alert";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Message = {
    role: "user" | "assistant";
    content: string;
};

const chatHistoryKey = "chatHistory";

export default function ChatGPTBot() {
    const [query, setQuery] = useState("");
    const { answer, generateAnswer, loading, reset } = useChatGPTBot();
    const [messages, setMessages] = useState<Message[]>([]);
    const [helpWith, setHelpWith] = useState("");
    const [issueRelatedTo, setIssueRelatedTo] = useState("");
    const [apiGroup, setApiGroup] = useState("");
    const [showInitialOptions, setShowInitialOptions] = useState(true);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (answer) {
            setMessages((currentMessages) => {
                const isLastMessageBot =
                    currentMessages.length > 0 &&
                    currentMessages[currentMessages.length - 1].role === "assistant";

                // Check if the last bot message already has the same text
                const isDuplicate =
                    isLastMessageBot &&
                    currentMessages[currentMessages.length - 1].content === answer;

                if (isLastMessageBot && loading && !isDuplicate) {
                    // Update the last message if it's not a duplicate
                    return currentMessages
                        .slice(0, -1)
                        .concat([{ content: answer, role: "assistant" }]);
                } else if (!isLastMessageBot && !isDuplicate) {
                    // Add a new message if the last message isn't from the bot and it's not a duplicate
                    return [...currentMessages, { content: answer, role: "assistant" }];
                }
                // If it's a duplicate, return the current messages without any change
                localStorage.setItem(chatHistoryKey, JSON.stringify(messages));
                return currentMessages;
            });
        }
    }, [answer, loading]);

    // Load chat history from local storage
    useEffect(() => {
        const storedMessages = localStorage.getItem(chatHistoryKey);
        if (storedMessages) {
            setMessages(JSON.parse(storedMessages));
        } else {
            // If no chat history, start with a welcome message
            const welcomeMessage: Message = {
                role: "assistant",
                content: "Hi, I am a Moralis AI bot. How can I help you?",
            };
            setMessages([welcomeMessage]);
        }
        if (!storedMessages) {
            setShowInitialOptions(true);
        }
    }, []);

    // Effect to handle option selection changes
    useEffect(() => {
        if (helpWith === "account" || helpWith === "billing") {
            // Enable input for 'account' or 'billing'
            setShowInitialOptions(false);
            // Possibly show input box here or handle it where the form is rendered
        } else if (helpWith === "API") {
            // Ask about the API
            const apiQuestion: Message = {
                role: "assistant",
                content: "Which API do you have an issue with?",
            };
            setMessages([...messages, apiQuestion]);
            // You would then handle the selection of these APIs in a similar manner to the initial options
        }
    }, [helpWith]);

    // Save selections to local storage
    useEffect(() => {
        localStorage.setItem("helpWith", helpWith);
        localStorage.setItem("apiGroup", apiGroup);
    }, [helpWith, apiGroup]);

    // Restore selections from local storage
    useEffect(() => {
        const storedHelpWith = localStorage.getItem("helpWith");
        const storedApiGroup = localStorage.getItem("apiGroup");
        if (storedHelpWith) {
            setHelpWith(storedHelpWith);
            setShowInitialOptions(false); // Hide initial options if there's a stored selection
        }
        if (storedApiGroup) setApiGroup(storedApiGroup);
    }, []);

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
        const welcomeMessage: Message = {
            role: "assistant",
            content: "Hi, I am a Moralis AI bot. How can I help you?",
        };
        setMessages([welcomeMessage]);
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
                                                        {message.content}
                                                    </ReactMarkdown>
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="bg-blue-500 p-2 rounded-lg">
                                            <p className="text-white mb-0">
                                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                    {message.content}
                                                </ReactMarkdown>
                                            </p>
                                            {!helpWith && (
                                                <>
                                                    <p className="text-white mb-0">
                                                        I need help with:
                                                    </p>
                                                    <div className="flex space-x-2 mt-2 justify-end">
                                                        {/* Options aligned to the right */}
                                                        <button
                                                            onClick={() => setHelpWith("Account")}
                                                            className="btn"
                                                        >
                                                            Account
                                                        </button>
                                                        <button
                                                            onClick={() => setHelpWith("Billing")}
                                                            className="btn"
                                                        >
                                                            Billing
                                                        </button>
                                                        <button
                                                            onClick={() => setHelpWith("API")}
                                                            className="btn"
                                                        >
                                                            API
                                                        </button>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {loading && (
                                <div className="flex justify-center">
                                    <div>Loading...</div>
                                </div>
                            )}
                        </div>
                    </ScrollArea>
                    {!showInitialOptions && (
                        <div className="p-4 flex-none">
                            <form onSubmit={handleUserSubmit} className="flex items-center">
                                <input
                                    type="text"
                                    className="w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Type your message here..."
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
                    )}
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
