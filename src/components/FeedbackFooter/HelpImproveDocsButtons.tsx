import React from "react";
import Translate from "@docusaurus/Translate";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { MdEditDocument } from "react-icons/md";
import { HiPlusCircle } from "react-icons/hi";

const HelpImproveDocsButton = ({ editUrl }) => {
  return (
    <>
      <a
        href={editUrl}
        target="_blank"
        rel="noreferrer noopener"
        className={ThemeClassNames.common.editThisPage}
      >
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <MdEditDocument />
          <Translate
            id="theme.common.editThisPage"
            description="The link label to edit the current page"
          >
            Edit this page
          </Translate>
        </div>
      </a>
      <a
        href="https://github.com/MoralisWeb3/docs/issues/new?title=Feedback%20for%20%E2%80%9CIntroduction%E2%80%9D&labels=feedback"
        target="_blank"
        rel="noreferrer noopener"
        className={ThemeClassNames.common.editThisPage}
      >
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <HiPlusCircle />
          <Translate
            id="theme.common.editThisPage"
            description="The link label to edit the current page"
          >
            Request doc change
          </Translate>
        </div>
      </a>
    </>
  );
};

export default HelpImproveDocsButton;
