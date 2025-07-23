import React from "react";

interface ChartWidgetBannerProps {
  customTitle?: string;
  customText?: string;
  customButtonText?: string;
  customButtonLink?: string;
}

function ChartWidgetBanner({
  customTitle,
  customText,
  customButtonText,
  customButtonLink,
}: ChartWidgetBannerProps) {
  // Default values
  const title = customTitle || "Need a candlestick chart for your website?";
  const text =
    customText ||
    "Embed our free chart widget directly on your site in just a few clicks";
  const buttonText = customButtonText || "Embed Chart";
  const buttonLink =
    customButtonLink ||
    "https://explorer.moralis.com/widgets/price-chart?utm_source=docs";

  return (
    <div className="api-banner">
      <div style={{ textAlign: "left" }}>
        <svg
          width="64"
          height="65"
          viewBox="0 0 64 65"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 5.5V51.5C2 55.375 5.125 58.5 9 58.5H63C63.5 58.5 64 59 64 59.5C64 60.125 63.5 60.5 63 60.5H9C4 60.5 0 56.5 0 51.5V5.5C0 5 0.375 4.5 1 4.5C1.5 4.5 2 5 2 5.5ZM42 10.5C40.875 10.5 40 11.5 40 12.5V20.5C40 21.625 40.875 22.5 42 22.5C43 22.5 44 21.625 44 20.5V12.5C44 11.5 43 10.5 42 10.5ZM30 18.5C28.875 18.5 28 19.5 28 20.5V28.5C28 29.625 28.875 30.5 30 30.5C31 30.5 32 29.625 32 28.5V20.5C32 19.5 31 18.5 30 18.5ZM18 30.5C16.875 30.5 16 31.5 16 32.5V40.5C16 41.625 16.875 42.5 18 42.5C19 42.5 20 41.625 20 40.5V32.5C20 31.5 19 30.5 18 30.5ZM54 10.5C52.875 10.5 52 11.5 52 12.5V40.5C52 41.625 52.875 42.5 54 42.5C55 42.5 56 41.625 56 40.5V12.5C56 11.5 55 10.5 54 10.5ZM42 8.5C44.125 8.5 46 10.375 46 12.5V20.5C46 22.75 44.125 24.5 42 24.5C39.75 24.5 38 22.75 38 20.5V12.5C38 10.375 39.75 8.5 42 8.5ZM34 20.5V28.5C34 30.75 32.125 32.5 30 32.5C27.75 32.5 26 30.75 26 28.5V20.5C26 18.375 27.75 16.5 30 16.5C32.125 16.5 34 18.375 34 20.5ZM22 32.5V40.5C22 42.75 20.125 44.5 18 44.5C15.75 44.5 14 42.75 14 40.5V32.5C14 30.375 15.75 28.5 18 28.5C20.125 28.5 22 30.375 22 32.5ZM58 12.5V40.5C58 42.75 56.125 44.5 54 44.5C51.75 44.5 50 42.75 50 40.5V12.5C50 10.375 51.75 8.5 54 8.5C56.125 8.5 58 10.375 58 12.5Z" />
        </svg>
      </div>
      <div style={{ textAlign: "left", marginRight: "7%" }}>
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

export default ChartWidgetBanner;
