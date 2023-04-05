import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import BlogSidebar from "@theme/BlogSidebar";
import { useLocation } from "@docusaurus/router";

export default function BlogLayout(props) {
  const { pathname } = useLocation();
  const { sidebar, toc, children, ...layoutProps } = props;
  const hasSidebar =
    sidebar && Object.keys(sidebar).length > 0 && pathname === "/changelog";
  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          {hasSidebar && <BlogSidebar sidebar={sidebar} />}
          <main
            className={clsx("col", {
              "col--7": hasSidebar,
              "col--9 col--offset-1": !hasSidebar,
            })}
            itemScope
            itemType="http://schema.org/Blog"
          >
            {children}
          </main>
          {toc && <div className="col col--2">{toc}</div>}
        </div>
      </div>
    </Layout>
  );
}
