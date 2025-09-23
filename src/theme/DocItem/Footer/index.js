import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/theme-common/internal";
import LastUpdated from "@theme/LastUpdated";
import EditThisPage from "@theme/EditThisPage";
import TagsListInline from "@theme/TagsListInline";
import styles from "./styles.module.css";
import { HiPlusCircle, HiPencil } from "react-icons/hi";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { Popover, PopoverContent, PopoverTrigger } from "@site/src/components/ui/popover";
import { Textarea } from "@site/src/components/ui/textarea";
import { Button } from "@site/src/components/ui/button";

function TagsRow(props) {
    return (
        <div className={clsx(ThemeClassNames.docs.docFooterTagsRow, "row margin-bottom--sm")}>
            <div className="col">
                <TagsListInline {...props} />
            </div>
        </div>
    );
}
function EditMetaRow({ editUrl, lastUpdatedAt, lastUpdatedBy, formattedLastUpdatedAt }) {
    return (
        <div className={clsx(ThemeClassNames.docs.docFooterEditMetaRow, "row")}>
            <div className="col">{editUrl && <EditThisPage editUrl={editUrl} />}</div>

            <div className={clsx("col", styles.lastUpdated)}>
                {(lastUpdatedAt || lastUpdatedBy) && (
                    <LastUpdated
                        lastUpdatedAt={lastUpdatedAt}
                        formattedLastUpdatedAt={formattedLastUpdatedAt}
                        lastUpdatedBy={lastUpdatedBy}
                    />
                )}
            </div>
        </div>
    );
}
export default function DocItemFooter() {
    const { metadata } = useDoc();
    const { editUrl, lastUpdatedAt, lastUpdatedBy, tags, permalink } = metadata;
    const canDisplayTagsRow = tags.length > 0;
    const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
    const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
    if (!canDisplayFooter) {
        return null;
    }

    const [status, setStatus] = React.useState("empty");
    const [choice, setChoice] = React.useState("");
    const [message, setMessage] = React.useState("");

    const handleMessageChange = (event) => {
        // 👇️ access textarea value
        setMessage(event.target.value);
    };

    const handleClick = (choice) => () => {
        setChoice(choice);
        setStatus("message");
    };

    const handlePopoverChange = (open) => {
        if (!open) {
            sendMessage();
        }
    };

    const sendMessage = () => {
        setStatus("submitting");

        fetch("/api/feedback", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ choice: choice, message: message }),
        })
            .then((response) => response.json())
            .then((data) => {
                setStatus("success");
            })
            .catch((error) => {
                setStatus("error");
            });
    };

    return (
        <footer className={clsx(ThemeClassNames.docs.docFooter, "docusaurus-mt-lg")}>
            <hr />
            {canDisplayTagsRow && <TagsRow tags={tags} />}
            <div className="row">
                <div className="col col--4 mb-6">
                    <div className="text-xl font-medium mb-2">Need support?</div>
                    <p className="mb-2">
                        Questions? Problems? Need more info? Contact our Support for assitance!
                    </p>
                    <a
                        className="button button--sm button--outline button--secondary margin-right--sm"
                        href="https://moralis.io/contact-support/"
                        target="_blank"
                    >
                        Visit our Support page
                    </a>
                </div>
                <div className="col col--4 mb-6">
                    <div className="text-xl font-medium mb-2">Help improve these docs!</div>
                    {canDisplayEditMetaRow && (
                        <>
                            <a
                                href={`${editUrl}`}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="flex items-center w-full"
                            >
                                <HiPencil className="mr-2" />
                                Edit page
                            </a>
                        </>
                    )}
                    <a
                        href={`https://github.com/MoralisWeb3/docs/issues/new?assignees=&labels=feedback&template=feature_request.md&title=Feature request for: ${permalink}`}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center w-full"
                    >
                        <HiPlusCircle className="mr-2" />
                        Request a change
                    </a>
                </div>
                <div className="col col--4">
                    <div className="text-xl font-medium mb-2">Was this page helpful?</div>
                    <button
                        className={`inline-flex align-top items-center button button--md button--outline mr-2 mb-2 ${
                            choice === "yes" ? "bg-green-500" : "button--primary"
                        }`}
                        onClick={handleClick("yes")}
                        disabled={status !== "empty"}
                    >
                        <FiThumbsUp className="mr-2" />
                        Yes
                    </button>
                    <button
                        className={`inline-flex align-top items-center button button--md button--outline ${
                            choice === "no" ? "bg-gray-500" : "button--primary"
                        }`}
                        onClick={handleClick("no")}
                        disabled={status !== "empty"}
                    >
                        <FiThumbsDown className="mr-2" />
                        No
                    </button>
                    <Popover open={status === "message"} onOpenChange={handlePopoverChange}>
                        <PopoverTrigger
                            className={`flex w-full bg-transparent border-none`}
                        ></PopoverTrigger>
                        <PopoverContent align="start" className={`p-2`}>
                            <Textarea
                                onChange={handleMessageChange}
                                placeholder={`${
                                    choice === "yes"
                                        ? "Great! What did you like?"
                                        : "Sorry to hear that. What can we do better?"
                                }`}
                            />
                            <div className="flex justify-end w-full mt-2">
                                <Button onClick={sendMessage} disabled={status === "submitting"}>
                                    Send
                                </Button>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <div
                        className={`mt-2 ${
                            ["submitting", "success"].includes(status) ? "block" : "hidden"
                        }`}
                    >
                        Thanks for your feedback!
                    </div>
                </div>
            </div>
            <hr />
        </footer>
    );
}
