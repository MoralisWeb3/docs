import React, { useEffect, useState } from "react";
import { Button } from "@site/src/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@site/src/components/ui/dialog";
import ChatGPTLogo from "@site/static/img/chatgpt.webp";
import useChatGPT from "@site/src/hooks/useChatGPT";
import ReactMarkdown from "react-markdown";
import { ScrollArea } from "@site/src/components/ui/scroll-area";
import { Avatar, AvatarImage } from "@site/src/components/ui/avatar";
import { Microscope, Bot, RotateCcw } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@site/src/components/ui/alert";
import remarkGfm from "remark-gfm";

export default function ChatGPT() {
    const [query, setQuery] = useState<string>("");
    const { answer, generateAnswer, loading, error, reset } = useChatGPT();
    const [rows, setRows] = useState(1);
    const [helpWith, setHelpWith] = useState("");
    const [issueRelatedTo, setIssueRelatedTo] = useState("");
    const [apiGroup, setApiGroup] = useState("");
    const [showInput, setShowInput] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleTextChange = (e) => {
        setQuery(e.target.value);
        const numOfLineBreaks = (e.target.value.match(/\n/g) || []).length;
        // Minimum rows = 1, Maximum rows = 6
        setRows(Math.min(Math.max(numOfLineBreaks + 1, 1), 6));
    };
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

    useEffect(() => {
        // Retrieve data from local storage on component mount
        const storedHelpWith = localStorage.getItem("helpWith");
        const storedIssueRelatedTo = localStorage.getItem("issueRelatedTo");
        const storedApiGroup = localStorage.getItem("apiGroup");
        if (
            storedHelpWith &&
            ((storedIssueRelatedTo && storedIssueRelatedTo !== "API") || storedApiGroup)
        ) {
            setHelpWith(storedHelpWith);
            setIssueRelatedTo(storedIssueRelatedTo);
            setApiGroup(storedApiGroup);
            setShowInput(true); // Show input if answers are stored
        }
    }, []);

    const handleReset = () => {
        // Clear local storage and reset states
        localStorage.removeItem("helpWith");
        localStorage.removeItem("issueRelatedTo");
        localStorage.removeItem("apiGroup");
        setHelpWith("");
        setIssueRelatedTo("");
        setApiGroup("");
        setShowInput(false);
        reset();
    };

    const handleSubmit = () => {
        // Save answers to local storage and show input
        localStorage.setItem("helpWith", helpWith);
        localStorage.setItem("issueRelatedTo", issueRelatedTo);
        localStorage.setItem("apiGroup", apiGroup);
        setShowInput(true);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Avatar>
                    <AvatarImage src={ChatGPTLogo} alt="ChatGPT" />
                </Avatar>
            </DialogTrigger>
            <DialogContent
                className={` ${
                    showInput ? "min-w-[60vw] h-[80vh]" : "min-w-[40vw] h-[80vh]"
                }  flex flex-col items-stretch`}
            >
                {!showInput ? (
                    // Preliminary Questions Section
                    // <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center pointer-events-none">
                    <div className="bg-slate-900 p-8 rounded-lg shadow-lg w-full max-w-2xl pointer-events-auto h-full">
                        <h2 className="text-2xl font-semibold mb-4 text-white">
                            Moralis AI bot here to help!
                        </h2>
                        <br />
                        <div className="mb-4">
                            <label
                                htmlFor="helpWith"
                                className="block text-lg font-medium mb-2 text-white"
                            >
                                What do you need help with?
                            </label>
                            <select
                                id="helpWith"
                                value={helpWith}
                                onChange={(e) => setHelpWith(e.target.value)}
                                className="w-full p-3 border rounded text-lg"
                            >
                                <option value="">Select...</option>
                                <option value="Moralis">Moralis</option>
                                <option value="Moralis Money">Moralis Money</option>
                                <option value="Moralis Academy">Moralis Academy</option>
                            </select>
                        </div>
                        {helpWith && (
                            <div className="mb-4">
                                <label
                                    htmlFor="issueRelatedTo"
                                    className="block text-lg font-medium mb-2 text-white"
                                >
                                    What is the issue related to?
                                </label>
                                <select
                                    id="issueRelatedTo"
                                    value={issueRelatedTo}
                                    onChange={(e) => setIssueRelatedTo(e.target.value)}
                                    className="w-full p-3 border rounded text-lg"
                                >
                                    <option value="">Select...</option>
                                    <option value="account">Account</option>
                                    <option value="billing">Billing</option>
                                    {helpWith === "Moralis" && (
                                        <option value="API">API or Sdk</option>
                                    )}
                                </select>
                            </div>
                        )}
                        {issueRelatedTo === "API" && (
                            <div className="mb-4">
                                <label
                                    htmlFor="issueRelatedTo"
                                    className="block text-lg font-medium mb-2 text-white"
                                >
                                    What is the API category?
                                </label>
                                <select
                                    id="issueRelatedTo"
                                    value={apiGroup}
                                    onChange={(e) => setApiGroup(e.target.value)}
                                    className="w-full p-3 border rounded text-lg"
                                >
                                    <option value="">Select...</option>
                                    <option value="EvmApi">EVM API</option>
                                    <option value="AptosApi">Aptos API</option>
                                    <option value="SolApi">Solana API</option>
                                    <option value="Auth">Auth API</option>
                                    <option value="Streams">Streams API</option>
                                </select>
                            </div>
                        )}
                        {((issueRelatedTo && issueRelatedTo !== "API") || apiGroup) && (
                            <div className="flex items-center justify-center">
                                <button
                                    onClick={handleSubmit}
                                    className="bg-blue-500 text-white py-2 px-4 rounded text-lg"
                                >
                                    Continue
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    // </div>

                    <>
                        {/* Main Question Input Section */}
                        <div className="flex flex-col h-full">
                            <div className="flex-none p-0 border-b border-gray-200 dark:border-gray-700 flex flex-start items-center">
                                <div className="flex flex-row items-center">
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
                                        Help With: <strong>{helpWith}</strong>
                                    </p>
                                    &emsp;
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
                                        Issue Related To: <strong>{issueRelatedTo}</strong>
                                    </p>
                                    {apiGroup && (
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
                                            &emsp; API Category: <strong>{apiGroup}</strong>
                                        </p>
                                    )}
                                </div>
                                &emsp;
                                <button
                                    onClick={handleReset}
                                    className="text-white inline-flex items-center" // Adjusted padding and added flex
                                >
                                    <RotateCcw size={20} /> {/* Added icon */}
                                    {/* <span className="text-xs">Reset</span>  */}
                                    {/* Smaller text */}
                                </button>
                            </div>
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
                                <div className="relative mb-2">
                                    <div className="absolute inset-y-0 left-0 p-4 flex items-start pointer-events-none">
                                        <Bot className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                    </div>
                                    <textarea
                                        id="search"
                                        className="block mb-4 w-full p-4 pl-10 pr-15 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
                                        placeholder="Type precise question of what you want.."
                                        required
                                        value={query}
                                        onChange={handleTextChange}
                                        rows={rows}
                                        disabled={!showInput}
                                    />
                                    <button
                                        type="submit"
                                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        disabled={!showInput}
                                    >
                                        Ask
                                    </button>
                                </div>
                            </form>
                            {/* </div> */}
                            <div className="flex-grow overflow-y-auto pt-0 pb-0">
                                {!query && (
                                    <div className="mb-2">
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
                                            {!error ? answer : error}
                                        </ReactMarkdown>
                                    </ScrollArea>
                                )}
                            </div>
                            <div className="flex justify-between items-center p-4">
                                <Alert
                                    button={
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
                                    }
                                >
                                    <Microscope className="h-4 w-4" color="yellow" />
                                    &emsp;
                                    <div>
                                        <AlertTitle>
                                            Moralis AI is experimental and may produce incorrect
                                            answers.
                                        </AlertTitle>
                                        <AlertDescription>
                                            Always verify the output before executing or contact
                                            customer support if you are not sure.
                                        </AlertDescription>
                                    </div>
                                </Alert>
                            </div>
                        </div>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}
