import React from 'react';

function ApiBanner() {
  return (
    <div className="api-banner">
      <div>
        <h1>Don't have an API key yet?</h1>
        <p>Start using this API for your project today.</p>
      </div>
      <a
        href="https://admin.moralis.io/register"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button"
      >
        Get your free API key
      </a>
    </div>
  );
}

export default ApiBanner;
