import React, { useState } from "react";
import { GPTTextarea } from "./GPTTextArea";
import { Button } from "@site/src/components/ui/button";
import useChatGPT from "@site/src/hooks/useChatGPT";
import GPTResponse from "./GPTResponse";

const GPTPrompt = () => {
  const [query, setQuery] = useState<string>("");
  const { answer, generateAnswer } = useChatGPT();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          generateAnswer(query);
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <GPTTextarea
            value={query}
            placeholder="Ask Moralis GPT a question..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button type="submit">Answer</Button>
        </div>
      </form>
      <GPTResponse response={answer} />
    </>
  );
};

export default GPTPrompt;
