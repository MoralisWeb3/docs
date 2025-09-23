import React from "react";

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
        customText || "Sign-up to Moralis to get your free API key and start building today.";
    const buttonText = customButtonText || "Get Your Free API Key";
    const buttonLink = customButtonLink || "https://admin.moralis.com/register";

    return (
        <div className="api-banner">
            {/* Left SVG */}
            <div className="api-banner-icon">
                <svg
                    width="64"
                    height="65"
                    viewBox="0 0 64 65"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M35.875 41.625C37.75 42.25 39.875 42.5 42 42.5C53 42.5 62 33.625 62 22.5C62 11.5 53 2.5 42 2.5C30.875 2.5 22 11.5 22 22.5C22 24.75 22.25 26.75 22.875 28.625C23.125 29.375 22.875 30.125 22.375 30.625L2.25 50.875C2 51 2 51.25 2 51.5V61.5C2 62.125 2.375 62.5 3 62.5H13C13.5 62.5 14 62.125 14 61.5V56.5C14 55.5 14.875 54.5 16 54.5H21C21.5 54.5 22 54.125 22 53.5V48.5C22 47.5 22.875 46.5 24 46.5H29C29.25 46.5 29.5 46.5 29.625 46.25L33.875 42.125C34.375 41.625 35.125 41.375 35.875 41.625ZM42 44.5C39.625 44.5 37.375 44.25 35.25 43.5L31.125 47.625C30.5 48.25 29.75 48.5 29 48.5H26H24V50.5V53.5C24 55.25 22.625 56.5 21 56.5H18H16V58.5V61.5C16 63.25 14.625 64.5 13 64.5H3C1.25 64.5 0 63.25 0 61.5V51.5C0 50.75 0.25 50 0.875 49.375L21 29.25C20.25 27.125 20 24.875 20 22.5C20 10.375 29.75 0.5 42 0.5C54.125 0.5 64 10.375 64 22.5C64 34.75 54.125 44.5 42 44.5ZM46 13.5C47.75 13.5 49.375 14.5 50.25 16C51.125 17.625 51.125 19.5 50.25 21C49.375 22.625 47.75 23.5 46 23.5C44.125 23.5 42.5 22.625 41.625 21C40.75 19.5 40.75 17.625 41.625 16C42.5 14.5 44.125 13.5 46 13.5ZM49 18.5C49 16.875 47.625 15.5 46 15.5C44.25 15.5 43 16.875 43 18.5C43 20.25 44.25 21.5 46 21.5C47.625 21.5 49 20.25 49 18.5Z" />
                </svg>
            </div>

            {/* Center Text */}
            <div className="api-banner-text">
                <h2
                    style={{
                        fontSize: "2rem",
                        fontWeight: "600",
                        margin: "0",
                        lineHeight: "1.2",
                    }}
                >
                    {title}
                </h2>
                <p>{text}</p>
            </div>

            {/* Right Button */}
            <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="cta-button">
                {buttonText}
            </a>
        </div>
    );
}

export default ApiBanner;
