import React from "react";
import HelpImproveDocsButtons from "@site/src/components/FeedbackFooter/HelpImproveDocsButtons";

const HelpImproveDocs = ({ editUrl }) => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <h3>Help improve these docs!</h3>
      <HelpImproveDocsButtons editUrl={editUrl} />
    </div>
  );
};

export default HelpImproveDocs;
