import React from "react";

// Define the shape of your props
interface NodeBannerProps {
  customText?: string;
  customButtonText?: string;
  customButtonLink?: string;
}

function NodeBanner({
  customText,
  customButtonText,
  customButtonLink,
}: NodeBannerProps) {
  // Default values
  const text = customText || "Start using RPC Nodes in your project today.";
  const buttonText = customButtonText || "Get your free RPC Node";
  const buttonLink = customButtonLink || "https://admin.moralis.com/nodes";

  return (
    <div className="api-banner">
      <div>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            margin: "0",
            lineHeight: "1.2",
          }}
        >
          Don't have an RPC Node yet?
        </h2>
        <p>{text}</p>
      </div>
      <a
        href={buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button"
      >
        {buttonText}
      </a>
    </div>
  );
}

export default NodeBanner;
