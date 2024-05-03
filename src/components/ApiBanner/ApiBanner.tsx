import React from "react";

// Define the shape of your props
interface ApiBannerProps {
  customTitle?: string;
  customText?: string;
  customButtonText?: string;
  customButtonLink?: string;
}

function ApiBanner({
  customTitle,
  customText,
  customButtonText,
  customButtonLink,
}: ApiBannerProps) {
  // Default values
  const title = customTitle || "Don't have an API key yet?";
  const text =
    customText ||
    "Sign-up to Moralis to get your free API key and start building today.";
  const buttonText = customButtonText || "Get your free API key";
  const buttonLink = customButtonLink || "https://admin.moralis.io/register";

  return (
    <div className="api-banner">
      <div>
        <h1>{title}</h1>
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
