import React from "react";
import Layout from "@theme/Layout";
import { useLocation } from "@docusaurus/router";
import Timeline from "@site/src/components/Timeline";

export default function BlogLayout(props) {
  const { pathname } = useLocation();
  const { sidebar, toc, children, ...layoutProps } = props;

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg max-w-2xl">
        {pathname === "/changelog" ? (
          <div className="grid gap-9 mt-9">
            <div className="grid gap-2">
              <div className="row justify-center">
                <h1>
                  <b>Latest Updates</b>
                </h1>
              </div>
              <div className="row justify-center">
                <p>All the latest Moralis updates, straight from the team.</p>
              </div>
            </div>
            <Timeline content={sidebar} />
          </div>
        ) : (
          <div className="row justify-center h-screen">
            <main className="col" itemScope itemType="http://schema.org/Blog">
              {children}
            </main>
            {toc && <div className="col col--2">{toc}</div>}
          </div>
        )}
      </div>
    </Layout>
  );
}
