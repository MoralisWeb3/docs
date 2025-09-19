import React from "react";
import SearchBar from "@theme/SearchBar";
import NavbarSearch from "@theme/Navbar/Search";
import ChatGPT from "@site/src/components/ChatGPT";
import ChatGPTBot from "@site/src/components/ChatGPTBot";
import AssistantBot from "@site/src/components/AssistantBot";

export default function SearchNavbarItem({ mobile, className }) {
  if (mobile) {
    return null;
  }
  return (
    <>
      <NavbarSearch className={className}>
        <div
          style={{
            display: "flex",
            gap: ".5rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SearchBar />
          {/* <ChatGPT /> */}
          {/* <ChatGPTBot /> */}
          {/* <AssistantBot /> */}
        </div>
      </NavbarSearch>
    </>
  );
}
