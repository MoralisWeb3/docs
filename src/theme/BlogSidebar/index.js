import React from "react";
import { useWindowSize } from "@docusaurus/theme-common";
import BlogSidebarDesktop from "@theme/BlogSidebar/Desktop";
import BlogSidebarMobile from "@theme/BlogSidebar/Mobile";
export default function BlogSidebar({ sidebar }) {
    const windowSize = useWindowSize();
    // Mobile sidebar doesn't need to be server-rendered
    if (windowSize === "mobile") {
        return <BlogSidebarMobile sidebar={sidebar} />;
    }
    return <BlogSidebarDesktop sidebar={sidebar} />;
}
