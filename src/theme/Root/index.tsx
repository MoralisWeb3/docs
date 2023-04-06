import React from "react";
import { ApiReferenceTokenProvider } from "@site/src/components/ApiReference/ApiReferenceToken";

const Root = ({ children }) => {
  const generateBio = async () => {
    const response = await fetch("/api/gpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: "How to use Moralis in React?",
      }),
    });

    if (!response.ok) {
      console.error(response.statusText);
    }

    const data = response.body;
    if (!data) {
      return;
    }
    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      console.log(chunkValue);
    }
  };

  generateBio();

  return (
    <>
      <ApiReferenceTokenProvider>{children}</ApiReferenceTokenProvider>
    </>
  );
};

export default Root;
