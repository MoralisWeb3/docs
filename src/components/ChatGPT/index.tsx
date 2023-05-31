import React, { useState } from "react";
import { Button } from "@site/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@site/src/components/ui/dialog";
import ChatGPTLogo from "@site/static/img/chatgpt.webp";
import useChatGPT from "@site/src/hooks/useChatGPT";
import ReactMarkdown from "react-markdown";
import { ScrollArea } from "@site/src/components/ui/scroll-area";
import { Avatar, AvatarImage } from "@site/src/components/ui/avatar";
import { Microscope, Bot } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@site/src/components/ui/alert";
import remarkGfm from "remark-gfm";

export default function ChatGPT() {
  const [query, setQuery] = useState<string>("");
  const { answer, generateAnswer, loading } = useChatGPT();

  const suggetions = [
    "How do I get started with Moralis in NodeJS?",
    "What chains does Moralis support?",
    "How do I get an API key?",
    "How do I get the top ERC20 tokens by market cap?",
    "How do I get NFTs owned by an address?",
    "How do I get the top NFT collections by market cap?",
  ];

  const handleSuggestion = (e) => {
    setQuery(e.target.innerHTML);
    generateAnswer(e.target.innerHTML);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Avatar>
          <AvatarImage src={ChatGPTLogo} alt="ChatGPT" />
        </Avatar>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[768px] sm:min-h-[400px] sm:max-h-screen">
        <div className="flex flex-col h-full">
          <div className="flex-none">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                generateAnswer(query);
              }}
            >
              <label
                htmlFor="search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Bot className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="search"
                  id="search"
                  className="block mb-4 w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ask any question about Moralis"
                  required
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Ask
                </button>
              </div>
            </form>
          </div>
          <div className="sm:min-h-[300px] sm:max-h-[300px] w-full mb-4">
            {!query && (
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-4">
                  Some questions to try
                </p>
                {suggetions.map((suggetion, index) => {
                  return (
                    <Button
                      key={index}
                      variant="subtle"
                      size="sm"
                      className="mr-3 mb-3"
                      onClick={handleSuggestion}
                    >
                      {suggetion}
                    </Button>
                  );
                })}
              </div>
            )}
            {query && (
              <ScrollArea className="h-full w-full rounded-md border p-4">
                {loading && (
                  <div
                    role="status"
                    className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {answer}
                </ReactMarkdown>
              </ScrollArea>
            )}
          </div>
          <div className="flex-none">
            <Alert>
              <Microscope className="h-4 w-4" />
              <AlertTitle>
                Moralis AI is experimental and may produce incorrect answers.
              </AlertTitle>
              <AlertDescription>
                Always verify the output before executing.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
