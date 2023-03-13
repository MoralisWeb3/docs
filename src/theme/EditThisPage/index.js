import React from "react";
import Translate from "@docusaurus/Translate";
import { ThemeClassNames } from "@docusaurus/theme-common";
import IconEdit from "@theme/Icon/Edit";

export default function EditThisPage({ editUrl }) {
  return (
    <div style={{ display: "flex", gap: ".5rem", padding: "0.5rem" }}>
      <div style={{ flex: 1 }}>
        <h3>Need support?</h3>
        <p>
          Questions? Problems? Need more info? Contact Segment Support for
          assistance!
        </p>
        <button>Visit our Support Page</button>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <h3>Help improve these docs!</h3>
        <a
          href={editUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={ThemeClassNames.common.editThisPage}
        >
          <IconEdit />
          <Translate
            id="theme.common.editThisPage"
            description="The link label to edit the current page"
          >
            Edit this page
          </Translate>
        </a>
        <a
          href="https://github.com/MoralisWeb3/docs/issues/new?title=Feedback%20for%20%E2%80%9CIntroduction%E2%80%9D&labels=feedback"
          target="_blank"
          rel="noreferrer noopener"
          className={ThemeClassNames.common.editThisPage}
        >
          <IconEdit />
          <Translate
            id="theme.common.editThisPage"
            description="The link label to edit the current page"
          >
            Request doc change
          </Translate>
        </a>
      </div>
      <div style={{ flex: 1 }}>
        <h3>Was this page helpful?</h3>
      </div>
    </div>
  );
}
