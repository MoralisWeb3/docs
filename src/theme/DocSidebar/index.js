import React from "react";
import DocSidebar from "@theme-original/DocSidebar";

export default function DocSidebarWrapper(props) {
  console.log(props);
  return (
    <>
      <DocSidebar {...props} />
    </>
  );
}
