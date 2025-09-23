import React from "react";
import Link from "@docusaurus/Link"; // Import Docusaurus Link for routing

interface SolanaApiBannerProps {
    customTitle?: string;
    customText?: string;
    customButtonText?: string;
    customButtonLink?: string; // Relative or absolute link
}

function SolanaApiBanner({
    customTitle,
    customText,
    customButtonText,
    customButtonLink,
}: SolanaApiBannerProps) {
    // Default values
    const title = customTitle || "Looking for similar functionality on Solana?";
    const text =
        customText ||
        "Check out our Solana API to access similar features and expand your capabilities.";
    const buttonText = customButtonText || "Explore Solana API";
    const buttonLink = customButtonLink || "/web3-data-api/solana/reference";

    // Determine if the link is relative or absolute
    const isRelativeLink = customButtonLink?.startsWith("/");

    return (
        <div style={{ width: "fit-content" }} className="api-banner">
            <div style={{ textAlign: "left", padding: "2rem" }}>
                <img src="/img/network-icons/solana.svg" alt="Solana Logo" className="img-custom" />
            </div>
            <div style={{ textAlign: "left", marginRight: "7%", width: "fit-content" }}>
                <h2
                    style={{
                        fontSize: "1.3rem",
                        fontWeight: "600",
                        margin: "0",
                        lineHeight: "1.2",
                    }}
                >
                    {title}
                </h2>
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

export default SolanaApiBanner;
