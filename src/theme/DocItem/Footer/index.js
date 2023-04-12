import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/theme-common/internal";
import LastUpdated from "@theme/LastUpdated";
import EditThisPage from "@theme/EditThisPage";
import TagsListInline from "@theme/TagsListInline";
import styles from "./styles.module.css";
import { HiPlusCircle } from "react-icons/hi";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

function TagsRow(props) {
  return (
    <div
      className={clsx(
        ThemeClassNames.docs.docFooterTagsRow,
        "row margin-bottom--sm"
      )}
    >
      <div className="col">
        <TagsListInline {...props} />
      </div>
    </div>
  );
}
function EditMetaRow({
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
  formattedLastUpdatedAt,
}) {
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
  const {
    editUrl,
    lastUpdatedAt,
    formattedLastUpdatedAt,
    lastUpdatedBy,
    tags,
  } = metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
  if (!canDisplayFooter) {
    return null;
  }

  const handleClick = (choice) => () => {
    fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ choice: choice }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <footer
      className={clsx(ThemeClassNames.docs.docFooter, "docusaurus-mt-lg")}
    >
      <hr />
      {canDisplayTagsRow && <TagsRow tags={tags} />}
      <div className="row">
        <div className="col col--4">
          <div className="font-bold mb-2">Need support?</div>
          <p>
            Questions? Problems? Need more info? Contact our Support for
            assitance!
          </p>
          <a
            className="button button--sm button--outline button--secondary margin-right--sm"
            href="https://moralis.io/contact-support/"
            target="_blank"
          >
            Contact Support
          </a>
        </div>
        <div className="col col--4">
          <div className="font-bold mb-2">Help improve these docs!</div>
          {canDisplayEditMetaRow && (
            <EditMetaRow
              editUrl={editUrl}
              lastUpdatedAt={lastUpdatedAt}
              lastUpdatedBy={lastUpdatedBy}
              formattedLastUpdatedAt={formattedLastUpdatedAt}
            />
          )}
          <a
            href="https://segment.com/docs/"
            target="_blank"
            rel="noreferrer noopener"
            className="theme-edit-this-page"
          >
            <HiPlusCircle className="mr-2" />
            Request docs change
          </a>
        </div>
        <div className="col col--4">
          <div className="font-bold mb-2">Was this page helpful?</div>
          <button
            className="button button--md button--outline button--primary margin-right--sm"
            onClick={handleClick("yes")}
          >
            <FiThumbsUp className="mr-2" />
            Yes
          </button>
          <button
            className="button button--md button--outline button--primary"
            onClick={handleClick("no")}
          >
            <FiThumbsDown className="mr-2" />
            No
          </button>
        </div>
      </div>
      <hr />
    </footer>
  );
}
