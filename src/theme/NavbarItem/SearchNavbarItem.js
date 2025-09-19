import React from "react";
import SearchBar from "@theme/SearchBar";
import NavbarSearch from "@theme/Navbar/Search";
// import AssistantBot from "@site/src/components/AssistantBot";

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
          {/* <AssistantBot /> */}
        </div>
      </NavbarSearch>
    </>
  );
}
