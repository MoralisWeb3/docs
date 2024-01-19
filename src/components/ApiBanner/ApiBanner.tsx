import React from "react";

// Define the shape of your props
interface ApiBannerProps {
  customText?: string;
  customButtonText?: string;
  customButtonLink?: string;
}

function ApiBanner({
  customText,
  customButtonText,
  customButtonLink,
}: ApiBannerProps) {
  // Default values
  const text = customText || "Start using this API for your project today.";
  const buttonText = customButtonText || "Get your free API key";
  const buttonLink = customButtonLink || "https://admin.moralis.io/register";

  return (
    <div className="api-banner">
      <div>
        <h1>Don't have an API key yet?</h1>
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

export default ApiBanner;
