import React from "react";
import ReactMarkdown from "react-markdown";

const GPTResponse = ({ response }) => {
  return (
    // React Markdown render
    <ReactMarkdown>{response}</ReactMarkdown>
  );
};

export default GPTResponse;
