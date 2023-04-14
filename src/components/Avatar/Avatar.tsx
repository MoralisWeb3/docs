import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./AvatarPrimitive";
import ChatGPTLogo from "@site/static/img/chatgpt.webp";

export function AvatarMain() {
  return (
    <Avatar>
      <AvatarImage src={ChatGPTLogo} alt="ChatGPT" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
