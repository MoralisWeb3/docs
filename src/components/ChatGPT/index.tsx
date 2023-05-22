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

export default function ChatGPT() {
  const [query, setQuery] = useState<string>("");
  const { answer, generateAnswer } = useChatGPT();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Ask our chat bot</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[768px] sm:min-h-[300px]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            generateAnswer(query);
          }}
        >
          <div className="flex flex-col">
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          </div>
        </form>
        <ReactMarkdown>{answer}</ReactMarkdown>
      </DialogContent>
    </Dialog>
  );
}
