import React from "react";
import Link from "@docusaurus/Link"; // Import Docusaurus Link for internal routing

interface EthereumApiBannerProps {
  customTitle?: string;
  customText?: string;
  customButtonText?: string;
  customButtonLink?: string; // Relative or absolute link
}

function EthereumApiBanner({
  customTitle,
  customText,
  customButtonText,
  customButtonLink,
}: EthereumApiBannerProps) {
  const title = customTitle || "Looking for similar functionality on Ethereum?";
  const text =
    customText ||
    "Explore our Ethereum API to access equivalent features and enhance your development.";
  const buttonText = customButtonText || "Explore EVM API";
  const buttonLink = customButtonLink || "/web3-data-api/evm/reference";

  // Check if the link is relative
  const isRelativeLink = customButtonLink?.startsWith("/");

  return (
    <div style={{ width: "fit-content" }} className="api-banner">
      <div style={{ textAlign: "left", padding: "1rem" }}>
        <img
          src="/img/network-icons/ethereum.svg"
          alt="Ethereum Logo"
          className="img-custom"
        />
      </div>
      <div
        style={{ textAlign: "left", marginRight: "7%", width: "fit-content" }}
      >
        <h1 style={{ fontSize: "1.3rem" }}>{title}</h1>
        <p>{text}</p>
      </div>
      {isRelativeLink ? (
        <Link to={buttonLink} className="cta-button">
          {buttonText}
        </Link>
      ) : (
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          {buttonText}
        </a>
      )}
    </div>
  );
}

export default EthereumApiBanner;
