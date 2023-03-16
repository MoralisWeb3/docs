import React from "react";
import VisitOurPage from "@site/src/components/FeedbackFooter/VisitOurPage";
import HelpImproveDocs from "@site/src/components/FeedbackFooter/HelpImproveDocsMain";
import WasThisHelpful from "@site/src/components/FeedbackFooter/WasThisHelpful";

export default function EditThisPage({ editUrl }) {
  return (
    <div style={{ display: "flex", gap: ".5rem", padding: "0.5rem" }}>
      <VisitOurPage />
      <HelpImproveDocs editUrl={editUrl} />
      <WasThisHelpful />
    </div>
  );
}
